gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDPlayerObjects1= [];
gdjs.TitleScreenCode.GDPlayerObjects2= [];
gdjs.TitleScreenCode.GDHitbox1Objects1= [];
gdjs.TitleScreenCode.GDHitbox1Objects2= [];
gdjs.TitleScreenCode.GDHitbox2Objects1= [];
gdjs.TitleScreenCode.GDHitbox2Objects2= [];
gdjs.TitleScreenCode.GDDeathBarrierObjects1= [];
gdjs.TitleScreenCode.GDDeathBarrierObjects2= [];
gdjs.TitleScreenCode.GDPlayer2DamageObjects1= [];
gdjs.TitleScreenCode.GDPlayer2DamageObjects2= [];
gdjs.TitleScreenCode.GDPlayer1DamageObjects1= [];
gdjs.TitleScreenCode.GDPlayer1DamageObjects2= [];
gdjs.TitleScreenCode.GDPlayer2NameObjects1= [];
gdjs.TitleScreenCode.GDPlayer2NameObjects2= [];
gdjs.TitleScreenCode.GDPlayer1NameObjects1= [];
gdjs.TitleScreenCode.GDPlayer1NameObjects2= [];
gdjs.TitleScreenCode.GDFireball2Objects1= [];
gdjs.TitleScreenCode.GDFireball2Objects2= [];
gdjs.TitleScreenCode.GDFireball1Objects1= [];
gdjs.TitleScreenCode.GDFireball1Objects2= [];
gdjs.TitleScreenCode.GDGameTextObjects1= [];
gdjs.TitleScreenCode.GDGameTextObjects2= [];
gdjs.TitleScreenCode.GDPurpleGridObjects1= [];
gdjs.TitleScreenCode.GDPurpleGridObjects2= [];
gdjs.TitleScreenCode.GDgreygridObjects1= [];
gdjs.TitleScreenCode.GDgreygridObjects2= [];
gdjs.TitleScreenCode.GDCreditsObjects1= [];
gdjs.TitleScreenCode.GDCreditsObjects2= [];
gdjs.TitleScreenCode.GDlogoObjects1= [];
gdjs.TitleScreenCode.GDlogoObjects2= [];
gdjs.TitleScreenCode.GDNewObjectObjects1= [];
gdjs.TitleScreenCode.GDNewObjectObjects2= [];

gdjs.TitleScreenCode.conditionTrue_0 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_0 = {val:false};


gdjs.TitleScreenCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDPurpleGridObjects1.createFrom(runtimeScene.getObjects("PurpleGrid"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDPurpleGridObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDPurpleGridObjects1[i].setXOffset(gdjs.TitleScreenCode.GDPurpleGridObjects1[i].getXOffset() + (1));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


}; //End of gdjs.TitleScreenCode.eventsList0x5b7a18


gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDPlayerObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayerObjects2.length = 0;
gdjs.TitleScreenCode.GDHitbox1Objects1.length = 0;
gdjs.TitleScreenCode.GDHitbox1Objects2.length = 0;
gdjs.TitleScreenCode.GDHitbox2Objects1.length = 0;
gdjs.TitleScreenCode.GDHitbox2Objects2.length = 0;
gdjs.TitleScreenCode.GDDeathBarrierObjects1.length = 0;
gdjs.TitleScreenCode.GDDeathBarrierObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayer2DamageObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayer2DamageObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayer1DamageObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayer1DamageObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayer2NameObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayer2NameObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayer1NameObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayer1NameObjects2.length = 0;
gdjs.TitleScreenCode.GDFireball2Objects1.length = 0;
gdjs.TitleScreenCode.GDFireball2Objects2.length = 0;
gdjs.TitleScreenCode.GDFireball1Objects1.length = 0;
gdjs.TitleScreenCode.GDFireball1Objects2.length = 0;
gdjs.TitleScreenCode.GDGameTextObjects1.length = 0;
gdjs.TitleScreenCode.GDGameTextObjects2.length = 0;
gdjs.TitleScreenCode.GDPurpleGridObjects1.length = 0;
gdjs.TitleScreenCode.GDPurpleGridObjects2.length = 0;
gdjs.TitleScreenCode.GDgreygridObjects1.length = 0;
gdjs.TitleScreenCode.GDgreygridObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDlogoObjects1.length = 0;
gdjs.TitleScreenCode.GDlogoObjects2.length = 0;
gdjs.TitleScreenCode.GDNewObjectObjects1.length = 0;
gdjs.TitleScreenCode.GDNewObjectObjects2.length = 0;

gdjs.TitleScreenCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
