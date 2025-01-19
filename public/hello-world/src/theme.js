import * as Blockly from 'blockly/core';

export const customTheme = Blockly.Theme.defineTheme('customTheme', {
  'blockStyles': {
    // Define colors for block types
    'logic_blocks': {
      'colourPrimary': '#007ACC', // Vibrant blue for logic blocks
      'colourSecondary': '#005A99', 
      'colourTertiary': '#004080'
    },
    'loop_blocks': {
      'colourPrimary': '#FFB86C', // Warm orange for loops
      'colourSecondary': '#E6A455', 
      'colourTertiary': '#CC8A40'
    },
    'math_blocks': {
      'colourPrimary': '#50FA7B', // Bright green for math
      'colourSecondary': '#45D66F', 
      'colourTertiary': '#3ABD63'
    },
    'text_blocks': {
      'colourPrimary': '#BD93F9', // Lavender for text
      'colourSecondary': '#A67CE0', 
      'colourTertiary': '#8A63C9'
    },
    'list_blocks': {
      'colourPrimary': '#8BE9FD', // Cyan for lists
      'colourSecondary': '#7ADCE6', 
      'colourTertiary': '#69C0CC'
    },
    'variable_blocks': {
      'colourPrimary': '#FF79C6', // Pink for variables
      'colourSecondary': '#E66BB5', 
      'colourTertiary': '#CC5C9D'
    },
    'procedure_blocks': {
      'colourPrimary': '#FF5555', // Red for procedures
      'colourSecondary': '#E04949', 
      'colourTertiary': '#C03E3E'
    }
  },
  'categoryStyles': {
    // Define colors for toolbox categories
    'logic_category': { 'colour': '#007ACC' },
    'loop_category': { 'colour': '#FFB86C' },
    'math_category': { 'colour': '#50FA7B' },
    'text_category': { 'colour': '#BD93F9' },
    'list_category': { 'colour': '#8BE9FD' },
    'variable_category': { 'colour': '#FF79C6' },
    'procedure_category': { 'colour': '#FF5555' }
  },
  'componentStyles': {
    // Define UI styles
    'toolboxBackgroundColour': '#525259', // Dark toolbox background
    'toolboxForegroundColour': '#F8F8F2', // Light text
    'flyoutBackgroundColour': '#3B3E45', // Slightly lighter flyout
    'flyoutOpacity': 0.9, 
    'scrollbarColour': '#6272A4' // Subtle purple scrollbar
  },
  'fontStyle': {
    // Customize font style
    'family': '"Share Tech", sans-serif',
    'weight': 'bold',
    'size': 14
  },
  'workspaceBackgroundColour': '#525259', // Dark workspace background
  'gridOptions': {
    'colour': '#44475A', // Subtle grid lines
    'spacing': 20,
    'length': 1
  }
});
