gdjs.VictoryCode = {};
gdjs.VictoryCode.GDPlayerObjects1= [];
gdjs.VictoryCode.GDPlayerObjects2= [];
gdjs.VictoryCode.GDHitbox1Objects1= [];
gdjs.VictoryCode.GDHitbox1Objects2= [];
gdjs.VictoryCode.GDHitbox2Objects1= [];
gdjs.VictoryCode.GDHitbox2Objects2= [];
gdjs.VictoryCode.GDDeathBarrierObjects1= [];
gdjs.VictoryCode.GDDeathBarrierObjects2= [];
gdjs.VictoryCode.GDPlayer2DamageObjects1= [];
gdjs.VictoryCode.GDPlayer2DamageObjects2= [];
gdjs.VictoryCode.GDPlayer1DamageObjects1= [];
gdjs.VictoryCode.GDPlayer1DamageObjects2= [];
gdjs.VictoryCode.GDPlayer2NameObjects1= [];
gdjs.VictoryCode.GDPlayer2NameObjects2= [];
gdjs.VictoryCode.GDPlayer1NameObjects1= [];
gdjs.VictoryCode.GDPlayer1NameObjects2= [];
gdjs.VictoryCode.GDFireball2Objects1= [];
gdjs.VictoryCode.GDFireball2Objects2= [];
gdjs.VictoryCode.GDFireball1Objects1= [];
gdjs.VictoryCode.GDFireball1Objects2= [];
gdjs.VictoryCode.GDGameTextObjects1= [];
gdjs.VictoryCode.GDGameTextObjects2= [];
gdjs.VictoryCode.GDVictoryGridObjects1= [];
gdjs.VictoryCode.GDVictoryGridObjects2= [];
gdjs.VictoryCode.GDwinnerObjects1= [];
gdjs.VictoryCode.GDwinnerObjects2= [];

gdjs.VictoryCode.conditionTrue_0 = {val:false};
gdjs.VictoryCode.condition0IsTrue_0 = {val:false};
gdjs.VictoryCode.condition1IsTrue_0 = {val:false};
gdjs.VictoryCode.condition2IsTrue_0 = {val:false};
gdjs.VictoryCode.condition3IsTrue_0 = {val:false};
gdjs.VictoryCode.conditionTrue_1 = {val:false};
gdjs.VictoryCode.condition0IsTrue_1 = {val:false};
gdjs.VictoryCode.condition1IsTrue_1 = {val:false};
gdjs.VictoryCode.condition2IsTrue_1 = {val:false};
gdjs.VictoryCode.condition3IsTrue_1 = {val:false};


gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

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
gdjs.VictoryCode.GDwinnerObjects1.createFrom(runtimeScene.getObjects("winner"));
{for(var i = 0, len = gdjs.VictoryCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDwinnerObjects1[i].setString("PLAYER " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Winner")) + " WINS!");
}
}{runtimeScene.getGame().getVariables().get("WinnerName").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")));
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
gdjs.VictoryCode.GDwinnerObjects1.createFrom(runtimeScene.getObjects("winner"));
{for(var i = 0, len = gdjs.VictoryCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDwinnerObjects1[i].setString("PLAYER " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Winner")) + " WINS!");
}
}{runtimeScene.getGame().getVariables().get("WinnerName").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")));
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
gdjs.VictoryCode.GDwinnerObjects1.createFrom(runtimeScene.getObjects("winner"));
{for(var i = 0, len = gdjs.VictoryCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDwinnerObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + " WINS!");
}
}{runtimeScene.getGame().getVariables().get("WinnerName").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")));
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
gdjs.VictoryCode.GDwinnerObjects1.createFrom(runtimeScene.getObjects("winner"));
{for(var i = 0, len = gdjs.VictoryCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDwinnerObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + " WINS!");
}
}{runtimeScene.getGame().getVariables().get("WinnerName").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")));
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
gdjs.VictoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8744916);
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
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) == "Mario";
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 2;
}if ( gdjs.VictoryCode.condition1IsTrue_0.val ) {
{
{gdjs.VictoryCode.conditionTrue_1 = gdjs.VictoryCode.condition2IsTrue_0;
gdjs.VictoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8746132);
}
}}
}
if (gdjs.VictoryCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MarioWins.mp3", 69, false, 100, 1);
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 69);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDPlayerObjects1.length = 0;
gdjs.VictoryCode.GDPlayerObjects2.length = 0;
gdjs.VictoryCode.GDHitbox1Objects1.length = 0;
gdjs.VictoryCode.GDHitbox1Objects2.length = 0;
gdjs.VictoryCode.GDHitbox2Objects1.length = 0;
gdjs.VictoryCode.GDHitbox2Objects2.length = 0;
gdjs.VictoryCode.GDDeathBarrierObjects1.length = 0;
gdjs.VictoryCode.GDDeathBarrierObjects2.length = 0;
gdjs.VictoryCode.GDPlayer2DamageObjects1.length = 0;
gdjs.VictoryCode.GDPlayer2DamageObjects2.length = 0;
gdjs.VictoryCode.GDPlayer1DamageObjects1.length = 0;
gdjs.VictoryCode.GDPlayer1DamageObjects2.length = 0;
gdjs.VictoryCode.GDPlayer2NameObjects1.length = 0;
gdjs.VictoryCode.GDPlayer2NameObjects2.length = 0;
gdjs.VictoryCode.GDPlayer1NameObjects1.length = 0;
gdjs.VictoryCode.GDPlayer1NameObjects2.length = 0;
gdjs.VictoryCode.GDFireball2Objects1.length = 0;
gdjs.VictoryCode.GDFireball2Objects2.length = 0;
gdjs.VictoryCode.GDFireball1Objects1.length = 0;
gdjs.VictoryCode.GDFireball1Objects2.length = 0;
gdjs.VictoryCode.GDGameTextObjects1.length = 0;
gdjs.VictoryCode.GDGameTextObjects2.length = 0;
gdjs.VictoryCode.GDVictoryGridObjects1.length = 0;
gdjs.VictoryCode.GDVictoryGridObjects2.length = 0;
gdjs.VictoryCode.GDwinnerObjects1.length = 0;
gdjs.VictoryCode.GDwinnerObjects2.length = 0;

gdjs.VictoryCode.eventsList0(runtimeScene);
return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
