function PlayerController() {

    var playerService = new PlayerService()

    function drawPlayers(roster) {
        var rosterElem = document.getElementById('player-roster')
        rosterElem.innerHTML = ''

        for (var i = 0; i < roster.length; i++) {
            var player = roster[i];
            rosterElem.innerHTML +=

                        `<div class="player-card">
                            <img src=${player.image}>
                            <h4>${player.name}</h4>
                            <h4>${player.position}</h4>
                            <h4>${player.number}</h4>
                        </div>`

        }

    }

    this.handleReset = function() {
        var players = playerService.getPlayers()
        drawPlayers(players)
    }

    this.addPlayer = function addPlayer(event) {
        event.preventDefault()

        var form = event.target

        var playerName = form['playerName'].value
        var playerPosition = form['playerPosition'].value
        var playerNumber = form['playerNumber'].value
        var playerImage = form['playerImage'].value

        if(playerName.length > 50){
            alert("Too Long!")
            return
        }

        playerService.addPlayer(playerName, playerPosition, playerNumber, playerImage)
        this.handleReset()

    }

    this.handleReset()

}