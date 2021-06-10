// Fitness Assistant Scripts //

// Global Variables //

var personalHealthData = {},
    personalStrengthData = {},
    startingStrengthData = "",
    strongLiftsData = "",
    madcowData = "",
    genderedFormulaResult = 0;

// DOM Variables //

const DOM = {
    title: document.getElementById("title"),
    calorieToggle: document.getElementById("togglecalorie"),
    liftToggle: document.getElementById("togglelift"),
    calorieCalc: document.getElementById("caloriecalc"),
    calorieCalcResults: document.getElementById("caloriecalcresults"),
    calorieCalcForm: document.getElementById("caloriecalcform"),
    calorieCalcFormButton: document.getElementById("caloriecalcformbutton"),
    calorieCalcContainer: document.getElementById('caloriecalccontainer'),
    calorieCalcResultsReset: document.getElementById("caloriereset"),
    calorieMeasurementSelector: document.getElementsByClassName("measurement")[0],
    liftingMeasurementSelector: document.getElementsByClassName("measurement")[1],
    ageMeasurement: document.getElementById("age"),
    footHeightMeasurement: document.getElementById("feet"),
    inchHeightMeasurement: document.getElementById("inches"),
    cmHeightMeasurement: document.getElementById("cm"),
    poundWeightMeasurement: document.getElementById("lbs"),
    kgWeightMeasurement: document.getElementById("kg"),
    activityMeasurementSelector: document.getElementById("activity"),
    maintainWeightResults: document.getElementById("maintainweight").getElementsByClassName("resultsnumber")[0],
    mildWeightLossResults: document.getElementById("mildweightloss").getElementsByClassName("resultsnumber")[0],
    weightLossResults: document.getElementById("weightloss").getElementsByClassName("resultsnumber")[0],
    majorWeightLossResults: document.getElementById("majorweightloss").getElementsByClassName("resultsnumber")[0],
    mildWeightGainResults: document.getElementById("mildweightgain").getElementsByClassName("resultsnumber")[0],
    weightGainResults: document.getElementById("weightgain").getElementsByClassName("resultsnumber")[0],
    majorWeightGainResults: document.getElementById("majorweightgain").getElementsByClassName("resultsnumber")[0],
    liftingCalcContainer: document.getElementById('liftingcalccontainer'),
    footer: document.getElementById('footer'),
    navbarCalcButton: document.getElementById("calcbutton"),
    navbarLiftButton: document.getElementById("liftbutton"),
    navbarContactButton: document.getElementById("contactbutton"),
    liftingProgramSelector: document.getElementById("program"),
    instructionText: document.getElementById("instruction"),
    squatInput: document.getElementById("squats"),
    benchInput: document.getElementById("bench"),
    deadliftInput: document.getElementById("deadlift"),
    bbellRowInput: document.getElementById("bbellrow"),
    powerCleanInput: document.getElementById("powerclean"),
    ohpInput: document.getElementById("ohp"),
    squatWeightInput: document.getElementById("squats").getElementsByClassName("weightinput")[0],
    benchWeightInput: document.getElementById("bench").getElementsByClassName("weightinput")[0],
    deadliftWeightInput: document.getElementById("deadlift").getElementsByClassName("weightinput")[0],
    bbellRowWeightInput: document.getElementById("bbellrow").getElementsByClassName("weightinput")[0],
    powerCleanWeightInput: document.getElementById("powerclean").getElementsByClassName("weightinput")[0],
    ohpWeightInput: document.getElementById("ohp").getElementsByClassName("weightinput")[0],
    squatRepInput: document.getElementById("squats").getElementsByClassName("repinput")[0],
    benchRepInput: document.getElementById("bench").getElementsByClassName("repinput")[0],
    deadliftRepInput: document.getElementById("deadlift").getElementsByClassName("repinput")[0],
    bbellRowRepInput: document.getElementById("bbellrow").getElementsByClassName("repinput")[0],
    powerCleanRepInput: document.getElementById("powerclean").getElementsByClassName("repinput")[0],
    ohpRepInput: document.getElementById("ohp").getElementsByClassName("repinput")[0],
    liftSubmitButton: document.getElementById("liftprogramsubmit"),
    liftingCalc: document.getElementById("liftingcalc"),
    liftingCalcResults: document.getElementById("liftingcalcresults"),
    squatMaxContainer: document.getElementsByClassName("maxresults")[0],
    benchMaxContainer: document.getElementsByClassName("maxresults")[1],
    deadliftMaxContainer: document.getElementsByClassName("maxresults")[2],
    rowMaxContainer: document.getElementsByClassName("maxresults")[3],
    powerCleanMaxContainer: document.getElementsByClassName("maxresults")[4],
    ohpMaxContainer: document.getElementsByClassName("maxresults")[5],
    squatMaxInput: document.getElementsByClassName("liftmax")[0],
    benchMaxInput: document.getElementsByClassName("liftmax")[1],
    deadliftMaxInput: document.getElementsByClassName("liftmax")[2],
    rowMaxInput: document.getElementsByClassName("liftmax")[3],
    powerCleanMaxInput: document.getElementsByClassName("liftmax")[4],
    ohpMaxInput: document.getElementsByClassName("liftmax")[5],
    liftCalcResultsReset: document.getElementById("liftreset"),
    calorieCalcInputs: document.getElementById("caloriecalcform").querySelectorAll("input"),
    calorieCalcSelects: document.getElementById("caloriecalcform").querySelectorAll("select"),
    liftingCalcInputs: document.getElementById("liftingform").querySelectorAll("input"),
    liftingCalcSelects: document.getElementById("liftingform").querySelectorAll("select"),
    liftDataRows: document.getElementsByClassName("lifts"),
    liftingProgramLayout: document.getElementById("liftingprogramlayout"),
    week1Container: document.getElementById("week1"),
    week2Container: document.getElementById("week2"),
    week3Container: document.getElementById("week3"),
    week4Container: document.getElementById("week4"),
    week5Container: document.getElementById("week5"),
    week6Container: document.getElementById("week6"),
    week7Container: document.getElementById("week7"),
    week8Container: document.getElementById("week8"),
    day1Containers: document.getElementsByClassName("day1"),
    day2Container: document.getElementsByClassName("day2"),
    day3Container: document.getElementsByClassName("day2"),
};

