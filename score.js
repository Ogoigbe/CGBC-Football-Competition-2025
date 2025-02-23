let matches = [
    { team1: "Team A", team2: "Team B", score1: null, score2: null },
    { team1: "Team C", team2: "Team D", score1: null, score2: null },
    { team1: "Team E", team2: "Team F", score1: null, score2: null },
    { team1: "Team G", team2: "Team H", score1: null, score2: null }
];

function loadScorePanel() {
    const scorePanel = document.getElementById("scorePanel");
    scorePanel.innerHTML = "";

    matches.forEach((match, index) => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match");

        matchDiv.innerHTML = `
            <p>${match.team1} vs ${match.team2}</p>
            <input type="number" id="score1-${index}" placeholder="Score for ${match.team1}">
            <input type="number" id="score2-${index}" placeholder="Score for ${match.team2}">
            <button onclick="saveScore(${index})">Save</button>
        `;

        scorePanel.appendChild(matchDiv);
    });
}

function saveScore(index) {
    const score1 = document.getElementById(`score1-${index}`).value;
    const score2 = document.getElementById(`score2-${index}`).value;

    if (score1 !== "" && score2 !== "") {
        matches[index].score1 = parseInt(score1);
        matches[index].score2 = parseInt(score2);
        alert(`Scores updated: ${matches[index].team1} ${score1} - ${score2} ${matches[index].team2}`);
    } else {
        alert("Please enter both scores.");
    }
}

window.onload = loadScorePanel;
let matches = JSON.parse(localStorage.getItem("matches")) || [];

function saveScore(index) {
    const score1 = document.getElementById(`score1-${index}`).value;
    const score2 = document.getElementById(`score2-${index}`).value;

    if (score1 !== "" && score2 !== "") {
        matches[index].score1 = parseInt(score1);
        matches[index].score2 = parseInt(score2);
        localStorage.setItem("matches", JSON.stringify(matches)); // Save to localStorage
        alert(`Scores updated: ${matches[index].team1} ${score1} - ${score2} ${matches[index].team2}`);
    } else {
        alert("Please enter both scores.");
    }
}

function loadScorePanel() {
    const scorePanel = document.getElementById("scorePanel");
    scorePanel.innerHTML = "";

    matches.forEach((match, index) => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match");

        matchDiv.innerHTML = `
            <p>${match.team1} vs ${match.team2}</p>
            <input type="number" id="score1-${index}" placeholder="Score for ${match.team1}" value="${match.score1 || ''}">
            <input type="number" id="score2-${index}" placeholder="Score for ${match.team2}" value="${match.score2 || ''}">
            <button onclick="saveScore(${index})">Save</button>
        `;

        scorePanel.appendChild(matchDiv);
    });
}

// Load scores when page loads
window.onload = loadScorePanel;