gdjs.World1_451aCode = {};
gdjs.World1_451aCode.GDCollisionPlayerObjects2_1final = [];

gdjs.World1_451aCode.GDCollisionBlockObjects1= [];
gdjs.World1_451aCode.GDCollisionBlockObjects2= [];
gdjs.World1_451aCode.GDCollisionBlockObjects3= [];
gdjs.World1_451aCode.GDCollisionBlockObjects4= [];
gdjs.World1_451aCode.GDCollisionPlayerObjects1= [];
gdjs.World1_451aCode.GDCollisionPlayerObjects2= [];
gdjs.World1_451aCode.GDCollisionPlayerObjects3= [];
gdjs.World1_451aCode.GDCollisionPlayerObjects4= [];
gdjs.World1_451aCode.GDPlayerGraphicsObjects1= [];
gdjs.World1_451aCode.GDPlayerGraphicsObjects2= [];
gdjs.World1_451aCode.GDPlayerGraphicsObjects3= [];
gdjs.World1_451aCode.GDPlayerGraphicsObjects4= [];
gdjs.World1_451aCode.GDMushroomBlockObjects1= [];
gdjs.World1_451aCode.GDMushroomBlockObjects2= [];
gdjs.World1_451aCode.GDMushroomBlockObjects3= [];
gdjs.World1_451aCode.GDMushroomBlockObjects4= [];
gdjs.World1_451aCode.GDMushroomObjects1= [];
gdjs.World1_451aCode.GDMushroomObjects2= [];
gdjs.World1_451aCode.GDMushroomObjects3= [];
gdjs.World1_451aCode.GDMushroomObjects4= [];
gdjs.World1_451aCode.GDspikesObjects1= [];
gdjs.World1_451aCode.GDspikesObjects2= [];
gdjs.World1_451aCode.GDspikesObjects3= [];
gdjs.World1_451aCode.GDspikesObjects4= [];
gdjs.World1_451aCode.GDOverworldGroundObjects1= [];
gdjs.World1_451aCode.GDOverworldGroundObjects2= [];
gdjs.World1_451aCode.GDOverworldGroundObjects3= [];
gdjs.World1_451aCode.GDOverworldGroundObjects4= [];
gdjs.World1_451aCode.GDMushroomSpawnerObjects1= [];
gdjs.World1_451aCode.GDMushroomSpawnerObjects2= [];
gdjs.World1_451aCode.GDMushroomSpawnerObjects3= [];
gdjs.World1_451aCode.GDMushroomSpawnerObjects4= [];

gdjs.World1_451aCode.conditionTrue_0 = {val:false};
gdjs.World1_451aCode.condition0IsTrue_0 = {val:false};
gdjs.World1_451aCode.condition1IsTrue_0 = {val:false};
gdjs.World1_451aCode.condition2IsTrue_0 = {val:false};
gdjs.World1_451aCode.condition3IsTrue_0 = {val:false};
gdjs.World1_451aCode.conditionTrue_1 = {val:false};
gdjs.World1_451aCode.condition0IsTrue_1 = {val:false};
gdjs.World1_451aCode.condition1IsTrue_1 = {val:false};
gdjs.World1_451aCode.condition2IsTrue_1 = {val:false};
gdjs.World1_451aCode.condition3IsTrue_1 = {val:false};


gdjs.World1_451aCode.eventsList0 = function(runtimeScene) {

{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
{gdjs.World1_451aCode.conditionTrue_1 = gdjs.World1_451aCode.condition1IsTrue_0;
gdjs.World1_451aCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9022276);
}
}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("JumpPressed")).setNumber(1);
}
}}

}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("JumpPressed")).setNumber(0);
}
}}

}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("LeftPressed")).setNumber(1);
}
}}

}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("LeftPressed")).setNumber(0);
}
}}

}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("RightPressed")).setNumber(1);
}
}}

}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("RightPressed")).setNumber(0);
}
}}

}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("RunPressed")).setNumber(1);
}
}}

}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects1);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getVariables().get("RunPressed")).setNumber(0);
}
}}

}


};gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects3Objects = Hashtable.newFrom({"CollisionPlayer": gdjs.World1_451aCode.GDCollisionPlayerObjects3});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDspikesObjects3Objects = Hashtable.newFrom({"spikes": gdjs.World1_451aCode.GDspikesObjects3});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects2Objects = Hashtable.newFrom({"CollisionPlayer": gdjs.World1_451aCode.GDCollisionPlayerObjects2});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDspikesObjects2Objects = Hashtable.newFrom({"spikes": gdjs.World1_451aCode.GDspikesObjects2});gdjs.World1_451aCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.World1_451aCode.GDCollisionPlayerObjects2, gdjs.World1_451aCode.GDCollisionPlayerObjects3);

gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.World1_451aCode.GDspikesObjects3);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects3.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects3[i].getVariableString(gdjs.World1_451aCode.GDCollisionPlayerObjects3[i].getVariables().getFromIndex(0)) == "Small" ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects3[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects3[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects3.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
gdjs.World1_451aCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects3Objects, gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDspikesObjects3Objects, true, runtimeScene, false);
}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Jump.wav", 12, false, 100, 1);
}}

}


{

/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.World1_451aCode.GDspikesObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariableString(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().getFromIndex(0)) != "Small" ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
gdjs.World1_451aCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects2Objects, gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDspikesObjects2Objects, true, runtimeScene, false);
}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Big Jump.wav", 12, false, 70, 1);
}}

}


};gdjs.World1_451aCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariableNumber(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("LeftPressed")) == 0 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].flipX(false);
}
}}

}


};gdjs.World1_451aCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariableNumber(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("RightPressed")) == 0 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].flipX(true);
}
}}

}


};gdjs.World1_451aCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].isFlippedX() ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(140);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].isFlippedX()) ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(140);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].isFlippedX()) ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").setAcceleration(600);
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].setAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getVariables()).getFromIndex(0))) + "Skid");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].isFlippedX() ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").setAcceleration(600);
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].setAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getVariables()).getFromIndex(0))) + "Skid");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].isFlippedX()) ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").setAcceleration(800);
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].setAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getVariables()).getFromIndex(0))) + "Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].isFlippedX() ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").setAcceleration(800);
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].setAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getVariables()).getFromIndex(0))) + "Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariableNumber(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("JumpPressed")) == 1 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("JumpPressed")).setNumber(0);
}
}
{ //Subevents
gdjs.World1_451aCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariableNumber(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("RightPressed")) == 1 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.World1_451aCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariableNumber(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("LeftPressed")) == 1 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{ //Subevents
gdjs.World1_451aCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariableNumber(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getVariables().get("RunPressed")) == 1 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
{gdjs.World1_451aCode.conditionTrue_1 = gdjs.World1_451aCode.condition1IsTrue_0;
gdjs.World1_451aCode.GDCollisionPlayerObjects2_1final.length = 0;gdjs.World1_451aCode.condition0IsTrue_1.val = false;
gdjs.World1_451aCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.World1_451aCode.GDCollisionPlayerObjects2, gdjs.World1_451aCode.GDCollisionPlayerObjects3);

for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects3.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects3[i].getBehavior("PlatformerObject").getCurrentSpeed() > 40 ) {
        gdjs.World1_451aCode.condition0IsTrue_1.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects3[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects3[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects3.length = k;if( gdjs.World1_451aCode.condition0IsTrue_1.val ) {
    gdjs.World1_451aCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.World1_451aCode.GDCollisionPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2_1final.indexOf(gdjs.World1_451aCode.GDCollisionPlayerObjects3[j]) === -1 )
            gdjs.World1_451aCode.GDCollisionPlayerObjects2_1final.push(gdjs.World1_451aCode.GDCollisionPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.World1_451aCode.GDCollisionPlayerObjects2, gdjs.World1_451aCode.GDCollisionPlayerObjects3);

for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects3.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects3[i].getBehavior("PlatformerObject").getCurrentSpeed() < -(40) ) {
        gdjs.World1_451aCode.condition1IsTrue_1.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects3[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects3[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects3.length = k;if( gdjs.World1_451aCode.condition1IsTrue_1.val ) {
    gdjs.World1_451aCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.World1_451aCode.GDCollisionPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2_1final.indexOf(gdjs.World1_451aCode.GDCollisionPlayerObjects3[j]) === -1 )
            gdjs.World1_451aCode.GDCollisionPlayerObjects2_1final.push(gdjs.World1_451aCode.GDCollisionPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.World1_451aCode.GDCollisionPlayerObjects2_1final, gdjs.World1_451aCode.GDCollisionPlayerObjects2);
}
}
}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getVariableNumber(gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getVariables().get("RunPressed")) == 0 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects1[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects1.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects1[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects1.length = k;}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects1 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(160);
}
}}

}


};gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects1Objects = Hashtable.newFrom({"CollisionPlayer": gdjs.World1_451aCode.GDCollisionPlayerObjects1});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDPlayerGraphicsObjects1Objects = Hashtable.newFrom({"PlayerGraphics": gdjs.World1_451aCode.GDPlayerGraphicsObjects1});gdjs.World1_451aCode.eventsList5 = function(runtimeScene) {

{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].setPosition(Math.round((( gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getPointX(""))),Math.round((( gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getPointY(""))));
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].setAnimationSpeedScale((( gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getBehavior("PlatformerObject").getMaxSpeed()) / 160);
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].isFlippedX()) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].isFlippedX() ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() != 0 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].isCurrentAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getVariables()).getFromIndex(0))) + "Skid")) ) {
        gdjs.World1_451aCode.condition2IsTrue_0.val = true;
        gdjs.World1_451aCode.GDPlayerGraphicsObjects2[k] = gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length = k;}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