// Calorie Calculator Forumlas //

// Calorie Calculator Event Listeners //

DOM["calorieMeasurementSelector"].addEventListener("click", measurementCheck)
DOM["calorieCalcFormButton"].addEventListener("click", measureCalories)
DOM["calorieCalcResultsReset"].addEventListener("click", resetCalories)
DOM["calorieToggle"].addEventListener("click", toggleCalc)

for (i = 0; i < DOM["calorieCalcInputs"].length; i++) {
    DOM["calorieCalcInputs"][i].addEventListener("input", checkCalorieForm)
};
for (i = 0; i < DOM["calorieCalcSelects"].length; i++) {
    DOM["calorieCalcSelects"][i].addEventListener("input", checkCalorieForm)
};

// Calorie Calc Submit Button Disabled on Load //

DOM["calorieCalcFormButton"].disabled = true;

// Calorie Calculator Display Functions //
// Toggle Calorie Calculator Function //

function toggleCalc() {
    DOM["calorieCalcContainer"].style.display = DOM["calorieCalcContainer"].style.display == 'block' ? 'none' : 'block';
    DOM["calorieCalcContainer"].style.display = DOM["calorieCalcContainer"].style.display == 'block' ? 'block' : 'block';
    DOM["liftingCalcContainer"].style.display = DOM["liftingCalcContainer"].style.display == 'block' ? 'none' : 'none';
    DOM["calorieCalcFormButton"].disabled = true;
    DOM["title"].innerHTML = "Calorie Calculator";
};

// Unit Measurement Style Selection Formula //

function measurementCheck() {
    var selection = DOM["calorieMeasurementSelector"].selectedIndex
    if (selection == 0) {
        DOM["footHeightMeasurement"].style.display = "inline-block"
        DOM["inchHeightMeasurement"].style.display = "inline-block"
        DOM["cmHeightMeasurement"].style.display = "none"
        DOM["poundWeightMeasurement"].style.display = "inline-block"
        DOM["kgWeightMeasurement"].style.display = "none"
    } else if (selection == 1) {
        DOM["footHeightMeasurement"].style.display = "none"
        DOM["inchHeightMeasurement"].style.display = "none"
        DOM["cmHeightMeasurement"].style.display = "inline-block"
        DOM["poundWeightMeasurement"].style.display = "none"
        DOM["kgWeightMeasurement"].style.display = "inline-block"
    } else {
        return false;
    }
};

// Function Checking Every Form is Filled on Calorie Calculator //

