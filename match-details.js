document.addEventListener("DOMContentLoaded", () => {
    let matches = JSON.parse(localStorage.getItem("matches")) || [];

    const matchDetailsContainer = document.getElementById("matchDetails");
    matchDetailsContainer.innerHTML = "";

    if (matches.length === 0) {
        matchDetailsContainer.innerHTML = "<p>No match results available yet.</p>";
    } else {
        matches.forEach(match => {
            if (match.score1 !== null && match.score2 !== null) {
                let winner = match.score1 > match.score2 ? match.team1 : match.team2;

                const matchDiv = document.createElement("div");
                matchDiv.classList.add("match");

                matchDiv.innerHTML = `
                    <h3>${match.team1} vs ${match.team2}</h3>
                    <p>Score: ${match.team1} ${match.score1} - ${match.score2} ${match.team2}</p>
                    <p>Winner: <strong>${winner}</strong></p>
                `;

                matchDetailsContainer.appendChild(matchDiv);
            }
        });
    }
});