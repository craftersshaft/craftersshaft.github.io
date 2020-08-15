gdjs.StageSelectCode = {};
gdjs.StageSelectCode.GDPlayerObjects1= [];
gdjs.StageSelectCode.GDPlayerObjects2= [];
gdjs.StageSelectCode.GDPlayerObjects3= [];
gdjs.StageSelectCode.GDHitbox1Objects1= [];
gdjs.StageSelectCode.GDHitbox1Objects2= [];
gdjs.StageSelectCode.GDHitbox1Objects3= [];
gdjs.StageSelectCode.GDHitbox2Objects1= [];
gdjs.StageSelectCode.GDHitbox2Objects2= [];
gdjs.StageSelectCode.GDHitbox2Objects3= [];
gdjs.StageSelectCode.GDDeathBarrierObjects1= [];
gdjs.StageSelectCode.GDDeathBarrierObjects2= [];
gdjs.StageSelectCode.GDDeathBarrierObjects3= [];
gdjs.StageSelectCode.GDPlayer2DamageObjects1= [];
gdjs.StageSelectCode.GDPlayer2DamageObjects2= [];
gdjs.StageSelectCode.GDPlayer2DamageObjects3= [];
gdjs.StageSelectCode.GDPlayer1DamageObjects1= [];
gdjs.StageSelectCode.GDPlayer1DamageObjects2= [];
gdjs.StageSelectCode.GDPlayer1DamageObjects3= [];
gdjs.StageSelectCode.GDPlayer2NameObjects1= [];
gdjs.StageSelectCode.GDPlayer2NameObjects2= [];
gdjs.StageSelectCode.GDPlayer2NameObjects3= [];
gdjs.StageSelectCode.GDPlayer1NameObjects1= [];
gdjs.StageSelectCode.GDPlayer1NameObjects2= [];
gdjs.StageSelectCode.GDPlayer1NameObjects3= [];
gdjs.StageSelectCode.GDFireball2Objects1= [];
gdjs.StageSelectCode.GDFireball2Objects2= [];
gdjs.StageSelectCode.GDFireball2Objects3= [];
gdjs.StageSelectCode.GDFireball1Objects1= [];
gdjs.StageSelectCode.GDFireball1Objects2= [];
gdjs.StageSelectCode.GDFireball1Objects3= [];
gdjs.StageSelectCode.GDGameTextObjects1= [];
gdjs.StageSelectCode.GDGameTextObjects2= [];
gdjs.StageSelectCode.GDGameTextObjects3= [];
gdjs.StageSelectCode.GDStock2Objects1= [];
gdjs.StageSelectCode.GDStock2Objects2= [];
gdjs.StageSelectCode.GDStock2Objects3= [];
gdjs.StageSelectCode.GDStock1Objects1= [];
gdjs.StageSelectCode.GDStock1Objects2= [];
gdjs.StageSelectCode.GDStock1Objects3= [];
gdjs.StageSelectCode.GDTileBGObjects1= [];
gdjs.StageSelectCode.GDTileBGObjects2= [];
gdjs.StageSelectCode.GDTileBGObjects3= [];
gdjs.StageSelectCode.GDStageSelectIconObjects1= [];
gdjs.StageSelectCode.GDStageSelectIconObjects2= [];
gdjs.StageSelectCode.GDStageSelectIconObjects3= [];
gdjs.StageSelectCode.GDBackButtonObjects1= [];
gdjs.StageSelectCode.GDBackButtonObjects2= [];
gdjs.StageSelectCode.GDBackButtonObjects3= [];
gdjs.StageSelectCode.GDStagePreviewObjects1= [];
gdjs.StageSelectCode.GDStagePreviewObjects2= [];
gdjs.StageSelectCode.GDStagePreviewObjects3= [];
gdjs.StageSelectCode.GDtextupObjects1= [];
gdjs.StageSelectCode.GDtextupObjects2= [];
gdjs.StageSelectCode.GDtextupObjects3= [];

gdjs.StageSelectCode.conditionTrue_0 = {val:false};
gdjs.StageSelectCode.condition0IsTrue_0 = {val:false};
gdjs.StageSelectCode.condition1IsTrue_0 = {val:false};
gdjs.StageSelectCode.condition2IsTrue_0 = {val:false};
gdjs.StageSelectCode.condition3IsTrue_0 = {val:false};
gdjs.StageSelectCode.conditionTrue_1 = {val:false};
gdjs.StageSelectCode.condition0IsTrue_1 = {val:false};
gdjs.StageSelectCode.condition1IsTrue_1 = {val:false};
gdjs.StageSelectCode.condition2IsTrue_1 = {val:false};
gdjs.StageSelectCode.condition3IsTrue_1 = {val:false};