function checkCalorieForm() {
    var selection = DOM["calorieMeasurementSelector"].selectedIndex
    var activitySelection = DOM["activityMeasurementSelector"].selectedIndex
    var ageInputFilled = (!isNaN(parseInt(DOM["ageMeasurement"].value)) && (parseInt(DOM["ageMeasurement"].value) > 0) && (parseInt(DOM["ageMeasurement"].value) < 99))
    var footInputFilled = (!isNaN(parseInt(DOM["footHeightMeasurement"].value)) && (parseInt(DOM["footHeightMeasurement"].value) > 3) && (parseInt(DOM["footHeightMeasurement"].value) < 8))
    var inchInputFilled = (!isNaN(parseInt(DOM["inchHeightMeasurement"].value)) && (parseInt(DOM["inchHeightMeasurement"].value) < 12))
    var poundInputFilled = (!isNaN(parseInt(DOM["poundWeightMeasurement"].value)) && (parseInt(DOM["poundWeightMeasurement"].value) > 0))
    var cmInputFilled = (!isNaN(parseInt(DOM["cmHeightMeasurement"].value)) && (parseInt(DOM["cmHeightMeasurement"].value) > 0) && (parseInt(DOM["cmHeightMeasurement"].value) < 255))
    var kgInputFilled = (!isNaN(parseInt(DOM["kgWeightMeasurement"].value)) && (parseInt(DOM["kgWeightMeasurement"].value) > 0))
    if (selection == 0 && activitySelection != 0 && ageInputFilled && footInputFilled && inchInputFilled && poundInputFilled) {
        DOM["calorieCalcFormButton"].disabled = false
        DOM["calorieCalcFormButton"].style.backgroundColor = "#e5e1e1";
        return true
    } else if (selection == 1 && activitySelection != 0 && ageInputFilled && cmInputFilled && kgInputFilled) {
        DOM["calorieCalcFormButton"].disabled = false
        DOM["calorieCalcFormButton"].style.backgroundColor = "#e5e1e1";
        return true
    } else {
        console.log("CALORIE FORM ERROR FILL OUT THE FORM")
        DOM["calorieCalcFormButton"].disabled = true
        DOM["calorieCalcFormButton"].style.backgroundColor = "#FFF";
        return false
    }
};

// Calorie Calculator Calculation Functions //
// Calorie Calculator Master Measurement Function //

function measureCalories() {
    checkCalorieForm()
    personalMetrics()
    genderCheck()
    activityLevelCheck()
    populateResults()
    DOM["calorieCalc"].style.display = "none"
    DOM["calorieCalcResults"].style.display = "block"
};

// Formula Standardizing Personal Metric Data into the Calorie Data Object //

function personalMetrics() {
    var selection = DOM["calorieMeasurementSelector"].selectedIndex
    personalHealthData["age"] = parseInt(DOM["ageMeasurement"].value)
    if (selection == 0) {
        var feetToInches = (parseInt(DOM["footHeightMeasurement"].value) * 12)
        var totalInches = (parseInt(DOM["inchHeightMeasurement"].value) + feetToInches)
        var inchesToCM = (totalInches * 2.54)
        personalHealthData["height"] = inchesToCM
        var lbsToKG = (parseInt(DOM["poundWeightMeasurement"].value) * .453592)
        personalHealthData["weight"] = lbsToKG
    } else if (selection == 1) {
        personalHealthData["height"] = parseInt(DOM["cmHeightMeasurement"].value)
        personalHealthData["weight"] = parseInt(DOM["kgWeightMeasurement"].value)
    }
};

// Formula for Calcuating Calorie Data per Gender //

function genderCheck() {
    if (document.getElementById('male').checked) {
        // male( BMR = 10W + 6.25H - 5A + 5)
        var maleFormula = ((10 * personalHealthData["weight"]) +
            (6.25 * personalHealthData["height"]) - (5 * personalHealthData["age"]) + 5);
        genderedFormulaResult = maleFormula;
    } else if (document.getElementById('female').checked) {
        // female(BMR = 10W + 6.25H - 5A - 161)
        var femaleFormula = ((10 * personalHealthData["weight"]) +
            (6.25 * personalHealthData["height"]) - (5 * personalHealthData["age"]) - 161);
        genderedFormulaResult = femaleFormula;
    } else {
        console.log("GENDER CHECK ERROR")
        return false;
    }
};

// Activity Level Multiplier Function //

