gdjs.CharacterSelectCode = {};
gdjs.CharacterSelectCode.GDPlayerObjects1= [];
gdjs.CharacterSelectCode.GDPlayerObjects2= [];
gdjs.CharacterSelectCode.GDPlayerObjects3= [];
gdjs.CharacterSelectCode.GDHitbox1Objects1= [];
gdjs.CharacterSelectCode.GDHitbox1Objects2= [];
gdjs.CharacterSelectCode.GDHitbox1Objects3= [];
gdjs.CharacterSelectCode.GDHitbox2Objects1= [];
gdjs.CharacterSelectCode.GDHitbox2Objects2= [];
gdjs.CharacterSelectCode.GDHitbox2Objects3= [];
gdjs.CharacterSelectCode.GDDeathBarrierObjects1= [];
gdjs.CharacterSelectCode.GDDeathBarrierObjects2= [];
gdjs.CharacterSelectCode.GDDeathBarrierObjects3= [];
gdjs.CharacterSelectCode.GDPlayer2DamageObjects1= [];
gdjs.CharacterSelectCode.GDPlayer2DamageObjects2= [];
gdjs.CharacterSelectCode.GDPlayer2DamageObjects3= [];
gdjs.CharacterSelectCode.GDPlayer1DamageObjects1= [];
gdjs.CharacterSelectCode.GDPlayer1DamageObjects2= [];
gdjs.CharacterSelectCode.GDPlayer1DamageObjects3= [];
gdjs.CharacterSelectCode.GDPlayer2NameObjects1= [];
gdjs.CharacterSelectCode.GDPlayer2NameObjects2= [];
gdjs.CharacterSelectCode.GDPlayer2NameObjects3= [];
gdjs.CharacterSelectCode.GDPlayer1NameObjects1= [];
gdjs.CharacterSelectCode.GDPlayer1NameObjects2= [];
gdjs.CharacterSelectCode.GDPlayer1NameObjects3= [];
gdjs.CharacterSelectCode.GDFireball2Objects1= [];
gdjs.CharacterSelectCode.GDFireball2Objects2= [];
gdjs.CharacterSelectCode.GDFireball2Objects3= [];
gdjs.CharacterSelectCode.GDFireball1Objects1= [];
gdjs.CharacterSelectCode.GDFireball1Objects2= [];
gdjs.CharacterSelectCode.GDFireball1Objects3= [];
gdjs.CharacterSelectCode.GDGameTextObjects1= [];
gdjs.CharacterSelectCode.GDGameTextObjects2= [];
gdjs.CharacterSelectCode.GDGameTextObjects3= [];
gdjs.CharacterSelectCode.GDStock2Objects1= [];
gdjs.CharacterSelectCode.GDStock2Objects2= [];
gdjs.CharacterSelectCode.GDStock2Objects3= [];
gdjs.CharacterSelectCode.GDStock1Objects1= [];
gdjs.CharacterSelectCode.GDStock1Objects2= [];
gdjs.CharacterSelectCode.GDStock1Objects3= [];
gdjs.CharacterSelectCode.GDPurpleGridObjects1= [];
gdjs.CharacterSelectCode.GDPurpleGridObjects2= [];
gdjs.CharacterSelectCode.GDPurpleGridObjects3= [];
gdjs.CharacterSelectCode.GDBackButtonObjects1= [];
gdjs.CharacterSelectCode.GDBackButtonObjects2= [];
gdjs.CharacterSelectCode.GDBackButtonObjects3= [];
gdjs.CharacterSelectCode.GDP2MarkerObjects1= [];
gdjs.CharacterSelectCode.GDP2MarkerObjects2= [];
gdjs.CharacterSelectCode.GDP2MarkerObjects3= [];
gdjs.CharacterSelectCode.GDP1MarkerObjects1= [];
gdjs.CharacterSelectCode.GDP1MarkerObjects2= [];
gdjs.CharacterSelectCode.GDP1MarkerObjects3= [];
gdjs.CharacterSelectCode.GDbigtimerushObjects1= [];
gdjs.CharacterSelectCode.GDbigtimerushObjects2= [];
gdjs.CharacterSelectCode.GDbigtimerushObjects3= [];
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1= [];
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2= [];
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects3= [];

