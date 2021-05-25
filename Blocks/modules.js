/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Définitions des blocs liés aux éléments du robot
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
  },

  // Définition du bloc d'allumage et d'extinction de la LED RGB de l'arduino
  {
    "type": "aduino_rgb_leds",
    "message0": " %1 LED %{BKY_LEDS_RGB_COLOUR_TEXT} : %2",
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
        "type": "field_colour",
        "name": "colourChoise",
        "colour": "#ff0000" // Couleur par défaut
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },

  // Bloc du bouton du robot
  {
    "type": "buton",
    "message0": "%{BKY_BUTON_STATE_TEXT}",
    "output": null,
    "colour": 285,
    "tooltip": "",
    "helpUrl": ""
  },

  // Définition du bloc gérant les déplacements avant/arrière du robot
  {
    "type": "move",
    "message0": "%{BKY_ROBOT_MOVE_TEXT} %1, %{BKY_ROBOT_SPEED_TEXT} %2",
    "args0": 
    [
      {
        "type": "field_dropdown",
        "name": "directionChoise",
        "options": 
        [
          [
            "%{BKY_ROBOT_MOVE_FORWARD}",
            "forward"
          ],
          [
            "%{BKY_ROBOT_MOVE_BACKWARD}",
            "backward"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "speedChoise",
        "options": 
        [
          [
            "%{BKY_ROBOT_SPEED_SLOW}",
            "slow"
          ],
          [
            "%{BKY_ROBOT_SPEED_MEDIUM}",
            "medium"
          ],
          [
            "%{BKY_ROBOT_SPEED_FAST}",
            "fast"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  // Bloc permetant au robot de tourner
  {
    "type": "turn",
    "message0": "%{BKY_ROBOT_TURN_TEXT} %1",
    "args0": 
    [
      {
        "type": "field_dropdown",
        "name": "turnChoise",
        "options": 
        [
          [
            "%{BKY_ROBOT_TURN_RIGHT}",
            "right"
          ],
          [
            "%{BKY_ROBOT_TURN_LEFT}",
            "left"
          ],
          [
            "%{BKY_ROBOT_TURN_BACKWARD}",
            "backward"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  // Bloc permettant une rotation du robot
  {
    "type": "rotation",
    "message0": "%{BKY_ROBOT_ROTA_TEXT} %1",
    "args0": 
    [
      {
        "type": "field_angle",
        "name": "rotaDegree",
        "angle": 90
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  // Bloc permettant l'arrêt du robot
  {
    "type": "stop",
    "message0": "%{BKY_ROBOT_STOP}",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  // Bloc permettant la lecture d'obstacles
  {
    "type": "obstacle",
    "message0": "%{BKY_TO_BE_OBSTACLES_OR_NOT_OBSTACLES} %1",
    "args0" :
    [
      {
        "type": "field_dropdown",
        "name": "sensorChoise",
        "options": 
        [
          [
            "%{BKY_ROBOT_SENSOR_FORWARD}",
            "0"
          ],
          [
            "%{BKY_ROBOT_SENSOR_BACKWARD}",
            "1"
          ],
          [
            "%{BKY_ROBOT_SENSOR_RIGHT}",
            "2"
          ],
          [
            "%{BKY_ROBOT_SENSOR_LEFT}",
            "3"
          ]
        ]
      },
    ],
    "output": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  // Bloc permettant la lecture de ligne
  {
    "type": "line",
    "message0": "%{BKY_TO_BE_LINE_OR_NOT_LINE}",
    "output": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  // Bloc permettant le suivi de ligne
  {
    "type": "follow_line",
    "message0": "%{BKY_ROBOT_FOLLOW_LINE_TEXT} %1 %{BKY_ROBOT_FOLLOW_LINE_SECOUNDS_TEXT}, %{BKY_ROBOT_FOLLOW_LINE_SPEED_TEXT} %2",
    "args0": 
    [
      {
        "type": "field_number",
        "name": "timeSecoundsChoise",
        "value": 0,
        "min": 1,
        "max": 10,
        "precision": 1
      },
      {
        "type": "field_dropdown",
        "name": "speedChoise",
        "options": 
        [
          [
            "%{BKY_ROBOT_SPEED_SLOW}",
            "lent"
          ],
          [
            "%{BKY_ROBOT_SPEED_MEDIUM}",
            "moy"
          ],
          [
            "%{BKY_ROBOT_SPEED_FAST}",
            "rapide"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  }
]);