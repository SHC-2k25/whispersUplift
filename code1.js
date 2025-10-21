gdjs.CutsceneCode = {};
gdjs.CutsceneCode.localVariables = [];
gdjs.CutsceneCode.idToCallbackMap = new Map();
gdjs.CutsceneCode.GDdois_9595felizesObjects1= [];
gdjs.CutsceneCode.GDdois_9595felizesObjects2= [];
gdjs.CutsceneCode.GDtres_9595felizesObjects1= [];
gdjs.CutsceneCode.GDtres_9595felizesObjects2= [];
gdjs.CutsceneCode.GDcriacao_9595shObjects1= [];
gdjs.CutsceneCode.GDcriacao_9595shObjects2= [];
gdjs.CutsceneCode.GDdois_9595machucadosObjects1= [];
gdjs.CutsceneCode.GDdois_9595machucadosObjects2= [];
gdjs.CutsceneCode.GDdois_9595determinadosObjects1= [];
gdjs.CutsceneCode.GDdois_9595determinadosObjects2= [];
gdjs.CutsceneCode.GDpretoObjects1= [];
gdjs.CutsceneCode.GDpretoObjects2= [];
gdjs.CutsceneCode.GDRight_9595ArrowObjects1= [];
gdjs.CutsceneCode.GDRight_9595ArrowObjects2= [];
gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1= [];
gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects2= [];
gdjs.CutsceneCode.GDroubaro_9595shObjects1= [];
gdjs.CutsceneCode.GDroubaro_9595shObjects2= [];
gdjs.CutsceneCode.GDtres_9595tristesObjects1= [];
gdjs.CutsceneCode.GDtres_9595tristesObjects2= [];
gdjs.CutsceneCode.GDcriacaoObjects1= [];
gdjs.CutsceneCode.GDcriacaoObjects2= [];
gdjs.CutsceneCode.GD_95953_9595felizesObjects1= [];
gdjs.CutsceneCode.GD_95953_9595felizesObjects2= [];
gdjs.CutsceneCode.GDroubaroObjects1= [];
gdjs.CutsceneCode.GDroubaroObjects2= [];
gdjs.CutsceneCode.GDdeterminadoObjects1= [];
gdjs.CutsceneCode.GDdeterminadoObjects2= [];
gdjs.CutsceneCode.GDBgObjects1= [];
gdjs.CutsceneCode.GDBgObjects2= [];
gdjs.CutsceneCode.GDPenguino_9595bot_95227oObjects1= [];
gdjs.CutsceneCode.GDPenguino_9595bot_95227oObjects2= [];
gdjs.CutsceneCode.GDMrman_9595bot_95227oObjects1= [];
gdjs.CutsceneCode.GDMrman_9595bot_95227oObjects2= [];
gdjs.CutsceneCode.GDbgObjects1= [];
gdjs.CutsceneCode.GDbgObjects2= [];
gdjs.CutsceneCode.GDPlayer2Objects1= [];
gdjs.CutsceneCode.GDPlayer2Objects2= [];
gdjs.CutsceneCode.GDRock_9595HeadObjects1= [];
gdjs.CutsceneCode.GDRock_9595HeadObjects2= [];
gdjs.CutsceneCode.GDbg_9595roxoObjects1= [];
gdjs.CutsceneCode.GDbg_9595roxoObjects2= [];
gdjs.CutsceneCode.GDDino_9595DouxObjects1= [];
gdjs.CutsceneCode.GDDino_9595DouxObjects2= [];
gdjs.CutsceneCode.GDblock_9595strong_9595dangerObjects1= [];
gdjs.CutsceneCode.GDblock_9595strong_9595dangerObjects2= [];


