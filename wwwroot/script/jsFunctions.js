
var dotnetObjectRef;
window.datafeeds = {
    setDotNetRef: function (dotNetObject) {
        dotnetObjectRef = dotNetObject;
        console.log("Ref created");
    },
    destroy: function (dotNetObject) {
        console.log("Ref destroyed");
    }
}

async function helloBlazor(name) {
    var blazorResult = await dotnetObjectRef.invokeMethodAsync("BlazorAddIn","HELLOBLAZOR", name);
    return blazorResult;
}

var jsFunctions = {};
jsFunctions.calculateSquareRoot = function (number) {
    //const number = prompt("Enter your number");
    return DotNet.invokeMethodAsync("BlazorAddIn", "CalculateSquareRoot", number);
}

//jsFunctions.steamtp = function (number) {
//    //const number = prompt("Enter your number");
//    //return DotNet.invokeMethodAsync("BlazorAddIn", "steamtp", number);
//    return DotNet.invokeMethodAsync("BlazorAddIn", "CalculateSquareRoot", number);
//}