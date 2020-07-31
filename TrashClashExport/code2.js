gdjs.PlayerBaseCode = {};
gdjs.PlayerBaseCode.GDFireball1Objects2_1final = [];

gdjs.PlayerBaseCode.GDFireball2Objects2_1final = [];

gdjs.PlayerBaseCode.GDHitbox1Objects2_1final = [];

gdjs.PlayerBaseCode.GDHitbox2Objects2_1final = [];

gdjs.PlayerBaseCode.GDPlayerObjects2_1final = [];

gdjs.PlayerBaseCode.GDPlayerObjects1= [];
gdjs.PlayerBaseCode.GDPlayerObjects2= [];
gdjs.PlayerBaseCode.GDPlayerObjects3= [];
gdjs.PlayerBaseCode.GDPlayerObjects4= [];
gdjs.PlayerBaseCode.GDHitbox1Objects1= [];
gdjs.PlayerBaseCode.GDHitbox1Objects2= [];
gdjs.PlayerBaseCode.GDHitbox1Objects3= [];
gdjs.PlayerBaseCode.GDHitbox1Objects4= [];
gdjs.PlayerBaseCode.GDHitbox2Objects1= [];
gdjs.PlayerBaseCode.GDHitbox2Objects2= [];
gdjs.PlayerBaseCode.GDHitbox2Objects3= [];
gdjs.PlayerBaseCode.GDHitbox2Objects4= [];
gdjs.PlayerBaseCode.GDDeathBarrierObjects1= [];
gdjs.PlayerBaseCode.GDDeathBarrierObjects2= [];
gdjs.PlayerBaseCode.GDDeathBarrierObjects3= [];
gdjs.PlayerBaseCode.GDDeathBarrierObjects4= [];
gdjs.PlayerBaseCode.GDPlayer2DamageObjects1= [];
gdjs.PlayerBaseCode.GDPlayer2DamageObjects2= [];
gdjs.PlayerBaseCode.GDPlayer2DamageObjects3= [];
gdjs.PlayerBaseCode.GDPlayer2DamageObjects4= [];
gdjs.PlayerBaseCode.GDPlayer1DamageObjects1= [];
gdjs.PlayerBaseCode.GDPlayer1DamageObjects2= [];
gdjs.PlayerBaseCode.GDPlayer1DamageObjects3= [];
gdjs.PlayerBaseCode.GDPlayer1DamageObjects4= [];
gdjs.PlayerBaseCode.GDPlayer2NameObjects1= [];
gdjs.PlayerBaseCode.GDPlayer2NameObjects2= [];
gdjs.PlayerBaseCode.GDPlayer2NameObjects3= [];
gdjs.PlayerBaseCode.GDPlayer2NameObjects4= [];
gdjs.PlayerBaseCode.GDPlayer1NameObjects1= [];
gdjs.PlayerBaseCode.GDPlayer1NameObjects2= [];
gdjs.PlayerBaseCode.GDPlayer1NameObjects3= [];
gdjs.PlayerBaseCode.GDPlayer1NameObjects4= [];
gdjs.PlayerBaseCode.GDFireball2Objects1= [];
gdjs.PlayerBaseCode.GDFireball2Objects2= [];
gdjs.PlayerBaseCode.GDFireball2Objects3= [];
gdjs.PlayerBaseCode.GDFireball2Objects4= [];
gdjs.PlayerBaseCode.GDFireball1Objects1= [];
gdjs.PlayerBaseCode.GDFireball1Objects2= [];
gdjs.PlayerBaseCode.GDFireball1Objects3= [];
gdjs.PlayerBaseCode.GDFireball1Objects4= [];
gdjs.PlayerBaseCode.GDGameTextObjects1= [];
gdjs.PlayerBaseCode.GDGameTextObjects2= [];
gdjs.PlayerBaseCode.GDGameTextObjects3= [];
gdjs.PlayerBaseCode.GDGameTextObjects4= [];

gdjs.PlayerBaseCode.conditionTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition0IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition1IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition2IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition3IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition4IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition5IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition6IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition7IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition8IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.condition9IsTrue_0 = {val:false};
gdjs.PlayerBaseCode.conditionTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition0IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition1IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition2IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition3IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition4IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition5IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition6IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition7IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition8IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.condition9IsTrue_1 = {val:false};
gdjs.PlayerBaseCode.conditionTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition0IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition1IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition2IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition3IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition4IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition5IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition6IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition7IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition8IsTrue_2 = {val:false};
gdjs.PlayerBaseCode.condition9IsTrue_2 = {val:false};


