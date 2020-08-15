gdjs.evtsExt__Gamepads__C_Button_pressed = {};

gdjs.evtsExt__Gamepads__C_Button_pressed.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__C_Button_pressed.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__C_Button_pressed.userFunc0x6b1608 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const button = eventsFunctionContext.getArgument("button").toUpperCase();

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in condition: "Gamepad button pressed", is not valid number, must be between 0 and 4.');
    return;
}
if (button === "") {
    console.error('Parameter button is not valid in condition: "Gamepad button pressed"');
    return;
}

var gamepad = gamepads[playerId];
if (gamepad == null) return;

var buttonId;

switch (button) {
    case 'A':
    case 'CROSS':
        buttonId = 0;
        break;
    case 'B':
    case 'CIRCLE':
        buttonId = 1;
        break;
    case 'X':
    case 'SQUARE':
        buttonId = 2;
        break;
    case 'Y':
    case 'TRIANGLE':
        buttonId = 3;
        break;
    case 'LB':
    case 'L1':
        buttonId = 4;
        break;
    case 'RB':
    case 'R1':
        buttonId = 5;
        break;
    case 'LT':
    case 'L2':
        buttonId = 6;
        break;
    case 'RT':
    case 'R2':
        buttonId = 7;
        break;

    case 'UP':
        buttonId = 12;
        break;
    case 'DOWN':
        buttonId = 13;
        break;
    case 'LEFT':
        buttonId = 14;
        break;
    case 'RIGHT':
        buttonId = 15;
        break;

    case 'BACK':
    case 'SHARE':
        buttonId = 8;
        break;
    case 'START':
    case 'OPTIONS':
        buttonId = 9;
        break;

    case 'CLICK_STICK_LEFT':
        buttonId = 10;
        break;
    case 'CLICK_STICK_RIGHT':
        buttonId = 11;
        break;

    //PS4
    case 'PS_BUTTON':
        buttonId = 16;
        break;
    case 'CLICK_TOUCHPAD':
        buttonId = 17;
        break;

    default:
        break;
}

if (buttonId === undefined) {
    eventsFunctionContext.returnValue = false;
    return;
}

//When a button is pressed, save the button in lastButtonUsed for each players
if (gamepad.buttons[buttonId].pressed) gdjs._extensionController.players[playerId].lastButtonUsed = buttonId;
eventsFunctionContext.returnValue = gamepad.buttons[buttonId].pressed;
};
gdjs.evtsExt__Gamepads__C_Button_pressed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Button_pressed.userFunc0x6b1608(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__C_Button_pressed.func = function(runtimeScene, player_ID, button, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "player_ID") return player_ID;
if (argName === "button") return button;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__C_Button_pressed.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

