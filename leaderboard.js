let matches = [
    { team1: "Team A", team2: "Team B", score1: 0, score2: 0 },
    { team1: "Team C", team2: "Team D", score1: 0, score2: 0 },
    { team1: "Team E", team2: "Team F", score1: 0, score2: 0 },
    { team1: "Team G", team2: "Team H", score1: 0, score2: 0 }
];

function generateLeaderboard() {
    let teamScores = {};

    // Calculate team wins
    matches.forEach(match => {
        if (match.score1 !== null && match.score2 !== null) {
            if (match.score1 > match.score2) {
                teamScores[match.team1] = (teamScores[match.team1] || 0) + 3;
            } else if (match.score1 < match.score2) {
                teamScores[match.team2] = (teamScores[match.team2] || 0) + 3;
            } else {
                teamScores[match.team1] = (teamScores[match.team1] || 0) + 1;
                teamScores[match.team2] = (teamScores[match.team2] || 0) + 1;
            }
        }
    });

    // Convert to sortable array
    let sortedTeams = Object.entries(teamScores).sort((a, b) => b[1] - a[1]);

    // Display leaderboard
    const leaderboardList = document.getElementById("leaderboardList");
    leaderboardList.innerHTML = "";

    sortedTeams.forEach((team, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${team[0]} - ${team[1]} Points`;
        leaderboardList.appendChild(li);
    });
}
function generateLeaderboard() {
    let teamScores = JSON.parse(localStorage.getItem("teamScores")) || {};

    let sortedTeams = Object.entries(teamScores).sort((a, b) => b[1] - a[1]);

    const leaderboardList = document.getElementById("leaderboardList");
    leaderboardList.innerHTML = "";

    sortedTeams.forEach((team, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${team[0]} - ${team[1]} Points`;
        leaderboardList.appendChild(li);
    });
}

// Load leaderboard when page loads
window.onload = generateLeaderboard;