function activityLevelCheck() {
    var activitySelection = DOM["activityMeasurementSelector"].selectedIndex
    calorieResults = 0
    if (activitySelection == 1) {
        calorieResults = genderedFormulaResult
    } else if (activitySelection == 2) {
        calorieResults = (genderedFormulaResult * 1.2)
    } else if (activitySelection == 3) {
        calorieResults = (genderedFormulaResult * 1.375)
    } else if (activitySelection == 4) {
        calorieResults = (genderedFormulaResult * 1.46)
    } else if (activitySelection == 5) {
        calorieResults = (genderedFormulaResult * 1.55)
    } else if (activitySelection == 6) {
        calorieResults = (genderedFormulaResult * 1.73)
    } else if (activitySelection == 7) {
        calorieResults = (genderedFormulaResult * 1.9)
    } else {
        console.log("ACTIVITY ERROR")
        return false;
    }
};

// Calorie Data Results Population Function //

function populateResults() {
    DOM["maintainWeightResults"].innerHTML = Math.round(calorieResults) + " calories"
    DOM["mildWeightLossResults"].innerHTML = (Math.round(calorieResults) - 250) + " calories"
    DOM["weightLossResults"].innerHTML = (Math.round(calorieResults) - 500) + " calories"
    DOM["majorWeightLossResults"].innerHTML = (Math.round(calorieResults) - 1000) + " calories"
    DOM["weightGainResults"].innerHTML = (Math.round(calorieResults) + 500) + " calories"
    DOM["mildWeightGainResults"].innerHTML = (Math.round(calorieResults) + 250) + " calories"
    DOM["majorWeightGainResults"].innerHTML = (Math.round(calorieResults) + 1000) + " calories"
};

// Form Reset Function //

function resetCalories() {
    DOM["calorieCalc"].style.display = "flex";
    DOM["calorieCalcResults"].style.display = "none";
    DOM["ageMeasurement"].value = "";
    DOM["footHeightMeasurement"].value = "";
    DOM["inchHeightMeasurement"].value = "";
    DOM["cmHeightMeasurement"].value = "";
    DOM["poundWeightMeasurement"].value = "";
    DOM["kgWeightMeasurement"].value = "";
    DOM["calorieMeasurementSelector"].selectedIndex = 0;
    DOM["activityMeasurementSelector"].selectedIndex = 0;
    DOM["calorieCalcFormButton"].style.backgroundColor = "#FFF";
    personalHealthData = {};
};

// Lifting Calculator Event Listeners // 

DOM["liftToggle"].addEventListener("click", toggleLift)
DOM["liftingProgramSelector"].addEventListener("change", selectLiftingProgram)
DOM["liftSubmitButton"].addEventListener("click", calculateProgram)
DOM["liftCalcResultsReset"].addEventListener("click", resetLifts)

for (i = 0; i < DOM["liftingCalcInputs"].length; i++) {
    DOM["liftingCalcInputs"][i].addEventListener("input", checkLiftingForm)
};

// Lifting Program Selector Variable //


// Lifting Calculator Display Functions //
// Toggle Lifting Calculator Function //

function toggleLift() {
    DOM["liftingCalcContainer"].style.display = DOM["liftingCalcContainer"].style.display == 'block' ? 'none' : 'block';
    DOM["liftingCalcContainer"].style.display = DOM["liftingCalcContainer"].style.display == 'block' ? 'block' : 'block';
    DOM["calorieCalcContainer"].style.display = DOM["calorieCalcContainer"].style.display == 'block' ? 'none' : 'none';
    DOM["title"].innerHTML = "Lifting Calculator";
    DOM["liftSubmitButton"].disabled = true;
    for (i = 0; i < DOM["liftDataRows"].length; i++) {
        DOM["liftDataRows"][i].style.display = "none";
    }
    selectLiftingProgram();
};

// Lifting Program Selection Function //