gdjs.PlayerBaseCode.eventsList0x70a0a4 = function(runtimeScene) {

{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("up")));
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.PlayerBaseCode.GDPlayerObjects3[i].isCurrentAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Punch")) ) {
        gdjs.PlayerBaseCode.condition3IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
}
}
if (gdjs.PlayerBaseCode.condition3IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Walk");
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("CanDoUpB")).setNumber(1);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.PlayerBaseCode.GDPlayerObjects3[i].isCurrentAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Punch")) ) {
        gdjs.PlayerBaseCode.condition3IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.PlayerBaseCode.condition4IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
}
}
}
if (gdjs.PlayerBaseCode.condition4IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Stand");
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("right")));
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].flipX(false);
}
}{runtimeScene.getVariables().get("Player1Direction").setNumber(0);
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("left")));
}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].flipX(true);
}
}{runtimeScene.getVariables().get("Player1Direction").setNumber(180);
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}}
}
if (gdjs.PlayerBaseCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Jump");
}
}}

}


}; //End of gdjs.PlayerBaseCode.eventsList0x70a0a4
gdjs.PlayerBaseCode.eventsList0x68cf74 = function(runtimeScene) {

{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("right")));
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].flipX(false);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("up")));
}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.PlayerBaseCode.GDPlayerObjects3[i].isCurrentAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Punch")) ) {
        gdjs.PlayerBaseCode.condition3IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
}
}
if (gdjs.PlayerBaseCode.condition3IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + "Walk");
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("CanDoUpB")).setNumber(1);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.PlayerBaseCode.GDPlayerObjects3[i].isCurrentAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + "Punch")) ) {
        gdjs.PlayerBaseCode.condition3IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.PlayerBaseCode.condition4IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
}
}
}
if (gdjs.PlayerBaseCode.condition4IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + "Stand");
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("right")));
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].flipX(false);
}
}{runtimeScene.getVariables().get("Player2Direction").setNumber(0);
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("left")));
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].flipX(true);
}
}{runtimeScene.getVariables().get("Player2Direction").setNumber(180);
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
}
if (gdjs.PlayerBaseCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + "Jump");
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


}; //End of gdjs.PlayerBaseCode.eventsList0x68cf74
gdjs.PlayerBaseCode.eventsList0x7c89c4 = function(runtimeScene) {

{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if (gdjs.PlayerBaseCode.condition0IsTrue_0.val) {
gdjs.PlayerBaseCode.GDHitbox1Objects3.createFrom(runtimeScene.getObjects("Hitbox1"));
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDHitbox1Objects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDHitbox1Objects3[i].setPosition((( gdjs.PlayerBaseCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects3[0].getPointX("")),(( gdjs.PlayerBaseCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects3[0].getPointY("")));
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if (gdjs.PlayerBaseCode.condition0IsTrue_0.val) {
gdjs.PlayerBaseCode.GDHitbox2Objects2.createFrom(runtimeScene.getObjects("Hitbox2"));
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDHitbox2Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDHitbox2Objects2[i].setPosition((( gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects2[0].getPointX("")),(( gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


}; //End of gdjs.PlayerBaseCode.eventsList0x7c89c4
gdjs.PlayerBaseCode.eventsList0x7c9bb4 = function(runtimeScene) {

{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].hasAnimationEnded() ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].hasAnimationEnded() ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].hasAnimationEnded() ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].isCurrentAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Punch") ) {
        gdjs.PlayerBaseCode.condition3IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
}
}
if (gdjs.PlayerBaseCode.condition3IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Stand");
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].hasAnimationEnded() ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].isCurrentAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + "Punch") ) {
        gdjs.PlayerBaseCode.condition3IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
}
}
if (gdjs.PlayerBaseCode.condition3IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + "Stand");
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("neutral")));
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition2IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7784692);
}
}}
}
if (gdjs.PlayerBaseCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("neutral")));
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition2IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7011228);
}
}}
}
if (gdjs.PlayerBaseCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{}}

}


}; //End of gdjs.PlayerBaseCode.eventsList0x7c9bb4
gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox1Objects3Objects = Hashtable.newFrom({"Hitbox1": gdjs.PlayerBaseCode.GDHitbox1Objects3});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox2Objects3Objects = Hashtable.newFrom({"Hitbox2": gdjs.PlayerBaseCode.GDHitbox2Objects3});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox1Objects3Objects = Hashtable.newFrom({"Hitbox1": gdjs.PlayerBaseCode.GDHitbox1Objects3});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball2Objects3Objects = Hashtable.newFrom({"Fireball2": gdjs.PlayerBaseCode.GDFireball2Objects3});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox1Objects3Objects = Hashtable.newFrom({"Hitbox1": gdjs.PlayerBaseCode.GDHitbox1Objects3});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox2Objects3Objects = Hashtable.newFrom({"Hitbox2": gdjs.PlayerBaseCode.GDHitbox2Objects3});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox2Objects3Objects = Hashtable.newFrom({"Hitbox2": gdjs.PlayerBaseCode.GDHitbox2Objects3});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball1Objects3Objects = Hashtable.newFrom({"Fireball1": gdjs.PlayerBaseCode.GDFireball1Objects3});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PlayerBaseCode.GDPlayerObjects2});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDDeathBarrierObjects2Objects = Hashtable.newFrom({"DeathBarrier": gdjs.PlayerBaseCode.GDDeathBarrierObjects2});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PlayerBaseCode.GDPlayerObjects2});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDDeathBarrierObjects2Objects = Hashtable.newFrom({"DeathBarrier": gdjs.PlayerBaseCode.GDDeathBarrierObjects2});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDGameTextObjects2Objects = Hashtable.newFrom({"GameText": gdjs.PlayerBaseCode.GDGameTextObjects2});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDGameTextObjects2Objects = Hashtable.newFrom({"GameText": gdjs.PlayerBaseCode.GDGameTextObjects2});gdjs.PlayerBaseCode.eventsList0x7c30b4 = function(runtimeScene) {

{

gdjs.PlayerBaseCode.GDFireball2Objects2.length = 0;

gdjs.PlayerBaseCode.GDHitbox1Objects2.length = 0;

gdjs.PlayerBaseCode.GDHitbox2Objects2.length = 0;

gdjs.PlayerBaseCode.GDPlayerObjects2.length = 0;


gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition0IsTrue_0;
gdjs.PlayerBaseCode.GDFireball2Objects2_1final.length = 0;gdjs.PlayerBaseCode.GDHitbox1Objects2_1final.length = 0;gdjs.PlayerBaseCode.GDHitbox2Objects2_1final.length = 0;gdjs.PlayerBaseCode.GDPlayerObjects2_1final.length = 0;gdjs.PlayerBaseCode.condition0IsTrue_1.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_1.val = false;
{
gdjs.PlayerBaseCode.GDHitbox1Objects3.createFrom(runtimeScene.getObjects("Hitbox1"));
gdjs.PlayerBaseCode.GDHitbox2Objects3.createFrom(runtimeScene.getObjects("Hitbox2"));
gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));
{gdjs.PlayerBaseCode.conditionTrue_2 = gdjs.PlayerBaseCode.condition0IsTrue_1;
gdjs.PlayerBaseCode.condition0IsTrue_2.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_2.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_2.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_2.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_2.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_2.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox1Objects3Objects, gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox2Objects3Objects, false, runtimeScene, false);
}}
}
gdjs.PlayerBaseCode.conditionTrue_2.val = true && gdjs.PlayerBaseCode.condition0IsTrue_2.val && gdjs.PlayerBaseCode.condition1IsTrue_2.val && gdjs.PlayerBaseCode.condition2IsTrue_2.val;
}
if( gdjs.PlayerBaseCode.condition0IsTrue_1.val ) {
    gdjs.PlayerBaseCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDHitbox1Objects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDHitbox1Objects2_1final.indexOf(gdjs.PlayerBaseCode.GDHitbox1Objects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDHitbox1Objects2_1final.push(gdjs.PlayerBaseCode.GDHitbox1Objects3[j]);
    }
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDHitbox2Objects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDHitbox2Objects2_1final.indexOf(gdjs.PlayerBaseCode.GDHitbox2Objects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDHitbox2Objects2_1final.push(gdjs.PlayerBaseCode.GDHitbox2Objects3[j]);
    }
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDPlayerObjects2_1final.indexOf(gdjs.PlayerBaseCode.GDPlayerObjects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDPlayerObjects2_1final.push(gdjs.PlayerBaseCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.PlayerBaseCode.GDFireball2Objects3.createFrom(runtimeScene.getObjects("Fireball2"));
gdjs.PlayerBaseCode.GDHitbox1Objects3.createFrom(runtimeScene.getObjects("Hitbox1"));
gdjs.PlayerBaseCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox1Objects3Objects, gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball2Objects3Objects, false, runtimeScene, false);
if( gdjs.PlayerBaseCode.condition1IsTrue_1.val ) {
    gdjs.PlayerBaseCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDFireball2Objects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDFireball2Objects2_1final.indexOf(gdjs.PlayerBaseCode.GDFireball2Objects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDFireball2Objects2_1final.push(gdjs.PlayerBaseCode.GDFireball2Objects3[j]);
    }
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDHitbox1Objects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDHitbox1Objects2_1final.indexOf(gdjs.PlayerBaseCode.GDHitbox1Objects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDHitbox1Objects2_1final.push(gdjs.PlayerBaseCode.GDHitbox1Objects3[j]);
    }
}
}
{
gdjs.PlayerBaseCode.GDFireball2Objects2.createFrom(gdjs.PlayerBaseCode.GDFireball2Objects2_1final);
gdjs.PlayerBaseCode.GDHitbox1Objects2.createFrom(gdjs.PlayerBaseCode.GDHitbox1Objects2_1final);
gdjs.PlayerBaseCode.GDHitbox2Objects2.createFrom(gdjs.PlayerBaseCode.GDHitbox2Objects2_1final);
gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(gdjs.PlayerBaseCode.GDPlayerObjects2_1final);
}
}
}if (gdjs.PlayerBaseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDHitbox1Objects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDHitbox1Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDHitbox1Objects2[i].returnVariable(gdjs.PlayerBaseCode.GDHitbox1Objects2[i].getVariables().get("Hurty")).setNumber(1);
}
}}

}