/* Reuse gdjs.World1_451aCode.GDPlayerGraphicsObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].setAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getVariables()).getFromIndex(0))) + "Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects2);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDCollisionPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects2[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = k;}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects2);
{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects2[i].setAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.World1_451aCode.GDCollisionPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.World1_451aCode.GDCollisionPlayerObjects2[0].getVariables()).getFromIndex(0))) + "Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects1[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects1.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects1[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects1.length = k;}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerGraphics"), gdjs.World1_451aCode.GDPlayerGraphicsObjects1);
{for(var i = 0, len = gdjs.World1_451aCode.GDPlayerGraphicsObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDPlayerGraphicsObjects1[i].setAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.World1_451aCode.GDCollisionPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.World1_451aCode.GDCollisionPlayerObjects1[0].getVariables()).getFromIndex(0))) + "Stand");
}
}}

}


};gdjs.World1_451aCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDCollisionPlayerObjects1[k] = gdjs.World1_451aCode.GDCollisionPlayerObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDCollisionPlayerObjects1.length = k;}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, Math.round((( gdjs.World1_451aCode.GDCollisionPlayerObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects1[0].getPointX(""))), "", 0);
}}

}


};gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.World1_451aCode.GDMushroomObjects1});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects1Objects = Hashtable.newFrom({"CollisionPlayer": gdjs.World1_451aCode.GDCollisionPlayerObjects1});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.World1_451aCode.GDMushroomObjects1});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDOverworldGroundObjects1ObjectsGDgdjs_46World1_95451aCode_46GDCollisionBlockObjects1Objects = Hashtable.newFrom({"OverworldGround": gdjs.World1_451aCode.GDOverworldGroundObjects1, "CollisionBlock": gdjs.World1_451aCode.GDCollisionBlockObjects1});gdjs.World1_451aCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.World1_451aCode.GDCollisionBlockObjects1, gdjs.World1_451aCode.GDCollisionBlockObjects2);

gdjs.copyArray(gdjs.World1_451aCode.GDMushroomObjects1, gdjs.World1_451aCode.GDMushroomObjects2);

gdjs.copyArray(gdjs.World1_451aCode.GDOverworldGroundObjects1, gdjs.World1_451aCode.GDOverworldGroundObjects2);


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDMushroomObjects2.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDMushroomObjects2[i].isCollidingWithPoint((( gdjs.World1_451aCode.GDCollisionBlockObjects2.length === 0 ) ? (( gdjs.World1_451aCode.GDOverworldGroundObjects2.length === 0 ) ? 0 :gdjs.World1_451aCode.GDOverworldGroundObjects2[0].getX()) :gdjs.World1_451aCode.GDCollisionBlockObjects2[0].getX()) + (( gdjs.World1_451aCode.GDCollisionBlockObjects2.length === 0 ) ? (( gdjs.World1_451aCode.GDOverworldGroundObjects2.length === 0 ) ? 0 :gdjs.World1_451aCode.GDOverworldGroundObjects2[0].getWidth()) :gdjs.World1_451aCode.GDCollisionBlockObjects2[0].getWidth()) + 0.1, (gdjs.World1_451aCode.GDMushroomObjects2[i].getPointY(""))) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDMushroomObjects2[k] = gdjs.World1_451aCode.GDMushroomObjects2[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDMushroomObjects2.length = k;}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDMushroomObjects2 */
{for(var i = 0, len = gdjs.World1_451aCode.GDMushroomObjects2.length ;i < len;++i) {
    gdjs.World1_451aCode.GDMushroomObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

/* Reuse gdjs.World1_451aCode.GDCollisionBlockObjects1 */
/* Reuse gdjs.World1_451aCode.GDMushroomObjects1 */
/* Reuse gdjs.World1_451aCode.GDOverworldGroundObjects1 */

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDMushroomObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDMushroomObjects1[i].isCollidingWithPoint((( gdjs.World1_451aCode.GDCollisionBlockObjects1.length === 0 ) ? (( gdjs.World1_451aCode.GDOverworldGroundObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDOverworldGroundObjects1[0].getX()) :gdjs.World1_451aCode.GDCollisionBlockObjects1[0].getX()) - 0.1, (gdjs.World1_451aCode.GDMushroomObjects1[i].getPointY(""))) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDMushroomObjects1[k] = gdjs.World1_451aCode.GDMushroomObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDMushroomObjects1.length = k;}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDMushroomObjects1 */
{for(var i = 0, len = gdjs.World1_451aCode.GDMushroomObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDMushroomObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


};gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDMushroomSpawnerObjects1Objects = Hashtable.newFrom({"MushroomSpawner": gdjs.World1_451aCode.GDMushroomSpawnerObjects1});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.World1_451aCode.GDMushroomObjects1});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects1Objects = Hashtable.newFrom({"CollisionPlayer": gdjs.World1_451aCode.GDCollisionPlayerObjects1});gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDspikesObjects1Objects = Hashtable.newFrom({"spikes": gdjs.World1_451aCode.GDspikesObjects1});gdjs.World1_451aCode.eventsList8 = function(runtimeScene) {

{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "CopyrightedMusic\\MarioClone_Overworld.wav", 12, true, 50, 1);
}}

}


