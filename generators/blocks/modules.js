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
    Blockly.Arduino.definitions_['define_RGB_LED'] = 'Adafruit_NeoPixel led_rgb = Adafruit_NeoPixel(1, ledPin, NEO_GRB + NEO_KHZ800);';
    Blockly.Arduino.setups_['setup_output_RGB_LED'] = 'led_rgb.begin();\n  led_rgb.setPixelColor(0, led_rgb.Color(0, 0, 0));\n  led_rgb.show();';
    var code = 'led_rgb.setPixelColor(0, led_rgb.Color(0, 0, 0));\nled_rgb.show();\n';

    // On crée les variables RGB nécéssaires à l'allumage
    var colour_red_char = '';
    var colour_green_char = '';
    var colour_blue_char = '';

    var compter = 0;
    
    // On parcourt la chaîne de caractère hexadécimale afin d'attribuer les valeurs RGB de l'hexa à la bonne variable
    while(compter < 7)
    {
        if(compter > 0 && compter <= 2)
        {
            colour_red_char += colour[compter];
        }
        else if(compter > 2 && compter <= 4)
        {
            colour_green_char += colour[compter];
        }
        else if(compter > 4 && compter <= 6)
        {
            colour_blue_char += colour[compter];
        }

        compter ++;
    }

    // On convertit les valeurs récupérées en décimal
    var colour_red = parseInt(colour_red_char, 16);
    var colour_green = parseInt(colour_green_char, 16);
    var colour_blue = parseInt(colour_blue_char, 16);

    if(state == 'HIGH')
    {
        code = 'led_rgb.setPixelColor(0, led_rgb.Color('+colour_red+', '+colour_green+', '+colour_blue+'));\nled_rgb.show();\n';
    }
    return code;
};

// Définition du code du bloc bouton
Blockly.Arduino['buton'] = function (block) 
{
    var operator = "=="
    var order = (operator == '==' || operator == '!=') ?
            Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var state = "LOW"
    Blockly.Arduino.setups_['setup_input_buton'] = 'pinMode(buttonPin, INPUT);';
    var argument = 'digitalRead(buttonPin)';
    var code = argument + ' ' + operator + ' ' + state ;
    return [code, order];
};

// Définition du code du bloc obstacle
Blockly.Arduino['obstacle'] = function (block) 
{
    var operator = "<"
    var position = block.getFieldValue('sensorChoise');
    var order = (operator == '<' || operator == '>=') ?
            Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    Blockly.Arduino.definitions_['define_obstacles_sensor'] = 'int sensorValue[3];\nint obstacleCount = 4;\nADS1015 obstacleSensor;\n';
    Blockly.Arduino.setups_['setup_obstacles_sensor'] = 'if(obstacleSensor.begin(0x48) == false)\n  {\n    Serial.println("Osbtacle sensor not found. Check wiring.");\n    while(1)\n       ;\n  }\n  obstacleSensor.setGain(ADS1015_CONFIG_PGA_16);\n  pinMode(osbtacleCmdPin, OUTPUT);\n  digitalWrite(osbtacleCmdPin, HIGH);';
    var argument = 'obstacleSensor.getSingleEnded('+ position +')';
    var condition = '5';
    var code = argument + ' ' + operator + ' ' + condition ;
    return [code, order];
};

// Définition du code du bloc ligne
Blockly.Arduino['line'] = function (block) 
{
    var operator = "=="
    var order = (operator == '==' || operator == '!=') ?
            Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var state = "LOW"
    Blockly.Arduino.definitions_['define_line_sensor'] = 'int lineCount = 4;\nADS1015 lineSensor;\n';
    Blockly.Arduino.setups_['setup_line_sensor'] = 'if(lineSensor.begin(0x49) == false)\n  {\n    Serial.println("Line sensor not found. Check wiring.");\n    while (1)\n      ;\n  }\n  pinMode(lineCmdPin, OUTPUT);\n  digitalWrite(lineCmdPin, HIGH);';
    var argument = 'digitalRead(33)';
    var code = argument + ' ' + operator + ' ' + state ;
    return [code, order];
};

// Définition du code du bloc de déplacement avant-arrière
Blockly.Arduino['move'] = function (block) 
{
    var direction = block.getFieldValue('directionChoise');
    var speed = block.getFieldValue('speedChoise');
    Blockly.Arduino.definitions_['define_motors'] = 'MotorDriver motorA = MotorDriver(1, pinINA1, pinINA2);\nMotorDriver motorB = MotorDriver(2, pinINB1, pinINB2);';
    var code = 'motorA.stop();\nmotorB.stop();\n';

    if(direction == 'backward')
    {
        switch(speed)
        {
            case 'slow' :
                code = 'motorA.'+direction+'();\nmotorB.'+direction+'();\n';
                break;

            case 'medium' :
                code = 'motorA.'+direction+'();\nmotorB.'+direction+'();\n';
                break;

            case 'fast' :
                code = 'motorA.'+direction+'();\nmotorB.'+direction+'();\n';
                break;

            default :
                code = 'motorA.'+direction+'();\nmotorB.'+direction+'();\n';
                break;
        }
    }
    else
    {
        switch(speed)
        {
            case 'slow' :
                code = 'motorA.'+direction+'();\nmotorB.'+direction+'();\n';
                break;

            case 'medium' :
                code = 'motorA.'+direction+'();\nmotorB.'+direction+'();\n';
                break;

            case 'fast' :
                code = 'motorA.'+direction+'();\nmotorB.'+direction+'();\n';
                break;

            default :
                code = 'motorA.'+direction+'();\nmotorB.'+direction+'();\n';
                break;
        }
    }

    return code;
};

// Définition du code du bloc pour tourner
Blockly.Arduino['turn'] = function (block) 
{
    var direction = block.getFieldValue('turnChoise');
    Blockly.Arduino.definitions_['define_motors'] = 'MotorDriver motorA = MotorDriver(1, pinINA1, pinINA2);\nMotorDriver motorB = MotorDriver(2, pinINB1, pinINB2);';
    var code = 'motorA.stop();\nmotorB.stop();\n';

    switch(direction)
        {
            case 'right' :
                code = 'motorA.backward();\nmotorB.forward();\ndelay(200);\nmotorA.stop();\nmotorB.stop();\n';
                break;

            case 'left' :
                code = 'motorA.forward();\nmotorB.backward();\ndelay(200);\nmotorA.stop();\nmotorB.stop();\n';
                break;

            case 'backward' :
                code = 'motorA.forward();\nmotorB.backward();\ndelay(400);\nmotorA.stop();\nmotorB.stop();\n';
                break;

            default :
                code = 'motorA.stop();\nmotorB.stop();\n';
                break;
        }
    
    return code;
};

// Définition du code du bloc servant à arrêter le robot
Blockly.Arduino['stop'] = function (block) 
{
    Blockly.Arduino.definitions_['define_motors'] = 'MotorDriver motorA = MotorDriver(1, pinINA1, pinINA2);\nMotorDriver motorB = MotorDriver(2, pinINB1, pinINB2);';
    var code = 'motorA.stop();\nmotorB.stop();';
    return code;
};

// Définition du code du bloc delay
Blockly.Arduino['delay'] = function (block) 
{
    var temps = block.getFieldValue('time_to_wait');
    var echelle = block.getFieldValue('time_type');

    if(echelle == 'secondes')
    {
        temps *= 1000;
    }

    var code = 'delay('+temps+');';
    return code;
};