/**
 * Fonctions d'import et export
 */


// Fonction permettant le téléchargement du code arduino en .ino
function donwloadCode() 
{
  var fileName = window.prompt('What would you like to name your file?', 'ElioBlocks')
  
  // Si l'utilisateur quitte le menu de choix de nom de fichier, on enregistre rien
  if(fileName)
  {
    var code = '//Programme en C++\n\n#include <Arduino.h>\n#include <Wire.h>\n#include <Adafruit_NeoPixel.h>\n#include <SparkFun_ADS1015_Arduino_Library.h>\n#include "Pins.h"\n#include "MotorDriver.h"\n\n'
    var blob = new Blob([code + Blockly.Arduino.workspaceToCode()], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName + '.ino');
  }
}

/**
 * Save blocks to local file.
 * better include Blob and FileSaver for browser compatibility
 */
function saveXML() 
{
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var data = Blockly.Xml.domToText(xml);
  var fileName = window.prompt('What would you like to name your file?', 'ElioBlocks');
  
  // Store data in blob.
  // var builder = new BlobBuilder();
  // builder.append(data);
  // saveAs(builder.getBlob('text/plain;charset=utf-8'), 'blockduino.xml');
  if(fileName)
  {
    var blob = new Blob([data], {type: 'text/xml'});
    saveAs(blob, fileName + ".xml");
  } 
}

// Init load event.
var loadInput = document.getElementById('file');
loadInput.addEventListener('change', load, false);
document.getElementById('file').onclick = function() {
  loadInput.click();
};

/**
 * Load blocks from local file.
 */
function load(event) 
{
  var files = event.target.files;
  // Only allow uploading one file.
  if (files.length != 1) 
  {
    return;
  }

  // FileReader
  var reader = new FileReader();
  reader.onloadend = function(event) {
    var target = event.target;
    // 2 == FileReader.DONE
    if (target.readyState == 2) {
      try {
        var xml = Blockly.Xml.textToDom(target.result);
      } catch (e) {
        alert('Error parsing XML:\n' + e);
        return;
      }
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    document.getElementById('load').value = '';
  };
  reader.readAsText(files[0]);
}