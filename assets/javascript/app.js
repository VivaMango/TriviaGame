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
        P: "Hextech Munitions", Q: "Phosphorous Bomb", W: "Blood Rush", E: "Stand Aside", R: "Whirling Death"
    },
    draven: {
        P: "League of Draven", Q: "Spinning Axe", W: "A2Text", E: "A3Text", R: "A4Text"
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

var championArray = []

console.log(championObject.xayah.R); //FOR TESTING
//TESTING OUR ACCESS TO championObject
console.log(Object.values(championObject));
console.log(Object.entries(championObject.ashe));
console.log(Object.keys(championObject , "championObject"))


//Setting a name for our array of indexed objects from championObject (for selecting randomly by index location)
var championKeys = (Object.keys(championObject))




// Empty Arrays
//to hold the current question's possible answers
var currentChampion = ""
var currentAnswersArray = []
//to hold the already guessed objects from championObject
var usedChampions = []
// Empty Score Counter for our player
var playerCorrect = 0
var playerIncorrect = 0
// Other Counters
// var questionsRemaining = (championObject.length - (playerCorrect + playerIncorrect)) COMMENTED OUT UNTIL IMPLEMENTATION
// console.log(questionsRemaining , "questionsRemaining") //FOR TESTING


// Selecting a random champion from the championKeys
function getRandomChamp() {
    var randomNumber = getRandomInt(0 , 21)

    var currentChampion = championKeys[randomNumber]

    console.log(currentChampion , "currentChampion") //FOR TESTING


    //WHY DOESN'T DOT NOTATION WORK HERE????
    console.log(championObject[currentChampion] , "bracket notation")

    var answerObject = championObject[currentChampion]
    console.log(answerObject , "answerObject")

    var abilityKeys = (Object.keys(answerObject))
    console.log(abilityKeys , "abilityKeys")

  
    
}
getRandomChamp(); //FOR TESTING === WORKING

//PLACEHOLDER FOR OUR FOREACH TO GENERATE 5 BUTTONS FROM THE 5 ANSWERS IN currentAnswersArray
// currentAnswersArray.forEach()

//Champion Image Creation Function
function championImageCreator() {
    // storing our jQuery image handler as a variable to make it easier to manipulate
    var championImage = $("<img>");

    //automatically adding our pre-defined css styling .clickImageClass to each image
    championImage.addClass("championImageClass"); //PLACEHOLDER FOR BOOTSTRAP BUTTON CLASSES

    // using jQuery to add the image link attribute to our container
    championImage.attr("src", "assets/images/carmenSandiego.png"); //relative path to our image file COMMENTED OUT UNTIL IMAGES ARE ADDED

    // Adding each button to the DOM via our HTML container with a pre-named ID
    $("#championImageSpan").append(championImage);
};

championImageCreator(); //FOR TESTING
console.log("Where in the world is the rest of the code?") //FOR TESTING

// Answer Button Creator Function RUN VIA FOREACH championObject.champion.abilityLetter
function answerButtorCreator() {
    // storing our jQuery button handler as a variable to make it easier to manipulate
    var answerButton = $("<button>");

    // Adding button classes for Bootstrap
    answerButton.addClass("btn btn-primary btn-lg"); //come back to add our button styling

    // Giving our button a type attribute "button" for Bootstrap
    answerButton.attr("type", "button");

    // Adding the Ability Text to the Answer Button with jQuery
    answerButton.text("Champion Ability") //Champion Ability Placeholder for testing

    // Adding each button to the DOM via our HTML container with a pre-named ID
    $("#rightGameDisplay").append(answerButton);
};

// PLACEHOLDER FOR SETTIMEOUT 300000 AFTER BUTTONS ARE MADE



// PLACEHOLDER FOR ONCLICK FUNCTION USING $(THIS) TO COMPARE PLAYER CHOSEN BUTTON WITH CORRECT ANSWER


// PLACEHOLDER FOR WIN/LOSS CONDITIONS, COUNTER INCREMENTS AND ALERTS

// PLACEHOLDER FOR RESTART FUNCTION AND INTERVAL RESET FOR TIMER



//   Declaring our function to generate a random integer between two values. 
function getRandomInt(min , max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min)) + min; //getRandomInt is exclusive on the upper bound
  };