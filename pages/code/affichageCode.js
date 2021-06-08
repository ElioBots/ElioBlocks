/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Ficher assurant les fonctions liées à la récupération du code issu du programme créé via les blocs
 */

// Fonction d'affichage du code
function displayCode(code)
{
    Blockly.Arduino.variableDB_.setVariableMap(workspace.getVariableMap());
    var output = document.getElementById('contentCode');
    output.value = code;
}  

// Fonction de récupération du code
function getCode()
{
    var code = '//Programme en C++\n\n#include <Arduino.h>\n#include <Wire.h>\n#include <Adafruit_NeoPixel.h>\n#include <SparkFun_ADS1015_Arduino_Library.h>\n#include "Pins.h"\n#include "MotorDriver.h"\n\n'
    code += Blockly.Arduino.workspaceToCode();
    displayCode(code);
}

workspace.addChangeListener(getCode);