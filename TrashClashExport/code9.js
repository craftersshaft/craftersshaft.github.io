gdjs.ShopCode = {};
gdjs.ShopCode.GDPlayerObjects1= [];
gdjs.ShopCode.GDPlayerObjects2= [];
gdjs.ShopCode.GDPlayerObjects3= [];
gdjs.ShopCode.GDHitbox1Objects1= [];
gdjs.ShopCode.GDHitbox1Objects2= [];
gdjs.ShopCode.GDHitbox1Objects3= [];
gdjs.ShopCode.GDHitbox2Objects1= [];
gdjs.ShopCode.GDHitbox2Objects2= [];
gdjs.ShopCode.GDHitbox2Objects3= [];
gdjs.ShopCode.GDDeathBarrierObjects1= [];
gdjs.ShopCode.GDDeathBarrierObjects2= [];
gdjs.ShopCode.GDDeathBarrierObjects3= [];
gdjs.ShopCode.GDPlayer2DamageObjects1= [];
gdjs.ShopCode.GDPlayer2DamageObjects2= [];
gdjs.ShopCode.GDPlayer2DamageObjects3= [];
gdjs.ShopCode.GDPlayer1DamageObjects1= [];
gdjs.ShopCode.GDPlayer1DamageObjects2= [];
gdjs.ShopCode.GDPlayer1DamageObjects3= [];
gdjs.ShopCode.GDPlayer2NameObjects1= [];
gdjs.ShopCode.GDPlayer2NameObjects2= [];
gdjs.ShopCode.GDPlayer2NameObjects3= [];
gdjs.ShopCode.GDPlayer1NameObjects1= [];
gdjs.ShopCode.GDPlayer1NameObjects2= [];
gdjs.ShopCode.GDPlayer1NameObjects3= [];
gdjs.ShopCode.GDFireball2Objects1= [];
gdjs.ShopCode.GDFireball2Objects2= [];
gdjs.ShopCode.GDFireball2Objects3= [];
gdjs.ShopCode.GDFireball1Objects1= [];
gdjs.ShopCode.GDFireball1Objects2= [];
gdjs.ShopCode.GDFireball1Objects3= [];
gdjs.ShopCode.GDGameTextObjects1= [];
gdjs.ShopCode.GDGameTextObjects2= [];
gdjs.ShopCode.GDGameTextObjects3= [];
gdjs.ShopCode.GDStock2Objects1= [];
gdjs.ShopCode.GDStock2Objects2= [];
gdjs.ShopCode.GDStock2Objects3= [];
gdjs.ShopCode.GDStock1Objects1= [];
gdjs.ShopCode.GDStock1Objects2= [];
gdjs.ShopCode.GDStock1Objects3= [];
gdjs.ShopCode.GDBackButtonObjects1= [];
gdjs.ShopCode.GDBackButtonObjects2= [];
gdjs.ShopCode.GDBackButtonObjects3= [];
gdjs.ShopCode.GDCoinCounterObjects1= [];
gdjs.ShopCode.GDCoinCounterObjects2= [];
gdjs.ShopCode.GDCoinCounterObjects3= [];
gdjs.ShopCode.GDshoptitleObjects1= [];
gdjs.ShopCode.GDshoptitleObjects2= [];
gdjs.ShopCode.GDshoptitleObjects3= [];
gdjs.ShopCode.GDpurchasebackgroundObjects1= [];
gdjs.ShopCode.GDpurchasebackgroundObjects2= [];
gdjs.ShopCode.GDpurchasebackgroundObjects3= [];
gdjs.ShopCode.GDBuyButtonObjects1= [];
gdjs.ShopCode.GDBuyButtonObjects2= [];
gdjs.ShopCode.GDBuyButtonObjects3= [];
gdjs.ShopCode.GDBuyTextObjects1= [];
gdjs.ShopCode.GDBuyTextObjects2= [];
gdjs.ShopCode.GDBuyTextObjects3= [];
gdjs.ShopCode.GDShopIconsObjects1= [];
gdjs.ShopCode.GDShopIconsObjects2= [];
gdjs.ShopCode.GDShopIconsObjects3= [];
gdjs.ShopCode.GDShopHeaderObjects1= [];
gdjs.ShopCode.GDShopHeaderObjects2= [];
gdjs.ShopCode.GDShopHeaderObjects3= [];