{

gdjs.PlayerBaseCode.GDHitbox2Objects2.createFrom(runtimeScene.getObjects("Hitbox2"));
gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDHitbox2Objects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDHitbox2Objects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDHitbox2Objects2[i].getVariables().get("Hurty")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDHitbox2Objects2[k] = gdjs.PlayerBaseCode.GDHitbox2Objects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDHitbox2Objects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDHitbox2Objects2 */
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "generichit.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDHitbox2Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDHitbox2Objects2[i].returnVariable(gdjs.PlayerBaseCode.GDHitbox2Objects2[i].getVariables().get("Hurty")).setNumber(0);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).add(5);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].addPolarForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Player1Direction")) * -(1) + 20, (gdjs.RuntimeObject.getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Flying2");
}}

}


{

gdjs.PlayerBaseCode.GDFireball1Objects2.length = 0;

gdjs.PlayerBaseCode.GDHitbox1Objects2.length = 0;

gdjs.PlayerBaseCode.GDHitbox2Objects2.length = 0;

gdjs.PlayerBaseCode.GDPlayerObjects2.length = 0;


gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition0IsTrue_0;
gdjs.PlayerBaseCode.GDFireball1Objects2_1final.length = 0;gdjs.PlayerBaseCode.GDHitbox1Objects2_1final.length = 0;gdjs.PlayerBaseCode.GDHitbox2Objects2_1final.length = 0;gdjs.PlayerBaseCode.GDPlayerObjects2_1final.length = 0;gdjs.PlayerBaseCode.condition0IsTrue_1.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_1.val = false;
{
gdjs.PlayerBaseCode.GDHitbox1Objects3.createFrom(runtimeScene.getObjects("Hitbox1"));
gdjs.PlayerBaseCode.GDHitbox2Objects3.createFrom(runtimeScene.getObjects("Hitbox2"));
gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));
{gdjs.PlayerBaseCode.conditionTrue_2 = gdjs.PlayerBaseCode.condition0IsTrue_1;
gdjs.PlayerBaseCode.condition0IsTrue_2.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_2.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_2.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_2.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_2.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_2.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox1Objects3Objects, gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox2Objects3Objects, false, runtimeScene, false);
}}
}
gdjs.PlayerBaseCode.conditionTrue_2.val = true && gdjs.PlayerBaseCode.condition0IsTrue_2.val && gdjs.PlayerBaseCode.condition1IsTrue_2.val && gdjs.PlayerBaseCode.condition2IsTrue_2.val;
}
if( gdjs.PlayerBaseCode.condition0IsTrue_1.val ) {
    gdjs.PlayerBaseCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDHitbox1Objects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDHitbox1Objects2_1final.indexOf(gdjs.PlayerBaseCode.GDHitbox1Objects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDHitbox1Objects2_1final.push(gdjs.PlayerBaseCode.GDHitbox1Objects3[j]);
    }
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDHitbox2Objects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDHitbox2Objects2_1final.indexOf(gdjs.PlayerBaseCode.GDHitbox2Objects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDHitbox2Objects2_1final.push(gdjs.PlayerBaseCode.GDHitbox2Objects3[j]);
    }
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDPlayerObjects2_1final.indexOf(gdjs.PlayerBaseCode.GDPlayerObjects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDPlayerObjects2_1final.push(gdjs.PlayerBaseCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.PlayerBaseCode.GDFireball1Objects3.createFrom(runtimeScene.getObjects("Fireball1"));
gdjs.PlayerBaseCode.GDHitbox2Objects3.createFrom(runtimeScene.getObjects("Hitbox2"));
gdjs.PlayerBaseCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDHitbox2Objects3Objects, gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball1Objects3Objects, false, runtimeScene, false);
if( gdjs.PlayerBaseCode.condition1IsTrue_1.val ) {
    gdjs.PlayerBaseCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDFireball1Objects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDFireball1Objects2_1final.indexOf(gdjs.PlayerBaseCode.GDFireball1Objects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDFireball1Objects2_1final.push(gdjs.PlayerBaseCode.GDFireball1Objects3[j]);
    }
    for(var j = 0, jLen = gdjs.PlayerBaseCode.GDHitbox2Objects3.length;j<jLen;++j) {
        if ( gdjs.PlayerBaseCode.GDHitbox2Objects2_1final.indexOf(gdjs.PlayerBaseCode.GDHitbox2Objects3[j]) === -1 )
            gdjs.PlayerBaseCode.GDHitbox2Objects2_1final.push(gdjs.PlayerBaseCode.GDHitbox2Objects3[j]);
    }
}
}
{
gdjs.PlayerBaseCode.GDFireball1Objects2.createFrom(gdjs.PlayerBaseCode.GDFireball1Objects2_1final);
gdjs.PlayerBaseCode.GDHitbox1Objects2.createFrom(gdjs.PlayerBaseCode.GDHitbox1Objects2_1final);
gdjs.PlayerBaseCode.GDHitbox2Objects2.createFrom(gdjs.PlayerBaseCode.GDHitbox2Objects2_1final);
gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(gdjs.PlayerBaseCode.GDPlayerObjects2_1final);
}
}
}if (gdjs.PlayerBaseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDHitbox2Objects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDHitbox2Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDHitbox2Objects2[i].returnVariable(gdjs.PlayerBaseCode.GDHitbox2Objects2[i].getVariables().get("Hurty")).setNumber(1);
}
}}

}


