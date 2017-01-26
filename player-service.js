function PlayerService() {

    var players = [{
        name: 'Jim Bob',
        position: 'cheerleader',
        number: '666',
        image: 'http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/'
    }]

    this.getPlayers = function() {
        return players.slice(0,players.length)
    }

    this.addPlayer = function(playerName, playerPosition, playerNumber, playerImage){
        players.push({
            name: playerName,
            position: playerPosition,
            number: playerNumber,
            image: playerImage
        })
        console.log(players)
       
    }

}