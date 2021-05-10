/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Ficher assurant les fonctions liées à la récupération du code issu du programme créé via les blocs
 */

// Fonction de rendu du code
function getCode()
{
    /*
    var arduinoTextarea = document.getElementById('content_code');
    arduinoTextarea.value = Blockly.Arduino.workspaceToCode('blockly-div');
    arduinoTextarea.focus();
   */
    var code = '\'use strict\';\n\n'
    code += Blockly.Arduino.workspaceToCode();
    setOutput(code);
}
