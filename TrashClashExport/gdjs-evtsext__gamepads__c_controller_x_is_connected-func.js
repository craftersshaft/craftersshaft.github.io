gdjs.evtsExt__Gamepads__C_Controller_X_is_connected = {};

gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.userFunc0x6cbd10 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameter
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in condition: "Gamepad connected", is not valid number, must be between 0 and 4.');
    return;
}

// If gamepad was disconnected it will be null (so this will return false)
// If gamepad was never connected it will be undefined (so this will return false)
eventsFunctionContext.returnValue = !!gamepads[playerId];
};
gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.userFunc0x6cbd10(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func = function(runtimeScene, player_ID, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

