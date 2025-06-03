const subjects = ["cat", "widow", "vampire", "hiker", "girl scout troop", "young man", "woman"];
const verbs = ["finds", "hunts", "seeks", "fights", "chases", "is chased by", "greets"];
const objects = ["a lion", "a werewolf", "a raging storm", "a pack of wolves", "an unseen horror", "an inner demon", "the rising sun"];
const locations = ["in a grassy plain", "on a winding mountain road", "in the depths of a cave", "inside a house", "on a lake", "on the beach"];

function randomWord(array) {
    let i = Math.floor(Math.random()*array.length);
    return array[i];
}

function storyGenerator() {
    return `A ${randomWord(subjects)} ${randomWord(verbs)} ${randomWord(objects)} ${randomWord(locations)}.`;
}

console.log(storyGenerator());

