gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDPlayerObjects1= [];
gdjs.MainMenuCode.GDPlayerObjects2= [];
gdjs.MainMenuCode.GDHitbox1Objects1= [];
gdjs.MainMenuCode.GDHitbox1Objects2= [];
gdjs.MainMenuCode.GDHitbox2Objects1= [];
gdjs.MainMenuCode.GDHitbox2Objects2= [];
gdjs.MainMenuCode.GDDeathBarrierObjects1= [];
gdjs.MainMenuCode.GDDeathBarrierObjects2= [];
gdjs.MainMenuCode.GDPlayer2DamageObjects1= [];
gdjs.MainMenuCode.GDPlayer2DamageObjects2= [];
gdjs.MainMenuCode.GDPlayer1DamageObjects1= [];
gdjs.MainMenuCode.GDPlayer1DamageObjects2= [];
gdjs.MainMenuCode.GDPlayer2NameObjects1= [];
gdjs.MainMenuCode.GDPlayer2NameObjects2= [];
gdjs.MainMenuCode.GDPlayer1NameObjects1= [];
gdjs.MainMenuCode.GDPlayer1NameObjects2= [];
gdjs.MainMenuCode.GDFireball2Objects1= [];
gdjs.MainMenuCode.GDFireball2Objects2= [];
gdjs.MainMenuCode.GDFireball1Objects1= [];
gdjs.MainMenuCode.GDFireball1Objects2= [];
gdjs.MainMenuCode.GDGameTextObjects1= [];
gdjs.MainMenuCode.GDGameTextObjects2= [];
gdjs.MainMenuCode.GDPurpleGridObjects1= [];
gdjs.MainMenuCode.GDPurpleGridObjects2= [];
gdjs.MainMenuCode.GDButtonObjects1= [];
gdjs.MainMenuCode.GDButtonObjects2= [];
gdjs.MainMenuCode.GDRegularButtonObjects1= [];
gdjs.MainMenuCode.GDRegularButtonObjects2= [];
gdjs.MainMenuCode.GDButtonTextObjects1= [];
gdjs.MainMenuCode.GDButtonTextObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonTextObjects1Objects = Hashtable.newFrom({"ButtonText": gdjs.MainMenuCode.GDButtonTextObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.MainMenuCode.GDButtonObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDPurpleGridObjects1.createFrom(runtimeScene.getObjects("PurpleGrid"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPurpleGridObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPurpleGridObjects1[i].setXOffset(gdjs.MainMenuCode.GDPurpleGridObjects1[i].getXOffset() + (1));
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 69));
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "TrashClashMenu.mp3", 69, true, 100, 1);
}}

}


{

gdjs.MainMenuCode.GDButtonTextObjects1.createFrom(runtimeScene.getObjects("ButtonText"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "KeyBindings", false);
}}

}


{

gdjs.MainMenuCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage_Betafield", false);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDPlayerObjects1.length = 0;
gdjs.MainMenuCode.GDPlayerObjects2.length = 0;
gdjs.MainMenuCode.GDHitbox1Objects1.length = 0;
gdjs.MainMenuCode.GDHitbox1Objects2.length = 0;
gdjs.MainMenuCode.GDHitbox2Objects1.length = 0;
gdjs.MainMenuCode.GDHitbox2Objects2.length = 0;
gdjs.MainMenuCode.GDDeathBarrierObjects1.length = 0;
gdjs.MainMenuCode.GDDeathBarrierObjects2.length = 0;
gdjs.MainMenuCode.GDPlayer2DamageObjects1.length = 0;
gdjs.MainMenuCode.GDPlayer2DamageObjects2.length = 0;
gdjs.MainMenuCode.GDPlayer1DamageObjects1.length = 0;
gdjs.MainMenuCode.GDPlayer1DamageObjects2.length = 0;
gdjs.MainMenuCode.GDPlayer2NameObjects1.length = 0;
gdjs.MainMenuCode.GDPlayer2NameObjects2.length = 0;
gdjs.MainMenuCode.GDPlayer1NameObjects1.length = 0;
gdjs.MainMenuCode.GDPlayer1NameObjects2.length = 0;
gdjs.MainMenuCode.GDFireball2Objects1.length = 0;
gdjs.MainMenuCode.GDFireball2Objects2.length = 0;
gdjs.MainMenuCode.GDFireball1Objects1.length = 0;
gdjs.MainMenuCode.GDFireball1Objects2.length = 0;
gdjs.MainMenuCode.GDGameTextObjects1.length = 0;
gdjs.MainMenuCode.GDGameTextObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleGridObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleGridObjects2.length = 0;
gdjs.MainMenuCode.GDButtonObjects1.length = 0;
gdjs.MainMenuCode.GDButtonObjects2.length = 0;
gdjs.MainMenuCode.GDRegularButtonObjects1.length = 0;
gdjs.MainMenuCode.GDRegularButtonObjects2.length = 0;
gdjs.MainMenuCode.GDButtonTextObjects1.length = 0;
gdjs.MainMenuCode.GDButtonTextObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