gdjs.CharacterSelectCode.conditionTrue_0 = {val:false};
gdjs.CharacterSelectCode.condition0IsTrue_0 = {val:false};
gdjs.CharacterSelectCode.condition1IsTrue_0 = {val:false};
gdjs.CharacterSelectCode.condition2IsTrue_0 = {val:false};
gdjs.CharacterSelectCode.condition3IsTrue_0 = {val:false};
gdjs.CharacterSelectCode.conditionTrue_1 = {val:false};
gdjs.CharacterSelectCode.condition0IsTrue_1 = {val:false};
gdjs.CharacterSelectCode.condition1IsTrue_1 = {val:false};
gdjs.CharacterSelectCode.condition2IsTrue_1 = {val:false};
gdjs.CharacterSelectCode.condition3IsTrue_1 = {val:false};


gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects1Objects = Hashtable.newFrom({"P1Marker": gdjs.CharacterSelectCode.GDP1MarkerObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects = Hashtable.newFrom({"P2Marker": gdjs.CharacterSelectCode.GDP2MarkerObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.CharacterSelectCode.GDBackButtonObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDStock1Objects1Objects = Hashtable.newFrom({"Stock1": gdjs.CharacterSelectCode.GDStock1Objects1});gdjs.CharacterSelectCode.eventsList0 = function(runtimeScene) {

{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin")) >= 0;
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin").add(1);
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin")) > 2;
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin").setNumber(1);
}}

}


};gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDStock2Objects1Objects = Hashtable.newFrom({"Stock2": gdjs.CharacterSelectCode.GDStock2Objects1});gdjs.CharacterSelectCode.eventsList1 = function(runtimeScene) {

{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("skin")) >= 0;
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("skin").add(1);
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("skin")) > 2;
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("skin").setNumber(1);
}}

}


};gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects1Objects = Hashtable.newFrom({"P1Marker": gdjs.CharacterSelectCode.GDP1MarkerObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects = Hashtable.newFrom({"P2Marker": gdjs.CharacterSelectCode.GDP2MarkerObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDbigtimerushObjects1Objects = Hashtable.newFrom({"bigtimerush": gdjs.CharacterSelectCode.GDbigtimerushObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects2Objects = Hashtable.newFrom({"P1Marker": gdjs.CharacterSelectCode.GDP1MarkerObjects2});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects2Objects = Hashtable.newFrom({"PleaseWorkPortraits": gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects = Hashtable.newFrom({"P2Marker": gdjs.CharacterSelectCode.GDP2MarkerObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects1Objects = Hashtable.newFrom({"PleaseWorkPortraits": gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1});gdjs.CharacterSelectCode.eventsList2 = function(runtimeScene) {

{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("mariocharacter")) == 0;
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.createFrom(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1);

{for(var i = 0, len = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].setAnimationName("pMarioLocked");
}
}}

}


{

gdjs.CharacterSelectCode.GDP1MarkerObjects2.createFrom(runtimeScene.getObjects("P1Marker"));
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.createFrom(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1);


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition2IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("mariocharacter")) == 1;
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects2Objects, gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects2Objects, false, runtimeScene, false);
}if ( gdjs.CharacterSelectCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].getVariables().get("who")) == "pMario" ) {
        gdjs.CharacterSelectCode.condition2IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length = k;}}
}
if (gdjs.CharacterSelectCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name").setString("Mario");
}}

}


{

gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));
/* Reuse gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1 */

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition2IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("mariocharacter")) == 1;
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects, gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects1Objects, false, runtimeScene, false);
}if ( gdjs.CharacterSelectCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariables().get("who")) == "pMario" ) {
        gdjs.CharacterSelectCode.condition2IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length = k;}}
}
if (gdjs.CharacterSelectCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name").setString("Mario");
}}

}


};gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects2Objects = Hashtable.newFrom({"P1Marker": gdjs.CharacterSelectCode.GDP1MarkerObjects2});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects2Objects = Hashtable.newFrom({"PleaseWorkPortraits": gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects = Hashtable.newFrom({"P2Marker": gdjs.CharacterSelectCode.GDP2MarkerObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects1Objects = Hashtable.newFrom({"PleaseWorkPortraits": gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1});gdjs.CharacterSelectCode.eventsList3 = function(runtimeScene) {

{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("creffycharacter")) == 0;
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.createFrom(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1);

{for(var i = 0, len = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].setAnimationName("pCreffyLocked");
}
}}

}


{

gdjs.CharacterSelectCode.GDP1MarkerObjects2.createFrom(runtimeScene.getObjects("P1Marker"));
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.createFrom(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1);


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition2IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("creffycharacter")) == 1;
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects2Objects, gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects2Objects, false, runtimeScene, false);
}if ( gdjs.CharacterSelectCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].getVariables().get("who")) == "pCreffy" ) {
        gdjs.CharacterSelectCode.condition2IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length = k;}}
}
if (gdjs.CharacterSelectCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name").setString("Creffy");
}}

}