gdjs.StageSelectCode.mapOfGDgdjs_46StageSelectCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.StageSelectCode.GDBackButtonObjects1});gdjs.StageSelectCode.mapOfGDgdjs_46StageSelectCode_46GDStageSelectIconObjects2Objects = Hashtable.newFrom({"StageSelectIcon": gdjs.StageSelectCode.GDStageSelectIconObjects2});gdjs.StageSelectCode.eventsList0 = function(runtimeScene) {

{


gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
{gdjs.StageSelectCode.conditionTrue_1 = gdjs.StageSelectCode.condition0IsTrue_0;
gdjs.StageSelectCode.condition0IsTrue_1.val = false;
gdjs.StageSelectCode.condition1IsTrue_1.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_1.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
if( gdjs.StageSelectCode.condition0IsTrue_1.val ) {
    gdjs.StageSelectCode.conditionTrue_1.val = true;
}
}
{
gdjs.StageSelectCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.StageSelectCode.condition1IsTrue_1.val ) {
    gdjs.StageSelectCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage_Betafield", false);
}}

}


};gdjs.StageSelectCode.mapOfGDgdjs_46StageSelectCode_46GDStageSelectIconObjects2Objects = Hashtable.newFrom({"StageSelectIcon": gdjs.StageSelectCode.GDStageSelectIconObjects2});gdjs.StageSelectCode.eventsList1 = function(runtimeScene) {

{


gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
{gdjs.StageSelectCode.conditionTrue_1 = gdjs.StageSelectCode.condition0IsTrue_0;
gdjs.StageSelectCode.condition0IsTrue_1.val = false;
gdjs.StageSelectCode.condition1IsTrue_1.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_1.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
if( gdjs.StageSelectCode.condition0IsTrue_1.val ) {
    gdjs.StageSelectCode.conditionTrue_1.val = true;
}
}
{
gdjs.StageSelectCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.StageSelectCode.condition1IsTrue_1.val ) {
    gdjs.StageSelectCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage_Gobaville", false);
}}

}


};gdjs.StageSelectCode.mapOfGDgdjs_46StageSelectCode_46GDStageSelectIconObjects1Objects = Hashtable.newFrom({"StageSelectIcon": gdjs.StageSelectCode.GDStageSelectIconObjects1});gdjs.StageSelectCode.eventsList2 = function(runtimeScene) {

{

gdjs.StageSelectCode.GDStageSelectIconObjects2.createFrom(runtimeScene.getObjects("StageSelectIcon"));

gdjs.StageSelectCode.condition0IsTrue_0.val = false;
gdjs.StageSelectCode.condition1IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StageSelectCode.mapOfGDgdjs_46StageSelectCode_46GDStageSelectIconObjects2Objects, runtimeScene, true, false);
}if ( gdjs.StageSelectCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StageSelectCode.GDStageSelectIconObjects2.length;i<l;++i) {
    if ( gdjs.StageSelectCode.GDStageSelectIconObjects2[i].getVariableString(gdjs.StageSelectCode.GDStageSelectIconObjects2[i].getVariables().get("stage")) == "Betafield" ) {
        gdjs.StageSelectCode.condition1IsTrue_0.val = true;
        gdjs.StageSelectCode.GDStageSelectIconObjects2[k] = gdjs.StageSelectCode.GDStageSelectIconObjects2[i];
        ++k;
    }
}
gdjs.StageSelectCode.GDStageSelectIconObjects2.length = k;}}
if (gdjs.StageSelectCode.condition1IsTrue_0.val) {
gdjs.StageSelectCode.GDStagePreviewObjects2.createFrom(runtimeScene.getObjects("StagePreview"));
gdjs.StageSelectCode.GDtextupObjects2.createFrom(runtimeScene.getObjects("textup"));
{for(var i = 0, len = gdjs.StageSelectCode.GDStagePreviewObjects2.length ;i < len;++i) {
    gdjs.StageSelectCode.GDStagePreviewObjects2[i].setAnimationName("Betafield");
}
}{for(var i = 0, len = gdjs.StageSelectCode.GDtextupObjects2.length ;i < len;++i) {
    gdjs.StageSelectCode.GDtextupObjects2[i].setString("BETAFIELD");
}
}
{ //Subevents
gdjs.StageSelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.StageSelectCode.GDStageSelectIconObjects2.createFrom(runtimeScene.getObjects("StageSelectIcon"));

gdjs.StageSelectCode.condition0IsTrue_0.val = false;
gdjs.StageSelectCode.condition1IsTrue_0.val = false;
gdjs.StageSelectCode.condition2IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StageSelectCode.mapOfGDgdjs_46StageSelectCode_46GDStageSelectIconObjects2Objects, runtimeScene, true, false);
}if ( gdjs.StageSelectCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StageSelectCode.GDStageSelectIconObjects2.length;i<l;++i) {
    if ( gdjs.StageSelectCode.GDStageSelectIconObjects2[i].getVariableString(gdjs.StageSelectCode.GDStageSelectIconObjects2[i].getVariables().get("stage")) == "Gobaville" ) {
        gdjs.StageSelectCode.condition1IsTrue_0.val = true;
        gdjs.StageSelectCode.GDStageSelectIconObjects2[k] = gdjs.StageSelectCode.GDStageSelectIconObjects2[i];
        ++k;
    }
}
gdjs.StageSelectCode.GDStageSelectIconObjects2.length = k;}if ( gdjs.StageSelectCode.condition1IsTrue_0.val ) {
{
gdjs.StageSelectCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobavillestage")) == 1;
}}
}
if (gdjs.StageSelectCode.condition2IsTrue_0.val) {
gdjs.StageSelectCode.GDStagePreviewObjects2.createFrom(runtimeScene.getObjects("StagePreview"));
gdjs.StageSelectCode.GDtextupObjects2.createFrom(runtimeScene.getObjects("textup"));
{for(var i = 0, len = gdjs.StageSelectCode.GDStagePreviewObjects2.length ;i < len;++i) {
    gdjs.StageSelectCode.GDStagePreviewObjects2[i].setAnimationName("Gobaville");
}
}{for(var i = 0, len = gdjs.StageSelectCode.GDtextupObjects2.length ;i < len;++i) {
    gdjs.StageSelectCode.GDtextupObjects2[i].setString("GOBAVILLE");
}
}
{ //Subevents
gdjs.StageSelectCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.StageSelectCode.GDStageSelectIconObjects1.createFrom(runtimeScene.getObjects("StageSelectIcon"));

gdjs.StageSelectCode.condition0IsTrue_0.val = false;
gdjs.StageSelectCode.condition1IsTrue_0.val = false;
gdjs.StageSelectCode.condition2IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StageSelectCode.mapOfGDgdjs_46StageSelectCode_46GDStageSelectIconObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StageSelectCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StageSelectCode.GDStageSelectIconObjects1.length;i<l;++i) {
    if ( gdjs.StageSelectCode.GDStageSelectIconObjects1[i].getVariableString(gdjs.StageSelectCode.GDStageSelectIconObjects1[i].getVariables().get("stage")) == "Gobaville" ) {
        gdjs.StageSelectCode.condition1IsTrue_0.val = true;
        gdjs.StageSelectCode.GDStageSelectIconObjects1[k] = gdjs.StageSelectCode.GDStageSelectIconObjects1[i];
        ++k;
    }
}
gdjs.StageSelectCode.GDStageSelectIconObjects1.length = k;}if ( gdjs.StageSelectCode.condition1IsTrue_0.val ) {
{
gdjs.StageSelectCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobavillestage")) == 0;
}}
}
if (gdjs.StageSelectCode.condition2IsTrue_0.val) {
gdjs.StageSelectCode.GDStagePreviewObjects1.createFrom(runtimeScene.getObjects("StagePreview"));
gdjs.StageSelectCode.GDtextupObjects1.createFrom(runtimeScene.getObjects("textup"));
{for(var i = 0, len = gdjs.StageSelectCode.GDStagePreviewObjects1.length ;i < len;++i) {
    gdjs.StageSelectCode.GDStagePreviewObjects1[i].setAnimationName("GobavilleLocked");
}
}{for(var i = 0, len = gdjs.StageSelectCode.GDtextupObjects1.length ;i < len;++i) {
    gdjs.StageSelectCode.GDtextupObjects1[i].setString("LOCKED");
}
}}

}


};gdjs.StageSelectCode.eventsList3 = function(runtimeScene) {

{

gdjs.StageSelectCode.GDStageSelectIconObjects2.createFrom(runtimeScene.getObjects("StageSelectIcon"));

gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StageSelectCode.GDStageSelectIconObjects2.length;i<l;++i) {
    if ( gdjs.StageSelectCode.GDStageSelectIconObjects2[i].getVariableString(gdjs.StageSelectCode.GDStageSelectIconObjects2[i].getVariables().get("stage")) == "Gobaville" ) {
        gdjs.StageSelectCode.condition0IsTrue_0.val = true;
        gdjs.StageSelectCode.GDStageSelectIconObjects2[k] = gdjs.StageSelectCode.GDStageSelectIconObjects2[i];
        ++k;
    }
}
gdjs.StageSelectCode.GDStageSelectIconObjects2.length = k;}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StageSelectCode.GDStageSelectIconObjects2 */
{for(var i = 0, len = gdjs.StageSelectCode.GDStageSelectIconObjects2.length ;i < len;++i) {
    gdjs.StageSelectCode.GDStageSelectIconObjects2[i].setAnimationName("Gobaville");
}
}}

}


