gdjs.evtsExt__Gamepads__A_Vibrate_controller = {};

gdjs.evtsExt__Gamepads__A_Vibrate_controller.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__A_Vibrate_controller.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__A_Vibrate_controller.userFunc0x6cbd10 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
//Vibration work only on game in browser.
var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const duration = eventsFunctionContext.getArgument("duration") || 1;

if (playerId < 0 || playerId > 4) {
  console.error('Parameter gamepad identifier in condition: "Gamepad connected", is not valid number, must be between 0 and 4.');
  return;
}

var gamepad = gamepads[playerId];
if (gamepad && gamepad.vibrationActuator) {
  gamepad.vibrationActuator.playEffect("dual-rumble", {
    startDelay: 0,
    duration: duration * 1000,
    weakMagnitude: 1.0,
    strongMagnitude: 1.0
  });
}
};
gdjs.evtsExt__Gamepads__A_Vibrate_controller.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
}

}


{


gdjs.evtsExt__Gamepads__A_Vibrate_controller.userFunc0x6cbd10(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__A_Vibrate_controller.func = function(runtimeScene, player_ID, duration, parentEventsFunctionContext) {
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
if (argName === "duration") return duration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__A_Vibrate_controller.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

