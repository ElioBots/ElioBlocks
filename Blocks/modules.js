/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Définitions des blocs liés aux éléments de l'arduino
 */

// Début de la définition des blocs en JSON
Blockly.defineBlocksWithJsonArray(
[  
    // Définition du bloc d'allumage et d'extinction des leds de l'arduino
    {
        "type": "aduino_leds",
        "message0": " %1 LED %{BKY_LEDS_PLACEMENT_TEXT} : %2",
        "args0": 
        [
          {
            "type": "field_dropdown",
            "name": "stateChoise",
            "options": 
            [
              [
                "%{BKY_LEDS_STATE_HIGH}",
                "HIGH"
              ],
              [
                "%{BKY_LEDS_STATE_LOW}",
                "LOW"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "pinChoise",
            "options": 
            [
              [
                "0",
                "0"
              ],
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 345,
        "tooltip": "",
        "helpUrl": ""
    }
]);