function selectLiftingProgram() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    // If Starting Strength //
    if (liftingSelection == 1) {
        DOM["liftingMeasurementSelector"].style.display = "inline"
        DOM["squatInput"].style.display = "block"
        DOM["squatInput"].parentNode.style.display = "inline-flex"
        DOM["benchInput"].style.display = "block"
        DOM["benchInput"].parentNode.style.display = "inline-flex"
        DOM["deadliftInput"].style.display = "block"
        DOM["deadliftInput"].parentNode.style.display = "inline-flex"
        DOM["bbellRowInput"].style.display = "none"
        DOM["bbellRowInput"].parentNode.style.display = "none"
        DOM["powerCleanInput"].style.display = "block"
        DOM["powerCleanInput"].parentNode.style.display = "inline-flex"
        DOM["ohpInput"].style.display = "none"
        DOM["ohpInput"].parentNode.style.display = "none"
        DOM["liftSubmitButton"].style.display = "block"
        DOM["instructionText"].style.display = "block"
    }
    // If Stronglifts or Madcow //
    else if (liftingSelection == 2 || liftingSelection == 3) {
        DOM["liftingMeasurementSelector"].style.display = "inline"
        DOM["squatInput"].style.display = "block"
        DOM["squatInput"].parentNode.style.display = "inline-flex"
        DOM["benchInput"].style.display = "block"
        DOM["benchInput"].parentNode.style.display = "inline-flex"
        DOM["deadliftInput"].style.display = "block"
        DOM["deadliftInput"].parentNode.style.display = "inline-flex"
        DOM["bbellRowInput"].style.display = "block"
        DOM["bbellRowInput"].parentNode.style.display = "inline-flex"
        DOM["powerCleanInput"].style.display = "none"
        DOM["powerCleanInput"].parentNode.style.display = "none"
        DOM["ohpInput"].style.display = "block"
        DOM["ohpInput"].parentNode.style.display = "inline-flex"
        DOM["liftSubmitButton"].style.display = "block"
        DOM["instructionText"].style.display = "block"
    }
    else {
        DOM["liftingMeasurementSelector"].style.display = "none"
    }
};

// Function Checking if All Lifting Form Fields are Filled //