{



}


{


gdjs.World1_451aCode.eventsList0(runtimeScene);
}


{


gdjs.World1_451aCode.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
gdjs.World1_451aCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects1Objects);
}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects1 */
gdjs.World1_451aCode.GDPlayerGraphicsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDPlayerGraphicsObjects1Objects, (( gdjs.World1_451aCode.GDCollisionPlayerObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects1[0].getPointX("")), (( gdjs.World1_451aCode.GDCollisionPlayerObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects1[0].getPointY("")) + 1, "");
}}

}


{


gdjs.World1_451aCode.eventsList5(runtimeScene);
}


{


gdjs.World1_451aCode.eventsList6(runtimeScene);
}


{



}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "die lol");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.World1_451aCode.GDMushroomObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDMushroomObjects1.length;i<l;++i) {
    if ( !(gdjs.World1_451aCode.GDMushroomObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDMushroomObjects1[k] = gdjs.World1_451aCode.GDMushroomObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDMushroomObjects1.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
{gdjs.World1_451aCode.conditionTrue_1 = gdjs.World1_451aCode.condition1IsTrue_0;
gdjs.World1_451aCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11312084);
}
}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDMushroomObjects1 */
{for(var i = 0, len = gdjs.World1_451aCode.GDMushroomObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDMushroomObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.World1_451aCode.GDMushroomObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDMushroomObjects1Objects, gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
{gdjs.World1_451aCode.conditionTrue_1 = gdjs.World1_451aCode.condition1IsTrue_0;
gdjs.World1_451aCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10953588);
}
}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects1 */
/* Reuse gdjs.World1_451aCode.GDMushroomObjects1 */
{for(var i = 0, len = gdjs.World1_451aCode.GDMushroomObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDMushroomObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].returnVariable(gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getVariables().getFromIndex(0)).setString("Big");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Powerup.wav", 13, false, 80, 1);
}{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].setAnimationName((gdjs.RuntimeObject.getVariableString(gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionBlock"), gdjs.World1_451aCode.GDCollisionBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.World1_451aCode.GDMushroomObjects1);
gdjs.copyArray(runtimeScene.getObjects("OverworldGround"), gdjs.World1_451aCode.GDOverworldGroundObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDMushroomObjects1Objects, gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDOverworldGroundObjects1ObjectsGDgdjs_46World1_95451aCode_46GDCollisionBlockObjects1Objects, false, runtimeScene, false);
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.World1_451aCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MushroomBlock"), gdjs.World1_451aCode.GDMushroomBlockObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
gdjs.World1_451aCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDMushroomBlockObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDMushroomBlockObjects1[i].isCollidingWithPoint((( gdjs.World1_451aCode.GDCollisionPlayerObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects1[0].getPointX("")) + ((( gdjs.World1_451aCode.GDCollisionPlayerObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects1[0].getWidth()) / 2), (( gdjs.World1_451aCode.GDCollisionPlayerObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDCollisionPlayerObjects1[0].getPointY("")) + 0.1) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDMushroomBlockObjects1[k] = gdjs.World1_451aCode.GDMushroomBlockObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDMushroomBlockObjects1.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDMushroomBlockObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDMushroomBlockObjects1[i].isCurrentAnimationName("Unhit") ) {
        gdjs.World1_451aCode.condition1IsTrue_0.val = true;
        gdjs.World1_451aCode.GDMushroomBlockObjects1[k] = gdjs.World1_451aCode.GDMushroomBlockObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDMushroomBlockObjects1.length = k;}if ( gdjs.World1_451aCode.condition1IsTrue_0.val ) {
{
{gdjs.World1_451aCode.conditionTrue_1 = gdjs.World1_451aCode.condition2IsTrue_0;
gdjs.World1_451aCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9883620);
}
}}
}
if (gdjs.World1_451aCode.condition2IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDMushroomBlockObjects1 */
gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length = 0;

{for(var i = 0, len = gdjs.World1_451aCode.GDMushroomBlockObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDMushroomBlockObjects1[i].setAnimationName("Hit");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Item.wav", 10, false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDMushroomSpawnerObjects1Objects, (( gdjs.World1_451aCode.GDMushroomBlockObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDMushroomBlockObjects1[0].getPointX("")) + ((( gdjs.World1_451aCode.GDMushroomBlockObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDMushroomBlockObjects1[0].getScaleX()) / 2), (( gdjs.World1_451aCode.GDMushroomBlockObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDMushroomBlockObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDMushroomSpawnerObjects1[i].resetTimer("Existance");
}
}{for(var i = 0, len = gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDMushroomSpawnerObjects1[i].addForce(0, -(32), 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MushroomSpawner"), gdjs.World1_451aCode.GDMushroomSpawnerObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
gdjs.World1_451aCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length;i<l;++i) {
    if ( gdjs.World1_451aCode.GDMushroomSpawnerObjects1[i].timerElapsedTime("Existance", 0.5) ) {
        gdjs.World1_451aCode.condition0IsTrue_0.val = true;
        gdjs.World1_451aCode.GDMushroomSpawnerObjects1[k] = gdjs.World1_451aCode.GDMushroomSpawnerObjects1[i];
        ++k;
    }
}
gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length = k;}if ( gdjs.World1_451aCode.condition0IsTrue_0.val ) {
{
{gdjs.World1_451aCode.conditionTrue_1 = gdjs.World1_451aCode.condition1IsTrue_0;
gdjs.World1_451aCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10322180);
}
}}
if (gdjs.World1_451aCode.condition1IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDMushroomSpawnerObjects1 */
gdjs.World1_451aCode.GDMushroomObjects1.length = 0;

{for(var i = 0, len = gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDMushroomSpawnerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDMushroomObjects1Objects, (( gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDMushroomSpawnerObjects1[0].getPointX("")), (( gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length === 0 ) ? 0 :gdjs.World1_451aCode.GDMushroomSpawnerObjects1[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CollisionPlayer"), gdjs.World1_451aCode.GDCollisionPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.World1_451aCode.GDspikesObjects1);

gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDCollisionPlayerObjects1Objects, gdjs.World1_451aCode.mapOfGDgdjs_46World1_95451aCode_46GDspikesObjects1Objects, false, runtimeScene, false);
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
/* Reuse gdjs.World1_451aCode.GDCollisionPlayerObjects1 */
{for(var i = 0, len = gdjs.World1_451aCode.GDCollisionPlayerObjects1.length ;i < len;++i) {
    gdjs.World1_451aCode.GDCollisionPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "die lol");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "die lol");
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 12);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "CopyrightedMusic\\youaredeadandburied.mp3", false, 100, 1);
}}

}


{


gdjs.World1_451aCode.condition0IsTrue_0.val = false;
{
gdjs.World1_451aCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "die lol");
}if (gdjs.World1_451aCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};

gdjs.World1_451aCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.World1_451aCode.GDCollisionBlockObjects1.length = 0;
gdjs.World1_451aCode.GDCollisionBlockObjects2.length = 0;
gdjs.World1_451aCode.GDCollisionBlockObjects3.length = 0;
gdjs.World1_451aCode.GDCollisionBlockObjects4.length = 0;
gdjs.World1_451aCode.GDCollisionPlayerObjects1.length = 0;
gdjs.World1_451aCode.GDCollisionPlayerObjects2.length = 0;
gdjs.World1_451aCode.GDCollisionPlayerObjects3.length = 0;
gdjs.World1_451aCode.GDCollisionPlayerObjects4.length = 0;
gdjs.World1_451aCode.GDPlayerGraphicsObjects1.length = 0;
gdjs.World1_451aCode.GDPlayerGraphicsObjects2.length = 0;
gdjs.World1_451aCode.GDPlayerGraphicsObjects3.length = 0;
gdjs.World1_451aCode.GDPlayerGraphicsObjects4.length = 0;
gdjs.World1_451aCode.GDMushroomBlockObjects1.length = 0;
gdjs.World1_451aCode.GDMushroomBlockObjects2.length = 0;
gdjs.World1_451aCode.GDMushroomBlockObjects3.length = 0;
gdjs.World1_451aCode.GDMushroomBlockObjects4.length = 0;
gdjs.World1_451aCode.GDMushroomObjects1.length = 0;
gdjs.World1_451aCode.GDMushroomObjects2.length = 0;
gdjs.World1_451aCode.GDMushroomObjects3.length = 0;
gdjs.World1_451aCode.GDMushroomObjects4.length = 0;
gdjs.World1_451aCode.GDspikesObjects1.length = 0;
gdjs.World1_451aCode.GDspikesObjects2.length = 0;
gdjs.World1_451aCode.GDspikesObjects3.length = 0;
gdjs.World1_451aCode.GDspikesObjects4.length = 0;
gdjs.World1_451aCode.GDOverworldGroundObjects1.length = 0;
gdjs.World1_451aCode.GDOverworldGroundObjects2.length = 0;
gdjs.World1_451aCode.GDOverworldGroundObjects3.length = 0;
gdjs.World1_451aCode.GDOverworldGroundObjects4.length = 0;
gdjs.World1_451aCode.GDMushroomSpawnerObjects1.length = 0;
gdjs.World1_451aCode.GDMushroomSpawnerObjects2.length = 0;
gdjs.World1_451aCode.GDMushroomSpawnerObjects3.length = 0;
gdjs.World1_451aCode.GDMushroomSpawnerObjects4.length = 0;

gdjs.World1_451aCode.eventsList8(runtimeScene);
return;

}

gdjs['World1_451aCode'] = gdjs.World1_451aCode;