{

gdjs.StageSelectCode.GDStageSelectIconObjects1.createFrom(runtimeScene.getObjects("StageSelectIcon"));

gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StageSelectCode.GDStageSelectIconObjects1.length;i<l;++i) {
    if ( gdjs.StageSelectCode.GDStageSelectIconObjects1[i].getVariableString(gdjs.StageSelectCode.GDStageSelectIconObjects1[i].getVariables().get("stage")) == "Betafield" ) {
        gdjs.StageSelectCode.condition0IsTrue_0.val = true;
        gdjs.StageSelectCode.GDStageSelectIconObjects1[k] = gdjs.StageSelectCode.GDStageSelectIconObjects1[i];
        ++k;
    }
}
gdjs.StageSelectCode.GDStageSelectIconObjects1.length = k;}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StageSelectCode.GDStageSelectIconObjects1 */
{for(var i = 0, len = gdjs.StageSelectCode.GDStageSelectIconObjects1.length ;i < len;++i) {
    gdjs.StageSelectCode.GDStageSelectIconObjects1[i].setAnimationName("Betafield");
}
}}

}


};gdjs.StageSelectCode.eventsList4 = function(runtimeScene) {

{


gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Save", "GobavilleUnlocked");
}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readStringFromJSONFile("Save", "GobavilleUnlocked", runtimeScene, runtimeScene.getVariables().get("gobavilleunlocked"));
}}

}


