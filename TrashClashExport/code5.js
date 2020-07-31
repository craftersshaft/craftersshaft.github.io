gdjs.KeyBindingsCode = {};
gdjs.KeyBindingsCode.GDPlayerObjects1= [];
gdjs.KeyBindingsCode.GDPlayerObjects2= [];
gdjs.KeyBindingsCode.GDHitbox1Objects1= [];
gdjs.KeyBindingsCode.GDHitbox1Objects2= [];
gdjs.KeyBindingsCode.GDHitbox2Objects1= [];
gdjs.KeyBindingsCode.GDHitbox2Objects2= [];
gdjs.KeyBindingsCode.GDDeathBarrierObjects1= [];
gdjs.KeyBindingsCode.GDDeathBarrierObjects2= [];
gdjs.KeyBindingsCode.GDPlayer2DamageObjects1= [];
gdjs.KeyBindingsCode.GDPlayer2DamageObjects2= [];
gdjs.KeyBindingsCode.GDPlayer1DamageObjects1= [];
gdjs.KeyBindingsCode.GDPlayer1DamageObjects2= [];
gdjs.KeyBindingsCode.GDPlayer2NameObjects1= [];
gdjs.KeyBindingsCode.GDPlayer2NameObjects2= [];
gdjs.KeyBindingsCode.GDPlayer1NameObjects1= [];
gdjs.KeyBindingsCode.GDPlayer1NameObjects2= [];
gdjs.KeyBindingsCode.GDFireball2Objects1= [];
gdjs.KeyBindingsCode.GDFireball2Objects2= [];
gdjs.KeyBindingsCode.GDFireball1Objects1= [];
gdjs.KeyBindingsCode.GDFireball1Objects2= [];
gdjs.KeyBindingsCode.GDGameTextObjects1= [];
gdjs.KeyBindingsCode.GDGameTextObjects2= [];
gdjs.KeyBindingsCode.GDRegularButtonObjects1= [];
gdjs.KeyBindingsCode.GDRegularButtonObjects2= [];
gdjs.KeyBindingsCode.GDPurpleGridObjects1= [];
gdjs.KeyBindingsCode.GDPurpleGridObjects2= [];
gdjs.KeyBindingsCode.GDBackObjects1= [];
gdjs.KeyBindingsCode.GDBackObjects2= [];
gdjs.KeyBindingsCode.GDButtonTextObjects1= [];
gdjs.KeyBindingsCode.GDButtonTextObjects2= [];
gdjs.KeyBindingsCode.GDDisclaimerObjects1= [];
gdjs.KeyBindingsCode.GDDisclaimerObjects2= [];

gdjs.KeyBindingsCode.conditionTrue_0 = {val:false};
gdjs.KeyBindingsCode.condition0IsTrue_0 = {val:false};
gdjs.KeyBindingsCode.condition1IsTrue_0 = {val:false};
gdjs.KeyBindingsCode.condition2IsTrue_0 = {val:false};


gdjs.KeyBindingsCode.mapOfGDgdjs_46KeyBindingsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.KeyBindingsCode.GDBackObjects1});gdjs.KeyBindingsCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.KeyBindingsCode.condition0IsTrue_0.val = false;
{
gdjs.KeyBindingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.KeyBindingsCode.condition0IsTrue_0.val) {
gdjs.KeyBindingsCode.GDPurpleGridObjects1.createFrom(runtimeScene.getObjects("PurpleGrid"));
{for(var i = 0, len = gdjs.KeyBindingsCode.GDPurpleGridObjects1.length ;i < len;++i) {
    gdjs.KeyBindingsCode.GDPurpleGridObjects1[i].setXOffset(gdjs.KeyBindingsCode.GDPurpleGridObjects1[i].getXOffset() + (1));
}
}}

}


{

gdjs.KeyBindingsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.KeyBindingsCode.condition0IsTrue_0.val = false;
gdjs.KeyBindingsCode.condition1IsTrue_0.val = false;
{
gdjs.KeyBindingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.KeyBindingsCode.condition0IsTrue_0.val ) {
{
gdjs.KeyBindingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.KeyBindingsCode.mapOfGDgdjs_46KeyBindingsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.KeyBindingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


}; //End of gdjs.KeyBindingsCode.eventsList0x5b7a18


gdjs.KeyBindingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.KeyBindingsCode.GDPlayerObjects1.length = 0;
gdjs.KeyBindingsCode.GDPlayerObjects2.length = 0;
gdjs.KeyBindingsCode.GDHitbox1Objects1.length = 0;
gdjs.KeyBindingsCode.GDHitbox1Objects2.length = 0;
gdjs.KeyBindingsCode.GDHitbox2Objects1.length = 0;
gdjs.KeyBindingsCode.GDHitbox2Objects2.length = 0;
gdjs.KeyBindingsCode.GDDeathBarrierObjects1.length = 0;
gdjs.KeyBindingsCode.GDDeathBarrierObjects2.length = 0;
gdjs.KeyBindingsCode.GDPlayer2DamageObjects1.length = 0;
gdjs.KeyBindingsCode.GDPlayer2DamageObjects2.length = 0;
gdjs.KeyBindingsCode.GDPlayer1DamageObjects1.length = 0;
gdjs.KeyBindingsCode.GDPlayer1DamageObjects2.length = 0;
gdjs.KeyBindingsCode.GDPlayer2NameObjects1.length = 0;
gdjs.KeyBindingsCode.GDPlayer2NameObjects2.length = 0;
gdjs.KeyBindingsCode.GDPlayer1NameObjects1.length = 0;
gdjs.KeyBindingsCode.GDPlayer1NameObjects2.length = 0;
gdjs.KeyBindingsCode.GDFireball2Objects1.length = 0;
gdjs.KeyBindingsCode.GDFireball2Objects2.length = 0;
gdjs.KeyBindingsCode.GDFireball1Objects1.length = 0;
gdjs.KeyBindingsCode.GDFireball1Objects2.length = 0;
gdjs.KeyBindingsCode.GDGameTextObjects1.length = 0;
gdjs.KeyBindingsCode.GDGameTextObjects2.length = 0;
gdjs.KeyBindingsCode.GDRegularButtonObjects1.length = 0;
gdjs.KeyBindingsCode.GDRegularButtonObjects2.length = 0;
gdjs.KeyBindingsCode.GDPurpleGridObjects1.length = 0;
gdjs.KeyBindingsCode.GDPurpleGridObjects2.length = 0;
gdjs.KeyBindingsCode.GDBackObjects1.length = 0;
gdjs.KeyBindingsCode.GDBackObjects2.length = 0;
gdjs.KeyBindingsCode.GDButtonTextObjects1.length = 0;
gdjs.KeyBindingsCode.GDButtonTextObjects2.length = 0;
gdjs.KeyBindingsCode.GDDisclaimerObjects1.length = 0;
gdjs.KeyBindingsCode.GDDisclaimerObjects2.length = 0;

gdjs.KeyBindingsCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['KeyBindingsCode'] = gdjs.KeyBindingsCode;