function checkLiftingForm() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    const squatInputFilled = (!isNaN(parseInt(DOM["squatWeightInput"].value)) && (parseInt(DOM["squatWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["squatRepInput"].value)) && (DOM["squatRepInput"].value) > 0))
    const benchInputFilled = (!isNaN(parseInt(DOM["benchWeightInput"].value)) && (parseInt(DOM["benchWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["benchRepInput"].value)) && (DOM["benchRepInput"].value) > 0))
    const deadliftInputFilled = (!isNaN(parseInt(DOM["deadliftWeightInput"].value)) && (parseInt(DOM["deadliftWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["deadliftRepInput"].value)) && (DOM["deadliftRepInput"].value) > 0))
    const rowInputFilled = (!isNaN(parseInt(DOM["bbellRowWeightInput"].value)) && (parseInt(DOM["bbellRowWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["bbellRowRepInput"].value)) && (DOM["bbellRowRepInput"].value) > 0))
    const powerCleanInputFilled = (!isNaN(parseInt(DOM["powerCleanWeightInput"].value)) && (parseInt(DOM["powerCleanWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["powerCleanRepInput"].value)) && (DOM["powerCleanRepInput"].value) > 0))
    const ohpInputFilled = (!isNaN(parseInt(DOM["ohpWeightInput"].value)) && (parseInt(DOM["ohpWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["ohpRepInput"].value)) && (DOM["ohpRepInput"].value) > 0))
    if ((liftingSelection == 1) && squatInputFilled && benchInputFilled && deadliftInputFilled
        && powerCleanInputFilled) {
        DOM["liftSubmitButton"].disabled = false
        DOM["liftSubmitButton"].style.backgroundColor = "#e5e1e1";
        return true
    } else if ((liftingSelection == 2 || liftingSelection == 3) && squatInputFilled && benchInputFilled &&
        deadliftInputFilled && rowInputFilled && ohpInputFilled) {
        DOM["liftSubmitButton"].disabled = false
        DOM["liftSubmitButton"].style.backgroundColor = "#e5e1e1";
        return true
    }
    else {
        console.log("LIFTING FORM ERROR FILL OUT THE FORM")
        DOM["liftSubmitButton"].disabled = true
        DOM["liftSubmitButton"].style.backgroundColor = "#FFF";
        return false
    }
};

// Lifting Calculator Calculation Functions //
// Lifting Calculator Master Function //

function calculateProgram() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    determineProgramVariables()
    determineMeasurement()
    determineMaxRep()
    populateMaxRep()
    if (liftingSelection == 1) {
        startingStrength()
    }
    DOM["liftingCalc"].style.display = "none"
    DOM["liftingCalcResults"].style.display = "block"
};

// Function Converting Lifting Inputs into Calculable Integers //

function determineProgramVariables() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    // If Starting Strength //
    if (liftingSelection == 1) {
        personalStrengthData["squatWeight"] = (parseInt(DOM["squatWeightInput"].value))
        personalStrengthData["squatRep"] = (parseInt(DOM["squatRepInput"].value))
        personalStrengthData["benchWeight"] = (parseInt(DOM["benchWeightInput"].value))
        personalStrengthData["benchRep"] = (parseInt(DOM["benchRepInput"].value))
        personalStrengthData["deadliftWeight"] = (parseInt(DOM["deadliftWeightInput"].value))
        personalStrengthData["deadliftRep"] = (parseInt(DOM["deadliftRepInput"].value))
        personalStrengthData["powerCleanWeight"] = (parseInt(DOM["powerCleanWeightInput"].value))
        personalStrengthData["powerCleanRep"] = (parseInt(DOM["powerCleanRepInput"].value))
    }
    // If Stronglifts or Madcow //
    else if (liftingSelection == 2 || liftingSelection == 3) {
        personalStrengthData["squatWeight"] = (parseInt(DOM["squatWeightInput"].value))
        personalStrengthData["squatRep"] = (parseInt(DOM["squatRepInput"].value))
        personalStrengthData["benchWeight"] = (parseInt(DOM["benchWeightInput"].value))
        personalStrengthData["benchRep"] = (parseInt(DOM["benchRepInput"].value))
        personalStrengthData["deadliftWeight"] = (parseInt(DOM["deadliftWeightInput"].value))
        personalStrengthData["deadliftRep"] = (parseInt(DOM["deadliftRepInput"].value))
        personalStrengthData["rowWeight"] = (parseInt(DOM["bbellRowWeightInput"].value))
        personalStrengthData["rowRep"] = (parseInt(DOM["bbellRowRepInput"].value))
        personalStrengthData["ohpWeight"] = (parseInt(DOM["ohpWeightInput"].value))
        personalStrengthData["ohpRep"] = (parseInt(DOM["ohpRepInput"].value))
    }
};

// Unit Measurement Style Selection Formula //

function determineMeasurement() {
    const unitSelection = DOM["liftingMeasurementSelector"].selectedIndex
    if (unitSelection == 0) {
        return
    } else if (unitSelection == 1) {
        personalStrengthData["squatWeight"] = (personalStrengthData["squatWeight"] * 2.20462)
        personalStrengthData["benchWeight"] = (personalStrengthData["benchWeight"] * 2.20462)
        personalStrengthData["deadliftWeight"] = (personalStrengthData["deadliftWeight"] * 2.20462)
        if (personalStrengthData["rowWeight"]) {
            personalStrengthData["rowWeight"] = (personalStrengthData["rowWeight"] * 2.20462)
        }
        if (personalStrengthData["powerCleanWeight"]) {
            personalStrengthData["powerCleanWeight"] = (personalStrengthData["powerCleanWeight"] * 2.20462)
        }
        if (personalStrengthData["ohpWeight"]) {
            personalStrengthData["ohpWeight"] = (personalStrengthData["ohpWeight"] * 2.20462)
        }
    };
};

// One Rep Max Calculation Formula Based on User Input  //

function determineMaxRep() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    // If Starting Strength //
    if (liftingSelection == 1) {
        personalStrengthData["squatMax"] = (parseInt(DOM["squatWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["squatRepInput"].value)))))
        personalStrengthData["benchMax"] = (parseInt(DOM["benchWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["benchRepInput"].value)))))
        personalStrengthData["deadliftMax"] = (parseInt(DOM["deadliftWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["deadliftRepInput"].value)))))
        personalStrengthData["powerCleanMax"] = (parseInt(DOM["powerCleanWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["powerCleanRepInput"].value)))))
    }
    // If Stronglifts or Madcow //
    else if (liftingSelection != 1) {
        personalStrengthData["squatMax"] = (parseInt(DOM["squatWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["squatRepInput"].value)))))
        personalStrengthData["benchMax"] = (parseInt(DOM["benchWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["benchRepInput"].value)))))
        personalStrengthData["deadliftMax"] = (parseInt(DOM["deadliftWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["deadliftRepInput"].value)))))
        personalStrengthData["rowMax"] = (parseInt(DOM["bbellRowWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["bbellRowRepInput"].value)))))
        personalStrengthData["ohpMax"] = (parseInt(DOM["ohpWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["ohpRepInput"].value)))))

    }
};

// Population of One Rep Max Results Function //

function populateMaxRep() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    const squatMax = ((Math.ceil(personalStrengthData["squatMax"] / 5) * 5))
    const benchMax = ((Math.ceil(personalStrengthData["benchMax"] / 5) * 5))
    const deadliftMax = ((Math.ceil(personalStrengthData["deadliftMax"] / 5) * 5))
    const rowMax = ((Math.ceil(personalStrengthData["rowMax"] / 5) * 5))
    const powerCleanMax = ((Math.ceil(personalStrengthData["powerCleanMax"] / 5) * 5))
    const ohpMax = ((Math.ceil(personalStrengthData["ohpMax"] / 5) * 5))
    DOM["squatMaxInput"].innerHTML = squatMax
    DOM["squatMaxContainer"].style.display = "inline-block"
    DOM["benchMaxInput"].innerHTML = benchMax
    DOM["benchMaxContainer"].style.display = "inline-block"
    DOM["deadliftMaxInput"].innerHTML = deadliftMax
    DOM["deadliftMaxContainer"].style.display = "inline-block"
    if (liftingSelection == 1) {
        DOM["powerCleanMaxInput"].innerHTML = powerCleanMax
        DOM["powerCleanMaxContainer"].style.display = "inline-block"
        DOM["rowMaxInput"].innerHTML = null
        DOM["rowMaxContainer"].style.display = "none"
        DOM["ohpMaxInput"].innerHTML = null
        DOM["ohpMaxContainer"].style.display = "none"
    }
    else if (liftingSelection == 2 || liftingSelection == 3) {
        DOM["powerCleanMaxInput"].innerHTML = null
        DOM["powerCleanMaxContainer"].style.display = "none"
        DOM["rowMaxInput"].innerHTML = rowMax
        DOM["rowMaxContainer"].style.display = "inline-block"
        DOM["ohpMaxInput"].innerHTML = ohpMax
        DOM["ohpMaxContainer"].style.display = "inline-block"
    }

};

// Lifting Program Calculations //

// Starting Strength - Day A and Day B; increase 5-10 lbs a week, Slightly Change During Phases//
// Starting Strength Master Function //

function startingStrength() {
    getFiveRepMax()
    createStartingWeight()
    buildSSProgression()
    populateStartingStrengthProgram()
}

// Function Calculating 5 Rep Max from 1 Rep Max//

function getFiveRepMax() {
    personalStrengthData["squat5RMax"] = (personalStrengthData["squatMax"] * .8578);
    personalStrengthData["bench5RMax"] = (personalStrengthData["benchMax"] * .8578);
    personalStrengthData["deadlift5RMax"] = (personalStrengthData["deadliftMax"] * .8578);
    personalStrengthData["powerClean5RMax"] = (personalStrengthData["powerCleanMax"] * .8578);
}

// Function Creating Starting Weight for Lifts from 5 Rep Max Rounded Up //

function createStartingWeight() {
    var unroundedSquat = (personalStrengthData["squat5RMax"] * .8);
    var unroundedBench = (personalStrengthData["bench5RMax"] * .8);
    var unroundedDead = (personalStrengthData["deadlift5RMax"] * .8);
    var unroundedPowerClean = (personalStrengthData["powerClean5RMax"] * .8);
    personalStrengthData["startingSquat"] = (unroundedSquat % 5) >= 2.5 ? parseInt(unroundedSquat / 5) * 5 + 5 : parseInt(unroundedSquat / 5) * 5;
    personalStrengthData["startingBench"] = (unroundedBench % 5) >= 2.5 ? parseInt(unroundedBench / 5) * 5 + 5 : parseInt(unroundedBench / 5) * 5;
    personalStrengthData["startingDead"] = (unroundedDead % 5) >= 2.5 ? parseInt(unroundedDead / 5) * 5 + 5 : parseInt(unroundedDead / 5) * 5;
    personalStrengthData["startingPowerClean"] = (unroundedPowerClean % 5) >= 2.5 ? parseInt(unroundedPowerClean / 5) * 5 + 5 : parseInt(unroundedPowerClean / 5) * 5;
}

// Function Structuring Starting Strength Progression //

function buildSSProgression() {
    phase1()
    phase2()
    // Day A and B are the same in phase 1: Squats and Bench 5 Reps 
    // for 3 Sets; Deadlift 5 Reps for 1 Set //
}

function phase1() {
    // 3x5 & 1x5 //
    startingStrengthData += "<div id='startingnumbers'>"
    startingStrengthData += "<p>" + "First Day Starting Numbers" + "</p>"
    startingStrengthData += "Squat " + personalStrengthData["startingSquat"]
    startingStrengthData += " Bench " + personalStrengthData["startingBench"]
    startingStrengthData += " Deadlifts " + personalStrengthData["startingDead"]
    startingStrengthData += "</div>"
    startingStrengthData += "<div class= 'phase1'>"
    startingStrengthData += "Phase 1"
    for (i = 1; i < 4; i++) {
        startingStrengthData += "<div id='week" + i + "'>"
        startingStrengthData += "Working Week " + i
        startingStrengthData += "<br>"
        for (x = 1; x < 4; x++) {
            startingStrengthData += "Day " + x 
            startingStrengthData += "<div class= 'phase1day'> "
            startingStrengthData += "Squat" + "<br>"
            for (y = 0; y < 3; y++) {
                startingStrengthData += (personalStrengthData["startingSquat"] + (10 * (x * i))) + " x 5" + "<br>"
            }
            startingStrengthData += "Bench" + "<br>"
            for (y = 0; y < 3; y++) {
                startingStrengthData += (personalStrengthData["startingBench"] + (5 * (x * i))) + " x 5" + "<br>"
            }
            startingStrengthData += "Deadlift" + "<br>"
            startingStrengthData += (personalStrengthData["startingDead"] + (10 * (x * i))) + " x 5" + "<br>"

            startingStrengthData += "</div>"
            startingStrengthData += "</div>"
        }
        startingStrengthData += "</div>"
    }
    startingStrengthData += "</div>"
}

function phase2() {
    // console.log(personalStrengthData["startingSquat"])
    // console.log(personalStrengthData["startingBench"])
    // console.log(personalStrengthData["startingDead"])
    // console.log(personalStrengthData["startingPowerClean"])
    // Day A stays the same 3x5, 1x5; Day B replaces Deads with Power Cleans, 3 reps for 5 sets //
}

// Function Populating the Lifting Program //

function populateStartingStrengthProgram() {
    DOM["liftingProgramLayout"].innerHTML = startingStrengthData;
}


// Stronglifts 5x5 - Workout A and B of compound lifts alternated back and forth //
// A - 5x5 of Squats, Bench and Bbell rows //
// B - 5x5 of Squats and OHP, 1x5 of Deadlift //
// Start with 50% of 1RM and increase each lift on each success //
// Squat - 5lbs, Bench, Rows, & OHP - 2.5lbs, Deadlift - 10lbs//

// Madcow 5x5 -  //
// Assistance: Day 1 - 3 compounds at 5x5, 2 sets Weighted Hyper Extension, 4 sets weighted situps //
// Day 2 - 3 different compounds at 4x5; 3 sets situps; Day 3 - Day 1 Compounds at 4x5, 
// 1x3, 1x8; Assitance 3 sets weighted dips(5-8 reps), 
// 3 sets bbell curls & tricep extensions (8 reps) // 

// Populate Lifting Program Function //

// Reset Lifting Calculator Function //

function resetLifts() {
    DOM["liftingCalc"].style.display = "flex"
    DOM["liftingCalcResults"].style.display = "none"
    DOM["squatInput"].style.display = "none"
    DOM["benchInput"].style.display = "none"
    DOM["deadliftInput"].style.display = "none"
    DOM["bbellRowInput"].style.display = "none"
    DOM["powerCleanInput"].style.display = "none"
    DOM["ohpInput"].style.display = "none"
    DOM["liftSubmitButton"].style.display = "none"
    DOM["instructionText"].style.display = "none"
    DOM["liftingMeasurementSelector"].style.display = "none"
    for (i = 0; i < DOM["liftDataRows"].length; i++) {
        DOM["liftDataRows"][i].style.display = "none";
    }
    DOM["squatWeightInput"].value = ""
    DOM["squatRepInput"].value = ""
    DOM["benchWeightInput"].value = ""
    DOM["benchRepInput"].value = ""
    DOM["deadliftWeightInput"].value = ""
    DOM["deadliftRepInput"].value = ""
    DOM["bbellRowWeightInput"].value = ""
    DOM["bbellRowRepInput"].value = ""
    DOM["powerCleanWeightInput"].value = ""
    DOM["powerCleanRepInput"].value = ""
    DOM["ohpWeightInput"].value = ""
    DOM["ohpRepInput"].value = ""
    DOM["liftSubmitButton"].style.backgroundColor = "#FFF";
    DOM["liftingProgramSelector"].selectedIndex = 0;
    DOM["liftingMeasurementSelector"].selectedIndex = 0;
    personalStrengthData = {};
};