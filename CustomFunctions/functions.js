/* global clearInterval, console, setInterval */


/**
 * Returns the current version Library
 * @returns {string} String with the current time formatted for the current locale.
 */
function versionLibrary() {
    return "versionLibrary_20230219_BR_IF97steamTable";
}
CustomFunctions.associate("versionLibrary", versionLibrary);

/**
 * Add two numbers
 * @customfunction
 * @param {number} first First number
 * @param {number} second Second number
 * @returns {number} The sum of the two numbers.
 */
function add(first, second) {
    return first + second;
}
CustomFunctions.associate("ADD", add);

/**
 * Displays the current time once a second
 * @customfunction
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
function clock(invocation) {
    const timer = setInterval(() => {
        const time = currentTime();
        invocation.setResult(time);
    }, 1000);

    invocation.onCanceled = () => {
        clearInterval(timer);
    };
}
CustomFunctions.associate("CLOCK", clock);


/**
 * Returns the current time
 * @returns {string} String with the current time formatted for the current locale.
 */
function currentTime() {
    return new Date().toLocaleTimeString();
}

/**
 * Increments a value once a second.
 * @customfunction
 * @param {number} incrementBy Amount to increment
 * @param {CustomFunctions.StreamingInvocation<number>} invocation
 */
function increment(incrementBy, invocation) {
    let result = 0;
    const timer = setInterval(() => {
        result += incrementBy;
        invocation.setResult(result);
    }, 1000);

    invocation.onCanceled = () => {
        clearInterval(timer);
    };
}
CustomFunctions.associate("INCREMENT", increment);


/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param {string} message String to write.
 * @returns String to write.
 */
function logMessage(message) {
    console.log(message);

    return message;
}
CustomFunctions.associate("LOGMESSAGE", logMessage);


/**
 * hello to your name
 * @customfunction
 * @param {string} name Name
 * @returns {string} The name
 */
async function blazor(name) {
    return await helloBlazor(name);
}
CustomFunctions.associate("Blazor", blazor);

/**
 * Calculate Square root
 * @customfunction
 * @param {number} first First number
 * @returns {number} The sum of the two numbers.
 */
function sqrt(first) {
    return jsFunctions.calculateSquareRoot(first);
}
CustomFunctions.associate("SQRT", sqrt);

/**
 * Calculate Square root33
 * @customfunction
 * @param {number} second First number
 * @returns {number} The sum of the two numbers.
 */
function sqrt3(second) {
    return DotNet.invokeMethodAsync("BlazorAddIn", "CalculateSquareRoot", second);
    //return DotNet.invokeMethodAsync("BlazorAddIn", "steamTP", second);
}
CustomFunctions.associate("SQRT3", sqrt3);


////

/**
 * Get Darcy frictionFactor(Colebrook-White) with diameter, roughness, reynolds 
 * @customfunction
 * @param {number} input1 diameter
 * @param {number} intpu2 roughness 
 * @param {number} intpu3 reynolds number
 * @returns {number} get frictionFactor.
 */
function FrictionCalc1(input1, input2, input3) {
    return DotNet.invokeMethodAsync("BlazorAddIn", "BRFrictionCalc1", input1, input2, input3);
}
CustomFunctions.associate("FRICTIONFACTOR", FrictionCalc1);

/**
 * Get Darcy frictionFactor(Cheng) with diameter, roughness, reynolds_
 * @customfunction
 * @param {number} input1 diameter
 * @param {number} intpu2 roughness 
 * @param {number} intpu3 reynolds number
 * @returns {number} get frictionFactor.
 */
function FrictionCalcCheng(input1, input2, input3) {
    return DotNet.invokeMethodAsync("BlazorAddIn", "BRFrictionCalcCheng", input1, input2, input3);
}
CustomFunctions.associate("FRICTIONFACTORCHENG", FrictionCalcCheng);



/**
 * Get Saturated Temperature_'C with P
 * @customfunction
 * @param {number} pressure pressure 
 * @returns {number} get Saturacted Pressure.
 */
