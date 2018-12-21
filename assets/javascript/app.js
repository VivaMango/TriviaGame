console.log("Game Test") //FOR TESTING


//Object containing our Champions (Questions) and our Abilities (Possible Answers). championName.R is always the correct answer.
var championObject = {
    ashe: {
        P: "Frost Shot", Q: "Ranger's Focus", W: "Volley", E: "Hawkshot", R: "Enchanted Crystal Arrow"
    },
    caitlyn: {
        P: "Headshot", Q: "Piltover Peacemaker", W: "Yordle Snap Trap", E: "90 Caliber Net", R: "Ace in the Hole"
    },
    corki: {
        P: "Hextech Munitions", Q: "Phosphorous Bomb", W: "Valkyrie", E: "Gatling Gun", R: "Missile Barrage"
    },
    draven: {
        P: "League of Draven", Q: "Spinning Axe", W: "Blood Rush", E: "Stand Aside", R: "Whirling Death"
    },
    ezreal: {
        P: "Rising Spell Force", Q: "Mystic Shot", W: "Essence Flux", E: "Arcane Shift", R: "Trueshot Barrage"
    },
    graves: {
        P: "New Destiny", Q: "End of the Line", W: "Smoke Screen", E: "Quickdraw", R: "Collateral Damage"
    },
    jhin: {
        P: "Whisper", Q: "Dancing Grenade", W: "Deadly Flourish", E: "Captive Audience", R: "Curtain Call"
    },
    jinx: {
        P: "Get Excited!", Q: "Switcheroo!", W: "Zap!", E: "Flame Chompers!", R: "Super Mega Death Rocket!"
    },
    kaiSa: {
        P: "Second Skin", Q: "Icathian Rain", W: "Void Seeker!", E: "Supercharge", R: "Killer Instinct"
    },
    kalista: {
        P: "Martial Poise", Q: "Pierce", W: "Sentinel", E: "Rend", R: "Fate's Call"
    },
    kindred: {
        P: "Mark of the Kindred", Q: "Dance of Arrows", W: "Wolf's Frenzy", E: "Mounting Dread", R: "Lamb's Respite"
    },
    kogMaw: {
        P: "Icathian Surprise", Q: "Caustic Spittle", W: "Bio-Arcane Barrage", E: "Void Ooze", R: "Living Artillery"
    },
    lucian: {
        P: "Lightslinger", Q: "Piercing Light", W: "Ardent Blaze", E: "Relentless Pursuit", R: "The Culling"
    },
    missFortune: {
        P: "Love Tap", Q: "Double Up", W: "Strut", E: "Make it Rain", R: "Bullet Time"
    },
    quinn: {
        P: "Harrier", Q: "Blinding Assault", W: "Heightened Senses", E: "Vault", R: "Behind Enemy Lines"
    },
    sivir: {
        P: "Fleet of Foot", Q: "Boomerang Blade", W: "Ricochet", E: "Spell Shield", R: "On the Hunt"
    },
    tristana: {
        P: "Draw a Bead", Q: "Rapid Fire", W: "Rocket Jump", E: "Explosive Charge", R: "Buster Shot"
    },
    twitch: {
        P: "Deadly Venom", Q: "Ambush", W: "Venom Cask", E: "Contaminate", R: "Spray and Pray"
    },
    varus: {
        P: "Living Vengeance", Q: "Piercing Arrow", W: "Blighted Quiver", E: "Hail of Arrows", R: "Chain of Corruption"
    },
    vayne: {
        P: "Night Hunter", Q: "Tumble", W: "Silver Bolts", E: "Condemn", R: "Final Hour"
    },
    xayah: {
        P: "Clean Cuts", Q: "Double Daggers", W: "Deadly Plumage", E: "Bladecaller", R: "Featherstorm"
    },
};

var championArray = [] //NOT IN USE FLAGGED FOR REMOVAL

