gdjs.Level1Code = {};
gdjs.Level1Code.GDMarioObjects1= [];
gdjs.Level1Code.GDMarioObjects2= [];
gdjs.Level1Code.GDBlockTrollObjects1= [];
gdjs.Level1Code.GDBlockTrollObjects2= [];
gdjs.Level1Code.GDDeathBlockObjects1= [];
gdjs.Level1Code.GDDeathBlockObjects2= [];
gdjs.Level1Code.GDBlockObjects1= [];
gdjs.Level1Code.GDBlockObjects2= [];
gdjs.Level1Code.GDSkyObjects1= [];
gdjs.Level1Code.GDSkyObjects2= [];
gdjs.Level1Code.GDModularGrassObjects1= [];
gdjs.Level1Code.GDModularGrassObjects2= [];
gdjs.Level1Code.GDLeftSlopeDirtObjects1= [];
gdjs.Level1Code.GDLeftSlopeDirtObjects2= [];
gdjs.Level1Code.GDDirtObjects1= [];
gdjs.Level1Code.GDDirtObjects2= [];
gdjs.Level1Code.GDRegularGrassObjects1= [];
gdjs.Level1Code.GDRegularGrassObjects2= [];
gdjs.Level1Code.GDdeaths2Objects1= [];
gdjs.Level1Code.GDdeaths2Objects2= [];
gdjs.Level1Code.GDCoinObjects1= [];
gdjs.Level1Code.GDCoinObjects2= [];
gdjs.Level1Code.GDTouchRightObjects1= [];
gdjs.Level1Code.GDTouchRightObjects2= [];
gdjs.Level1Code.GDTouchLeftObjects1= [];
gdjs.Level1Code.GDTouchLeftObjects2= [];
gdjs.Level1Code.GDTouchJumpObjects1= [];
gdjs.Level1Code.GDTouchJumpObjects2= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMarioObjects1Objects = Hashtable.newFrom({"Mario": gdjs.Level1Code.GDMarioObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlockTrollObjects1Objects = Hashtable.newFrom({"BlockTroll": gdjs.Level1Code.GDBlockTrollObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMarioObjects1Objects = Hashtable.newFrom({"Mario": gdjs.Level1Code.GDMarioObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDDeathBlockObjects1Objects = Hashtable.newFrom({"DeathBlock": gdjs.Level1Code.GDDeathBlockObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level1Code.GDCoinObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMarioObjects1Objects = Hashtable.newFrom({"Mario": gdjs.Level1Code.GDMarioObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTouchRightObjects1Objects = Hashtable.newFrom({"TouchRight": gdjs.Level1Code.GDTouchRightObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTouchLeftObjects1Objects = Hashtable.newFrom({"TouchLeft": gdjs.Level1Code.GDTouchLeftObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTouchJumpObjects1Objects = Hashtable.newFrom({"TouchJump": gdjs.Level1Code.GDTouchJumpObjects1});gdjs.Level1Code.eventsList0x5b7338 = function(runtimeScene) {

{

gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMarioObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " Walk");
}
}}

}


{

gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMarioObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " Stand");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].flipX(true);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].flipX(false);
}
}}

}


{

gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMarioObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " Jump");
}
}}

}


{

gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMarioObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " Jump");
}
}}

}


{

gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMarioObjects1[i].getX() > 400 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMarioObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level1Code.GDMarioObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDMarioObjects1[0].getPointX("")), "", 0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDBlockTrollObjects1.createFrom(runtimeScene.getObjects("BlockTroll"));
{for(var i = 0, len = gdjs.Level1Code.GDBlockTrollObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBlockTrollObjects1[i].returnVariable(gdjs.Level1Code.GDBlockTrollObjects1[i].getVariables().get("isfalling")).setNumber(0);
}
}}

}


{

gdjs.Level1Code.GDBlockTrollObjects1.createFrom(runtimeScene.getObjects("BlockTroll"));
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMarioObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlockTrollObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBlockTrollObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDBlockTrollObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBlockTrollObjects1[i].returnVariable(gdjs.Level1Code.GDBlockTrollObjects1[i].getVariables().get("isfalling")).setNumber(1);
}
}}

}


{

gdjs.Level1Code.GDBlockTrollObjects1.createFrom(runtimeScene.getObjects("BlockTroll"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBlockTrollObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDBlockTrollObjects1[i].getVariableNumber(gdjs.Level1Code.GDBlockTrollObjects1[i].getVariables().get("isfalling")) == 1 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDBlockTrollObjects1[k] = gdjs.Level1Code.GDBlockTrollObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDBlockTrollObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBlockTrollObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDBlockTrollObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBlockTrollObjects1[i].addForce(0, 80, 1);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDdeaths2Objects1.createFrom(runtimeScene.getObjects("deaths2"));
{for(var i = 0, len = gdjs.Level1Code.GDdeaths2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdeaths2Objects1[i].setString("DEATHS:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Deaths"))));
}
}{runtimeScene.getGame().getVariables().get("dead").setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "1258_Music1.mp3", 1, true, 100, 1);
}}

}


