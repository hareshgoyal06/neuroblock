/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
    type: 'add_text',
    message0: 'Add text %1',
    args0: [
        {
            type: 'input_value',
            name: 'TEXT',
            check: 'String',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 160,
    tooltip: '',
    helpUrl: '',
};

const getDeltaBandPower = {
    type: 'get_delta_band_power',
    message0: 'Get delta band power',
    args0: [
    ],
    output: 'Number',
    colour: 100,
    tooltip: 'Returns the average delta band power over the last 1.5 seconds.',
    helpUrl: '',
};

const getThetaBandPower = {
    type: 'get_theta_band_power',
    message0: 'Get theta band power',
    args0: [
    ],
    output: 'Number',
    colour: 100,
    tooltip: 'Returns the average theta band power over the last 1.5 seconds.',
    helpUrl: '',
};

const getAlphaBandPower = {
    type: 'get_alpha_band_power',
    message0: 'Get alpha band power',
    args0: [
    ],
    output: 'Number',
    colour: 100,
    tooltip: 'Returns the average alpha band power over the last 1.5 seconds.',
    helpUrl: '',
};

const getBetaBandPower = {
    type: 'get_beta_band_power',
    message0: 'Get beta band power',
    args0: [
    ],
    output: 'Number',
    colour: 100,
    tooltip: 'Returns the average beta band power over the last 1.5 seconds.',
    helpUrl: '',
};

const getGammaBandPower = {
    type: 'get_gamma_band_power',
    message0: 'Get gamma band power',
    args0: [
    ],
    output: 'Number',
    colour: 100,
    tooltip: 'Returns the average gamma band power over the last 1.5 seconds.',
    helpUrl: '',
};

const getCanvas = {
    type: 'get_canvas',
    message0: 'Get canvas',
    args0: [
    ],
    output: null,
    colour: 0,
    tooltip: 'Returns a reference to the canvas instance.',
    helpUrl: '',
};

const drawRect = {
    type: 'draw_rect',
    message0: 'Draw rect on %1 from %2, %3 with dimensions %4, %5',
    args0: [
        {
            type: 'input_value',
            name: 'CANVAS',
            check: null,
        },
        {
            type: 'input_value',
            name: 'X',
            check: 'Number',
        },
        {
            type: 'input_value',
            name: 'Y',
            check: 'Number',
        },
        {
            type: 'input_value',
            name: 'WIDTH',
            check: 'Number',
        },
        {
            type: 'input_value',
            name: 'HEIGHT',
            check: 'Number',
        },
    ],
    colour: 0,
    previousStatement: null,
    nextStatement: null,
    tooltip: 'Draws a rectangle to the passed canvas.',
    helpUrl: '',
};

const setColor = {
    type: 'set_color',
    message0: 'Set the draw color of %1 to rgb(%2, %3, %4)',
    args0: [
        {
            type: 'input_value',
            name: 'CANVAS',
            check: null,
        },
        {
            type: 'input_value',
            name: 'R',
            check: 'Number',
        },
        {
            type: 'input_value',
            name: 'G',
            check: 'Number',
        },
        {
            type: 'input_value',
            name: 'B',
            check: 'Number',
        },
    ],
    colour: 0,
    previousStatement: null,
    nextStatement: null,
    tooltip: "Sets the canvas's draw color.",
    helpUrl: '',
};

const draw = {
    type: 'draw',
    message0: 'Draw %1',
    args0: [
        {
            type: 'input_statement',
            name: 'DO',
        },
    ],
    colour: 40,
    previousStatement: null,
    nextStatement: null,
    tooltip: "Repeats the inner loop asynchronously at 60hz.",
    helpUrl: '',
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    addText,
    getAlphaBandPower,
    getBetaBandPower,
    getDeltaBandPower,
    getThetaBandPower,
    getGammaBandPower,
    drawRect,
    getCanvas,
    setColor,
    draw
]);
