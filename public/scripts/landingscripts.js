// Fitness Assistant Scripts //

// Global Variables //

var personalHealthData = {},
    personalStrengthData = {},
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
    incBenchInput: document.getElementById("incbench"),
    powerCleanInput: document.getElementById("powerclean"),
    ohpInput: document.getElementById("ohp"),
    squatWeightInput: document.getElementById("squats").getElementsByClassName("weightinput")[0],
    benchWeightInput: document.getElementById("bench").getElementsByClassName("weightinput")[0],
    deadliftWeightInput: document.getElementById("deadlift").getElementsByClassName("weightinput")[0],
    bbellRowWeightInput: document.getElementById("bbellrow").getElementsByClassName("weightinput")[0],
    incBenchWeightInput: document.getElementById("incbench").getElementsByClassName("weightinput")[0],
    powerCleanWeightInput: document.getElementById("powerclean").getElementsByClassName("weightinput")[0],
    ohpWeightInput: document.getElementById("incbench").getElementsByClassName("ohp")[0],
    squatRepInput: document.getElementById("squats").getElementsByClassName("repinput")[0],
    benchRepInput: document.getElementById("bench").getElementsByClassName("repinput")[0],
    deadliftRepInput: document.getElementById("deadlift").getElementsByClassName("repinput")[0],
    bbellRowRepInput: document.getElementById("bbellrow").getElementsByClassName("repinput")[0],
    incBenchRepInput: document.getElementById("incbench").getElementsByClassName("repinput")[0],
    powerCleanRepInput: document.getElementById("powerclean").getElementsByClassName("repinput")[0],
    ohpRepInput: document.getElementById("ohp").getElementsByClassName("repinput")[0],
    liftSubmitButton: document.getElementById("liftprogramsubmit"),
    liftingCalc: document.getElementById("liftingcalc"),
    liftingCalcResults: document.getElementById("liftingcalcresults"),
    squatMaxContainer: document.getElementsByClassName("maxresults")[0],
    benchMaxContainer: document.getElementsByClassName("maxresults")[1],
    deadliftMaxContainer: document.getElementsByClassName("maxresults")[2],
    rowMaxContainer: document.getElementsByClassName("maxresults")[3],
    incBenchMaxContainer: document.getElementsByClassName("maxresults")[4],
    powerCleanMaxContainer: document.getElementsByClassName("maxresults")[5],
    ohpMaxContainer: document.getElementsByClassName("maxresults")[5],
    squatMaxInput: document.getElementsByClassName("liftmax")[0],
    benchMaxInput: document.getElementsByClassName("liftmax")[1],
    deadliftMaxInput: document.getElementsByClassName("liftmax")[2],
    rowMaxInput: document.getElementsByClassName("liftmax")[3],
    incBenchMaxInput: document.getElementsByClassName("liftmax")[4],
    powerCleanMaxInput: document.getElementsByClassName("liftmax")[5],
    ohpMaxInput: document.getElementsByClassName("liftmax")[6],
    liftCalcResultsReset: document.getElementById("liftreset"),
    calorieCalcInputs: document.getElementById("caloriecalcform").querySelectorAll("input"),
    calorieCalcSelects: document.getElementById("caloriecalcform").querySelectorAll("select"),
    liftingCalcInputs: document.getElementById("liftingform").querySelectorAll("input"),
    liftingCalcSelects: document.getElementById("liftingform").querySelectorAll("select")
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

function toggleCalc() {
    DOM["calorieCalcContainer"].style.display = DOM["calorieCalcContainer"].style.display == 'block' ? 'none' : 'block';
    DOM["calorieCalcContainer"].style.display = DOM["calorieCalcContainer"].style.display == 'block' ? 'block' : 'block';
    DOM["liftingCalcContainer"].style.display = DOM["liftingCalcContainer"].style.display == 'block' ? 'none' : 'none';
    DOM["calorieCalcFormButton"].disabled = true;
    DOM["title"].innerHTML = "Calorie Calculator";
};

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