{

gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("wasjumping")) == 0;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "1259_jump.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().get("wasjumping").setNumber(1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Deaths").add(1);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "DeadTimer");
}}

}


{

gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMarioObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMarioObjects1[k] = gdjs.Level1Code.GDMarioObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMarioObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("wasjumping").setNumber(0);
}}

}


{

gdjs.Level1Code.GDDeathBlockObjects1.createFrom(runtimeScene.getObjects("DeathBlock"));
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMarioObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDDeathBlockObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMarioObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "DeadTimer");
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "1257_playermort.mp3", false, 100, 1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "DeadTimer");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDdeaths2Objects1.createFrom(runtimeScene.getObjects("deaths2"));
{for(var i = 0, len = gdjs.Level1Code.GDdeaths2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDdeaths2Objects1[i].setString("DEATHS:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Deaths"))));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.Level1Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCoinObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMarioObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "1280_coin.mp3", false, 100, 1);
}{runtimeScene.getVariables().get("coins").add(1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDTouchJumpObjects1.createFrom(runtimeScene.getObjects("TouchJump"));
gdjs.Level1Code.GDTouchLeftObjects1.createFrom(runtimeScene.getObjects("TouchLeft"));
gdjs.Level1Code.GDTouchRightObjects1.createFrom(runtimeScene.getObjects("TouchRight"));
{for(var i = 0, len = gdjs.Level1Code.GDTouchLeftObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTouchLeftObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level1Code.GDTouchRightObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTouchRightObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level1Code.GDTouchJumpObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTouchJumpObjects1[i].setOpacity(50);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDTouchJumpObjects1.createFrom(runtimeScene.getObjects("TouchJump"));
gdjs.Level1Code.GDTouchLeftObjects1.createFrom(runtimeScene.getObjects("TouchLeft"));
gdjs.Level1Code.GDTouchRightObjects1.createFrom(runtimeScene.getObjects("TouchRight"));
{for(var i = 0, len = gdjs.Level1Code.GDTouchRightObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTouchRightObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDTouchLeftObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTouchLeftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDTouchJumpObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTouchJumpObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDTouchRightObjects1.createFrom(runtimeScene.getObjects("TouchRight"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTouchRightObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].flipX(false);
}
}}

}


{

gdjs.Level1Code.GDTouchLeftObjects1.createFrom(runtimeScene.getObjects("TouchLeft"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTouchLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].flipX(true);
}
}}

}


{

gdjs.Level1Code.GDTouchJumpObjects1.createFrom(runtimeScene.getObjects("TouchJump"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTouchJumpObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMarioObjects1.createFrom(runtimeScene.getObjects("Mario"));
{for(var i = 0, len = gdjs.Level1Code.GDMarioObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMarioObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x5b7338


gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDMarioObjects1.length = 0;
gdjs.Level1Code.GDMarioObjects2.length = 0;
gdjs.Level1Code.GDBlockTrollObjects1.length = 0;
gdjs.Level1Code.GDBlockTrollObjects2.length = 0;
gdjs.Level1Code.GDDeathBlockObjects1.length = 0;
gdjs.Level1Code.GDDeathBlockObjects2.length = 0;
gdjs.Level1Code.GDBlockObjects1.length = 0;
gdjs.Level1Code.GDBlockObjects2.length = 0;
gdjs.Level1Code.GDSkyObjects1.length = 0;
gdjs.Level1Code.GDSkyObjects2.length = 0;
gdjs.Level1Code.GDModularGrassObjects1.length = 0;
gdjs.Level1Code.GDModularGrassObjects2.length = 0;
gdjs.Level1Code.GDLeftSlopeDirtObjects1.length = 0;
gdjs.Level1Code.GDLeftSlopeDirtObjects2.length = 0;
gdjs.Level1Code.GDDirtObjects1.length = 0;
gdjs.Level1Code.GDDirtObjects2.length = 0;
gdjs.Level1Code.GDRegularGrassObjects1.length = 0;
gdjs.Level1Code.GDRegularGrassObjects2.length = 0;
gdjs.Level1Code.GDdeaths2Objects1.length = 0;
gdjs.Level1Code.GDdeaths2Objects2.length = 0;
gdjs.Level1Code.GDCoinObjects1.length = 0;
gdjs.Level1Code.GDCoinObjects2.length = 0;
gdjs.Level1Code.GDTouchRightObjects1.length = 0;
gdjs.Level1Code.GDTouchRightObjects2.length = 0;
gdjs.Level1Code.GDTouchLeftObjects1.length = 0;
gdjs.Level1Code.GDTouchLeftObjects2.length = 0;
gdjs.Level1Code.GDTouchJumpObjects1.length = 0;
gdjs.Level1Code.GDTouchJumpObjects2.length = 0;

gdjs.Level1Code.eventsList0x5b7338(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