function steamTP(p) {
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamTP", p);
}
CustomFunctions.associate("STEAMTP", steamTP);

/**
 * Get Temperature_'C with PH 
 * @customfunction
 * @param {number} input1 pressure 
 * @param {number} intpu2 enthalpy 
 * @returns {number} get Temperature.
 */
function steamTPH(input1, input2) {
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamTPH", input1, input2);
}
CustomFunctions.associate("STEAMTPH", steamTPH);


/**
 * Get Temperature_'C with PS 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "entropy", Description = "kJ/kg-K"
 * @returns {number} Get Temperature_'C with PS
*/
function steamTPS(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamTPS", input1, input2);
}
CustomFunctions.associate("STEAMmTPS", steamTPS);

/**
 * Get Temperature_'C with HS 
 * @param {number} input1 "enthalpy", Description = "kJ/kg"
 * @param {number} input2 "entropy", Description = "kJ/kg-K"
 * @returns {number} Get Temperature_'C with HS 
*/
function steamTHS(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamTHS", input1, input2);
}
CustomFunctions.associate("STEAMTHS", steamTHS);
 
/**
 * Get Sat.Pressure_bara with T 
 * @param {number} input1 "temperature", Description = "'C"
 * @returns {number} Get Sat.Pressure_bara with T 
*/
function steamPT(input1){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamPT", input1);
}
CustomFunctions.associate("STEAMPT", steamPT);

/**
 * Get Enthalpy_kJ/kg with PT 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "temperature", Description = "'C"
 * @returns {number} Get Enthalpy_kJ/kg with PT 
*/
function steamHPT(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamHPT", input1, input2);
}
CustomFunctions.associate("STEAMHPT", steamHPT);

/**
 * Get Enthalpy_kJ/kg with T 
 * @param {number} input1 "pressure", Description = "bara",
 * @param {number} input2 "entropy", Description = "kJ/kg-K"
 * @returns {number} Get Enthalpy_kJ/kg with T 
*/
function steamHPS(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamHPS", input1, input2);
}
CustomFunctions.associate("STEAMHPS", steamHPS);

/**
 * Get Enthalpy_kJ/kg with PQ 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "Dryness fraction", Description = " 0.0~1.0"
 * @returns {number} Get Enthalpy_kJ/kg with PQ 
*/
function steamHPQ(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamHPQ", input1, input2);
}
CustomFunctions.associate("STEAMHPQ", steamHPQ);

/**
 * Get Volume_m3/kg with PT 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "temperature", Description = "'C"
 * @returns {number} Get Volume_m3/kg with PT 
*/
function steamVPT(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamVPT", input1, input2);
}
CustomFunctions.associate("STEAMVPT", steamVPT);

/**
 * Get Volume_m3/kg with PH 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "enthalpy", Description = "kJ/kg"
 * @returns {number} Get Volume_m3/kg with PH 
*/
function steamVPH(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamVPH", input1, input2);
}
CustomFunctions.associate("STEAMVPH", steamVPH);

/**
 * Get Volume_m3/kg with PS 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "entropy", Description = "kJ/kg-K"
 * @returns {number} Get Volume_m3/kg with PS 
*/
function steamVPS(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamVPS", input1, input2);
}
CustomFunctions.associate("STEAMVPS", steamVPS);

/**
 * Get Density_kg/m3 with PT 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "temperature", Description = "'C"
 * @returns {number} Get Density_kg/m3 with PT 
*/
function steamRhoPT(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamRhoPT", input1, input2);
}
CustomFunctions.associate("STEAMRhoPTH", steamRhoPT);

/**
 * Get Density_kg/m3 with PH 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "enthalpy", Description = "kJ/kg"
 * @returns {number} Get Density_kg/m3 with PH 
*/
function steamRhoPH(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamRhoPH", input1, input2);
}
CustomFunctions.associate("STEAMRhoPH", steamRhoPH);

/**
 * Get Density_kg/m3 with PS 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "entropy", Description = "kJ/kg-K"
 * @returns {number} Get Density_kg/m3 with PS 
*/
function steamRhoPS(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamRhoPS", input1, input2);
}
CustomFunctions.associate("STEAMRhoPS", steamRhoPS);

