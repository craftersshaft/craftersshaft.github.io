gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDNewObjectObjects1_1final = [];

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
gdjs.TitleScreenCode.GDStock2Objects1= [];
gdjs.TitleScreenCode.GDStock2Objects2= [];
gdjs.TitleScreenCode.GDStock1Objects1= [];
gdjs.TitleScreenCode.GDStock1Objects2= [];
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
gdjs.TitleScreenCode.GDVersionObjects1= [];
gdjs.TitleScreenCode.GDVersionObjects2= [];

gdjs.TitleScreenCode.conditionTrue_0 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition3IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition4IsTrue_0 = {val:false};
gdjs.TitleScreenCode.conditionTrue_1 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition3IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition4IsTrue_1 = {val:false};
gdjs.TitleScreenCode.conditionTrue_2 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_2 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_2 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_2 = {val:false};
gdjs.TitleScreenCode.condition3IsTrue_2 = {val:false};
gdjs.TitleScreenCode.condition4IsTrue_2 = {val:false};


gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDNewObjectObjects2Objects = Hashtable.newFrom({"NewObject": gdjs.TitleScreenCode.GDNewObjectObjects2});gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDVersionObjects1Objects = Hashtable.newFrom({"Version": gdjs.TitleScreenCode.GDVersionObjects1});gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

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

gdjs.TitleScreenCode.GDNewObjectObjects1.length = 0;


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.GDNewObjectObjects1_1final.length = 0;gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
gdjs.TitleScreenCode.condition3IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 2, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.GDNewObjectObjects2.createFrom(runtimeScene.getObjects("NewObject"));
{gdjs.TitleScreenCode.conditionTrue_2 = gdjs.TitleScreenCode.condition3IsTrue_1;
gdjs.TitleScreenCode.condition0IsTrue_2.val = false;
gdjs.TitleScreenCode.condition1IsTrue_2.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleScreenCode.condition0IsTrue_2.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDNewObjectObjects2Objects, runtimeScene, true, false);
}}
gdjs.TitleScreenCode.conditionTrue_2.val = true && gdjs.TitleScreenCode.condition0IsTrue_2.val && gdjs.TitleScreenCode.condition1IsTrue_2.val;
}
if( gdjs.TitleScreenCode.condition3IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TitleScreenCode.GDNewObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.TitleScreenCode.GDNewObjectObjects1_1final.indexOf(gdjs.TitleScreenCode.GDNewObjectObjects2[j]) === -1 )
            gdjs.TitleScreenCode.GDNewObjectObjects1_1final.push(gdjs.TitleScreenCode.GDNewObjectObjects2[j]);
    }
}
}
{
gdjs.TitleScreenCode.GDNewObjectObjects1.createFrom(gdjs.TitleScreenCode.GDNewObjectObjects1_1final);
}
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{

gdjs.TitleScreenCode.GDVersionObjects1.createFrom(runtimeScene.getObjects("Version"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDVersionObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("./patch.html", runtimeScene);
}}

}


};

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
gdjs.TitleScreenCode.GDStock2Objects1.length = 0;
gdjs.TitleScreenCode.GDStock2Objects2.length = 0;
gdjs.TitleScreenCode.GDStock1Objects1.length = 0;
gdjs.TitleScreenCode.GDStock1Objects2.length = 0;
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
gdjs.TitleScreenCode.GDVersionObjects1.length = 0;
gdjs.TitleScreenCode.GDVersionObjects2.length = 0;

gdjs.TitleScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
