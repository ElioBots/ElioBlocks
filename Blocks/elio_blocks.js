/**
 * Projet : Elio Bot
 * @author : Boutrois Romain & Morel Guillaume
 * Utilité : Fichier contenant les blocks créés dans le cadre du projet 'elio bot'
 */

// Début de la définition des blocs en JSON
Blockly.defineBlocksWithJsonArray(
[  
    // Bloc de délimitation du programme
    {
        "type": "zone_prog",
        "lastDummyAlign0": "CENTRE",
        "message0": "Début Programme : %1 %2 Fin Programme",
        "args0": 
        [
            {
                "type": "input_dummy",
                "align": "CENTRE"
            },
            {
                "type": "input_statement",
                "name": "corps_programme"
            }
        ],
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
    },
    // Bloc de délimitation des fonctions :
    {
        "type": "fonction",
        "lastDummyAlign0": "CENTRE",
        "message0": "Fonction %1 %2 Fin Fonction",
        "args0": 
        [
            {
                "type": "input_dummy",
                "align": "CENTRE"
            },
            {
                "type": "input_statement",
                "name": "corps_fonction"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
    },
    // Bloc de délimitation de la fonction main
    {
        "type": "fonction_principale",
        "lastDummyAlign0": "CENTRE",
        "message0": "Fonction Principale %1 %2 Fin Fonction Principale",
        "args0": 
        [
            {
                "type": "input_dummy",
                "align": "CENTRE"
            },
            {
                "type": "input_statement",
                "name": "corps_fonction_principale"
            }
        ],
        "previousStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['zone_prog'] = function(block) 
{
    var statements_corps_prog = Blockly.JavaScript.statementToCode(block, 'corps_prog');
    // TODO: Assemble JavaScript into code variable.
    return statements_corps_prog;
};
  
Blockly.JavaScript['fonction'] = function(block) 
{
    var statements_corps_fonction = Blockly.JavaScript.statementToCode(block, 'corps_fonction');
    // TODO: Assemble JavaScript into code variable.
    return statements_corps_fonction;
};
  
Blockly.JavaScript['fonction_principale'] = function(block) 
{
    var statements_corps_fonction_principale = Blockly.JavaScript.statementToCode(block, 'corps_fonction_principale');
    // TODO: Assemble JavaScript into code variable.
    return statements_corps_fonction_principale;
};