{


gdjs.StageSelectCode.condition0IsTrue_0.val = false;
gdjs.StageSelectCode.condition1IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.StageSelectCode.condition0IsTrue_0.val ) {
{
gdjs.StageSelectCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gobavilleunlocked")) == 1;
}}
if (gdjs.StageSelectCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobavillestage").setNumber(1);
}}

}


{

gdjs.StageSelectCode.GDBackButtonObjects1.createFrom(runtimeScene.getObjects("BackButton"));

gdjs.StageSelectCode.condition0IsTrue_0.val = false;
gdjs.StageSelectCode.condition1IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StageSelectCode.mapOfGDgdjs_46StageSelectCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StageSelectCode.condition0IsTrue_0.val ) {
{
{gdjs.StageSelectCode.conditionTrue_1 = gdjs.StageSelectCode.condition1IsTrue_0;
gdjs.StageSelectCode.condition0IsTrue_1.val = false;
gdjs.StageSelectCode.condition1IsTrue_1.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_1.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
if( gdjs.StageSelectCode.condition0IsTrue_1.val ) {
    gdjs.StageSelectCode.conditionTrue_1.val = true;
}
}
{
gdjs.StageSelectCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.StageSelectCode.condition1IsTrue_1.val ) {
    gdjs.StageSelectCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.StageSelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CharacterSelect", false);
}}

}


{


gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
gdjs.StageSelectCode.GDTileBGObjects1.createFrom(runtimeScene.getObjects("TileBG"));
{for(var i = 0, len = gdjs.StageSelectCode.GDTileBGObjects1.length ;i < len;++i) {
    gdjs.StageSelectCode.GDTileBGObjects1[i].setXOffset(gdjs.StageSelectCode.GDTileBGObjects1[i].getXOffset() + (1));
}
}}

}


{


gdjs.StageSelectCode.eventsList2(runtimeScene);
}


{


gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
gdjs.StageSelectCode.GDStagePreviewObjects1.createFrom(runtimeScene.getObjects("StagePreview"));
{for(var i = 0, len = gdjs.StageSelectCode.GDStagePreviewObjects1.length ;i < len;++i) {
    gdjs.StageSelectCode.GDStagePreviewObjects1[i].setAnimationName("Nothing! Now get out!");
}
}}

}


{


gdjs.StageSelectCode.eventsList3(runtimeScene);
}


{


gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Save", "GobavilleUnlocked");
}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "GobavilleUnlocked", runtimeScene, runtimeScene.getVariables().get("gobavilleunlocked"));
}}

}