function measureCalories() {
    checkCalorieForm()
    personalMetrics()
    genderCheck()
    activityLevelCheck()
    populateResults()
    DOM["calorieCalc"].style.display = "none"
    DOM["calorieCalcResults"].style.display = "block"
};

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

function populateResults() {
    DOM["maintainWeightResults"].innerHTML = Math.round(calorieResults) + " calories"
    DOM["mildWeightLossResults"].innerHTML = (Math.round(calorieResults) - 250) + " calories"
    DOM["weightLossResults"].innerHTML = (Math.round(calorieResults) - 500) + " calories"
    DOM["majorWeightLossResults"].innerHTML = (Math.round(calorieResults) - 1000) + " calories"
    DOM["weightGainResults"].innerHTML = (Math.round(calorieResults) + 500) + " calories"
    DOM["mildWeightGainResults"].innerHTML = (Math.round(calorieResults) + 250) + " calories"
    DOM["majorWeightGainResults"].innerHTML = (Math.round(calorieResults) + 1000) + " calories"
};

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
DOM["liftingProgramSelector"].addEventListener("click", selectLiftingProgram)
DOM["liftSubmitButton"].addEventListener("click", calculateProgram)
DOM["liftCalcResultsReset"].addEventListener("click", resetLifts)

for (i = 0; i < DOM["liftingCalcInputs"].length; i++) {
    DOM["liftingCalcInputs"][i].addEventListener("input", checkLiftingForm)
};


// Lifting Calculator Display Functions //

function toggleLift() {
    DOM["liftingCalcContainer"].style.display = DOM["liftingCalcContainer"].style.display == 'block' ? 'none' : 'block';
    DOM["liftingCalcContainer"].style.display = DOM["liftingCalcContainer"].style.display == 'block' ? 'block' : 'block';
    DOM["calorieCalcContainer"].style.display = DOM["calorieCalcContainer"].style.display == 'block' ? 'none' : 'none';
    DOM["title"].innerHTML = "Lifting Calculator";
    DOM["liftSubmitButton"].disabled = true;
    selectLiftingProgram();
};

function selectLiftingProgram() {
    var liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    // If Starting Strength //
    if (liftingSelection == 1) {
        DOM["liftingMeasurementSelector"].style.display = "inline"
        DOM["squatInput"].style.display = "block"
        DOM["benchInput"].style.display = "block"
        DOM["deadliftInput"].style.display = "block"
        DOM["incBenchInput"].style.display = "none"
        DOM["bbellRowInput"].style.display = "none"
        DOM["powerCleanInput"].style.display = "block"
        DOM["liftSubmitButton"].style.display = "block"
        DOM["instructionText"].style.display = "block"
    }
    // If Intermediate 5x5 //
    else if (liftingSelection == 2) {
        DOM["liftingMeasurementSelector"].style.display = "inline"
        DOM["squatInput"].style.display = "block"
        DOM["benchInput"].style.display = "block"
        DOM["deadliftInput"].style.display = "block"
        DOM["bbellRowInput"].style.display = "block"
        DOM["incBenchInput"].style.display = "block"
        DOM["powerCleanInput"].style.display = "none"
        DOM["liftSubmitButton"].style.display = "block"
        DOM["instructionText"].style.display = "block"
    }
    // If Madcow 5x5 //
    else if (liftingSelection == 3) {
        DOM["liftingMeasurementSelector"].style.display = "inline"
        DOM["squatInput"].style.display = "block"
        DOM["benchInput"].style.display = "block"
        DOM["deadliftInput"].style.display = "block"
        DOM["bbellRowInput"].style.display = "block"
        DOM["incBenchInput"].style.display = "none"
        DOM["powerCleanInput"].style.display = "none"
        DOM["liftSubmitButton"].style.display = "block"
        DOM["instructionText"].style.display = "block"
    } else {
        DOM["liftingMeasurementSelector"].style.display = "none"
    }
};