gdjs.CutsceneCode.mapOfGDgdjs_9546CutsceneCode_9546GDcriacao_95959595shObjects1Objects = Hashtable.newFrom({"criacao_sh": gdjs.CutsceneCode.GDcriacao_9595shObjects1});
gdjs.CutsceneCode.mapOfGDgdjs_9546CutsceneCode_9546GDtres_95959595felizesObjects1Objects = Hashtable.newFrom({"tres_felizes": gdjs.CutsceneCode.GDtres_9595felizesObjects1});
gdjs.CutsceneCode.mapOfGDgdjs_9546CutsceneCode_9546GDroubaro_95959595shObjects1Objects = Hashtable.newFrom({"roubaro_sh": gdjs.CutsceneCode.GDroubaro_9595shObjects1});
gdjs.CutsceneCode.mapOfGDgdjs_9546CutsceneCode_9546GDdois_95959595determinadosObjects1Objects = Hashtable.newFrom({"dois_determinados": gdjs.CutsceneCode.GDdois_9595determinadosObjects1});
gdjs.CutsceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_3_felizes"), gdjs.CutsceneCode.GD_95953_9595felizesObjects1);
gdjs.copyArray(runtimeScene.getObjects("criacao"), gdjs.CutsceneCode.GDcriacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("determinado"), gdjs.CutsceneCode.GDdeterminadoObjects1);
gdjs.copyArray(runtimeScene.getObjects("roubaro"), gdjs.CutsceneCode.GDroubaroObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Hollow Knight OST - Decisive Battle.mp3", true, 15, 1);
}
{for(var i = 0, len = gdjs.CutsceneCode.GDdeterminadoObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDdeterminadoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDcriacaoObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDcriacaoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GD_95953_9595felizesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GD_95953_9595felizesObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDroubaroObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDroubaroObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.CutsceneCode.GDRight_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CutsceneCode.GDRight_9595ArrowObjects1.length;i<l;++i) {
    if ( gdjs.CutsceneCode.GDRight_9595ArrowObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CutsceneCode.GDRight_9595ArrowObjects1[k] = gdjs.CutsceneCode.GDRight_9595ArrowObjects1[i];
        ++k;
    }
}
gdjs.CutsceneCode.GDRight_9595ArrowObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("criacao"), gdjs.CutsceneCode.GDcriacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tres_tristes"), gdjs.CutsceneCode.GDtres_9595tristesObjects1);
gdjs.copyArray(runtimeScene.getObjects("três_tristes"), gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1);
gdjs.CutsceneCode.GDcriacao_9595shObjects1.length = 0;

{for(var i = 0, len = gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDtres_9595tristesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDtres_9595tristesObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDtres_9595tristesObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDcriacaoObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDcriacaoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDcriacaoObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CutsceneCode.mapOfGDgdjs_9546CutsceneCode_9546GDcriacao_95959595shObjects1Objects, 260, 19, "");
}
{for(var i = 0, len = gdjs.CutsceneCode.GDcriacao_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDcriacao_9595shObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDcriacao_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDcriacao_9595shObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDcriacao_9595shObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDcriacao_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDcriacao_9595shObjects1[i].getBehavior("Scale").setScale(1.102);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_3_felizes"), gdjs.CutsceneCode.GD_95953_9595felizesObjects1);
gdjs.copyArray(runtimeScene.getObjects("criacao"), gdjs.CutsceneCode.GDcriacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("criacao_sh"), gdjs.CutsceneCode.GDcriacao_9595shObjects1);
gdjs.copyArray(runtimeScene.getObjects("três_tristes"), gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1);
gdjs.CutsceneCode.GDtres_9595felizesObjects1.length = 0;

{for(var i = 0, len = gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDcriacao_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDcriacao_9595shObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDcriacao_9595shObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDcriacaoObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDcriacaoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDcriacaoObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GD_95953_9595felizesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GD_95953_9595felizesObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GD_95953_9595felizesObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CutsceneCode.mapOfGDgdjs_9546CutsceneCode_9546GDtres_95959595felizesObjects1Objects, 260, 19, "");
}
{for(var i = 0, len = gdjs.CutsceneCode.GDtres_9595felizesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDtres_9595felizesObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDtres_9595felizesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDtres_9595felizesObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDtres_9595felizesObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GD_95953_9595felizesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GD_95953_9595felizesObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GD_95953_9595felizesObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDtres_9595felizesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDtres_9595felizesObjects1[i].getBehavior("Scale").setScale(1.102);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_3_felizes"), gdjs.CutsceneCode.GD_95953_9595felizesObjects1);
gdjs.copyArray(runtimeScene.getObjects("criacao_sh"), gdjs.CutsceneCode.GDcriacao_9595shObjects1);
gdjs.copyArray(runtimeScene.getObjects("roubaro"), gdjs.CutsceneCode.GDroubaroObjects1);
gdjs.copyArray(runtimeScene.getObjects("tres_felizes"), gdjs.CutsceneCode.GDtres_9595felizesObjects1);
gdjs.CutsceneCode.GDroubaro_9595shObjects1.length = 0;

{for(var i = 0, len = gdjs.CutsceneCode.GDcriacao_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDcriacao_9595shObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDtres_9595felizesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDtres_9595felizesObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDtres_9595felizesObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GD_95953_9595felizesObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GD_95953_9595felizesObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GD_95953_9595felizesObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDroubaroObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDroubaroObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDroubaroObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CutsceneCode.mapOfGDgdjs_9546CutsceneCode_9546GDroubaro_95959595shObjects1Objects, 240, 19, "");
}
{for(var i = 0, len = gdjs.CutsceneCode.GDroubaro_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDroubaro_9595shObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDroubaro_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDroubaro_9595shObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDroubaro_9595shObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDroubaro_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDroubaro_9595shObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("determinado"), gdjs.CutsceneCode.GDdeterminadoObjects1);
gdjs.copyArray(runtimeScene.getObjects("roubaro"), gdjs.CutsceneCode.GDroubaroObjects1);
gdjs.copyArray(runtimeScene.getObjects("roubaro_sh"), gdjs.CutsceneCode.GDroubaro_9595shObjects1);
gdjs.CutsceneCode.GDdois_9595determinadosObjects1.length = 0;

{for(var i = 0, len = gdjs.CutsceneCode.GDroubaro_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDroubaro_9595shObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDroubaro_9595shObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDroubaro_9595shObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDroubaro_9595shObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDroubaroObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDroubaroObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDroubaroObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDdeterminadoObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDdeterminadoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDdeterminadoObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CutsceneCode.mapOfGDgdjs_9546CutsceneCode_9546GDdois_95959595determinadosObjects1Objects, 260, 19, "");
}
{for(var i = 0, len = gdjs.CutsceneCode.GDdois_9595determinadosObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDdois_9595determinadosObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDdois_9595determinadosObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDdois_9595determinadosObjects1[i].getBehavior("Opacity").setOpacity(gdjs.CutsceneCode.GDdois_9595determinadosObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDdois_9595determinadosObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDdois_9595determinadosObjects1[i].getBehavior("Scale").setScale(0.76);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() == 4);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Seleção de Personagens", false);
}
}

}


};

gdjs.CutsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CutsceneCode.GDdois_9595felizesObjects1.length = 0;
gdjs.CutsceneCode.GDdois_9595felizesObjects2.length = 0;
gdjs.CutsceneCode.GDtres_9595felizesObjects1.length = 0;
gdjs.CutsceneCode.GDtres_9595felizesObjects2.length = 0;
gdjs.CutsceneCode.GDcriacao_9595shObjects1.length = 0;
gdjs.CutsceneCode.GDcriacao_9595shObjects2.length = 0;
gdjs.CutsceneCode.GDdois_9595machucadosObjects1.length = 0;
gdjs.CutsceneCode.GDdois_9595machucadosObjects2.length = 0;
gdjs.CutsceneCode.GDdois_9595determinadosObjects1.length = 0;
gdjs.CutsceneCode.GDdois_9595determinadosObjects2.length = 0;
gdjs.CutsceneCode.GDpretoObjects1.length = 0;
gdjs.CutsceneCode.GDpretoObjects2.length = 0;
gdjs.CutsceneCode.GDRight_9595ArrowObjects1.length = 0;
gdjs.CutsceneCode.GDRight_9595ArrowObjects2.length = 0;
gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1.length = 0;
gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects2.length = 0;
gdjs.CutsceneCode.GDroubaro_9595shObjects1.length = 0;
gdjs.CutsceneCode.GDroubaro_9595shObjects2.length = 0;
gdjs.CutsceneCode.GDtres_9595tristesObjects1.length = 0;
gdjs.CutsceneCode.GDtres_9595tristesObjects2.length = 0;
gdjs.CutsceneCode.GDcriacaoObjects1.length = 0;
gdjs.CutsceneCode.GDcriacaoObjects2.length = 0;
gdjs.CutsceneCode.GD_95953_9595felizesObjects1.length = 0;
gdjs.CutsceneCode.GD_95953_9595felizesObjects2.length = 0;
gdjs.CutsceneCode.GDroubaroObjects1.length = 0;
gdjs.CutsceneCode.GDroubaroObjects2.length = 0;
gdjs.CutsceneCode.GDdeterminadoObjects1.length = 0;
gdjs.CutsceneCode.GDdeterminadoObjects2.length = 0;
gdjs.CutsceneCode.GDBgObjects1.length = 0;
gdjs.CutsceneCode.GDBgObjects2.length = 0;
gdjs.CutsceneCode.GDPenguino_9595bot_95227oObjects1.length = 0;
gdjs.CutsceneCode.GDPenguino_9595bot_95227oObjects2.length = 0;
gdjs.CutsceneCode.GDMrman_9595bot_95227oObjects1.length = 0;
gdjs.CutsceneCode.GDMrman_9595bot_95227oObjects2.length = 0;
gdjs.CutsceneCode.GDbgObjects1.length = 0;
gdjs.CutsceneCode.GDbgObjects2.length = 0;
gdjs.CutsceneCode.GDPlayer2Objects1.length = 0;
gdjs.CutsceneCode.GDPlayer2Objects2.length = 0;
gdjs.CutsceneCode.GDRock_9595HeadObjects1.length = 0;
gdjs.CutsceneCode.GDRock_9595HeadObjects2.length = 0;
gdjs.CutsceneCode.GDbg_9595roxoObjects1.length = 0;
gdjs.CutsceneCode.GDbg_9595roxoObjects2.length = 0;
gdjs.CutsceneCode.GDDino_9595DouxObjects1.length = 0;
gdjs.CutsceneCode.GDDino_9595DouxObjects2.length = 0;
gdjs.CutsceneCode.GDblock_9595strong_9595dangerObjects1.length = 0;
gdjs.CutsceneCode.GDblock_9595strong_9595dangerObjects2.length = 0;

gdjs.CutsceneCode.eventsList0(runtimeScene);
gdjs.CutsceneCode.GDdois_9595felizesObjects1.length = 0;
gdjs.CutsceneCode.GDdois_9595felizesObjects2.length = 0;
gdjs.CutsceneCode.GDtres_9595felizesObjects1.length = 0;
gdjs.CutsceneCode.GDtres_9595felizesObjects2.length = 0;
gdjs.CutsceneCode.GDcriacao_9595shObjects1.length = 0;
gdjs.CutsceneCode.GDcriacao_9595shObjects2.length = 0;
gdjs.CutsceneCode.GDdois_9595machucadosObjects1.length = 0;
gdjs.CutsceneCode.GDdois_9595machucadosObjects2.length = 0;
gdjs.CutsceneCode.GDdois_9595determinadosObjects1.length = 0;
gdjs.CutsceneCode.GDdois_9595determinadosObjects2.length = 0;
gdjs.CutsceneCode.GDpretoObjects1.length = 0;
gdjs.CutsceneCode.GDpretoObjects2.length = 0;
gdjs.CutsceneCode.GDRight_9595ArrowObjects1.length = 0;
gdjs.CutsceneCode.GDRight_9595ArrowObjects2.length = 0;
gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects1.length = 0;
gdjs.CutsceneCode.GDtr_95234s_9595tristesObjects2.length = 0;
gdjs.CutsceneCode.GDroubaro_9595shObjects1.length = 0;
gdjs.CutsceneCode.GDroubaro_9595shObjects2.length = 0;
gdjs.CutsceneCode.GDtres_9595tristesObjects1.length = 0;
gdjs.CutsceneCode.GDtres_9595tristesObjects2.length = 0;
gdjs.CutsceneCode.GDcriacaoObjects1.length = 0;
gdjs.CutsceneCode.GDcriacaoObjects2.length = 0;
gdjs.CutsceneCode.GD_95953_9595felizesObjects1.length = 0;
gdjs.CutsceneCode.GD_95953_9595felizesObjects2.length = 0;
gdjs.CutsceneCode.GDroubaroObjects1.length = 0;
gdjs.CutsceneCode.GDroubaroObjects2.length = 0;
gdjs.CutsceneCode.GDdeterminadoObjects1.length = 0;
gdjs.CutsceneCode.GDdeterminadoObjects2.length = 0;
gdjs.CutsceneCode.GDBgObjects1.length = 0;
gdjs.CutsceneCode.GDBgObjects2.length = 0;
gdjs.CutsceneCode.GDPenguino_9595bot_95227oObjects1.length = 0;
gdjs.CutsceneCode.GDPenguino_9595bot_95227oObjects2.length = 0;
gdjs.CutsceneCode.GDMrman_9595bot_95227oObjects1.length = 0;
gdjs.CutsceneCode.GDMrman_9595bot_95227oObjects2.length = 0;
gdjs.CutsceneCode.GDbgObjects1.length = 0;
gdjs.CutsceneCode.GDbgObjects2.length = 0;
gdjs.CutsceneCode.GDPlayer2Objects1.length = 0;
gdjs.CutsceneCode.GDPlayer2Objects2.length = 0;
gdjs.CutsceneCode.GDRock_9595HeadObjects1.length = 0;
gdjs.CutsceneCode.GDRock_9595HeadObjects2.length = 0;
gdjs.CutsceneCode.GDbg_9595roxoObjects1.length = 0;
gdjs.CutsceneCode.GDbg_9595roxoObjects2.length = 0;
gdjs.CutsceneCode.GDDino_9595DouxObjects1.length = 0;
gdjs.CutsceneCode.GDDino_9595DouxObjects2.length = 0;
gdjs.CutsceneCode.GDblock_9595strong_9595dangerObjects1.length = 0;
gdjs.CutsceneCode.GDblock_9595strong_9595dangerObjects2.length = 0;


return;

}

gdjs['CutsceneCode'] = gdjs.CutsceneCode;
