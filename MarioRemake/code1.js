gdjs.GameOverCode = {};
gdjs.GameOverCode.GDCollisionBlockObjects1= [];
gdjs.GameOverCode.GDCollisionBlockObjects2= [];
gdjs.GameOverCode.GDCollisionPlayerObjects1= [];
gdjs.GameOverCode.GDCollisionPlayerObjects2= [];
gdjs.GameOverCode.GDPlayerGraphicsObjects1= [];
gdjs.GameOverCode.GDPlayerGraphicsObjects2= [];
gdjs.GameOverCode.GDBigPowerBlockObjects1= [];
gdjs.GameOverCode.GDBigPowerBlockObjects2= [];
gdjs.GameOverCode.GDGenericMonsterObjects1= [];
gdjs.GameOverCode.GDGenericMonsterObjects2= [];
gdjs.GameOverCode.GDBigPowerObjects1= [];
gdjs.GameOverCode.GDBigPowerObjects2= [];
gdjs.GameOverCode.GDDeathBarrierObjects1= [];
gdjs.GameOverCode.GDDeathBarrierObjects2= [];
gdjs.GameOverCode.GDBigPowerSpawnerObjects1= [];
gdjs.GameOverCode.GDBigPowerSpawnerObjects2= [];
gdjs.GameOverCode.GDDeathGraphicsObjects1= [];
gdjs.GameOverCode.GDDeathGraphicsObjects2= [];
gdjs.GameOverCode.GDgameoverObjects1= [];
gdjs.GameOverCode.GDgameoverObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Existance");
}{gdjs.evtTools.sound.playSound(runtimeScene, "CopyrightedMusic\\youaredeaderandevenmoreburied.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().get("CurrentLevel").setString("World1-1a");
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "Existance");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intermission", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDCollisionBlockObjects1.length = 0;
gdjs.GameOverCode.GDCollisionBlockObjects2.length = 0;
gdjs.GameOverCode.GDCollisionPlayerObjects1.length = 0;
gdjs.GameOverCode.GDCollisionPlayerObjects2.length = 0;
gdjs.GameOverCode.GDPlayerGraphicsObjects1.length = 0;
gdjs.GameOverCode.GDPlayerGraphicsObjects2.length = 0;
gdjs.GameOverCode.GDBigPowerBlockObjects1.length = 0;
gdjs.GameOverCode.GDBigPowerBlockObjects2.length = 0;
gdjs.GameOverCode.GDGenericMonsterObjects1.length = 0;
gdjs.GameOverCode.GDGenericMonsterObjects2.length = 0;
gdjs.GameOverCode.GDBigPowerObjects1.length = 0;
gdjs.GameOverCode.GDBigPowerObjects2.length = 0;
gdjs.GameOverCode.GDDeathBarrierObjects1.length = 0;
gdjs.GameOverCode.GDDeathBarrierObjects2.length = 0;
gdjs.GameOverCode.GDBigPowerSpawnerObjects1.length = 0;
gdjs.GameOverCode.GDBigPowerSpawnerObjects2.length = 0;
gdjs.GameOverCode.GDDeathGraphicsObjects1.length = 0;
gdjs.GameOverCode.GDDeathGraphicsObjects2.length = 0;
gdjs.GameOverCode.GDgameoverObjects1.length = 0;
gdjs.GameOverCode.GDgameoverObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