{


gdjs.StageSelectCode.condition0IsTrue_0.val = false;
{
gdjs.StageSelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gobavilleunlocked")) > 0;
}if (gdjs.StageSelectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobavillestage").setNumber(1);
}}

}


};

gdjs.StageSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StageSelectCode.GDPlayerObjects1.length = 0;
gdjs.StageSelectCode.GDPlayerObjects2.length = 0;
gdjs.StageSelectCode.GDPlayerObjects3.length = 0;
gdjs.StageSelectCode.GDHitbox1Objects1.length = 0;
gdjs.StageSelectCode.GDHitbox1Objects2.length = 0;
gdjs.StageSelectCode.GDHitbox1Objects3.length = 0;
gdjs.StageSelectCode.GDHitbox2Objects1.length = 0;
gdjs.StageSelectCode.GDHitbox2Objects2.length = 0;
gdjs.StageSelectCode.GDHitbox2Objects3.length = 0;
gdjs.StageSelectCode.GDDeathBarrierObjects1.length = 0;
gdjs.StageSelectCode.GDDeathBarrierObjects2.length = 0;
gdjs.StageSelectCode.GDDeathBarrierObjects3.length = 0;
gdjs.StageSelectCode.GDPlayer2DamageObjects1.length = 0;
gdjs.StageSelectCode.GDPlayer2DamageObjects2.length = 0;
gdjs.StageSelectCode.GDPlayer2DamageObjects3.length = 0;
gdjs.StageSelectCode.GDPlayer1DamageObjects1.length = 0;
gdjs.StageSelectCode.GDPlayer1DamageObjects2.length = 0;
gdjs.StageSelectCode.GDPlayer1DamageObjects3.length = 0;
gdjs.StageSelectCode.GDPlayer2NameObjects1.length = 0;
gdjs.StageSelectCode.GDPlayer2NameObjects2.length = 0;
gdjs.StageSelectCode.GDPlayer2NameObjects3.length = 0;
gdjs.StageSelectCode.GDPlayer1NameObjects1.length = 0;
gdjs.StageSelectCode.GDPlayer1NameObjects2.length = 0;
gdjs.StageSelectCode.GDPlayer1NameObjects3.length = 0;
gdjs.StageSelectCode.GDFireball2Objects1.length = 0;
gdjs.StageSelectCode.GDFireball2Objects2.length = 0;
gdjs.StageSelectCode.GDFireball2Objects3.length = 0;
gdjs.StageSelectCode.GDFireball1Objects1.length = 0;
gdjs.StageSelectCode.GDFireball1Objects2.length = 0;
gdjs.StageSelectCode.GDFireball1Objects3.length = 0;
gdjs.StageSelectCode.GDGameTextObjects1.length = 0;
gdjs.StageSelectCode.GDGameTextObjects2.length = 0;
gdjs.StageSelectCode.GDGameTextObjects3.length = 0;
gdjs.StageSelectCode.GDStock2Objects1.length = 0;
gdjs.StageSelectCode.GDStock2Objects2.length = 0;
gdjs.StageSelectCode.GDStock2Objects3.length = 0;
gdjs.StageSelectCode.GDStock1Objects1.length = 0;
gdjs.StageSelectCode.GDStock1Objects2.length = 0;
gdjs.StageSelectCode.GDStock1Objects3.length = 0;
gdjs.StageSelectCode.GDTileBGObjects1.length = 0;
gdjs.StageSelectCode.GDTileBGObjects2.length = 0;
gdjs.StageSelectCode.GDTileBGObjects3.length = 0;
gdjs.StageSelectCode.GDStageSelectIconObjects1.length = 0;
gdjs.StageSelectCode.GDStageSelectIconObjects2.length = 0;
gdjs.StageSelectCode.GDStageSelectIconObjects3.length = 0;
gdjs.StageSelectCode.GDBackButtonObjects1.length = 0;
gdjs.StageSelectCode.GDBackButtonObjects2.length = 0;
gdjs.StageSelectCode.GDBackButtonObjects3.length = 0;
gdjs.StageSelectCode.GDStagePreviewObjects1.length = 0;
gdjs.StageSelectCode.GDStagePreviewObjects2.length = 0;
gdjs.StageSelectCode.GDStagePreviewObjects3.length = 0;
gdjs.StageSelectCode.GDtextupObjects1.length = 0;
gdjs.StageSelectCode.GDtextupObjects2.length = 0;
gdjs.StageSelectCode.GDtextupObjects3.length = 0;

gdjs.StageSelectCode.eventsList4(runtimeScene);
return;

}

gdjs['StageSelectCode'] = gdjs.StageSelectCode;
