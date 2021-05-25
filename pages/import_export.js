/**
 * Fonctions d'import et export des fichiers
 */


// Fonction permettant le téléchargement du code arduino en .ino
function donwloadCode() 
{
  var fileName = window.prompt('What would you like to name your file?', 'ElioBlocks')
  
  // Si l'utilisateur quite le menu de choix de nom de fichier, on enregistre rien
  if(fileName)
  {
    var code = '//Programme en C++\n\n#include <Arduino.h>\n#include <Wire.h>\n#include <Adafruit_NeoPixel.h>\n#include <SparkFun_ADS1015_Arduino_Library.h>\n\n'
    var blob = new Blob([code + Blockly.Arduino.workspaceToCode()], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName + '.ino');
  }
}