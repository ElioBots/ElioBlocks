/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Partie faisant le lien entre les blocs de la catégorie modules et le code
 */

'use strict';


goog.provide('Blockly.Arduino.modules');

goog.require('Blockly.Arduino');

// Définition du code du bloc LED
Blockly.Arduino['aduino_leds'] = function (block) 
{
    var state = block.getFieldValue('stateChoise');
    var pin = block.getFieldValue('pinChoise');
    Blockly.Arduino.setups_['setup_output_'+pin] = 'pinMode('+ pin +', OUTPUT);';
    var code = 'digitalWrite('+ pin + ', ' + state + ');\n'
    return code;
};

// Définition du code du bloc LED RGB
Blockly.Arduino['aduino_rgb_leds'] = function (block) 
{
    var state = block.getFieldValue('stateChoise');
    var colour = block.getFieldValue('colourChoise');
    Blockly.Arduino.definitions_['define_RGB_LED'] = 'Adafruit_NeoPixel led_rgb = Adafruit_NeoPixel(1, 2, NEO_GRB + NEO_KHZ800);';
    Blockly.Arduino.setups_['setup_output_RGB_LED'] = 'led_rgb.begin();\n  led_rgb.setPixelColor(0, led_rgb.Color(0, 0, 0));\n  led_rgb.show();';
    var code = 'led_rgb.setPixelColor(0, led_rgb.Color(0, 0, 0));\nled_rgb.show();\n';

    if(state == 'HIGH')
    {
        code = 'led_rgb.setPixelColor(0, '+colour+');\nled_rgb.show();\n';
    }
    return code;
};

// Définition du code du bloc bouton
Blockly.Arduino['buton'] = function (block) 
{
    var operator = block.getFieldValue('buton_to_be_or_not_to_be_state_listening');
    var order = (operator == '==' || operator == '!=') ?
            Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var state = block.getFieldValue('buton_state_listening');
    Blockly.Arduino.setups_['setup_input_buton'] = 'pinMode(4, INPUT);';
    var argument = 'digitalRead(4)';
    var code = argument + ' ' + operator + ' ' + state ;
    return [code, order];
};

// Définition du code du bloc obstacle
Blockly.Arduino['obstacle'] = function (block) 
{
    var operator = block.getFieldValue('obstacle_to_be_or_not_to_be');
    var position = block.getFieldValue('sensorChoise');
    var order = (operator == '<' || operator == '>=') ?
            Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    Blockly.Arduino.definitions_['define_obstacles_sensor'] = 'int sensorValue[3];\nint obstacleCount = 4;\nADS1015 obstacleSensor;\n';
    Blockly.Arduino.setups_['setup_obstacles_sensor'] = 'if(obstacleSensor.begin(0x48) == false)\n  {\n    Serial.println("Osbtacle sensor not found. Check wiring.");\n    while(1)\n       ;\n  }\n  obstacleSensor.setGain(ADS1015_CONFIG_PGA_16);\n  pinMode(32, OUTPUT);\n  digitalWrite(32, HIGH);';
    var argument = 'obstacleSensor.getSingleEnded('+ position +')';
    var condition = '5';
    var code = argument + ' ' + operator + ' ' + condition ;
    return [code, order];
};

// Définition du code du bloc ligne
Blockly.Arduino['line'] = function (block) 
{
    var operator = block.getFieldValue('line_to_be_or_not_to_be');
    var order = (operator == '==' || operator == '!=') ?
            Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var state = block.getFieldValue('line_present_or_missing');
    Blockly.Arduino.definitions_['define_line_sensor'] = 'int lineCount = 4;\nADS1015 lineSensor;\n';
    Blockly.Arduino.setups_['setup_line_sensor'] = 'if(lineSensor.begin(0x49) == false)\n  {\n    Serial.println("Line sensor not found. Check wiring.");\n    while (1)\n      ;\n  }\n  pinMode(33, OUTPUT);\n  digitalWrite(33, HIGH);';
    var argument = 'digitalRead(33)';
    var code = argument + ' ' + operator + ' ' + state ;
    return [code, order];
};

