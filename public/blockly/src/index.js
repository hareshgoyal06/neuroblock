/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import { blocks } from './blocks/text';
import { forBlock } from './generators/javascript';
import { javascriptGenerator } from 'blockly/javascript';
import { save, load } from './serialization';
import { toolbox } from './toolbox';
import DarkTheme from '@blockly/theme-dark'
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const expandButton = document.getElementById('expandOutput');
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {
    toolbox: toolbox,
    theme: DarkTheme, // Apply the custom theme
});

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
export const runCode = () => {
    const code = javascriptGenerator.workspaceToCode(ws);
    codeDiv.innerText = code;

    outputDiv.innerHTML = '';
    console.log("(async () => {" + code + "})()");
    eval("(async () => {" + code + "})()")
};

function toggleOutput() {
    const outputPane = document.getElementById('outputPane');
    const generatedCodePane = document.getElementById('generatedCodePane');
    // const outputSection = document.getElementById('outputSection');
    const blocklyDiv = document.getElementById('blocklyDiv');
    const expandButton = document.getElementById('expandOutput');

    if (outputPane.classList.contains('expanded')) {
        if (window?.data_interval)
            clearInterval(window.data_interval);
        outputPane.classList.remove('expanded');
        generatedCodePane.style.display = 'block';
        blocklyDiv.style.zIndex = '1'; /* Reset workspace z-index */
        expandButton.innerText = 'Run Program';
    } else {
        runCode();
        outputPane.classList.add('expanded');
        generatedCodePane.style.display = 'none';
        blocklyDiv.style.zIndex = '0'; /* Lower workspace z-index */
        expandButton.innerText = 'Stop Program';
    }
}
expandButton.addEventListener('click', (e)=>{
    toggleOutput();
})

// Load the initial state from storage and run the code.
load(ws);

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
    // UI events are things like scrolling, zooming, etc.
    // No need to save after one of these.
    if (e.isUiEvent) return;
    save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
    // Don't run the code when the workspace finishes loading; we're
    // already running it once when the application starts.
    // Don't run the code during drags; we might have invalid state.
    if (
        e.isUiEvent ||
        e.type == Blockly.Events.FINISHED_LOADING ||
        ws.isDragging()
    ) {
        return;
    }
});