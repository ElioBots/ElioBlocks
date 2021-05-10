/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Ficher assurant les fonctions liées à la récupération du code issu du programme créé via les blocs
 */

// Fonction d'affichage du code
function displayCode(code)
{
    var output = document.getElementById('content_code');
    output.value = code;
    output.focus();
    output.select();
}  

// Fonction de récupération du code
function getCode()
{
    /*
    var arduinoTextarea = document.getElementById('content_code');
    arduinoTextarea.value = Blockly.Arduino.workspaceToCode('blockly-div');
    arduinoTextarea.focus();
   */
    var code = '\//Program C++\'\n\n'
    code += Blockly.Arduino.workspaceToCode();
    displayCode(code);
}