{

gdjs.PlayerBaseCode.GDHitbox1Objects2.createFrom(runtimeScene.getObjects("Hitbox1"));
gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDHitbox1Objects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDHitbox1Objects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDHitbox1Objects2[i].getVariables().get("Hurty")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDHitbox1Objects2[k] = gdjs.PlayerBaseCode.GDHitbox1Objects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDHitbox1Objects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDHitbox1Objects2 */
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "generichit.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDHitbox1Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDHitbox1Objects2[i].returnVariable(gdjs.PlayerBaseCode.GDHitbox1Objects2[i].getVariables().get("Hurty")).setNumber(0);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).add(5);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].addPolarForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Player2Direction")) * -(1) + 20, (gdjs.RuntimeObject.getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Flying1");
}}

}


{

gdjs.PlayerBaseCode.GDDeathBarrierObjects2.createFrom(runtimeScene.getObjects("DeathBarrier"));
gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDPlayerObjects2Objects, gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDDeathBarrierObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDPlayer1NameObjects2.createFrom(runtimeScene.getObjects("Player1Name"));
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)).sub(1);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].setPosition((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("StartingX"))),(gdjs.RuntimeObject.getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("StartingY"))));
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer1NameObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer1NameObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + " x" + (gdjs.RuntimeObject.getVariableString(((gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PlayerBaseCode.GDPlayerObjects2[0].getVariables()).getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].clearForces();
}
}}

}