gdjs.ShopCode.conditionTrue_0 = {val:false};
gdjs.ShopCode.condition0IsTrue_0 = {val:false};
gdjs.ShopCode.condition1IsTrue_0 = {val:false};
gdjs.ShopCode.condition2IsTrue_0 = {val:false};
gdjs.ShopCode.condition3IsTrue_0 = {val:false};
gdjs.ShopCode.condition4IsTrue_0 = {val:false};
gdjs.ShopCode.condition5IsTrue_0 = {val:false};


gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.ShopCode.GDBackButtonObjects1});gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDBuyButtonObjects2Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects2});gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDBuyButtonObjects1Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects1});gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{

gdjs.ShopCode.GDBuyButtonObjects2.createFrom(gdjs.ShopCode.GDBuyButtonObjects1);


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
gdjs.ShopCode.condition2IsTrue_0.val = false;
gdjs.ShopCode.condition3IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDBuyButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ShopCode.condition1IsTrue_0.val ) {
{
gdjs.ShopCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 30;
}if ( gdjs.ShopCode.condition2IsTrue_0.val ) {
{
gdjs.ShopCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobavillestage")) == 0;
}}
}
}
if (gdjs.ShopCode.condition3IsTrue_0.val) {
gdjs.ShopCode.GDBuyTextObjects2.createFrom(gdjs.ShopCode.GDBuyTextObjects1);

gdjs.ShopCode.GDCoinCounterObjects2.createFrom(runtimeScene.getObjects("CoinCounter"));
{gdjs.evtTools.sound.playSound(runtimeScene, "correct.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobavillestage").setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).sub(30);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Coins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.ShopCode.GDCoinCounterObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDCoinCounterObjects2[i].setString("(|) " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "GobavilleUnlocked", 1);
}{runtimeScene.getVariables().get("gobavilleunlocked").setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "GobavilleBought", 1);
}{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects2[i].setString("SOLD!");
}
}}

}


