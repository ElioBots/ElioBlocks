/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Partie faisant le lien entre les blocs de la catégorie conditions et le code
 */

'use strict';

/*
goog.provide('Blockly.Arduino.logic');
 
goog.require('Blockly.Arduino');
*/

// Code du bloc if et else
Blockly.Arduino['controls_if'] = function (block) 
{
    // If/elseif/else condition.
    var n = 0;
    var code = '', branchCode, conditionCode;
    do 
    {
        conditionCode = Blockly.Arduino.valueToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE) || 'false';
        branchCode = Blockly.Arduino.statementToCode(block, 'DO' + n);
        code += (n > 0 ? ' else ' : '') + 'if (' + conditionCode + ') {\n' + branchCode + '}';

        ++n;
    } while (block.getInput('IF' + n));

    if (block.getInput('ELSE')) 
    {
        branchCode = Blockly.Arduino.statementToCode(block, 'ELSE');
        code += ' else {\n' + branchCode + '}';
    }

    return code + '\n';
};
 
// Code du bloc de comparaison (<, >, ==, etc)
Blockly.Arduino['logic_compare'] = function (block) 
{
    // Comparison operator.
    var OPERATORS = {
        'EQ': '==',
        'NEQ': '!=',
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
    };

    var operator = OPERATORS[block.getFieldValue('OP')];
    var order = (operator == '==' || operator == '!=') ? Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var argument0 = Blockly.Arduino.valueToCode(block, 'A', order) || '0';
    var argument1 = Blockly.Arduino.valueToCode(block, 'B', order) || '0';
    var code = argument0 + ' ' + operator + ' ' + argument1;
    return [code, order];
};
 
// Code du bloc comparaison (et, ou)
Blockly.Arduino['logic_operation'] = function (block) 
{
    // Operations 'and', 'or'.
    var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
    var order = (operator == '&&') ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR;
    var argument0 = Blockly.Arduino.valueToCode(block, 'A', order);
    var argument1 = Blockly.Arduino.valueToCode(block, 'B', order);

    if (!argument0 && !argument1) 
    {
        // If there are no arguments, then the return value is false.
        argument0 = 'false';
        argument1 = 'false';
    } 
    else 
    {
        // Single missing arguments have no effect on the return value.
        var defaultArgument = (operator == '&&') ? 'true' : 'false';
        if (!argument0) 
        {
            argument0 = defaultArgument;
        }
        
        if (!argument1) 
        {
            argument1 = defaultArgument;
        }
    }
    var code = argument0 + ' ' + operator + ' ' + argument1;
    return [code, order];
};
 
// Code du bloc de la négation
Blockly.Arduino['logic_negate'] = function (block)
{
    // Negation.
    var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
    var argument0 = Blockly.Arduino.valueToCode(block, 'BOOL', order) || 'false';
    var code = '!' + argument0;
    return [code, order];
};
 
// Code du bloc "Vrai, Faux"
Blockly.Arduino['logic_boolean'] = function (block) 
{
    // Boolean values true and false.
    var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Code du bloc nul
Blockly.Arduino['logic_null'] = function (block) 
{
    // Null data type.
    return ['null', Blockly.Arduino.ORDER_ATOMIC];
};

// Code du block à vrai ou faux
Blockly.Arduino['logic_ternary'] = function (block) 
{
    // Ternary operator.
    var value_if = Blockly.Arduino.valueToCode(block, 'IF',  Blockly.Arduino.ORDER_CONDITIONAL) || 'false';
    var value_then = Blockly.Arduino.valueToCode(block, 'THEN', Blockly.Arduino.ORDER_CONDITIONAL) || 'null';
    var value_else = Blockly.Arduino.valueToCode(block, 'ELSE', Blockly.Arduino.ORDER_CONDITIONAL) || 'null';
    var code = value_if + ' ? ' + value_then + ' : ' + value_else;
    return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};