console.log(championObject.xayah.R); //FOR TESTING
//TESTING OUR ACCESS TO championObject
console.log(Object.values(championObject));//FOR TESTING
console.log(Object.entries(championObject.ashe));//FOR TESTING
console.log(Object.keys(championObject , "championObject"))//FOR TESTING


//Setting a name for our array of indexed objects from championObject (for selecting randomly by index location)
var championKeys = (Object.keys(championObject))




// Empty Arrays
//to hold the current question's possible answers
var currentChampion = "" //NOT SURE IF NEEDED RIGHT NOW
var currentAnswersArray = [] //NOT IN USE FLAGGED FOR REMOVAL
//to hold the already selected objects from championObject
var usedChampions = []
// Empty Score Counters for our player
var playerCorrect = 0
var playerIncorrect = 0
// Other Counters
// var questionsRemaining = (championObject.length - (playerCorrect + playerIncorrect)) COMMENTED OUT UNTIL IMPLEMENTATION
// console.log(questionsRemaining , "questionsRemaining") //FOR TESTING


// BEGIN ultimateTriviaGame FUNCTION DECLARATION
// BEGIN ultimateTriviaGame FUNCTION DECLARATION
// BEGIN ultimateTriviaGame FUNCTION DECLARATION
function ultimateTriviaGame() {
    
    
    var randomNumber = getRandomInt(0 , 21) //Calling our getRandomInt function (DEF BELOW) to determine a random number (bounds are index values of championKeys array)
    // var currentChampion = championKeys[randomNumber] //Setting a variable to hold our randomly selected champion. COMMENTED OUT FOR TESTING IF REMOVABLE
    function randomChampion(randomNumber) {
        var selectedChampion = championKeys[randomNumber] //setting our randomly selected champion from championObject as a variable
        var booleanUsedChamp = usedChampions.includes(selectedChampion , 0) //Checks array usedChampions to see if selectedChampion has been selected already this session
        console.log(selectedChampion , "selectedChampion") //FOR TESTING
        console.log(booleanUsedChamp , "booleanUsedChamp") //FOR TESTING

        // DUPLICATE SELECTION PREVENTION
        // IF/ELSE CHECKS if randomChampion has already been put into usedChampions array or not
        if (booleanUsedChamp === true) {
            var preventDuplicate = getRandomInt(0 , 21) //randomizes another champion if selectedChampion was in usedChampion
            var championReroll = randomChampion(preventDuplicate) //setting new random champion as a variable
            console.log(championReroll , "ifchampionReroll") //FOR TESTING
            return championReroll
        }
        else {
            console.log(selectedChampion , "elseselectedChampion") //FOR TESTING
            return selectedChampion
        }

    }
    randomChampion(randomNumber) //FORTESTING
    console.log((randomChampion(randomNumber)) , "calling randomChampion function") //RETURNS A CHAMPION NAME

    // RUNS OUR randomChampion function and saves the uniqueChampion to a variable
    var uniqueChampion = randomChampion(randomNumber) //setting our unique champion "question" as a variable
    console.log (uniqueChampion , "uniqueChamp") //FOR TESTING


    // console.log(currentChampion , "currentChampion") //FOR TESTING COMMENTED OUT TO SEE IF REMOVABLE

    // STILL NEED TO RANDOMIZE BUTTONS WHEN PLACED IN GAMEDISPLAY
    // ANSWER BUTTON CREATOR SCOPE ADJUSTMENT === WORKING
    // Answer Button Creator Function RUN VIA For loop abilityValues
    function answerButtorCreator() {

         
        // storing our jQuery button handler as a variable to make it easier to manipulate
        var answerButton = $("<button>");

        // Adding button classes for Bootstrap
        answerButton.addClass("btn btn-primary btn-lg"); //BOOTSTRAP BUTTON STYLING
       
        //CUSTOM CLASS FOR CSS AND ONCLICK LISTENER
        answerButton.addClass("answerButtonClass")

        // Giving our button a type attribute "button" for Bootstrap
        answerButton.attr("type", "button");

        // Adding the Ability Text to the Answer Button with jQuery
        answerButton.text(abilityValues[i]) //abilityValues[i] defined below, sorted from championObject


        // saving value of current ability i in loop (DEF BELOW) to a variable
        var abilityKeyData = abilityKeys[i]

        // converting abilityKeyData toString to use with HTML5 custom data attributes FOR WIN CONDITION
        var abilityKeyDataString = abilityKeyData.toString()

        //Applying our custom data attribute to each button based on abilityKey
        console.log(abilityKeyDataString , "abilityKeyDataString") //FOR TESTING
        answerButton.data("ability-key-data" , abilityKeyDataString)//FOR TESTING

        // Adding each button to the Right Game Display via our HTML container with a pre-named ID
        $("#rightGameDisplay").append(answerButton);
    };



    

    //WHY DOESN'T DOT NOTATION WORK HERE????
    //console.log(championObject.currentChampion . "dot notation")

    console.log(championObject[uniqueChampion] , "bracket notation") //REPLACED currentChampion with uniqueChampion

    // Setting our currentChampion object access to a variable
    var answerObject = championObject[uniqueChampion] //REPLACED currentChampion with uniqueChampion
    console.log(answerObject , "answerObject") //FOR TESTING

    // Setting our access to the Values of answerObject to a variable
    var abilityValues = (Object.values(answerObject))
    console.log(abilityValues , "abilityValues") //FOR TESTING

    // Setting our access to the Keys of answerObject to a variable
    var abilityKeys = (Object.keys(answerObject))
    console.log(abilityKeys , "abilityKeys") //FOR TESTING

    
    
    

    //For Loop that accesses our championObject, and creates an answerButton for every ability in abilityValues
    for (i = 0; i < abilityValues.length; i++) {
        console.log(abilityValues[i]) //FOR TESTING
        answerButtorCreator(); // answerButtonCreator (DEF ABOVE) inside ultimateTriviaGame for proper scope

    }
    
    // MAYBE USE PUSH TO FILL usedChampions ARRAY FOR DUPLICATE CONTROL FLOW HERE
    usedChampions.push(uniqueChampion) //REPLACED currentChampion with uniqueChampion
    console.log(usedChampions) //FOR TESTING

    // PLACEHOLDER FOR ONCLICK FUNCTION USING $(THIS) TO COMPARE PLAYER CHOSEN BUTTON WITH CORRECT ANSWER
    $(".answerButtonClass").click(function() {

        // Setting our access to the custom data attribute (DEF ABOVE) from answerButtonCreator function to a variable
        // USED $(THIS) TO LOCALIZE DATA ATTRIBUTE TO CLICKED BUTTON
        var abilityKeyOfClick = ($(this).data("ability-key-data"))

        console.log(this , "answerButton click this test") //FOR TESTING
    
        console.log(($(this).data("ability-key-data")) , "ability-key-data test") //FOR TESTING
        console.log(abilityKeyOfClick , "abilityKeyOfClick test") //FOR TESTING


        //WIN/LOSS CONDITIONS, COUNTER INCREMENTS AND ALERTS(TO BE REPLACED WITH A SETTIMEOUT AND WAITGIF BETWEEN QUESTIONS)

        if (abilityKeyOfClick === "R") {
            console.log("Correct") //FOR TESTING
            alert("You chose correctly! Great job!") //REPLACE WITH SETTIMEOUT SHOW WAITGIF BETWEEN QUESTIONS
            playerCorrect++; //increments correct answer counter
            $("#playerCorrectSpan").html(playerCorrect) //updates the counter on the DOM
            console.log(playerCorrect , "playerCorrect") //FOR TESTING
            //CLEARINTERVAL HERE WHEN SCOPE FIXED
            // Empties our Right Game Display of previous buttons before creating new buttons
            $("#rightGameDisplay").empty() //empties buttons from previous questions from gameDisplay
            ultimateTriviaGame() //recurring function for next question
        }
        else {
            console.log("Incorrect") //FOR TESTING
            alert("You chose incorrectly! This isn't Iron 4!") //REPLACE WITH SETTIMEOUT SHOW WAITGIF BETWEEN QUESTIONS
            playerIncorrect++; //increments incorrect answer counter
            $("#playerIncorrectSpan").html(playerIncorrect) //updates the counter on the DOM
            console.log(playerIncorrect , "playerIncorrect") //FOR TESTING
            //CLEARINTERVAL HERE WHEN SCOPE FIXED
            // Empties our Right Game Display of previous buttons before creating new buttons
            $("#rightGameDisplay").empty() //empties buttons from previous questions from gameDisplay
            ultimateTriviaGame() //recurring function for next question
        }


    });
    // NEED TO MOVE THIS FUNCTION TO SOLVE SCOPING ISSUE WITH WIN CONDITION
    // COUNTDOWN TIMER PER QUESTION FUNCTION
    function questionCountdown() {
        var timerSpan = $("#timerSpan") //jQuery DOM timer handler saved as variable
           
        var timerValue = 30 //default value for timer (30 sec) MOVE TO GLOBAL SCOPE?

        var timerInterval = setInterval(timerLoop , 1000) //setting a 1 sec interval for our function to decrement timer (if time remaining) else end question
                

            // Function to set our interval to + timeout condition and reset
        function timerLoop () {
            if (timerValue === 0) {
                playerIncorrect++; //increments incorrect answer counter
                alert("You are out of time! Next Champion!") //REPLACE WITH SETTIMEOUT SHOW WAITGIF BETWEEN QUESTIONS
                clearInterval(timerInterval) //clearing our timerInterval for the next question
                $("#rightGameDisplay").empty() //empties buttons from previous questions from gameDisplay
                $("#playerIncorrectSpan").html(playerIncorrect) //updates the counter on the DOM
                ultimateTriviaGame() //recurring function for next question
            }
            else {
                timerValue--; //decrements the time remaining by one second
                timerSpan.html(timerValue) //update the timer on the DOM
                console.log(timerValue , "timerValue") //FOR TESTING
            }
        }
    }
    questionCountdown() //Runs questionCountdown inside first game load
}
// END OF ultimateTriviaGame FUNCTION DECLARATION
// END OF ultimateTriviaGame FUNCTION DECLARATION
// END OF ultimateTriviaGame FUNCTION DECLARATION


// Calling ultimateTriviaGame function (DEF ABOVE) to randomly select a champion and generate the answerButtons on our Right Game Display
ultimateTriviaGame(); //FOR TESTING === WORKING

//Champion Image Creation Function WILL BE MOVED INTO ultimateGameTrivia
// IMAGES STILL NEED TO BE SOURCED THEN ADD THIS TO answerButtonCreator
function championImageCreator() {
    // storing our jQuery image handler as a variable to make it easier to manipulate
    var championImage = $("<img>");

    //automatically adding our pre-defined css styling .clickImageClass to each image
    championImage.addClass("championImageClass"); //PLACEHOLDER FOR BOOTSTRAP BUTTON CLASSES

    // using jQuery to add the image link attribute to our container
    championImage.attr("src", "assets/images/carmenSandiego.png"); //relative path to our image file TEST IMAGE ONLY FOR NOW

    // Adding each image to the DOM via our HTML container with a pre-named ID
    $("#championImageSpan").append(championImage);
};

championImageCreator(); //FOR TESTING
console.log("Where in the world are the rest of the images") //FOR TESTING


//   Declaring our function to generate a random integer between two values. 
function getRandomInt(min , max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min)) + min; //getRandomInt is exclusive on the upper bound
  };