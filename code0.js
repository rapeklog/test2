gdjs.start_95viedeoCode = {};
gdjs.start_95viedeoCode.GDElenaObjects1= [];
gdjs.start_95viedeoCode.GDElenaObjects2= [];


gdjs.start_95viedeoCode.asyncCallback9189540 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "loading", false);
}}
gdjs.start_95viedeoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.start_95viedeoCode.asyncCallback9189540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.start_95viedeoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.start_95viedeoCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.start_95viedeoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_95viedeoCode.GDElenaObjects1.length = 0;
gdjs.start_95viedeoCode.GDElenaObjects2.length = 0;

gdjs.start_95viedeoCode.eventsList1(runtimeScene);

return;

}

gdjs['start_95viedeoCode'] = gdjs.start_95viedeoCode;