{

/* Reuse gdjs.ShopCode.GDBuyButtonObjects1 */

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
gdjs.ShopCode.condition2IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDBuyButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ShopCode.condition1IsTrue_0.val ) {
{
gdjs.ShopCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 30;
}}
}
if (gdjs.ShopCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong.wav", false, 100, 1);
}}

}


};gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{

gdjs.ShopCode.GDBuyButtonObjects1.createFrom(runtimeScene.getObjects("BuyButton"));
gdjs.ShopCode.GDBuyTextObjects1.createFrom(runtimeScene.getObjects("BuyText"));
gdjs.ShopCode.GDShopHeaderObjects1.createFrom(runtimeScene.getObjects("ShopHeader"));
gdjs.ShopCode.GDShopIconsObjects1.createFrom(runtimeScene.getObjects("ShopIcons"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
gdjs.ShopCode.condition2IsTrue_0.val = false;
gdjs.ShopCode.condition3IsTrue_0.val = false;
gdjs.ShopCode.condition4IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("gobavillestage")) > 0;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDShopHeaderObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShopHeaderObjects1[i].getVariableString(gdjs.ShopCode.GDShopHeaderObjects1[i].getVariables().get("whatsitfor")) == "goba" ) {
        gdjs.ShopCode.condition1IsTrue_0.val = true;
        gdjs.ShopCode.GDShopHeaderObjects1[k] = gdjs.ShopCode.GDShopHeaderObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDShopHeaderObjects1.length = k;}if ( gdjs.ShopCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects1[i].getVariableString(gdjs.ShopCode.GDBuyTextObjects1[i].getVariables().get("whatsitfor")) == "goba" ) {
        gdjs.ShopCode.condition2IsTrue_0.val = true;
        gdjs.ShopCode.GDBuyTextObjects1[k] = gdjs.ShopCode.GDBuyTextObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects1.length = k;}if ( gdjs.ShopCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDShopIconsObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShopIconsObjects1[i].getVariableString(gdjs.ShopCode.GDShopIconsObjects1[i].getVariables().get("whatsitfor")) == "goba" ) {
        gdjs.ShopCode.condition3IsTrue_0.val = true;
        gdjs.ShopCode.GDShopIconsObjects1[k] = gdjs.ShopCode.GDShopIconsObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDShopIconsObjects1.length = k;}if ( gdjs.ShopCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects1[i].getVariableString(gdjs.ShopCode.GDBuyButtonObjects1[i].getVariables().get("whatsitfor")) == "goba" ) {
        gdjs.ShopCode.condition4IsTrue_0.val = true;
        gdjs.ShopCode.GDBuyButtonObjects1[k] = gdjs.ShopCode.GDBuyButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects1.length = k;}}
}
}
}
if (gdjs.ShopCode.condition4IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects1[i].setString("SOLD!");
}
}}

}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{

gdjs.ShopCode.GDBackButtonObjects1.createFrom(runtimeScene.getObjects("BackButton"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 123);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDCoinCounterObjects1.createFrom(runtimeScene.getObjects("CoinCounter"));
{for(var i = 0, len = gdjs.ShopCode.GDCoinCounterObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDCoinCounterObjects1[i].setString("(|) " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Save", "Coins");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "Coins", runtimeScene, runtimeScene.getVariables().get("Coins"));
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Coins")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5));
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Coins")));
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "shop theme.mp3", 123, true, 100, 1);
}}

}


{

gdjs.ShopCode.GDBuyButtonObjects1.createFrom(runtimeScene.getObjects("BuyButton"));
gdjs.ShopCode.GDBuyTextObjects1.createFrom(runtimeScene.getObjects("BuyText"));
gdjs.ShopCode.GDShopHeaderObjects1.createFrom(runtimeScene.getObjects("ShopHeader"));
gdjs.ShopCode.GDShopIconsObjects1.createFrom(runtimeScene.getObjects("ShopIcons"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
gdjs.ShopCode.condition2IsTrue_0.val = false;
gdjs.ShopCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDShopIconsObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShopIconsObjects1[i].getVariableString(gdjs.ShopCode.GDShopIconsObjects1[i].getVariables().get("whatsitfor")) == "goba" ) {
        gdjs.ShopCode.condition0IsTrue_0.val = true;
        gdjs.ShopCode.GDShopIconsObjects1[k] = gdjs.ShopCode.GDShopIconsObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDShopIconsObjects1.length = k;}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDShopHeaderObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShopHeaderObjects1[i].getVariableString(gdjs.ShopCode.GDShopHeaderObjects1[i].getVariables().get("whatsitfor")) == "goba" ) {
        gdjs.ShopCode.condition1IsTrue_0.val = true;
        gdjs.ShopCode.GDShopHeaderObjects1[k] = gdjs.ShopCode.GDShopHeaderObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDShopHeaderObjects1.length = k;}if ( gdjs.ShopCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects1[i].getVariableString(gdjs.ShopCode.GDBuyButtonObjects1[i].getVariables().get("whatsitfor")) == "goba" ) {
        gdjs.ShopCode.condition2IsTrue_0.val = true;
        gdjs.ShopCode.GDBuyButtonObjects1[k] = gdjs.ShopCode.GDBuyButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects1.length = k;}if ( gdjs.ShopCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects1[i].getVariableString(gdjs.ShopCode.GDBuyTextObjects1[i].getVariables().get("whatsitfor")) == "goba" ) {
        gdjs.ShopCode.condition3IsTrue_0.val = true;
        gdjs.ShopCode.GDBuyTextObjects1[k] = gdjs.ShopCode.GDBuyTextObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects1.length = k;}}
}
}
if (gdjs.ShopCode.condition3IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects1 */
/* Reuse gdjs.ShopCode.GDShopHeaderObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDShopHeaderObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopHeaderObjects1[i].setString("Gobafield Stage");
}
}{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects1[i].setString("(|) 30");
}
}
{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Save", "GobavilleBought");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readStringFromJSONFile("Save", "GobavilleBought", runtimeScene, runtimeScene.getVariables().get("gobavillebought"));
}
{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDPlayerObjects1.length = 0;
gdjs.ShopCode.GDPlayerObjects2.length = 0;
gdjs.ShopCode.GDPlayerObjects3.length = 0;
gdjs.ShopCode.GDHitbox1Objects1.length = 0;
gdjs.ShopCode.GDHitbox1Objects2.length = 0;
gdjs.ShopCode.GDHitbox1Objects3.length = 0;
gdjs.ShopCode.GDHitbox2Objects1.length = 0;
gdjs.ShopCode.GDHitbox2Objects2.length = 0;
gdjs.ShopCode.GDHitbox2Objects3.length = 0;
gdjs.ShopCode.GDDeathBarrierObjects1.length = 0;
gdjs.ShopCode.GDDeathBarrierObjects2.length = 0;
gdjs.ShopCode.GDDeathBarrierObjects3.length = 0;
gdjs.ShopCode.GDPlayer2DamageObjects1.length = 0;
gdjs.ShopCode.GDPlayer2DamageObjects2.length = 0;
gdjs.ShopCode.GDPlayer2DamageObjects3.length = 0;
gdjs.ShopCode.GDPlayer1DamageObjects1.length = 0;
gdjs.ShopCode.GDPlayer1DamageObjects2.length = 0;
gdjs.ShopCode.GDPlayer1DamageObjects3.length = 0;
gdjs.ShopCode.GDPlayer2NameObjects1.length = 0;
gdjs.ShopCode.GDPlayer2NameObjects2.length = 0;
gdjs.ShopCode.GDPlayer2NameObjects3.length = 0;
gdjs.ShopCode.GDPlayer1NameObjects1.length = 0;
gdjs.ShopCode.GDPlayer1NameObjects2.length = 0;
gdjs.ShopCode.GDPlayer1NameObjects3.length = 0;
gdjs.ShopCode.GDFireball2Objects1.length = 0;
gdjs.ShopCode.GDFireball2Objects2.length = 0;
gdjs.ShopCode.GDFireball2Objects3.length = 0;
gdjs.ShopCode.GDFireball1Objects1.length = 0;
gdjs.ShopCode.GDFireball1Objects2.length = 0;
gdjs.ShopCode.GDFireball1Objects3.length = 0;
gdjs.ShopCode.GDGameTextObjects1.length = 0;
gdjs.ShopCode.GDGameTextObjects2.length = 0;
gdjs.ShopCode.GDGameTextObjects3.length = 0;
gdjs.ShopCode.GDStock2Objects1.length = 0;
gdjs.ShopCode.GDStock2Objects2.length = 0;
gdjs.ShopCode.GDStock2Objects3.length = 0;
gdjs.ShopCode.GDStock1Objects1.length = 0;
gdjs.ShopCode.GDStock1Objects2.length = 0;
gdjs.ShopCode.GDStock1Objects3.length = 0;
gdjs.ShopCode.GDBackButtonObjects1.length = 0;
gdjs.ShopCode.GDBackButtonObjects2.length = 0;
gdjs.ShopCode.GDBackButtonObjects3.length = 0;
gdjs.ShopCode.GDCoinCounterObjects1.length = 0;
gdjs.ShopCode.GDCoinCounterObjects2.length = 0;
gdjs.ShopCode.GDCoinCounterObjects3.length = 0;
gdjs.ShopCode.GDshoptitleObjects1.length = 0;
gdjs.ShopCode.GDshoptitleObjects2.length = 0;
gdjs.ShopCode.GDshoptitleObjects3.length = 0;
gdjs.ShopCode.GDpurchasebackgroundObjects1.length = 0;
gdjs.ShopCode.GDpurchasebackgroundObjects2.length = 0;
gdjs.ShopCode.GDpurchasebackgroundObjects3.length = 0;
gdjs.ShopCode.GDBuyButtonObjects1.length = 0;
gdjs.ShopCode.GDBuyButtonObjects2.length = 0;
gdjs.ShopCode.GDBuyButtonObjects3.length = 0;
gdjs.ShopCode.GDBuyTextObjects1.length = 0;
gdjs.ShopCode.GDBuyTextObjects2.length = 0;
gdjs.ShopCode.GDBuyTextObjects3.length = 0;
gdjs.ShopCode.GDShopIconsObjects1.length = 0;
gdjs.ShopCode.GDShopIconsObjects2.length = 0;
gdjs.ShopCode.GDShopIconsObjects3.length = 0;
gdjs.ShopCode.GDShopHeaderObjects1.length = 0;
gdjs.ShopCode.GDShopHeaderObjects2.length = 0;
gdjs.ShopCode.GDShopHeaderObjects3.length = 0;

gdjs.ShopCode.eventsList2(runtimeScene);
return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
