/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Définitions des blocs liés aux éléments de l'arduino
 */

// Début de la définition des blocs en JSON
Blockly.defineBlocksWithJsonArray(
[  
    // Définition du bloc de définition des leds de l'arduino
    {
        "type": "def_aduino_leds",
        "message0": "%{BKY_LEDS_DEFINE_TEXT} LED %{BKY_LEDS_PLACEMENT_TEXT} : %1",
        "args0": 
        [
          {
            "type": "field_dropdown",
            "name": "def_pin_led",
            "options": 
            [
              [
                "0",
                "pin0"
              ],
              [
                "1",
                "pin1"
              ],
              [
                "2",
                "pin2"
              ],
              [
                "3",
                "pin3"
              ],
              [
                "4",
                "pin4"
              ],
              [
                "5",
                "pin5"
              ],
              [
                "6",
                "pin6"
              ],
              [
                "7",
                "pin7"
              ],
              [
                "8",
                "pin8"
              ],
              [
                "9",
                "pin9"
              ],
              [
                "10",
                "pin10"
              ],
              [
                "11",
                "pin11"
              ],
              [
                "12",
                "pin12"
              ],
              [
                "13",
                "pin13"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 345,
        "tooltip": "",
        "helpUrl": ""
    },
    // Définition du bloc d'allumage et d'extinction des leds de l'arduino
    {
        "type": "aduino_leds",
        "message0": " %1 LED %{BKY_LEDS_PLACEMENT_TEXT} : %2",
        "args0": 
        [
          {
            "type": "field_dropdown",
            "name": "initStateChoise",
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
                "pin0"
              ],
              [
                "1",
                "pin1"
              ],
              [
                "2",
                "pin2"
              ],
              [
                "3",
                "pin3"
              ],
              [
                "4",
                "pin4"
              ],
              [
                "5",
                "pin5"
              ],
              [
                "6",
                "pin6"
              ],
              [
                "7",
                "pin7"
              ],
              [
                "8",
                "pin8"
              ],
              [
                "9",
                "pin9"
              ],
              [
                "10",
                "pin10"
              ],
              [
                "11",
                "pin11"
              ],
              [
                "12",
                "pin12"
              ],
              [
                "13",
                "pin13"
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