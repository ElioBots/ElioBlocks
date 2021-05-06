/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Ficher assurant les fonctions liées à la récupération du code issu du programme créé via les blocs
 */

// CF "init.js" dans le fichier js du projet BlocklyDuino

function getCode()
{
    var codePeakPre = document.getElementById('content_code');
    var generatedCode = Blockly.Arduino.workspaceToCode(Code.workspace);
    editor.setValue(generatedCode, 1);
}