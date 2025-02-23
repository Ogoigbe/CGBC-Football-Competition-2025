function generateBracket() {
    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    let bracketContainer = document.getElementById("bracket");
    bracketContainer.innerHTML = "";

    if (teams.length < 2) {
        bracketContainer.innerHTML = "<p>At least 2 teams are required to generate a bracket.</p>";
        return;
    }

    shuffleArray(teams); // Randomize team order
    let rounds = createRounds(teams);
    displayBracket(rounds);
}

// Shuffle teams randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create matchups for each round
function createRounds(teams) {
    let rounds = [];
    while (teams.length > 1) {
        let round = [];
        for (let i = 0; i < teams.length; i += 2) {
            if (teams[i + 1]) {
                round.push({ team1: teams[i], team2: teams[i + 1] });
            } else {
                round.push({ team1: teams[i], team2: "BYE" });
            }
        }
        rounds.push(round);
        teams = round.map(match => match.team1); // Advance winners (placeholder)
    }
    return rounds;
}

// Display bracket in tree-style
function displayBracket(rounds) {
    let bracketContainer = document.getElementById("bracket");

    rounds.forEach((round, roundIndex) => {
        let roundDiv = document.createElement("div");
        roundDiv.classList.add("round");
        roundDiv.innerHTML = `<h3>Round ${roundIndex + 1}</h3>`;

        round.forEach(match => {
            let matchDiv = document.createElement("div");
            matchDiv.classList.add("match");
            matchDiv.innerHTML = `<p>${match.team1} vs ${match.team2}</p>`;
            roundDiv.appendChild(matchDiv);
        });

        bracketContainer.appendChild(roundDiv);
    });
}