function checkLiftingForm() {
    var liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    var squatInputFilled = (!isNaN(parseInt(DOM["squatWeightInput"].value)) && (parseInt(DOM["squatWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["squatRepInput"].value)) && (DOM["squatRepInput"].value) > 0))
    var benchInputFilled = (!isNaN(parseInt(DOM["benchWeightInput"].value)) && (parseInt(DOM["benchWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["benchRepInput"].value)) && (DOM["benchRepInput"].value) > 0))
    var deadliftInputFilled = (!isNaN(parseInt(DOM["deadliftWeightInput"].value)) && (parseInt(DOM["deadliftWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["deadliftRepInput"].value)) && (DOM["deadliftRepInput"].value) > 0))
    var rowInputFilled = (!isNaN(parseInt(DOM["bbellRowWeightInput"].value)) && (parseInt(DOM["bbellRowWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["bbellRowRepInput"].value)) && (DOM["bbellRowRepInput"].value) > 0))
    var incBenchInputFilled = (!isNaN(parseInt(DOM["incBenchWeightInput"].value)) && (parseInt(DOM["incBenchWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["incBenchRepInput"].value)) && (DOM["incBenchRepInput"].value) > 0))
    var powerCleanInputFilled = (!isNaN(parseInt(DOM["powerCleanWeightInput"].value)) && (parseInt(DOM["powerCleanWeightInput"].value) > 0)
        && (!isNaN(parseInt(DOM["powerCleanRepInput"].value)) && (DOM["powerCleanRepInput"].value) > 0))
    if ((liftingSelection == 1) && squatInputFilled && benchInputFilled && deadliftInputFilled && powerCleanInputFilled) {
        DOM["liftSubmitButton"].disabled = false
        DOM["liftSubmitButton"].style.backgroundColor = "#e5e1e1";
        return true
    } else if ((liftingSelection == 2) && squatInputFilled && benchInputFilled && 
        deadliftInputFilled && rowInputFilled && incBenchInputFilled) {
        DOM["liftSubmitButton"].disabled = false
        DOM["liftSubmitButton"].style.backgroundColor = "#e5e1e1";
        return true
    } else if ((liftingSelection == 3) && squatInputFilled && benchInputFilled && deadliftInputFilled && rowInputFilled) {
        DOM["liftSubmitButton"].disabled = false
        DOM["liftSubmitButton"].style.backgroundColor = "#e5e1e1";
    }
    else {
        console.log("LIFTING FORM ERROR FILL OUT THE FORM")
        DOM["liftSubmitButton"].disabled = true
        DOM["liftSubmitButton"].style.backgroundColor = "#FFF";
        return false
    }
};

// Lifting Calculator Calculation Functions //

function calculateProgram() {
    determineProgramVariables()
    determineMeasurement()
    determineMaxRep()
    populateMaxRep()
    DOM["liftingCalc"].style.display = "none"
    DOM["liftingCalcResults"].style.display = "block"
};

function determineProgramVariables() {
    var liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    // If Starting Strength //
    if (liftingSelection == 1) {
        personalStrengthData["squatsWeight"] = (parseInt(DOM["squatWeightInput"].value))
        personalStrengthData["squatsRep"] = (parseInt(DOM["squatRepInput"].value))
        personalStrengthData["benchWeight"] = (parseInt(DOM["benchWeightInput"].value))
        personalStrengthData["benchRep"] = (parseInt(DOM["benchRepInput"].value))
        personalStrengthData["deadliftWeight"] = (parseInt(DOM["deadliftWeightInput"].value))
        personalStrengthData["deadliftRep"] = (parseInt(DOM["deadliftRepInput"].value))
        personalStrengthData["powerCleanWeight"] = (parseInt(DOM["powerCleanWeightInput"].value))
        personalStrengthData["powerCleanRep"] = (parseInt(DOM["powerCleanRepInput"].value))
    }
    // If Intermediate 5x5 //
    else if (liftingSelection == 2) {
        personalStrengthData["squatsWeight"] = (parseInt(DOM["squatWeightInput"].value))
        personalStrengthData["squatsRep"] = (parseInt(DOM["squatRepInput"].value))
        personalStrengthData["benchWeight"] = (parseInt(DOM["benchWeightInput"].value))
        personalStrengthData["benchRep"] = (parseInt(DOM["benchRepInput"].value))
        personalStrengthData["deadliftWeight"] = (parseInt(DOM["deadliftWeightInput"].value))
        personalStrengthData["deadliftRep"] = (parseInt(DOM["deadliftRepInput"].value))
        personalStrengthData["rowWeight"] = (parseInt(DOM["bbellRowWeightInput"].value))
        personalStrengthData["rowRep"] = (parseInt(DOM["bbellRowRepInput"].value))
        personalStrengthData["incbenchWeight"] = (parseInt(DOM["incBenchWeightInput"].value))
        personalStrengthData["incbenchRep"] = (parseInt(DOM["incBenchRepInput"].value))
    }
    // If Madcow 5x5 //
    else if (liftingSelection == 3) {
        personalStrengthData["squatsWeight"] = (parseInt(DOM["squatWeightInput"].value))
        personalStrengthData["squatsRep"] = (parseInt(DOM["squatRepInput"].value))
        personalStrengthData["benchWeight"] = (parseInt(DOM["benchWeightInput"].value))
        personalStrengthData["benchRep"] = (parseInt(DOM["benchRepInput"].value))
        personalStrengthData["deadliftWeight"] = (parseInt(DOM["deadliftWeightInput"].value))
        personalStrengthData["deadliftRep"] = (parseInt(DOM["deadliftRepInput"].value))
        personalStrengthData["rowWeight"] = (parseInt(DOM["bbellRowWeightInput"].value))
        personalStrengthData["rowRep"] = (parseInt(DOM["bbellRowRepInput"].value))
    }
};

function determineMeasurement() {
    var selection = DOM["liftingMeasurementSelector"].selectedIndex
    if (selection == 0) {
        return
    } else if (selection == 1) {
        personalStrengthData["squatsWeight"] = (personalStrengthData["squatsWeight"] * 2.20462)
        personalStrengthData["benchWeight"] = (personalStrengthData["benchWeight"] * 2.20462)
        personalStrengthData["deadliftWeight"] = (personalStrengthData["deadliftWeight"] * 2.20462)
        if (personalStrengthData["rowWeight"]) {
            personalStrengthData["rowWeight"] = (personalStrengthData["rowWeight"] * 2.20462)
        }
        if (personalStrengthData["deadliftWeight"]) {
            personalStrengthData["deadliftWeight"] = (personalStrengthData["deadliftWeight"] * 2.20462)
        }
        if (personalStrengthData["powerCleanWeight"]) {
            personalStrengthData["powerCleanWeight"] = (personalStrengthData["powerCleanWeight"] * 2.20462)
        }
    };
};

function determineMaxRep() {
    var liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    // If Starting Strength //
    if (liftingSelection == 1) {
        personalStrengthData["squatsMax"] = (parseInt(DOM["squatWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["squatRepInput"].value)))))
        personalStrengthData["benchMax"] = (parseInt(DOM["benchWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["benchRepInput"].value)))))
        personalStrengthData["deadliftMax"] = (parseInt(DOM["deadliftWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["deadliftRepInput"].value)))))
        personalStrengthData["powerCleanMax"] = (parseInt(DOM["powerCleanWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["deadliftRepInput"].value)))))
    }
    // If Intermediate 5x5 //
    else if (liftingSelection == 2) {
        personalStrengthData["squatsMax"] = (parseInt(DOM["squatWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["squatRepInput"].value)))))
        personalStrengthData["benchMax"] = (parseInt(DOM["benchWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["benchRepInput"].value)))))
        personalStrengthData["deadliftMax"] = (parseInt(DOM["deadliftWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["deadliftRepInput"].value)))))
        personalStrengthData["rowMax"] = (parseInt(DOM["bbellRowWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["bbellRowRepInput"].value)))))
        personalStrengthData["incBenchMax"] = (parseInt(DOM["incBenchWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["incBenchRepInput"].value)))))
    }
    // If Madcow 5x5 //
    else if (liftingSelection == 3) {
        personalStrengthData["squatsMax"] = (parseInt(DOM["squatWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["squatRepInput"].value)))))
        personalStrengthData["benchMax"] = (parseInt(DOM["benchWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["benchRepInput"].value)))))
        personalStrengthData["deadliftMax"] = (parseInt(DOM["deadliftWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["deadliftRepInput"].value)))))
        personalStrengthData["rowMax"] = parseInt(DOM["bbellRowWeightInput"].value)(parseInt(DOM["bbellRowWeightInput"].value) / (1.0278 - (.0278 * (parseInt(DOM["bbellRowRepInput"].value)))))
    }
};

function populateMaxRep() {
    var squatMax = ((Math.ceil(personalStrengthData["squatsMax"] / 5) * 5))
    var benchMax = ((Math.ceil(personalStrengthData["benchMax"] / 5) * 5))
    var deadliftMax = ((Math.ceil(personalStrengthData["deadliftMax"] / 5) * 5))
    var rowMax = ((Math.ceil(personalStrengthData["rowMax"] / 5) * 5))
    var incBenchMax = ((Math.ceil(personalStrengthData["incBenchMax"] / 5) * 5))
    var powerCleanMax = ((Math.ceil(personalStrengthData["powerCleanMax"] / 5) * 5))
    DOM["squatMaxContainer"].style.display = "none"
    DOM["benchMaxContainer"].style.display = "none"
    DOM["deadliftMaxContainer"].style.display = "none"
    DOM["rowMaxContainer"].style.display = "none"
    DOM["incBenchMaxContainer"].style.display = "none"
    DOM["powerCleanMaxContainer"].style.display = "none"
    if (!isNaN(squatMax)) {
        DOM["squatMaxInput"].innerHTML = squatMax
        DOM["squatMaxContainer"].style.display = "inline-block"
    }
    if (!isNaN(benchMax)) {
        DOM["benchMaxInput"].innerHTML = squatMax
        DOM["benchMaxContainer"].style.display = "inline-block"
    }
    if (!isNaN(deadliftMax)) {
        DOM["deadliftMaxInput"].innerHTML = deadliftMax
        DOM["deadliftMaxContainer"].style.display = "inline-block"
    }
    if (!isNaN(rowMax)) {
        DOM["rowMaxInput"].innerHTML = rowMax
        DOM["rowMaxContainer"].style.display = "inline-block"
    }
    if (!isNaN(incBenchMax)) {
        DOM["incBenchMaxInput"].innerHTML = incBenchMax
        DOM["incBenchMaxContainer"].style.display = "inline-block"
    }
    if (!isNaN(powerCleanMax)) {
        DOM["powerCleanMaxInput"].innerHTML = powerCleanMax
        DOM["powerCleanMaxContainer"].style.display = "inline-block"
    }
};

function resetLifts() {
    DOM["liftingCalc"].style.display = "flex"
    DOM["liftingCalcResults"].style.display = "none"
    DOM["squatInput"].style.display = "none"
    DOM["benchInput"].style.display = "none"
    DOM["deadliftInput"].style.display = "none"
    DOM["incBenchInput"].style.display = "none"
    DOM["bbellRowInput"].style.display = "none"
    DOM["powerCleanInput"].style.display = "none"
    DOM["liftSubmitButton"].style.display = "none"
    DOM["instructionText"].style.display = "none"
    DOM["liftingMeasurementSelector"].style.display = "none"
    DOM["squatWeightInput"].value = ""
    DOM["squatRepInput"].value = ""
    DOM["benchWeightInput"].value = ""
    DOM["benchRepInput"].value = ""
    DOM["deadliftWeightInput"].value = ""
    DOM["deadliftRepInput"].value = ""
    DOM["bbellRowWeightInput"].value = ""
    DOM["bbellRowRepInput"].value = ""
    DOM["incBenchWeightInput"].value = ""
    DOM["incBenchRepInput"].value = ""
    DOM["powerCleanWeightInput"].value = ""
    DOM["powerCleanRepInput"].value = ""
    DOM["liftSubmitButton"].style.backgroundColor = "#FFF";
    DOM["liftingProgramSelector"].selectedIndex = 0;
    DOM["liftingMeasurementSelector"].selectedIndex = 0;
    personalStrengthData = {};
};