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
    var code = '//Programme en C++\n\n#include <Arduino.h>\n#include <Wire.h>\n#include <Adafruit_NeoPixel.h>\n#include <SparkFun_ADS1015_Arduino_Library.h>\n\n'
    code += Blockly.Arduino.workspaceToCode();
    displayCode(code);
}