{

gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));
/* Reuse gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1 */

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition2IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("creffycharacter")) == 1;
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects, gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects1Objects, false, runtimeScene, false);
}if ( gdjs.CharacterSelectCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariables().get("who")) == "pCreffy" ) {
        gdjs.CharacterSelectCode.condition2IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length = k;}}
}
if (gdjs.CharacterSelectCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name").setString("Creffy");
}}

}


};gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects2Objects = Hashtable.newFrom({"P1Marker": gdjs.CharacterSelectCode.GDP1MarkerObjects2});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects2Objects = Hashtable.newFrom({"PleaseWorkPortraits": gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects = Hashtable.newFrom({"P2Marker": gdjs.CharacterSelectCode.GDP2MarkerObjects1});gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects1Objects = Hashtable.newFrom({"PleaseWorkPortraits": gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1});gdjs.CharacterSelectCode.eventsList4 = function(runtimeScene) {

{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobacharacter")) == 0;
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.createFrom(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1);

{for(var i = 0, len = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].setAnimationName("pGobaLocked");
}
}}

}


{

gdjs.CharacterSelectCode.GDP1MarkerObjects2.createFrom(runtimeScene.getObjects("P1Marker"));
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.createFrom(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1);


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition2IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobacharacter")) == 1;
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects2Objects, gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects2Objects, false, runtimeScene, false);
}if ( gdjs.CharacterSelectCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i].getVariables().get("who")) == "pGoba" ) {
        gdjs.CharacterSelectCode.condition2IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length = k;}}
}
if (gdjs.CharacterSelectCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name").setString("Goba");
}}

}


{

gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));
/* Reuse gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1 */

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition2IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobacharacter")) == 1;
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects, gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDPleaseWorkPortraitsObjects1Objects, false, runtimeScene, false);
}if ( gdjs.CharacterSelectCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariables().get("who")) == "pGoba" ) {
        gdjs.CharacterSelectCode.condition2IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length = k;}}
}
if (gdjs.CharacterSelectCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name").setString("Goba");
}}

}


};gdjs.CharacterSelectCode.eventsList5 = function(runtimeScene) {

{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
gdjs.CharacterSelectCode.GDPlayer1NameObjects1.createFrom(runtimeScene.getObjects("Player1Name"));
gdjs.CharacterSelectCode.GDPlayer2NameObjects1.createFrom(runtimeScene.getObjects("Player2Name"));
gdjs.CharacterSelectCode.GDPurpleGridObjects1.createFrom(runtimeScene.getObjects("PurpleGrid"));
gdjs.CharacterSelectCode.GDStock1Objects1.createFrom(runtimeScene.getObjects("Stock1"));
gdjs.CharacterSelectCode.GDStock2Objects1.createFrom(runtimeScene.getObjects("Stock2"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDPurpleGridObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPurpleGridObjects1[i].setXOffset(gdjs.CharacterSelectCode.GDPurpleGridObjects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.CharacterSelectCode.GDStock1Objects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDStock1Objects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("skin")));
}
}{for(var i = 0, len = gdjs.CharacterSelectCode.GDStock2Objects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDStock2Objects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("skin")));
}
}{for(var i = 0, len = gdjs.CharacterSelectCode.GDPlayer1NameObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPlayer1NameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")));
}
}{for(var i = 0, len = gdjs.CharacterSelectCode.GDPlayer2NameObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPlayer2NameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")));
}
}}

}


{

gdjs.CharacterSelectCode.GDP1MarkerObjects1.createFrom(runtimeScene.getObjects("P1Marker"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CharacterSelectCode.GDP1MarkerObjects1 */
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP1MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 10);
}
}{for(var i = 0, len = gdjs.CharacterSelectCode.GDP1MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 10);
}
}}

}


{

gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CharacterSelectCode.GDP2MarkerObjects1 */
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP2MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 10);
}
}{for(var i = 0, len = gdjs.CharacterSelectCode.GDP2MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 10);
}
}}

}