{

gdjs.PlayerBaseCode.GDDeathBarrierObjects2.createFrom(runtimeScene.getObjects("DeathBarrier"));
gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDPlayerObjects2Objects, gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDDeathBarrierObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDPlayer2NameObjects2.createFrom(runtimeScene.getObjects("Player2Name"));
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)).sub(1);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].setPosition((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("StartingX"))),(gdjs.RuntimeObject.getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("StartingY"))));
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer2NameObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer2NameObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + " x" + (gdjs.RuntimeObject.getVariableString(((gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PlayerBaseCode.GDPlayerObjects2[0].getVariables()).getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].clearForces();
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 0 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition1IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7091940);
}
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition2IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition3IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 1);
}}
}
}
if (gdjs.PlayerBaseCode.condition3IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDGameTextObjects2.length = 0;

{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().get("Winner").setNumber(2);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 69);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Wave8.wav", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDGameTextObjects2Objects, 96, 224, "");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "GameTimer");
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 0 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Winner")) == 2);
}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition3IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8141500);
}
}}
}
}
if (gdjs.PlayerBaseCode.condition3IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDGameTextObjects2.length = 0;

{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().get("Winner").setNumber(1);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 69);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Wave8.wav", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDGameTextObjects2Objects, 96, 224, "HUD");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "GameTimer");
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Flying2");
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].clearForces();
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Flying1");
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects1[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects1[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects1[k] = gdjs.PlayerBaseCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects1.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects1[i].clearForces();
}
}}

}


}; //End of gdjs.PlayerBaseCode.eventsList0x7c30b4
gdjs.PlayerBaseCode.eventsList0x7321f4 = function(runtimeScene) {

{


gdjs.PlayerBaseCode.eventsList0x70a0a4(runtimeScene);
}


{


gdjs.PlayerBaseCode.eventsList0x68cf74(runtimeScene);
}


{


gdjs.PlayerBaseCode.eventsList0x7c89c4(runtimeScene);
}


{


gdjs.PlayerBaseCode.eventsList0x7c9bb4(runtimeScene);
}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("neutral")));
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition2IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7072580);
}
}}
}
if (gdjs.PlayerBaseCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Punch");
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("neutral")));
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition2IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7858012);
}
}}
}
if (gdjs.PlayerBaseCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + "Punch");
}
}}

}


{


gdjs.PlayerBaseCode.eventsList0x7c30b4(runtimeScene);
}


}; //End of gdjs.PlayerBaseCode.eventsList0x7321f4
gdjs.PlayerBaseCode.eventsList0x6bfa0c = function(runtimeScene) {

{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) > -(10) ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDPlayer1DamageObjects2.createFrom(runtimeScene.getObjects("Player1Damage"));
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer1DamageObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer1DamageObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PlayerBaseCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))));
}
}}

}


