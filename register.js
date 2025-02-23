let teams = [];

function registerTeam() {
    const teamInput = document.getElementById("teamName");
    const teamName = teamInput.value.trim();

    if (teamName !== "") {
        teams.push(teamName);
        updateTeamList();
        teamInput.value = ""; // Clear input field
    }
}

function updateTeamList() {
    const teamList = document.getElementById("teamList");
    teamList.innerHTML = ""; // Clear previous list

    teams.forEach((team, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${team}`;
        teamList.appendChild(li);
    });
}
let teams = JSON.parse(localStorage.getItem("teams")) || [];

function registerTeam() {
    const teamInput = document.getElementById("teamName");
    const teamName = teamInput.value.trim();

    if (teamName !== "") {
        teams.push(teamName);
        localStorage.setItem("teams", JSON.stringify(teams)); // Save to localStorage
        updateTeamList();
        teamInput.value = "";
    }
}

function updateTeamList() {
    const teamList = document.getElementById("teamList");
    teamList.innerHTML = "";

    teams.forEach((team, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${team}`;
        teamList.appendChild(li);
    });
}

// Load teams when page loads
window.onload = updateTeamList;