/**
 * Get Entropy_kJ/kg-K with PT 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "temperature", Description = "'C"
 * @returns {number} Get Entropy_kJ/kg-K with PT 
*/
function steamSPT(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamSPT", input1, input2);
}
CustomFunctions.associate("STEAMSPT", steamSPT);

/**
 * Get Entropy_kJ/kg-K with PH 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "enthalpy", Description = "kJ/kg"
 * @returns {number} Get Entropy_kJ/kg-K with PH 
*/
function steamSPH(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamSPH", input1, input2);
}
CustomFunctions.associate("STEAMSPH", steamSPH);

/**
 * Get Cp_kJ/kg-C with PT 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "temperature", Description = "'C"
 * @returns {number} Get Cp_kJ/kg-C with PT 
*/
function steamCpPT(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamCpPT", input1, input2);
}
CustomFunctions.associate("STEAMCpPT", steamCpPT);

/**
 * Get Cp_kJ/kg-C with PH 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "enthalpy", Description = "kJ/kg"
 * @returns {number} Get Cp_kJ/kg-C with PH 
*/
function steamCpPH(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamCpPH", input1, input2);
}
CustomFunctions.associate("STEAMCpPH", steamCpPH);

/**
 * Get Cv_kJ/kg-C with PT 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "temperature", Description = "'C"
 * @returns {number} Get Cv_kJ/kg-C with PT 
*/
function steamCvPT(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamCvPT", input1, input2);
}
CustomFunctions.associate("STEAMCvPT", steamCvPT);

/**
 * Get Cv_kJ/kg-C with PH 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "enthalpy", Description = "kJ/kg"
 * @returns {number} Get Cv_kJ/kg-C with PH 
*/
function steamCvPH(input1, input2) {
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamCvPH", input1, input2);
}
CustomFunctions.associate("STEAMCvPH", steamCvPH);

/**
 * Get Cv_kJ/kg-C with PS 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "entropy", Description = "kJ/kg-K"
 * @returns {number} Get Cv_kJ/kg-C with PS 
*/
function steamCvPS(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamCvPS", input1, input2);
}
CustomFunctions.associate("STEAMCvPS", steamCvPS);

/**
 * Get Dyn.Viscosity_Pa-s with PT 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "temperature", Description = "'C"
 * @returns {number} Get Dyn.Viscosity_Pa-s with PT 
*/
function steamVisPT(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamVisPT", input1, input2);
}
CustomFunctions.associate("STEAMVisPT", steamVisPT);

/**
 * Get Dyn.Viscosity_Pa-s with PT 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "enthalpy", Description = "kJ/kg"
 * @returns {number} Get Dyn.Viscosity_Pa-s with PT 
*/
function steamVisPH(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamVisPH", input1, input2);
}
CustomFunctions.associate("STEAMVisPH", steamVisPH);

/**
 * Get Dyn.Viscosity_Pa-s with PS 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "entropy", Description = "kJ/kg-K"
 * @returns {number} Get Dyn.Viscosity_Pa-s with PS 
*/
function steamVisPS(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamVisPS", input1, input2);
}
CustomFunctions.associate("STEAMVisPS", steamVisPS);

/**
 * Get Vapor Fraction with PH 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "enthalpy", Description = "kJ/kg"
 * @returns {number} Get Vapor Fraction with PH 
*/
function steamQPH(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamQPH", input1, input2);
}
CustomFunctions.associate("STEAMQPH", steamQPH);

/**
 * Get Vapor Fraction with PS 
 * @param {number} input1 "pressure", Description = "bara"
 * @param {number} input2 "entropy", Description = "kJ/kg-K"
 * @returns {number} Get Vapor Fraction with PS 
*/
function steamQPS(input1, input2){
    return DotNet.invokeMethodAsync("BlazorAddIn", "steamQPS", input1, input2);
}
CustomFunctions.associate("STEAMQPS", steamQPS);