{


gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayerBaseCode.condition0IsTrue_0.val) {
gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{runtimeScene.getGame().getVariables().get("Winner").setNumber(0);
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) > -(10) ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDPlayer2DamageObjects2.createFrom(runtimeScene.getObjects("Player2Damage"));
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer2DamageObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer2DamageObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PlayerBaseCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))));
}
}}

}


{


gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayerBaseCode.condition0IsTrue_0.val) {
gdjs.PlayerBaseCode.GDPlayer1DamageObjects2.createFrom(runtimeScene.getObjects("Player1Damage"));
gdjs.PlayerBaseCode.GDPlayer1NameObjects2.createFrom(runtimeScene.getObjects("Player1Name"));
gdjs.PlayerBaseCode.GDPlayer2DamageObjects2.createFrom(runtimeScene.getObjects("Player2Damage"));
gdjs.PlayerBaseCode.GDPlayer2NameObjects2.createFrom(runtimeScene.getObjects("Player2Name"));
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer1NameObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer1NameObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")) + " x" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer2NameObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer2NameObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name")) + " x" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer2DamageObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer2DamageObjects2[i].setOutline("255;255;255", 2);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer2NameObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer2NameObjects2[i].setOutline("255;255;255", 2);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer1NameObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer1NameObjects2[i].setOutline("255;255;255", 2);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayer1DamageObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayer1DamageObjects2[i].setOutline("255;255;255", 2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "GameTimer");
}}

}


{


gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "GameTimer");
}if (gdjs.PlayerBaseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Victory", false);
}}

}


}; //End of gdjs.PlayerBaseCode.eventsList0x6bfa0c
gdjs.PlayerBaseCode.eventsList0x7c6b94 = function(runtimeScene) {

{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition4IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition5IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition6IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("CanDoUpB")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("special")));
}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition3IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("up")));
}if ( gdjs.PlayerBaseCode.condition3IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition4IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("down"))));
}if ( gdjs.PlayerBaseCode.condition4IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition5IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("left"))));
}if ( gdjs.PlayerBaseCode.condition5IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition6IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("right"))));
}}
}
}
}
}
}
if (gdjs.PlayerBaseCode.condition6IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("CanDoUpB")).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UpBSpam1");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].addForceTowardPosition((gdjs.PlayerBaseCode.GDPlayerObjects3[i].getPointX("")), (gdjs.PlayerBaseCode.GDPlayerObjects3[i].getPointY("")) + 50, 20, 0);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "UpBSpam1");
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition4IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition5IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition6IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("CanDoUpB")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects3[k] = gdjs.PlayerBaseCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects3.length = k;}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("special")));
}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition3IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("up")));
}if ( gdjs.PlayerBaseCode.condition3IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition4IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("down"))));
}if ( gdjs.PlayerBaseCode.condition4IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition5IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("left"))));
}if ( gdjs.PlayerBaseCode.condition5IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition6IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("right"))));
}}
}
}
}
}
}
if (gdjs.PlayerBaseCode.condition6IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects3[i].getVariables().get("CanDoUpB")).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UpBSpam2");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects3[i].addForceTowardPosition((gdjs.PlayerBaseCode.GDPlayerObjects3[i].getPointX("")), (gdjs.PlayerBaseCode.GDPlayerObjects3[i].getPointY("")) + 50, 20, 0);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
{
gdjs.PlayerBaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "UpBSpam2");
}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition1IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}}
if (gdjs.PlayerBaseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PlayerBaseCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDPlayerObjects2[i].returnVariable(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


}; //End of gdjs.PlayerBaseCode.eventsList0x7c6b94
gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball1Objects2Objects = Hashtable.newFrom({"Fireball1": gdjs.PlayerBaseCode.GDFireball1Objects2});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball1Objects2Objects = Hashtable.newFrom({"Fireball1": gdjs.PlayerBaseCode.GDFireball1Objects2});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball2Objects2Objects = Hashtable.newFrom({"Fireball2": gdjs.PlayerBaseCode.GDFireball2Objects2});gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball2Objects1Objects = Hashtable.newFrom({"Fireball2": gdjs.PlayerBaseCode.GDFireball2Objects1});gdjs.PlayerBaseCode.eventsList0x6bc594 = function(runtimeScene) {

{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition4IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition5IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition6IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition7IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition8IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("special")));
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "FireballSpam1");
}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("up"))));
}if ( gdjs.PlayerBaseCode.condition3IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition4IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("down"))));
}if ( gdjs.PlayerBaseCode.condition4IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition5IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("left"))));
}if ( gdjs.PlayerBaseCode.condition5IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition6IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("right"))));
}if ( gdjs.PlayerBaseCode.condition6IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].isFlippedX() ) {
        gdjs.PlayerBaseCode.condition7IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition7IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition8IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7073580);
}
}}
}
}
}
}
}
}
}
if (gdjs.PlayerBaseCode.condition8IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDFireball1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball1Objects2Objects, (( gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDFireball1Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDFireball1Objects2[i].addPolarForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Player1Direction")) * -(1), 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireballSpam1");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDFireball1Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDFireball1Objects2[i].flipX(true);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition4IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition5IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition6IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition7IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition8IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 1 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("special")));
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "FireballSpam1");
}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("up"))));
}if ( gdjs.PlayerBaseCode.condition3IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition4IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("down"))));
}if ( gdjs.PlayerBaseCode.condition4IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition5IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("left"))));
}if ( gdjs.PlayerBaseCode.condition5IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition6IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("controls").getChild("right"))));
}if ( gdjs.PlayerBaseCode.condition6IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayerBaseCode.GDPlayerObjects2[i].isFlippedX()) ) {
        gdjs.PlayerBaseCode.condition7IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition7IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition8IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7791252);
}
}}
}
}
}
}
}
}
}
if (gdjs.PlayerBaseCode.condition8IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDFireball1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball1Objects2Objects, (( gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDFireball1Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDFireball1Objects2[i].addPolarForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Player1Direction")) * -(1), 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireballSpam1");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDFireball1Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDFireball1Objects2[i].flipX(false);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition4IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition5IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition6IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition7IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition8IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects2[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("special")));
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "FireballSpam2");
}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("up"))));
}if ( gdjs.PlayerBaseCode.condition3IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition4IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("down"))));
}if ( gdjs.PlayerBaseCode.condition4IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition5IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("left"))));
}if ( gdjs.PlayerBaseCode.condition5IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition6IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("right"))));
}if ( gdjs.PlayerBaseCode.condition6IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects2[i].isFlippedX() ) {
        gdjs.PlayerBaseCode.condition7IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects2[k] = gdjs.PlayerBaseCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects2.length = k;}if ( gdjs.PlayerBaseCode.condition7IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition8IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8377324);
}
}}
}
}
}
}
}
}
}
if (gdjs.PlayerBaseCode.condition8IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects2 */
gdjs.PlayerBaseCode.GDFireball2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball2Objects2Objects, (( gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PlayerBaseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDFireball2Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDFireball2Objects2[i].addPolarForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Player2Direction")) * -(1), 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireballSpam2");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDFireball2Objects2.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDFireball2Objects2[i].flipX(true);
}
}}

}


