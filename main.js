/* Story Prompt Message Generator: Multiple sentence fragments are randomly selected and joined to create a story idea prompt. */

const subjects = ["cat", "widow", "vampire", "hiker", "scout troop", "young man", "woman", 
    "sorceress", "wizard","engineer", "artist", "actor", "pirate", "sailor"];

const verbs = ["finds", "hunts", "seeks", "fights", "chases", "is chased by", "faces", "feeds", 
    "hears", "dreams about", "stares down", "visits", "is ambushed by", "sings to", "dances with",
    "conquers"];

const objects = ["a lion", "a werewolf", "a raging storm", "a pack of wolves", "an unseen horror", 
    "an inner demon", "an angry mob", "a ferocious beast", "a doppleganger", "a litter of kittens",
    "a vampire", "a pack of zombies", "a band of thieves"];

const locations = ["on a grassy plain", "deep in the forest", "on a winding mountain road", 
    "in the depths of a cave", "inside a house", "on a lake", "on the beach", "on a ship", 
    "on a deserted island"];

// Return a random word from the provided array
function randomWord(array) {        
    let i = Math.floor(Math.random()*array.length);
    return array[i];
}

// Starts the sentence with "A [subject]" / "An [subject]" dependent on whether the first subject letter is a vowel or not
function intro() {
    let beginning = randomWord(subjects);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(beginning[0]/*.toLowerCase()*/)) { // If any capitalized subjects are added, use toLowerCase in the vowel check
        return `An ${beginning}`;
    } else {
        return `A ${beginning}`;
    }
}
// Creates a story prompt object using a supplied subject, verb, object, and location
const promptFactory = (_subject, _verb, _object, _location) => {
    return {
        _subject,
        _verb,
        _object,
        _location,

        // Getters are supplied for filtering and sorting funtionality in the future
        get subject() {
            return this._subject;
        },
        get verb() {
            return this._verb;
        },
        get object() {
            return this._object;
        },
        get location() {
            return this._location;
        },

        // Method to return a complete story prompt
        revealPrompt() {
            return `${this._subject} ${this._verb} ${this._object} ${this._location}`;
        },
    }    
}

// Create an array of prompts
function createPromptsCollection(numPromptsGenerated) {
    let newPromptArray = [];
    for (let i = 0; i < numPromptsGenerated; i++) {
        newPromptArray.push(promptFactory(intro(), randomWord(verbs), randomWord(objects), randomWord(locations)));
    }
    return newPromptArray;
}

// Store a generated array containing the specified number of prompts
let promptsCollection = createPromptsCollection( 3 );

// Display each of the generated prompts
for (let i = 0; i < promptsCollection.length; i++) {
    console.log(promptsCollection[i].revealPrompt()); 
} 