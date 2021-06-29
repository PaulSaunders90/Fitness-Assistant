// Fitness Assistant Scripts //

// Global Variables //

var personalHealthData = {},
    personalStrengthData = {},
    lowerProgression = 0,
    upperProgression = 0,
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
    calorieCalcMeasurementTitle: document.getElementsByClassName("measurementtitle")[0],
    liftingCalcMeasurementTitle: document.getElementsByClassName("measurementtitle")[1],
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
    liftingForm: document.getElementById("liftingform"),
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
    day1Container: document.getElementsByClassName("day1"),
    day2Container: document.getElementsByClassName("day2"),
    day3Container: document.getElementsByClassName("day3"),
};

// Calorie Calculator Forumlas //

// Toggle Filter Function // 

function toggleButtonGreyout(e) {
    if (e.target.className == "togglebutton") {
        var selectedTarget = e.target.getAttribute("data-button");
        var selectedButton = document.getElementById("toggle" + selectedTarget)
        if(selectedButton == DOM["calorieToggle"]){
            selectedButton.style.backgroundColor = "#FFF";
            DOM["liftToggle"].style.backgroundColor = "#ccc8c8";
        } else if (selectedButton == DOM["liftToggle"]){
            selectedButton.style.backgroundColor = "#FFF";
            DOM["calorieToggle"].style.backgroundColor = "#ccc8c8";
        }
    };
};


// Calorie Calculator Event Listeners //

DOM["calorieMeasurementSelector"].addEventListener("click", measurementCheck)
DOM["calorieCalcFormButton"].addEventListener("click", measureCalories)
DOM["calorieCalcResultsReset"].addEventListener("click", resetCalories)
DOM["calorieToggle"].addEventListener("click", toggleCalc)
DOM["calorieToggle"].addEventListener("click", toggleButtonGreyout)

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
    DOM["liftingCalcMeasurementTitle"].style.display = DOM["liftingCalcMeasurementTitle"].style.display == 'block' ? 'none' : 'none';
    DOM["title"].innerHTML = "Calorie Calculator";
};

// Unit Measurement Style Selection Formula //