{

gdjs.CharacterSelectCode.GDBackButtonObjects1.createFrom(runtimeScene.getObjects("BackButton"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{

gdjs.CharacterSelectCode.GDStock1Objects1.createFrom(runtimeScene.getObjects("Stock1"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition2IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDStock1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.CharacterSelectCode.condition1IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition2IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10637484);
}
}}
}
if (gdjs.CharacterSelectCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.CharacterSelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.CharacterSelectCode.GDStock2Objects1.createFrom(runtimeScene.getObjects("Stock2"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition2IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDStock2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.CharacterSelectCode.condition1IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition2IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10639796);
}
}}
}
if (gdjs.CharacterSelectCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.CharacterSelectCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.CharacterSelectCode.GDP1MarkerObjects1.createFrom(runtimeScene.getObjects("P1Marker"));
gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP1MarkerObjects1Objects, gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDP2MarkerObjects1Objects, false, runtimeScene, false);
}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CharacterSelectCode.GDP1MarkerObjects1 */
/* Reuse gdjs.CharacterSelectCode.GDP2MarkerObjects1 */
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP1MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].setX(gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].getX() - (30));
}
}{for(var i = 0, len = gdjs.CharacterSelectCode.GDP2MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].setX(gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].getX() + (30));
}
}}

}


{

gdjs.CharacterSelectCode.GDbigtimerushObjects1.createFrom(runtimeScene.getObjects("bigtimerush"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectCode.mapOfGDgdjs_46CharacterSelectCode_46GDbigtimerushObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
gdjs.CharacterSelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StageSelect", false);
}}

}


{

gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.createFrom(runtimeScene.getObjects("PleaseWorkPortraits"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariables().get("who")) == "pMario" ) {
        gdjs.CharacterSelectCode.condition0IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length = k;}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1 */
{for(var i = 0, len = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].setAnimationName("pMario");
}
}
{ //Subevents
gdjs.CharacterSelectCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.createFrom(runtimeScene.getObjects("PleaseWorkPortraits"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariables().get("who")) == "pCreffy" ) {
        gdjs.CharacterSelectCode.condition0IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length = k;}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1 */
{for(var i = 0, len = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].setAnimationName("pCreffy");
}
}
{ //Subevents
gdjs.CharacterSelectCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.createFrom(runtimeScene.getObjects("PleaseWorkPortraits"));

gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariableString(gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].getVariables().get("who")) == "pGoba" ) {
        gdjs.CharacterSelectCode.condition0IsTrue_0.val = true;
        gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[k] = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length = k;}if (gdjs.CharacterSelectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1 */
{for(var i = 0, len = gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1[i].setAnimationName("pGoba");
}
}
{ //Subevents
gdjs.CharacterSelectCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition1IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0.05);
}
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
gdjs.CharacterSelectCode.GDP1MarkerObjects1.createFrom(runtimeScene.getObjects("P1Marker"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP1MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].setY(gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].getY() + (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * -(7)));
}
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition1IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0.05);
}
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
gdjs.CharacterSelectCode.GDP1MarkerObjects1.createFrom(runtimeScene.getObjects("P1Marker"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP1MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].setX(gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].getX() + (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * -(7)));
}
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition1IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0.05);
}
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
gdjs.CharacterSelectCode.GDP1MarkerObjects1.createFrom(runtimeScene.getObjects("P1Marker"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP1MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].setX(gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].getX() + (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 7));
}
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition1IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0.05);
}
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
gdjs.CharacterSelectCode.GDP1MarkerObjects1.createFrom(runtimeScene.getObjects("P1Marker"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP1MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].setY(gdjs.CharacterSelectCode.GDP1MarkerObjects1[i].getY() + (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 7));
}
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "LEFT", "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition1IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 2, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0.05);
}
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP2MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].setY(gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].getY() + (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * -(7)));
}
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "LEFT", "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition1IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 2, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0.05);
}
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP2MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].setX(gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].getX() + (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * -(7)));
}
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "LEFT", "RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition1IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 2, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0.05);
}
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP2MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].setX(gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].getX() + (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 7));
}
}}

}


{


gdjs.CharacterSelectCode.condition0IsTrue_0.val = false;
gdjs.CharacterSelectCode.condition1IsTrue_0.val = false;
{
gdjs.CharacterSelectCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "LEFT", "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.CharacterSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.CharacterSelectCode.conditionTrue_1 = gdjs.CharacterSelectCode.condition1IsTrue_0;
gdjs.CharacterSelectCode.conditionTrue_1.val = (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 2, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0.05);
}
}}
if (gdjs.CharacterSelectCode.condition1IsTrue_0.val) {
gdjs.CharacterSelectCode.GDP2MarkerObjects1.createFrom(runtimeScene.getObjects("P2Marker"));
{for(var i = 0, len = gdjs.CharacterSelectCode.GDP2MarkerObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].setY(gdjs.CharacterSelectCode.GDP2MarkerObjects1[i].getY() + (gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 7));
}
}}

}


};

