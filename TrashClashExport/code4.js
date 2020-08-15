gdjs.VictoryCode = {};
gdjs.VictoryCode.GDPlayerObjects1= [];
gdjs.VictoryCode.GDPlayerObjects2= [];
gdjs.VictoryCode.GDPlayerObjects3= [];
gdjs.VictoryCode.GDPlayerObjects4= [];
gdjs.VictoryCode.GDHitbox1Objects1= [];
gdjs.VictoryCode.GDHitbox1Objects2= [];
gdjs.VictoryCode.GDHitbox1Objects3= [];
gdjs.VictoryCode.GDHitbox1Objects4= [];
gdjs.VictoryCode.GDHitbox2Objects1= [];
gdjs.VictoryCode.GDHitbox2Objects2= [];
gdjs.VictoryCode.GDHitbox2Objects3= [];
gdjs.VictoryCode.GDHitbox2Objects4= [];
gdjs.VictoryCode.GDDeathBarrierObjects1= [];
gdjs.VictoryCode.GDDeathBarrierObjects2= [];
gdjs.VictoryCode.GDDeathBarrierObjects3= [];
gdjs.VictoryCode.GDDeathBarrierObjects4= [];
gdjs.VictoryCode.GDPlayer2DamageObjects1= [];
gdjs.VictoryCode.GDPlayer2DamageObjects2= [];
gdjs.VictoryCode.GDPlayer2DamageObjects3= [];
gdjs.VictoryCode.GDPlayer2DamageObjects4= [];
gdjs.VictoryCode.GDPlayer1DamageObjects1= [];
gdjs.VictoryCode.GDPlayer1DamageObjects2= [];
gdjs.VictoryCode.GDPlayer1DamageObjects3= [];
gdjs.VictoryCode.GDPlayer1DamageObjects4= [];
gdjs.VictoryCode.GDPlayer2NameObjects1= [];
gdjs.VictoryCode.GDPlayer2NameObjects2= [];
gdjs.VictoryCode.GDPlayer2NameObjects3= [];
gdjs.VictoryCode.GDPlayer2NameObjects4= [];
gdjs.VictoryCode.GDPlayer1NameObjects1= [];
gdjs.VictoryCode.GDPlayer1NameObjects2= [];
gdjs.VictoryCode.GDPlayer1NameObjects3= [];
gdjs.VictoryCode.GDPlayer1NameObjects4= [];
gdjs.VictoryCode.GDFireball2Objects1= [];
gdjs.VictoryCode.GDFireball2Objects2= [];
gdjs.VictoryCode.GDFireball2Objects3= [];
gdjs.VictoryCode.GDFireball2Objects4= [];
gdjs.VictoryCode.GDFireball1Objects1= [];
gdjs.VictoryCode.GDFireball1Objects2= [];
gdjs.VictoryCode.GDFireball1Objects3= [];
gdjs.VictoryCode.GDFireball1Objects4= [];
gdjs.VictoryCode.GDGameTextObjects1= [];
gdjs.VictoryCode.GDGameTextObjects2= [];
gdjs.VictoryCode.GDGameTextObjects3= [];
gdjs.VictoryCode.GDGameTextObjects4= [];
gdjs.VictoryCode.GDStock2Objects1= [];
gdjs.VictoryCode.GDStock2Objects2= [];
gdjs.VictoryCode.GDStock2Objects3= [];
gdjs.VictoryCode.GDStock2Objects4= [];
gdjs.VictoryCode.GDStock1Objects1= [];
gdjs.VictoryCode.GDStock1Objects2= [];
gdjs.VictoryCode.GDStock1Objects3= [];
gdjs.VictoryCode.GDStock1Objects4= [];
gdjs.VictoryCode.GDVictoryGridObjects1= [];
gdjs.VictoryCode.GDVictoryGridObjects2= [];
gdjs.VictoryCode.GDVictoryGridObjects3= [];
gdjs.VictoryCode.GDVictoryGridObjects4= [];
gdjs.VictoryCode.GDwinnerObjects1= [];
gdjs.VictoryCode.GDwinnerObjects2= [];
gdjs.VictoryCode.GDwinnerObjects3= [];
gdjs.VictoryCode.GDwinnerObjects4= [];

