gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDWhisper_9595s_9595UpliftObjects1= [];
gdjs.MenuCode.GDWhisper_9595s_9595UpliftObjects2= [];
gdjs.MenuCode.GDGreenButtonObjects1= [];
gdjs.MenuCode.GDGreenButtonObjects2= [];
gdjs.MenuCode.GDGreenButton2Objects1= [];
gdjs.MenuCode.GDGreenButton2Objects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDBgObjects1= [];
gdjs.MenuCode.GDBgObjects2= [];
gdjs.MenuCode.GDPenguino_9595bot_95227oObjects1= [];
gdjs.MenuCode.GDPenguino_9595bot_95227oObjects2= [];
gdjs.MenuCode.GDMrman_9595bot_95227oObjects1= [];
gdjs.MenuCode.GDMrman_9595bot_95227oObjects2= [];
gdjs.MenuCode.GDbgObjects1= [];
gdjs.MenuCode.GDbgObjects2= [];
gdjs.MenuCode.GDPlayer2Objects1= [];
gdjs.MenuCode.GDPlayer2Objects2= [];
gdjs.MenuCode.GDRock_9595HeadObjects1= [];
gdjs.MenuCode.GDRock_9595HeadObjects2= [];
gdjs.MenuCode.GDbg_9595roxoObjects1= [];
gdjs.MenuCode.GDbg_9595roxoObjects2= [];
gdjs.MenuCode.GDDino_9595DouxObjects1= [];
gdjs.MenuCode.GDDino_9595DouxObjects2= [];
gdjs.MenuCode.GDblock_9595strong_9595dangerObjects1= [];
gdjs.MenuCode.GDblock_9595strong_9595dangerObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.MenuCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGreenButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGreenButtonObjects1[k] = gdjs.MenuCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs.MenuCode.GDGreenButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGreenButton2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGreenButton2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGreenButton2Objects1[k] = gdjs.MenuCode.GDGreenButton2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGreenButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Seleção de Personagens Arc", false);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDWhisper_9595s_9595UpliftObjects1.length = 0;
gdjs.MenuCode.GDWhisper_9595s_9595UpliftObjects2.length = 0;
gdjs.MenuCode.GDGreenButtonObjects1.length = 0;
gdjs.MenuCode.GDGreenButtonObjects2.length = 0;
gdjs.MenuCode.GDGreenButton2Objects1.length = 0;
gdjs.MenuCode.GDGreenButton2Objects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDBgObjects1.length = 0;
gdjs.MenuCode.GDBgObjects2.length = 0;
gdjs.MenuCode.GDPenguino_9595bot_95227oObjects1.length = 0;
gdjs.MenuCode.GDPenguino_9595bot_95227oObjects2.length = 0;
gdjs.MenuCode.GDMrman_9595bot_95227oObjects1.length = 0;
gdjs.MenuCode.GDMrman_9595bot_95227oObjects2.length = 0;
gdjs.MenuCode.GDbgObjects1.length = 0;
gdjs.MenuCode.GDbgObjects2.length = 0;
gdjs.MenuCode.GDPlayer2Objects1.length = 0;
gdjs.MenuCode.GDPlayer2Objects2.length = 0;
gdjs.MenuCode.GDRock_9595HeadObjects1.length = 0;
gdjs.MenuCode.GDRock_9595HeadObjects2.length = 0;
gdjs.MenuCode.GDbg_9595roxoObjects1.length = 0;
gdjs.MenuCode.GDbg_9595roxoObjects2.length = 0;
gdjs.MenuCode.GDDino_9595DouxObjects1.length = 0;
gdjs.MenuCode.GDDino_9595DouxObjects2.length = 0;
gdjs.MenuCode.GDblock_9595strong_9595dangerObjects1.length = 0;
gdjs.MenuCode.GDblock_9595strong_9595dangerObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDWhisper_9595s_9595UpliftObjects1.length = 0;
gdjs.MenuCode.GDWhisper_9595s_9595UpliftObjects2.length = 0;
gdjs.MenuCode.GDGreenButtonObjects1.length = 0;
gdjs.MenuCode.GDGreenButtonObjects2.length = 0;
gdjs.MenuCode.GDGreenButton2Objects1.length = 0;
gdjs.MenuCode.GDGreenButton2Objects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDBgObjects1.length = 0;
gdjs.MenuCode.GDBgObjects2.length = 0;
gdjs.MenuCode.GDPenguino_9595bot_95227oObjects1.length = 0;
gdjs.MenuCode.GDPenguino_9595bot_95227oObjects2.length = 0;
gdjs.MenuCode.GDMrman_9595bot_95227oObjects1.length = 0;
gdjs.MenuCode.GDMrman_9595bot_95227oObjects2.length = 0;
gdjs.MenuCode.GDbgObjects1.length = 0;
gdjs.MenuCode.GDbgObjects2.length = 0;
gdjs.MenuCode.GDPlayer2Objects1.length = 0;
gdjs.MenuCode.GDPlayer2Objects2.length = 0;
gdjs.MenuCode.GDRock_9595HeadObjects1.length = 0;
gdjs.MenuCode.GDRock_9595HeadObjects2.length = 0;
gdjs.MenuCode.GDbg_9595roxoObjects1.length = 0;
gdjs.MenuCode.GDbg_9595roxoObjects2.length = 0;
gdjs.MenuCode.GDDino_9595DouxObjects1.length = 0;
gdjs.MenuCode.GDDino_9595DouxObjects2.length = 0;
gdjs.MenuCode.GDblock_9595strong_9595dangerObjects1.length = 0;
gdjs.MenuCode.GDblock_9595strong_9595dangerObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
