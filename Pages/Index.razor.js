/* Copyright(c) Maarten van Stam. All rights reserved. Licensed under the MIT License. */
/**
 * Basic function to show how to insert a value into cell A1 on the selected Excel worksheet.
 */
export function helloButton() {

    return Excel.run(context => {

        // Insert text 'Hello BRFLUID!' into cell B3.
        context.workbook.worksheets.getActiveWorksheet().getRange("B3").values = [['Hello BRFLUID!']];

        // sync the context to run the previous API call, and return.
        return context.sync();
    });
}




//var dotnetObjectRef;
//window.datafeeds = {
//    setDotNetRef: function (dotNetObject) {
//        dotnetObjectRef = dotNetObject;
//        console.log("Ref created");
//    },
//    destroy: function (dotNetObject) {
//        console.log("Ref destroyed");
//    }
//}

//async function helloBlazor(name) {
//    var blazorResult = await dotnetObjectRef.invokeMethodAsync('HELLOBLAZOR', name);
//    return blazorResult;
//}