function measurementCheck() {
    if (document.getElementById('calorieimp').checked) {
        DOM["footHeightMeasurement"].style.display = "inline-block"
        DOM["inchHeightMeasurement"].style.display = "inline-block"
        DOM["cmHeightMeasurement"].style.display = "none"
        DOM["poundWeightMeasurement"].style.display = "inline-block"
        DOM["kgWeightMeasurement"].style.display = "none"
    } else if (document.getElementById('caloriekg').checked) {
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
    var impChecked =  document.getElementById('calorieimp').checked
    var metricChecked =  document.getElementById('caloriekg').checked
    var activitySelection = DOM["activityMeasurementSelector"].selectedIndex
    var ageInputFilled = (!isNaN(parseInt(DOM["ageMeasurement"].value)) && (parseInt(DOM["ageMeasurement"].value) > 0) && (parseInt(DOM["ageMeasurement"].value) < 99))
    var footInputFilled = (!isNaN(parseInt(DOM["footHeightMeasurement"].value)) && (parseInt(DOM["footHeightMeasurement"].value) > 3) && (parseInt(DOM["footHeightMeasurement"].value) < 8))
    var inchInputFilled = (!isNaN(parseInt(DOM["inchHeightMeasurement"].value)) && (parseInt(DOM["inchHeightMeasurement"].value) < 12))
    var poundInputFilled = (!isNaN(parseInt(DOM["poundWeightMeasurement"].value)) && (parseInt(DOM["poundWeightMeasurement"].value) > 0))
    var cmInputFilled = (!isNaN(parseInt(DOM["cmHeightMeasurement"].value)) && (parseInt(DOM["cmHeightMeasurement"].value) > 0) && (parseInt(DOM["cmHeightMeasurement"].value) < 255))
    var kgInputFilled = (!isNaN(parseInt(DOM["kgWeightMeasurement"].value)) && (parseInt(DOM["kgWeightMeasurement"].value) > 0))
    if ((impChecked || metricChecked ) && activitySelection != 0 && ageInputFilled && footInputFilled && inchInputFilled && poundInputFilled) {
        DOM["calorieCalcFormButton"].disabled = false
        DOM["calorieCalcFormButton"].style.backgroundColor = "#e5e1e1";
        return true
    } else if ((impChecked || metricChecked ) && activitySelection != 0 && ageInputFilled && cmInputFilled && kgInputFilled) {
        DOM["calorieCalcFormButton"].disabled = false
        DOM["calorieCalcFormButton"].style.backgroundColor = "#e5e1e1";
        return true
    } else {
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
    personalHealthData["age"] = parseInt(DOM["ageMeasurement"].value)
    if (document.getElementById('calorieimp').checked) {
        var feetToInches = (parseInt(DOM["footHeightMeasurement"].value) * 12)
        var totalInches = (parseInt(DOM["inchHeightMeasurement"].value) + feetToInches)
        var inchesToCM = (totalInches * 2.54)
        personalHealthData["height"] = inchesToCM
        var lbsToKG = (parseInt(DOM["poundWeightMeasurement"].value) * .453592)
        personalHealthData["weight"] = lbsToKG
    } else if (document.getElementById('caloriekg').checked) {
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
DOM["liftToggle"].addEventListener("click", toggleButtonGreyout)
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
    DOM["liftingForm"].style.width = "350px";
    DOM["liftSubmitButton"].disabled = true;
    DOM["liftingCalcMeasurementTitle"].style.display = "none";
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
        DOM["liftingForm"].style.width = "revert";
        DOM["liftingCalcMeasurementTitle"].style.display = "block"
        DOM["liftingMeasurementSelector"].style.display = "inline"
        DOM["squatInput"].style.display = "block"
        DOM["squatInput"].parentNode.style.display = "block"
        DOM["benchInput"].style.display = "block"
        DOM["benchInput"].parentNode.style.display = "block"
        DOM["deadliftInput"].style.display = "block"
        DOM["deadliftInput"].parentNode.style.display = "block"
        DOM["bbellRowInput"].style.display = "none"
        DOM["bbellRowInput"].parentNode.style.display = "none"
        DOM["powerCleanInput"].style.display = "block"
        DOM["powerCleanInput"].parentNode.style.display = "block"
        DOM["ohpInput"].style.display = "none"
        DOM["ohpInput"].parentNode.style.display = "none"
        DOM["liftSubmitButton"].style.display = "block"
        DOM["instructionText"].style.display = "block"
    }
    // If Stronglifts or Madcow //
    else if (liftingSelection == 2 || liftingSelection == 3) {
        DOM["liftingForm"].style.width = "revert";
        DOM["liftingCalcMeasurementTitle"].style.display = "block"
        DOM["liftingMeasurementSelector"].style.display = "inline"
        DOM["squatInput"].style.display = "block"
        DOM["squatInput"].parentNode.style.display = "block"
        DOM["benchInput"].style.display = "block"
        DOM["benchInput"].parentNode.style.display = "block"
        DOM["deadliftInput"].style.display = "block"
        DOM["deadliftInput"].parentNode.style.display = "block"
        DOM["bbellRowInput"].style.display = "block"
        DOM["bbellRowInput"].parentNode.style.display = "block"
        DOM["powerCleanInput"].style.display = "none"
        DOM["powerCleanInput"].parentNode.style.display = "none"
        DOM["ohpInput"].style.display = "block"
        DOM["ohpInput"].parentNode.style.display = "block"
        DOM["liftSubmitButton"].style.display = "block"
        DOM["instructionText"].style.display = "block"
    }
    else {
        DOM["liftingMeasurementSelector"].style.display = "none"
    }
};

// Function Checking if All Lifting Form Fields are Filled //

function checkLiftingForm() {
    var impCheck = document.getElementById('liftimp').checked
    var metricCheck = document.getElementById('liftkg').checked
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
    if ((impCheck || metricCheck) && (liftingSelection == 1) && squatInputFilled && benchInputFilled && deadliftInputFilled
        && powerCleanInputFilled) {
        DOM["liftSubmitButton"].disabled = false
        DOM["liftSubmitButton"].style.backgroundColor = "#e5e1e1";
        return true
    } else if ((impCheck || metricCheck) && (liftingSelection == 2 || liftingSelection == 3) && squatInputFilled && benchInputFilled &&
        deadliftInputFilled && rowInputFilled && ohpInputFilled) {
        DOM["liftSubmitButton"].disabled = false
        DOM["liftSubmitButton"].style.backgroundColor = "#e5e1e1";
        return true
    }
    else {
        DOM["liftSubmitButton"].disabled = true
        DOM["liftSubmitButton"].style.backgroundColor = "#FFF";
        return false
    }
};

// Lifting Calculator Calculation Functions //
// Lifting Calculator Master Function //

function calculateProgram() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    determineMaxRep()
    populateMaxRep()
    if (liftingSelection == 1) {
        startingStrength()
    } else if (liftingSelection == 2) {
        strongLifts()
    } else if (liftingSelection == 3) {
        madCow()
    }
    DOM["liftingCalc"].style.display = "none"
    DOM["liftingCalcResults"].style.display = "block"
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

// Function Calculating 5 Rep Max from 1 Rep Max//

function getFiveRepMax() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    // If Starting Strength //
    if (liftingSelection == 1) {
        personalStrengthData["squat5RMax"] = (personalStrengthData["squatMax"] * .8578);
        personalStrengthData["bench5RMax"] = (personalStrengthData["benchMax"] * .8578);
        personalStrengthData["deadlift5RMax"] = (personalStrengthData["deadliftMax"] * .8578);
        personalStrengthData["powerClean5RMax"] = (personalStrengthData["powerCleanMax"] * .8578);
    }
    // If Stronglifts or Madcow //
    else if (liftingSelection != 1) {
        personalStrengthData["squat5RMax"] = (personalStrengthData["squatMax"] * .8578);
        personalStrengthData["bench5RMax"] = (personalStrengthData["benchMax"] * .8578);
        personalStrengthData["deadlift5RMax"] = (personalStrengthData["deadliftMax"] * .8578);
        personalStrengthData["row5RMax"] = (personalStrengthData["rowMax"] * .8578);
        personalStrengthData["ohp5RMax"] = (personalStrengthData["ohpMax"] * .8578);
    }
};

// Function Creating Starting Weight for Lifts from 5 Rep Max Rounded Up //

function createStartingWeight() {
    const liftingSelection = DOM["liftingProgramSelector"].selectedIndex
    if (liftingSelection == 1) {
        unroundedSquat = (personalStrengthData["squat5RMax"] * .8);
        unroundedBench = (personalStrengthData["bench5RMax"] * .8);
        unroundedDead = (personalStrengthData["deadlift5RMax"] * .8);
        unroundedPowerClean = (personalStrengthData["powerClean5RMax"] * .8);
        personalStrengthData["startingSquat"] = (unroundedSquat % 5) >= 2.5 ? parseInt(unroundedSquat / 5) * 5 + 5 : parseInt(unroundedSquat / 5) * 5;
        personalStrengthData["startingBench"] = (unroundedBench % 5) >= 2.5 ? parseInt(unroundedBench / 5) * 5 + 5 : parseInt(unroundedBench / 5) * 5;
        personalStrengthData["startingDead"] = (unroundedDead % 5) >= 2.5 ? parseInt(unroundedDead / 5) * 5 + 5 : parseInt(unroundedDead / 5) * 5;
        personalStrengthData["startingPowerClean"] = (unroundedPowerClean % 5) >= 2.5 ? parseInt(unroundedPowerClean / 5) * 5 + 5 : parseInt(unroundedPowerClean / 5) * 5;
    }
    else if (liftingSelection != 1) {
        unroundedSquat = (personalStrengthData["squat5RMax"] * .5);
        unroundedBench = (personalStrengthData["bench5RMax"] * .5);
        unroundedDead = (personalStrengthData["deadlift5RMax"] * .5);
        unroundedRow = (personalStrengthData["row5RMax"] * .5);
        unroundedOHP = (personalStrengthData["ohp5RMax"] * .5);
        personalStrengthData["startingSquat"] = (unroundedSquat % 5) >= 2.5 ? parseInt(unroundedSquat / 5) * 5 + 5 : parseInt(unroundedSquat / 5) * 5;
        personalStrengthData["startingBench"] = (unroundedBench % 5) >= 2.5 ? parseInt(unroundedBench / 5) * 5 + 5 : parseInt(unroundedBench / 5) * 5;
        personalStrengthData["startingDead"] = (unroundedDead % 5) >= 2.5 ? parseInt(unroundedDead / 5) * 5 + 5 : parseInt(unroundedDead / 5) * 5;
        personalStrengthData["startingRow"] = (unroundedRow % 5) >= 2.5 ? parseInt(unroundedRow / 5) * 5 + 5 : parseInt(unroundedRow / 5) * 5;
        personalStrengthData["startingOHP"] = (unroundedOHP % 5) >= 2.5 ? parseInt(unroundedOHP / 5) * 5 + 5 : parseInt(unroundedOHP / 5) * 5;
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

// Starting Strength //
// Starting Strength Master Function //

function startingStrength() {
    getFiveRepMax()
    createStartingWeight()
    buildSSProgression()
};

// Function Structuring Starting Strength Progression //

function buildSSProgression() {
    phase1()
    phase2()
};

// Starting Strength Phase 1 Function //

function phase1() {
    for (weekNum = 0; weekNum < 3; weekNum++) {
        var week = DOM[`week${weekNum + 1}Container`]
        for (dayNum = 0; dayNum < 3; dayNum++) {
            if (dayNum == 0 && weekNum == 0) {
                lowerProgression = 0;
                upperProgression = 0;
            } else {
                if (document.getElementById('liftimp').checked) {
                    lowerProgression = (lowerProgression + 10);
                    upperProgression = (upperProgression + 5);
                } else if (document.getElementById('liftkg').checked) {
                    lowerProgression = (lowerProgression + 5);
                    upperProgression = (upperProgression + 5);
                }
            }
            week.children[dayNum].innerHTML = `Day ${dayNum + 1}`
                + `<br>Squat - ${(personalStrengthData["startingSquat"] + lowerProgression)} x 5 reps x 3 sets`
                + `<br>Bench Press - ${(personalStrengthData["startingBench"] + upperProgression)} x 5 reps x 3 sets`
                + `<br>Deadlift - ${(personalStrengthData["startingDead"] + lowerProgression)} x 5 reps x 1 set`
        }
    };
};

// Starting Strength Phase 2 Function //

function phase2() {
    var cleanProgression = 0
    for (weekNum = 0; weekNum < 5; weekNum++) {
        var week = DOM[`week${weekNum + 4}Container`]
        for (dayNum = 0; dayNum < 3; dayNum++) {
            lowerProgression = (lowerProgression + 5);
            upperProgression = (upperProgression + 5);
            if (dayNum == 1 && weekNum == 0) {
                week.children[dayNum].innerHTML = `Day ${dayNum + 1}`
                    + `<br>Squat - ${(personalStrengthData["startingSquat"] + lowerProgression)} x 5 reps x 3 sets`
                    + `<br>Bench Press - ${(personalStrengthData["startingBench"] + upperProgression)} x 5 reps x 3 sets`
                    + `<br>Power Clean - ${(personalStrengthData["startingPowerClean"])} x 5 reps x 1 set`
            } else if (dayNum == 1 && weekNum != 0) {
                cleanProgression += 10
                week.children[dayNum].innerHTML = `Day ${dayNum + 1}`
                    + `<br>Squat - ${(personalStrengthData["startingSquat"] + lowerProgression)} x 5 reps x 3 sets`
                    + `<br>Bench Press - ${(personalStrengthData["startingBench"] + upperProgression)} x 5 reps x 3 sets`
                    + `<br>Power Clean - ${(personalStrengthData["startingPowerClean"] + cleanProgression)} x 5 reps x 1 set`
            } else {
                week.children[dayNum].innerHTML = `Day ${dayNum + 1}`
                    + `<br>Squat - ${(personalStrengthData["startingSquat"] + lowerProgression)} x 5 reps x 3 sets`
                    + `<br>Bench Press - ${(personalStrengthData["startingBench"] + upperProgression)} x 5 reps x 3 sets`
                    + `<br>Deadlift - ${(personalStrengthData["startingDead"] + lowerProgression)} x 5 reps x 1 set`
            }
        }
    };
};

// Stronglifts 5x5//
// Stronglifts Master Function //

function strongLifts() {
    getFiveRepMax()
    createStartingWeight()
    strongliftPropagation()
};

// Stronglift Build Propagation //

function strongliftPropagation() {
    if (document.getElementById('liftimp').checked) {
        var dailyProgression = 5;
        var deadProgression = 10;
    } else if (document.getElementById('liftkg').checked) {
        var dailyProgression = 5;
        var deadProgression = 5;
    }
    for (weekNum = 0; weekNum < 8; weekNum++) {
        var week = DOM[`week${weekNum + 1}Container`]
        for (dayNum = 0; dayNum < 3; dayNum++) {
            if ((dayNum == 0 || dayNum == 1) && weekNum == 0) {
                dailyProgression = 0;
                deadProgression = 0;
            } else {
                if (document.getElementById('liftimp').checked) {
                    dailyProgression = (dailyProgression + 5);
                    deadProgression = (deadProgression + 10);
                } else if (document.getElementById('liftkg').checked) {
                    dailyProgression = (dailyProgression + 5);
                    deadProgression = (deadProgression + 5);
                }
            }
            if ((weekNum == 0) && dayNum == 1) {
                personalStrengthData["startingSquat"] += 5
            }
            // Odd Weeks Go ABA, Even Weeks Go BAB // 
            if ((weekNum + 1) % 2 == 0) {
                if (dayNum == 0 || dayNum == 2) {
                    week.children[dayNum].innerHTML = `Day ${dayNum + 1}`
                        + `<br>Squat - ${(personalStrengthData["startingSquat"] + dailyProgression)} x 5 reps x 5 sets`
                        + `<br>Bench Press - ${(personalStrengthData["startingBench"] + dailyProgression)} x 5 reps x 5 sets`
                        + `<br>Barbell Row - ${(personalStrengthData["startingRow"] + dailyProgression)} x 5 reps x 5 sets`
                    }
                else {
                    week.children[dayNum].innerHTML = `Day ${dayNum + 1}`
                        + `<br>Squat - ${(personalStrengthData["startingSquat"] + dailyProgression)} x 5 reps x 5 sets`
                        + `<br>Overhead Press - ${(personalStrengthData["startingOHP"] + dailyProgression)} x 5 reps x 5 sets`
                        + `<br>Deadlift - ${(personalStrengthData["startingDead"] + deadProgression)} x 5 reps x 1 set`
                }
            } else {
                if (dayNum == 0 || dayNum == 2) {
                    week.children[dayNum].innerHTML = `Day ${dayNum + 1}`
                        + `<br>Squat - ${(personalStrengthData["startingSquat"] + dailyProgression)} x 5 reps x 5 sets`
                        + `<br>Overhead Press - ${(personalStrengthData["startingOHP"] + dailyProgression)} x 5 reps x 5 sets`
                        + `<br>Deadlift - ${(personalStrengthData["startingDead"] + deadProgression)} x 5 reps x 1 set`
                }
                else {
                    week.children[dayNum].innerHTML = `Day ${dayNum + 1}`
                        + `<br>Squat - ${(personalStrengthData["startingSquat"] + dailyProgression)} x 5 reps x 5 sets`
                        + `<br>Bench Press - ${(personalStrengthData["startingBench"] + dailyProgression)} x 5 reps x 5 sets`
                        + `<br>Barbell Row - ${(personalStrengthData["startingRow"] + dailyProgression)} x 5 reps x 5 sets`
                }
            }
        }
    };
};

// MadCow 5x5 //
// MadCow Master Function //

function madCow() {
    getFiveRepMax()
    madCowPropagation()
};

// MadCow Object Population Functions //
// MadCow Lift Name Function //

function populatePSDMadCowName(personalStrengthData, names) {
    personalStrengthData["madCowLift"][0].name = names[0];
    personalStrengthData["madCowLift"][1].name = names[1];
    personalStrengthData["madCowLift"][2].name = names[2];
};

// MadCow Lift Weight Function //

function populatePSDMadCowWeight(personalStrengthData, weights) {
    personalStrengthData["madCowLift"][0].weight = weights[0];
    personalStrengthData["madCowLift"][1].weight = weights[1];
    personalStrengthData["madCowLift"][2].weight = weights[2];
};

// MadCow Day One Lift Function //

function madCowDay1(week, dayNum, lifts) {
    week.children[dayNum].innerHTML += `<br> ${personalStrengthData["madCowLift"][lifts].name}`
    for (sets = 0; sets < 5; sets++) {
        increaseInterval = (.5 + (.125 * sets))
        rawWeight = personalStrengthData["madCowLift"][lifts].weight * increaseInterval
        roundedWeight = (rawWeight % 5) >= 2.5 ? parseInt(rawWeight / 5) * 5 + 5 : parseInt(rawWeight / 5) * 5;
        week.children[dayNum].innerHTML += `<br> ${roundedWeight} x 5 reps`
    };
};

// MadCow Day Two Lift Function //

function madCowDay2(week, dayNum, lifts) {
    week.children[dayNum].innerHTML += `<br> ${personalStrengthData["madCowLift"][lifts].name}`
    for (sets = 0; sets < 4; sets++) {
        squatInterval = (sets != 3) ? (.5 + (.125 * sets)) : .75
        day2Interval = (.625 + (.125 * sets))
        rawWeight = (lifts == 0) ? personalStrengthData["madCowLift"][lifts].weight * squatInterval : personalStrengthData["madCowLift"][lifts].weight * day2Interval
        roundedWeight = (rawWeight % 5) >= 2.5 ? parseInt(rawWeight / 5) * 5 + 5 : parseInt(rawWeight / 5) * 5;
        week.children[dayNum].innerHTML += `<br> ${roundedWeight} x 5 reps`
        if ((lifts == 1) && (sets == 3) && (weekNum % 2 == 0)) {
            personalStrengthData["madCowOHPNewWeight"] = (roundedWeight + (roundedWeight * .025))
        }
        if ((lifts == 2) && (sets == 3)) {
            personalStrengthData["madCowDeadliftNewWeight"] = (roundedWeight + (roundedWeight * .025))
        }
    };
};

// MadCow Day Three Lift Function //

function madCowDay3(week, dayNum, lifts) {
    week.children[dayNum].innerHTML += `<br> ${personalStrengthData["madCowLift"][lifts].name}`
    for (sets = 0; sets < 6; sets++) {
        increaseInterval = (sets < 5) ? (.525 + (.125 * sets)) : .775
        rawWeight = personalStrengthData["madCowLift"][lifts].weight * increaseInterval
        roundedWeight = (rawWeight % 5) >= 2.5 ? parseInt(rawWeight / 5) * 5 + 5 : parseInt(rawWeight / 5) * 5;
        if (sets < 4) {
            week.children[dayNum].innerHTML += `<br> ${roundedWeight} x 5 reps`
        } else if (sets == 4) {
            week.children[dayNum].innerHTML += `<br> ${roundedWeight} x 3 reps`
            newMax = roundedWeight
        } else if (sets == 5) {
            week.children[dayNum].innerHTML += `<br> ${roundedWeight} x 8 reps`
        }
    };
    personalStrengthData["madCowLift"][lifts].newWeight = newMax
};


// Populate MadCow Lifting Program Function //

function madCowPropagation() {
    personalStrengthData["madCowLift"] = {};
    personalStrengthData["madCowLift"][0] = {};
    personalStrengthData["madCowLift"][1] = {};
    personalStrengthData["madCowLift"][2] = {};
    for (weekNum = 0; weekNum < 8; weekNum++) {
        var week = DOM[`week${weekNum + 1}Container`]
        for (dayNum = 0; dayNum < 3; dayNum++) {
            week.children[dayNum].innerHTML += `Day ${dayNum + 1}`
            for (lifts = 0; lifts < 3; lifts++) {
                if (dayNum == 0) {
                    populatePSDMadCowName(personalStrengthData, ["Squat", "Bench", "Barbell Row"])
                    if (weekNum != 0) {
                        populatePSDMadCowWeight(personalStrengthData, [personalStrengthData["madCowLift"][0].newWeight,
                        personalStrengthData["madCowLift"][1].newWeight,
                        personalStrengthData["madCowLift"][2].newWeight]);
                    } else if (weekNum == 0) {
                        populatePSDMadCowWeight(personalStrengthData, [personalStrengthData["squat5RMax"],
                        personalStrengthData["bench5RMax"],
                        personalStrengthData["row5RMax"]]);
                    }
                    madCowDay1(week, dayNum, lifts)
                } else if (dayNum == 1) {
                    populatePSDMadCowName(personalStrengthData, ["Squat", "Overhead Press", "Deadlift"])
                    if (weekNum != 0) {
                        populatePSDMadCowWeight(personalStrengthData, [personalStrengthData["madCowLift"][0].newWeight,
                        personalStrengthData["madCowOHPNewWeight"],
                        personalStrengthData["madCowDeadliftNewWeight"]])
                    } else if (weekNum == 0) {
                        populatePSDMadCowWeight(personalStrengthData, [personalStrengthData["squat5RMax"],
                        personalStrengthData["ohp5RMax"],
                        personalStrengthData["deadlift5RMax"]])
                    }
                    madCowDay2(week, dayNum, lifts)
                } else if (dayNum == 2) {
                    populatePSDMadCowName(personalStrengthData, ["Squat", "Bench", "Barbell Row"])
                    if (weekNum != 0) {
                        populatePSDMadCowWeight(personalStrengthData, [personalStrengthData["madCowLift"][0].newWeight,
                        personalStrengthData["madCowLift"][1].newWeight,
                        personalStrengthData["madCowLift"][2].newWeight])
                    } else if (weekNum == 0) {
                        populatePSDMadCowWeight(personalStrengthData, [personalStrengthData["squat5RMax"],
                        personalStrengthData["bench5RMax"],
                        personalStrengthData["row5RMax"]])
                    }
                    madCowDay3(week, dayNum, lifts)
                }
            }
        }
        week.children[0].innerHTML += "<br> Assistance - 2 sets Weighted Hyper Extension (10-12 reps), 4 sets weighted situps (10-12 reps)"
        week.children[1].innerHTML += "<br> Assistance - 3 sets situps (max reps)"
        week.children[2].innerHTML += "<br> Assistance - 3 sets Weighted Dips (5-8 reps), 3 sets Barbell Curls, (8 reps), Tricep Extensions (8 reps)"
    };
};

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