{

gdjs.PlayerBaseCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.PlayerBaseCode.condition0IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition1IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition2IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition3IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition4IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition5IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition6IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition7IsTrue_0.val = false;
gdjs.PlayerBaseCode.condition8IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.PlayerBaseCode.GDPlayerObjects1[i].getVariableNumber(gdjs.PlayerBaseCode.GDPlayerObjects1[i].getVariables().get("PlayerNumber")) == 2 ) {
        gdjs.PlayerBaseCode.condition0IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects1[k] = gdjs.PlayerBaseCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects1.length = k;}if ( gdjs.PlayerBaseCode.condition0IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("special")));
}if ( gdjs.PlayerBaseCode.condition1IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "FireballSpam2");
}if ( gdjs.PlayerBaseCode.condition2IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("up"))));
}if ( gdjs.PlayerBaseCode.condition3IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition4IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("down"))));
}if ( gdjs.PlayerBaseCode.condition4IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition5IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("left"))));
}if ( gdjs.PlayerBaseCode.condition5IsTrue_0.val ) {
{
gdjs.PlayerBaseCode.condition6IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("controls").getChild("right"))));
}if ( gdjs.PlayerBaseCode.condition6IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlayerBaseCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayerBaseCode.GDPlayerObjects1[i].isFlippedX()) ) {
        gdjs.PlayerBaseCode.condition7IsTrue_0.val = true;
        gdjs.PlayerBaseCode.GDPlayerObjects1[k] = gdjs.PlayerBaseCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PlayerBaseCode.GDPlayerObjects1.length = k;}if ( gdjs.PlayerBaseCode.condition7IsTrue_0.val ) {
{
{gdjs.PlayerBaseCode.conditionTrue_1 = gdjs.PlayerBaseCode.condition8IsTrue_0;
gdjs.PlayerBaseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6817516);
}
}}
}
}
}
}
}
}
}
if (gdjs.PlayerBaseCode.condition8IsTrue_0.val) {
/* Reuse gdjs.PlayerBaseCode.GDPlayerObjects1 */
gdjs.PlayerBaseCode.GDFireball2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayerBaseCode.mapOfGDgdjs_46PlayerBaseCode_46GDFireball2Objects1Objects, (( gdjs.PlayerBaseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.PlayerBaseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PlayerBaseCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDFireball2Objects1.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDFireball2Objects1[i].addPolarForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Player2Direction")) * -(1), 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireballSpam2");
}{for(var i = 0, len = gdjs.PlayerBaseCode.GDFireball2Objects1.length ;i < len;++i) {
    gdjs.PlayerBaseCode.GDFireball2Objects1[i].flipX(false);
}
}}

}


}; //End of gdjs.PlayerBaseCode.eventsList0x6bc594
gdjs.PlayerBaseCode.eventsList0x7c6ae4 = function(runtimeScene) {

{


gdjs.PlayerBaseCode.eventsList0x7c6b94(runtimeScene);
}


{


gdjs.PlayerBaseCode.eventsList0x6bc594(runtimeScene);
}


}; //End of gdjs.PlayerBaseCode.eventsList0x7c6ae4
gdjs.PlayerBaseCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.PlayerBaseCode.eventsList0x7321f4(runtimeScene);
}