gdjs.CharacterSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CharacterSelectCode.GDPlayerObjects1.length = 0;
gdjs.CharacterSelectCode.GDPlayerObjects2.length = 0;
gdjs.CharacterSelectCode.GDPlayerObjects3.length = 0;
gdjs.CharacterSelectCode.GDHitbox1Objects1.length = 0;
gdjs.CharacterSelectCode.GDHitbox1Objects2.length = 0;
gdjs.CharacterSelectCode.GDHitbox1Objects3.length = 0;
gdjs.CharacterSelectCode.GDHitbox2Objects1.length = 0;
gdjs.CharacterSelectCode.GDHitbox2Objects2.length = 0;
gdjs.CharacterSelectCode.GDHitbox2Objects3.length = 0;
gdjs.CharacterSelectCode.GDDeathBarrierObjects1.length = 0;
gdjs.CharacterSelectCode.GDDeathBarrierObjects2.length = 0;
gdjs.CharacterSelectCode.GDDeathBarrierObjects3.length = 0;
gdjs.CharacterSelectCode.GDPlayer2DamageObjects1.length = 0;
gdjs.CharacterSelectCode.GDPlayer2DamageObjects2.length = 0;
gdjs.CharacterSelectCode.GDPlayer2DamageObjects3.length = 0;
gdjs.CharacterSelectCode.GDPlayer1DamageObjects1.length = 0;
gdjs.CharacterSelectCode.GDPlayer1DamageObjects2.length = 0;
gdjs.CharacterSelectCode.GDPlayer1DamageObjects3.length = 0;
gdjs.CharacterSelectCode.GDPlayer2NameObjects1.length = 0;
gdjs.CharacterSelectCode.GDPlayer2NameObjects2.length = 0;
gdjs.CharacterSelectCode.GDPlayer2NameObjects3.length = 0;
gdjs.CharacterSelectCode.GDPlayer1NameObjects1.length = 0;
gdjs.CharacterSelectCode.GDPlayer1NameObjects2.length = 0;
gdjs.CharacterSelectCode.GDPlayer1NameObjects3.length = 0;
gdjs.CharacterSelectCode.GDFireball2Objects1.length = 0;
gdjs.CharacterSelectCode.GDFireball2Objects2.length = 0;
gdjs.CharacterSelectCode.GDFireball2Objects3.length = 0;
gdjs.CharacterSelectCode.GDFireball1Objects1.length = 0;
gdjs.CharacterSelectCode.GDFireball1Objects2.length = 0;
gdjs.CharacterSelectCode.GDFireball1Objects3.length = 0;
gdjs.CharacterSelectCode.GDGameTextObjects1.length = 0;
gdjs.CharacterSelectCode.GDGameTextObjects2.length = 0;
gdjs.CharacterSelectCode.GDGameTextObjects3.length = 0;
gdjs.CharacterSelectCode.GDStock2Objects1.length = 0;
gdjs.CharacterSelectCode.GDStock2Objects2.length = 0;
gdjs.CharacterSelectCode.GDStock2Objects3.length = 0;
gdjs.CharacterSelectCode.GDStock1Objects1.length = 0;
gdjs.CharacterSelectCode.GDStock1Objects2.length = 0;
gdjs.CharacterSelectCode.GDStock1Objects3.length = 0;
gdjs.CharacterSelectCode.GDPurpleGridObjects1.length = 0;
gdjs.CharacterSelectCode.GDPurpleGridObjects2.length = 0;
gdjs.CharacterSelectCode.GDPurpleGridObjects3.length = 0;
gdjs.CharacterSelectCode.GDBackButtonObjects1.length = 0;
gdjs.CharacterSelectCode.GDBackButtonObjects2.length = 0;
gdjs.CharacterSelectCode.GDBackButtonObjects3.length = 0;
gdjs.CharacterSelectCode.GDP2MarkerObjects1.length = 0;
gdjs.CharacterSelectCode.GDP2MarkerObjects2.length = 0;
gdjs.CharacterSelectCode.GDP2MarkerObjects3.length = 0;
gdjs.CharacterSelectCode.GDP1MarkerObjects1.length = 0;
gdjs.CharacterSelectCode.GDP1MarkerObjects2.length = 0;
gdjs.CharacterSelectCode.GDP1MarkerObjects3.length = 0;
gdjs.CharacterSelectCode.GDbigtimerushObjects1.length = 0;
gdjs.CharacterSelectCode.GDbigtimerushObjects2.length = 0;
gdjs.CharacterSelectCode.GDbigtimerushObjects3.length = 0;
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects1.length = 0;
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects2.length = 0;
gdjs.CharacterSelectCode.GDPleaseWorkPortraitsObjects3.length = 0;

gdjs.CharacterSelectCode.eventsList5(runtimeScene);
return;

}

gdjs['CharacterSelectCode'] = gdjs.CharacterSelectCode;
