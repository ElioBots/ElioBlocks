/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Partie faisant le lien entre les blocs de la catégorie modules et le code
 */

'use strict';


goog.provide('Blockly.Arduino.modules');

goog.require('Blockly.Arduino');

Blockly.Arduino['aduino_leds'] = function (block) {
    var etat = block.getFieldValue('stateChoise');
    var pin = block.getFieldValue('pinChoise');
    Blockly.Arduino.setups_['setup_output_'+pin] = 'pinMode('+ pin +', OUTPUT);';
    var code = 'digitalWrite('+ pin + ', ' + etat + ');\n'
    return code;
};