{


gdjs.PlayerBaseCode.eventsList0x6bfa0c(runtimeScene);
}


{


gdjs.PlayerBaseCode.eventsList0x7c6ae4(runtimeScene);
}


}; //End of gdjs.PlayerBaseCode.eventsList0x5b7a18


gdjs.PlayerBaseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayerBaseCode.GDPlayerObjects1.length = 0;
gdjs.PlayerBaseCode.GDPlayerObjects2.length = 0;
gdjs.PlayerBaseCode.GDPlayerObjects3.length = 0;
gdjs.PlayerBaseCode.GDPlayerObjects4.length = 0;
gdjs.PlayerBaseCode.GDHitbox1Objects1.length = 0;
gdjs.PlayerBaseCode.GDHitbox1Objects2.length = 0;
gdjs.PlayerBaseCode.GDHitbox1Objects3.length = 0;
gdjs.PlayerBaseCode.GDHitbox1Objects4.length = 0;
gdjs.PlayerBaseCode.GDHitbox2Objects1.length = 0;
gdjs.PlayerBaseCode.GDHitbox2Objects2.length = 0;
gdjs.PlayerBaseCode.GDHitbox2Objects3.length = 0;
gdjs.PlayerBaseCode.GDHitbox2Objects4.length = 0;
gdjs.PlayerBaseCode.GDDeathBarrierObjects1.length = 0;
gdjs.PlayerBaseCode.GDDeathBarrierObjects2.length = 0;
gdjs.PlayerBaseCode.GDDeathBarrierObjects3.length = 0;
gdjs.PlayerBaseCode.GDDeathBarrierObjects4.length = 0;
gdjs.PlayerBaseCode.GDPlayer2DamageObjects1.length = 0;
gdjs.PlayerBaseCode.GDPlayer2DamageObjects2.length = 0;
gdjs.PlayerBaseCode.GDPlayer2DamageObjects3.length = 0;
gdjs.PlayerBaseCode.GDPlayer2DamageObjects4.length = 0;
gdjs.PlayerBaseCode.GDPlayer1DamageObjects1.length = 0;
gdjs.PlayerBaseCode.GDPlayer1DamageObjects2.length = 0;
gdjs.PlayerBaseCode.GDPlayer1DamageObjects3.length = 0;
gdjs.PlayerBaseCode.GDPlayer1DamageObjects4.length = 0;
gdjs.PlayerBaseCode.GDPlayer2NameObjects1.length = 0;
gdjs.PlayerBaseCode.GDPlayer2NameObjects2.length = 0;
gdjs.PlayerBaseCode.GDPlayer2NameObjects3.length = 0;
gdjs.PlayerBaseCode.GDPlayer2NameObjects4.length = 0;
gdjs.PlayerBaseCode.GDPlayer1NameObjects1.length = 0;
gdjs.PlayerBaseCode.GDPlayer1NameObjects2.length = 0;
gdjs.PlayerBaseCode.GDPlayer1NameObjects3.length = 0;
gdjs.PlayerBaseCode.GDPlayer1NameObjects4.length = 0;
gdjs.PlayerBaseCode.GDFireball2Objects1.length = 0;
gdjs.PlayerBaseCode.GDFireball2Objects2.length = 0;
gdjs.PlayerBaseCode.GDFireball2Objects3.length = 0;
gdjs.PlayerBaseCode.GDFireball2Objects4.length = 0;
gdjs.PlayerBaseCode.GDFireball1Objects1.length = 0;
gdjs.PlayerBaseCode.GDFireball1Objects2.length = 0;
gdjs.PlayerBaseCode.GDFireball1Objects3.length = 0;
gdjs.PlayerBaseCode.GDFireball1Objects4.length = 0;
gdjs.PlayerBaseCode.GDGameTextObjects1.length = 0;
gdjs.PlayerBaseCode.GDGameTextObjects2.length = 0;
gdjs.PlayerBaseCode.GDGameTextObjects3.length = 0;
gdjs.PlayerBaseCode.GDGameTextObjects4.length = 0;

gdjs.PlayerBaseCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['PlayerBaseCode'] = gdjs.PlayerBaseCode;
