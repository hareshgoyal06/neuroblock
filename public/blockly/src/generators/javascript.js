/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['add_text'] = function (block, generator) {
    const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
    const addText = generator.provideFunction_(
        'addText',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  outputDiv.appendChild(textEl);
}`,
    );
    // Generate the function call for this block.
    const code = `${addText}(${text});\n`;
    return code;
};

forBlock['get_delta_band_power'] = function (block, generator) {
    const getDeltaBandPower = generator.provideFunction_(
        'getDeltaBandPower',
        `async function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
    const urlParams = new URLSearchParams(window.location.search)
    const endpoint = urlParams.get('endpoint')
    const data = (await (await fetch(endpoint)).json())
    return data.band_data[0]
}`,
    );
    // Generate the function call for this block.
    const code = `await ${getDeltaBandPower}()`;
    return [code, Order.NONE];
};

forBlock['get_theta_band_power'] = function (block, generator) {
    const getThetaBandPower = generator.provideFunction_(
        'getThetaBandPower',
        `async function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
    const urlParams = new URLSearchParams(window.location.search)
    const endpoint = urlParams.get('endpoint')
    const data = (await (await fetch(endpoint)).json())
    return data.band_data[1]
}`,
    );
    // Generate the function call for this block.
    const code = `await ${getThetaBandPower}()`;
    return [code, Order.NONE];
};

forBlock['get_alpha_band_power'] = function (block, generator) {
    const getAlphaBandPower = generator.provideFunction_(
        'getAlphaBandPower',
        `async function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
    const urlParams = new URLSearchParams(window.location.search)
    const endpoint = urlParams.get('endpoint')
    const data = (await (await fetch(endpoint)).json())
    return data.band_data[2]
}`,
    );
    // Generate the function call for this block.
    const code = `await ${getAlphaBandPower}()`;
    return [code, Order.NONE];
};

forBlock['get_beta_band_power'] = function (block, generator) {
    const getBetaBandPower = generator.provideFunction_(
        'getBetaBandPower',
        `async function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
    const urlParams = new URLSearchParams(window.location.search)
    const endpoint = urlParams.get('endpoint')
    const data = (await (await fetch(endpoint)).json())
    return data.band_data[3]
}`,
    );
    // Generate the function call for this block.
    const code = `await ${getBetaBandPower}()`;
    return [code, Order.NONE];
};

forBlock['get_gamma_band_power'] = function (block, generator) {
    const getGammaBandPower = generator.provideFunction_(
        'getGammaBandPower',
        `async function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
    const urlParams = new URLSearchParams(window.location.search)
    const endpoint = urlParams.get('endpoint')
    const data = (await (await fetch(endpoint)).json())
    return data.band_data[4]
}`,
    );
    // Generate the function call for this block.
    const code = `await ${getGammaBandPower}()`;
    return [code, Order.NONE];
};

forBlock['get_canvas'] = function (block, generator) {
    const getCanvas = generator.provideFunction_(
        'getCanvas',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
    const can = document.getElementById('can');
    const ctx = can.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,400,400);
    return ctx;
}`,
    );
    // Generate the function call for this block.
    const code = `${getCanvas}()`;
    return [code, Order.NONE];
};

forBlock['draw_rect'] = function (block, generator) {
    const ctx = generator.valueToCode(block, 'CANVAS', Order.NONE) || "''";
    const x = generator.valueToCode(block, 'X', Order.NONE) || 0;
    const y = generator.valueToCode(block, 'Y', Order.NONE) || 0;
    const width = generator.valueToCode(block, 'WIDTH', Order.NONE) || 20;
    const height = generator.valueToCode(block, 'HEIGHT', Order.NONE) || 20;
    const drawRect = generator.provideFunction_(
        'drawRect',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(ctx, x, y, width, height) {
    if (!ctx) return;
    ctx.fillRect(x, y, width, height);
}`,
    );
    // Generate the function call for this block.
    const code = `${drawRect}(${ctx}, ${x}, ${y}, ${width}, ${height});`;
    return code;
};

forBlock['set_color'] = function (block, generator) {
    const ctx = generator.valueToCode(block, 'CANVAS', Order.NONE) || "''";
    const r = generator.valueToCode(block, 'R', Order.NONE) || 0;
    const g = generator.valueToCode(block, 'G', Order.NONE) || 0;
    const b = generator.valueToCode(block, 'B', Order.NONE) || 20;
    const setColor = generator.provideFunction_(
        'setColor',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(ctx, r, g, b) {
    if (!ctx) return;
    ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}`,
    );
    // Generate the function call for this block.
    const code = `${setColor}(${ctx}, ${r}, ${g}, ${b});`;
    return code;
};

forBlock['draw'] = function (block, generator) {
    console.log(block);
    const inner = generator.statementToCode(block, 'DO', Order.NONE) || (()=>{});
    const draw = generator.provideFunction_(
        'draw',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(inner) {
    window.data_interval = setInterval(inner, 1000/30);
}`
    );
    // Generate the function call for this block.
    const code = `${draw}(async ()=>{${inner}});`;
    return code;
};