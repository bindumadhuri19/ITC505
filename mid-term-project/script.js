const story = {
    start: {
        text: "You are in a dark forest. What do you do?",
        choices: [
            { text: "Walk north", consequence: "north" },
            { text: "Walk south", consequence: "south" }
        ],
        image: "forest.jpg"
    },
    north: {
        text: "You find a river. What do you do?",
        choices: [
            { text: "Swim across", consequence: "swim" },
            { text: "Follow the river", consequence: "followRiver" }
        ],
        image: "river.jpg"
    },
    south: {
        text: "You encounter a wild animal. What do you do?",
        choices: [
            { text: "Run away", consequence: "run" },
            { text: "Climb a tree", consequence: "climbTree" }
        ],
        image: "wild animal.jpg"
    },
    swim: {
        text: "You safely swim across and find a village. The end.",
        choices: [],
        image: "village.jpg"
    },
    followRiver: {
        text: "You follow the river and reach a waterfall. The end.",
        choices: [],
        image: "waterfall.jpg"
    },
    run: {
        text: "You manage to escape and find a safe place. The end.",
        choices: [],
        image: "safeplace.jpg"
    },
    climbTree: {
        text: "You are safe in the tree but stuck. The end.",
        choices: [],
        image: "tree.jpg"
    }
};

function startGame() {
    updatePage('start');
}

function updatePage(stage) {
    const stageData = story[stage];
    document.getElementById('story').textContent = stageData.text;
    document.getElementById('storyImage').src = stageData.image;
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    stageData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => updatePage(choice.consequence));
        choicesDiv.appendChild(button);
    });
}

function endGame(stage) {
    const stageData = story[stage];
    document.getElementById('story').textContent = stageData.text;
    document.getElementById('storyImage').src = stageData.image;
    document.getElementById('choices').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', startGame);