gdjs.VictoryCode.conditionTrue_0 = {val:false};
gdjs.VictoryCode.condition0IsTrue_0 = {val:false};
gdjs.VictoryCode.condition1IsTrue_0 = {val:false};
gdjs.VictoryCode.condition2IsTrue_0 = {val:false};
gdjs.VictoryCode.condition3IsTrue_0 = {val:false};
gdjs.VictoryCode.condition4IsTrue_0 = {val:false};
gdjs.VictoryCode.conditionTrue_1 = {val:false};
gdjs.VictoryCode.condition0IsTrue_1 = {val:false};
gdjs.VictoryCode.condition1IsTrue_1 = {val:false};
gdjs.VictoryCode.condition2IsTrue_1 = {val:false};
gdjs.VictoryCode.condition3IsTrue_1 = {val:false};
gdjs.VictoryCode.condition4IsTrue_1 = {val:false};


gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
gdjs.VictoryCode.condition2IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) == "Mario";
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 2;
}if ( gdjs.VictoryCode.condition1IsTrue_0.val ) {
{
{gdjs.VictoryCode.conditionTrue_1 = gdjs.VictoryCode.condition2IsTrue_0;
gdjs.VictoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10519748);
}
}}
}
if (gdjs.VictoryCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MarioWins.mp3", 69, false, 100, 1);
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
gdjs.VictoryCode.condition2IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) == "Mario";
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 1;
}if ( gdjs.VictoryCode.condition1IsTrue_0.val ) {
{
{gdjs.VictoryCode.conditionTrue_1 = gdjs.VictoryCode.condition2IsTrue_0;
gdjs.VictoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10521292);
}
}}
}
if (gdjs.VictoryCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MarioWins.mp3", 69, false, 100, 1);
}}

}


};gdjs.VictoryCode.eventsList1 = function(runtimeScene) {

{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
gdjs.VictoryCode.condition2IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) == "Goba";
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 2;
}if ( gdjs.VictoryCode.condition1IsTrue_0.val ) {
{
{gdjs.VictoryCode.conditionTrue_1 = gdjs.VictoryCode.condition2IsTrue_0;
gdjs.VictoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10522180);
}
}}
}
if (gdjs.VictoryCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "GobaVictory.mp3", 69, false, 100, 1);
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
gdjs.VictoryCode.condition2IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) == "Goba";
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 1;
}if ( gdjs.VictoryCode.condition1IsTrue_0.val ) {
{
{gdjs.VictoryCode.conditionTrue_1 = gdjs.VictoryCode.condition2IsTrue_0;
gdjs.VictoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10523332);
}
}}
}
if (gdjs.VictoryCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "GobaVictory.mp3", 69, false, 100, 1);
}}

}


};gdjs.VictoryCode.eventsList2 = function(runtimeScene) {

{


gdjs.VictoryCode.eventsList0(runtimeScene);
}


{


gdjs.VictoryCode.eventsList1(runtimeScene);
}


};gdjs.VictoryCode.eventsList3 = function(runtimeScene) {

{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
gdjs.VictoryCode.GDVictoryGridObjects1.createFrom(runtimeScene.getObjects("VictoryGrid"));
{for(var i = 0, len = gdjs.VictoryCode.GDVictoryGridObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDVictoryGridObjects1[i].setXOffset(gdjs.VictoryCode.GDVictoryGridObjects1[i].getXOffset() - (1));
}
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
gdjs.VictoryCode.condition2IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 1;
}if ( gdjs.VictoryCode.condition1IsTrue_0.val ) {
{
gdjs.VictoryCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Name"));
}}
}
if (gdjs.VictoryCode.condition2IsTrue_0.val) {
gdjs.VictoryCode.GDStock1Objects1.createFrom(runtimeScene.getObjects("Stock1"));
gdjs.VictoryCode.GDStock2Objects1.createFrom(runtimeScene.getObjects("Stock2"));
gdjs.VictoryCode.GDwinnerObjects1.createFrom(runtimeScene.getObjects("winner"));
{for(var i = 0, len = gdjs.VictoryCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDwinnerObjects1[i].setString("PLAYER " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Winner")) + " WINS!");
}
}{runtimeScene.getGame().getVariables().get("WinnerName").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")));
}{for(var i = 0, len = gdjs.VictoryCode.GDStock2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock1Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock1Objects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin")));
}
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
gdjs.VictoryCode.condition2IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 2;
}if ( gdjs.VictoryCode.condition1IsTrue_0.val ) {
{
gdjs.VictoryCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Name"));
}}
}
if (gdjs.VictoryCode.condition2IsTrue_0.val) {
gdjs.VictoryCode.GDStock1Objects1.createFrom(runtimeScene.getObjects("Stock1"));
gdjs.VictoryCode.GDStock2Objects1.createFrom(runtimeScene.getObjects("Stock2"));
gdjs.VictoryCode.GDwinnerObjects1.createFrom(runtimeScene.getObjects("winner"));
{for(var i = 0, len = gdjs.VictoryCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDwinnerObjects1[i].setString("PLAYER " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Winner")) + " WINS!");
}
}{runtimeScene.getGame().getVariables().get("WinnerName").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")));
}{for(var i = 0, len = gdjs.VictoryCode.GDStock1Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock1Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock2Objects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin")));
}
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Name"));
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 1;
}}
if (gdjs.VictoryCode.condition1IsTrue_0.val) {
gdjs.VictoryCode.GDStock1Objects1.createFrom(runtimeScene.getObjects("Stock1"));
gdjs.VictoryCode.GDStock2Objects1.createFrom(runtimeScene.getObjects("Stock2"));
gdjs.VictoryCode.GDwinnerObjects1.createFrom(runtimeScene.getObjects("winner"));
{for(var i = 0, len = gdjs.VictoryCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDwinnerObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + " WINS!");
}
}{runtimeScene.getGame().getVariables().get("WinnerName").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")));
}{for(var i = 0, len = gdjs.VictoryCode.GDStock2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock1Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock1Objects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin")));
}
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Name"));
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 2;
}}
if (gdjs.VictoryCode.condition1IsTrue_0.val) {
gdjs.VictoryCode.GDStock1Objects1.createFrom(runtimeScene.getObjects("Stock1"));
gdjs.VictoryCode.GDStock2Objects1.createFrom(runtimeScene.getObjects("Stock2"));
gdjs.VictoryCode.GDwinnerObjects1.createFrom(runtimeScene.getObjects("winner"));
{for(var i = 0, len = gdjs.VictoryCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDwinnerObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + " WINS!");
}
}{runtimeScene.getGame().getVariables().get("WinnerName").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")));
}{for(var i = 0, len = gdjs.VictoryCode.GDStock1Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock1Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock2Objects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin")));
}
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
{gdjs.VictoryCode.conditionTrue_1 = gdjs.VictoryCode.condition0IsTrue_0;
gdjs.VictoryCode.condition0IsTrue_1.val = false;
gdjs.VictoryCode.condition1IsTrue_1.val = false;
gdjs.VictoryCode.condition2IsTrue_1.val = false;
gdjs.VictoryCode.condition3IsTrue_1.val = false;
{
gdjs.VictoryCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.VictoryCode.condition0IsTrue_1.val ) {
    gdjs.VictoryCode.conditionTrue_1.val = true;
}
}
{
gdjs.VictoryCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.VictoryCode.condition1IsTrue_1.val ) {
    gdjs.VictoryCode.conditionTrue_1.val = true;
}
}
{
gdjs.VictoryCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.VictoryCode.condition2IsTrue_1.val ) {
    gdjs.VictoryCode.conditionTrue_1.val = true;
}
}
{
gdjs.VictoryCode.condition3IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.VictoryCode.condition3IsTrue_1.val ) {
    gdjs.VictoryCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 69);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


gdjs.VictoryCode.eventsList2(runtimeScene);
}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
gdjs.VictoryCode.GDStock1Objects1.createFrom(runtimeScene.getObjects("Stock1"));
gdjs.VictoryCode.GDStock2Objects1.createFrom(runtimeScene.getObjects("Stock2"));
{for(var i = 0, len = gdjs.VictoryCode.GDStock1Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock1Objects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin")));
}
}{for(var i = 0, len = gdjs.VictoryCode.GDStock2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDStock2Objects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("skin")));
}
}}

}


};

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDPlayerObjects1.length = 0;
gdjs.VictoryCode.GDPlayerObjects2.length = 0;
gdjs.VictoryCode.GDPlayerObjects3.length = 0;
gdjs.VictoryCode.GDPlayerObjects4.length = 0;
gdjs.VictoryCode.GDHitbox1Objects1.length = 0;
gdjs.VictoryCode.GDHitbox1Objects2.length = 0;
gdjs.VictoryCode.GDHitbox1Objects3.length = 0;
gdjs.VictoryCode.GDHitbox1Objects4.length = 0;
gdjs.VictoryCode.GDHitbox2Objects1.length = 0;
gdjs.VictoryCode.GDHitbox2Objects2.length = 0;
gdjs.VictoryCode.GDHitbox2Objects3.length = 0;
gdjs.VictoryCode.GDHitbox2Objects4.length = 0;
gdjs.VictoryCode.GDDeathBarrierObjects1.length = 0;
gdjs.VictoryCode.GDDeathBarrierObjects2.length = 0;
gdjs.VictoryCode.GDDeathBarrierObjects3.length = 0;
gdjs.VictoryCode.GDDeathBarrierObjects4.length = 0;
gdjs.VictoryCode.GDPlayer2DamageObjects1.length = 0;
gdjs.VictoryCode.GDPlayer2DamageObjects2.length = 0;
gdjs.VictoryCode.GDPlayer2DamageObjects3.length = 0;
gdjs.VictoryCode.GDPlayer2DamageObjects4.length = 0;
gdjs.VictoryCode.GDPlayer1DamageObjects1.length = 0;
gdjs.VictoryCode.GDPlayer1DamageObjects2.length = 0;
gdjs.VictoryCode.GDPlayer1DamageObjects3.length = 0;
gdjs.VictoryCode.GDPlayer1DamageObjects4.length = 0;
gdjs.VictoryCode.GDPlayer2NameObjects1.length = 0;
gdjs.VictoryCode.GDPlayer2NameObjects2.length = 0;
gdjs.VictoryCode.GDPlayer2NameObjects3.length = 0;
gdjs.VictoryCode.GDPlayer2NameObjects4.length = 0;
gdjs.VictoryCode.GDPlayer1NameObjects1.length = 0;
gdjs.VictoryCode.GDPlayer1NameObjects2.length = 0;
gdjs.VictoryCode.GDPlayer1NameObjects3.length = 0;
gdjs.VictoryCode.GDPlayer1NameObjects4.length = 0;
gdjs.VictoryCode.GDFireball2Objects1.length = 0;
gdjs.VictoryCode.GDFireball2Objects2.length = 0;
gdjs.VictoryCode.GDFireball2Objects3.length = 0;
gdjs.VictoryCode.GDFireball2Objects4.length = 0;
gdjs.VictoryCode.GDFireball1Objects1.length = 0;
gdjs.VictoryCode.GDFireball1Objects2.length = 0;
gdjs.VictoryCode.GDFireball1Objects3.length = 0;
gdjs.VictoryCode.GDFireball1Objects4.length = 0;
gdjs.VictoryCode.GDGameTextObjects1.length = 0;
gdjs.VictoryCode.GDGameTextObjects2.length = 0;
gdjs.VictoryCode.GDGameTextObjects3.length = 0;
gdjs.VictoryCode.GDGameTextObjects4.length = 0;
gdjs.VictoryCode.GDStock2Objects1.length = 0;
gdjs.VictoryCode.GDStock2Objects2.length = 0;
gdjs.VictoryCode.GDStock2Objects3.length = 0;
gdjs.VictoryCode.GDStock2Objects4.length = 0;
gdjs.VictoryCode.GDStock1Objects1.length = 0;
gdjs.VictoryCode.GDStock1Objects2.length = 0;
gdjs.VictoryCode.GDStock1Objects3.length = 0;
gdjs.VictoryCode.GDStock1Objects4.length = 0;
gdjs.VictoryCode.GDVictoryGridObjects1.length = 0;
gdjs.VictoryCode.GDVictoryGridObjects2.length = 0;
gdjs.VictoryCode.GDVictoryGridObjects3.length = 0;
gdjs.VictoryCode.GDVictoryGridObjects4.length = 0;
gdjs.VictoryCode.GDwinnerObjects1.length = 0;
gdjs.VictoryCode.GDwinnerObjects2.length = 0;
gdjs.VictoryCode.GDwinnerObjects3.length = 0;
gdjs.VictoryCode.GDwinnerObjects4.length = 0;

gdjs.VictoryCode.eventsList3(runtimeScene);
return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
