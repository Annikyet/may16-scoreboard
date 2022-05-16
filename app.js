class Team {
  constructor(name, color) {
    this.name = name
    this.color = color
    this.score = 0
  }
}

let teams = [
  new Team("blue", "#0000ff"),
  new Team("red", "#ff0000")
]

function drawTeamScore(teamIdx) {
  document.getElementById(`score-${teamIdx}`).innerText = teams[teamIdx].score

}

function score(teamIdx) {
  teams[teamIdx].score += Math.floor(Math.random() * 4)
  drawTeamScore(teamIdx)
}

function reset() {
  for (let i = 0; i < teams.length; i++) {
    teams[i].score = 0
    drawTeamScore(i)
  }
}