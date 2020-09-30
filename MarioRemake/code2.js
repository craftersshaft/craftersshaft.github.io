gdjs.IntermissionCode = {};
gdjs.IntermissionCode.GDCollisionBlockObjects1= [];
gdjs.IntermissionCode.GDCollisionBlockObjects2= [];
gdjs.IntermissionCode.GDCollisionPlayerObjects1= [];
gdjs.IntermissionCode.GDCollisionPlayerObjects2= [];
gdjs.IntermissionCode.GDPlayerGraphicsObjects1= [];
gdjs.IntermissionCode.GDPlayerGraphicsObjects2= [];
gdjs.IntermissionCode.GDBigPowerBlockObjects1= [];
gdjs.IntermissionCode.GDBigPowerBlockObjects2= [];
gdjs.IntermissionCode.GDGenericMonsterObjects1= [];
gdjs.IntermissionCode.GDGenericMonsterObjects2= [];
gdjs.IntermissionCode.GDBigPowerObjects1= [];
gdjs.IntermissionCode.GDBigPowerObjects2= [];
gdjs.IntermissionCode.GDDeathBarrierObjects1= [];
gdjs.IntermissionCode.GDDeathBarrierObjects2= [];
gdjs.IntermissionCode.GDBigPowerSpawnerObjects1= [];
gdjs.IntermissionCode.GDBigPowerSpawnerObjects2= [];
gdjs.IntermissionCode.GDDeathGraphicsObjects1= [];
gdjs.IntermissionCode.GDDeathGraphicsObjects2= [];
gdjs.IntermissionCode.GDlivescounterObjects1= [];
gdjs.IntermissionCode.GDlivescounterObjects2= [];

gdjs.IntermissionCode.conditionTrue_0 = {val:false};
gdjs.IntermissionCode.condition0IsTrue_0 = {val:false};
gdjs.IntermissionCode.condition1IsTrue_0 = {val:false};
gdjs.IntermissionCode.condition2IsTrue_0 = {val:false};


gdjs.IntermissionCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntermissionCode.condition0IsTrue_0.val = false;
{
gdjs.IntermissionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntermissionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("livescounter"), gdjs.IntermissionCode.GDlivescounterObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Existance");
}{for(var i = 0, len = gdjs.IntermissionCode.GDlivescounterObjects1.length ;i < len;++i) {
    gdjs.IntermissionCode.GDlivescounterObjects1[i].setString("X    " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.IntermissionCode.condition0IsTrue_0.val = false;
{
gdjs.IntermissionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Existance");
}if (gdjs.IntermissionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("CurrentLevel")), false);
}}

}


{


gdjs.IntermissionCode.condition0IsTrue_0.val = false;
gdjs.IntermissionCode.condition1IsTrue_0.val = false;
{
gdjs.IntermissionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "Existance");
}if ( gdjs.IntermissionCode.condition0IsTrue_0.val ) {
{
gdjs.IntermissionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}}
if (gdjs.IntermissionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("CurrentLevel")), false);
}}

}


};

gdjs.IntermissionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntermissionCode.GDCollisionBlockObjects1.length = 0;
gdjs.IntermissionCode.GDCollisionBlockObjects2.length = 0;
gdjs.IntermissionCode.GDCollisionPlayerObjects1.length = 0;
gdjs.IntermissionCode.GDCollisionPlayerObjects2.length = 0;
gdjs.IntermissionCode.GDPlayerGraphicsObjects1.length = 0;
gdjs.IntermissionCode.GDPlayerGraphicsObjects2.length = 0;
gdjs.IntermissionCode.GDBigPowerBlockObjects1.length = 0;
gdjs.IntermissionCode.GDBigPowerBlockObjects2.length = 0;
gdjs.IntermissionCode.GDGenericMonsterObjects1.length = 0;
gdjs.IntermissionCode.GDGenericMonsterObjects2.length = 0;
gdjs.IntermissionCode.GDBigPowerObjects1.length = 0;
gdjs.IntermissionCode.GDBigPowerObjects2.length = 0;
gdjs.IntermissionCode.GDDeathBarrierObjects1.length = 0;
gdjs.IntermissionCode.GDDeathBarrierObjects2.length = 0;
gdjs.IntermissionCode.GDBigPowerSpawnerObjects1.length = 0;
gdjs.IntermissionCode.GDBigPowerSpawnerObjects2.length = 0;
gdjs.IntermissionCode.GDDeathGraphicsObjects1.length = 0;
gdjs.IntermissionCode.GDDeathGraphicsObjects2.length = 0;
gdjs.IntermissionCode.GDlivescounterObjects1.length = 0;
gdjs.IntermissionCode.GDlivescounterObjects2.length = 0;

gdjs.IntermissionCode.eventsList0(runtimeScene);
return;

}

gdjs['IntermissionCode'] = gdjs.IntermissionCode;
