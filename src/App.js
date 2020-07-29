import React, {Component} from 'react'
import PlayerCard from "./PlayerCard.js";

class Game extends Component {
    constructor() {
        super()
        this.signs = ['rock', 'scissors', 'paper']
        this.state = {
            playerOne: 'rock',
            playerTwo: 'scissors',
            name1: 'John',
            name2: 'Computer',
        }
        this.setName1 = this.setName1.bind(this)
        this.setName2 = this.setName2.bind(this)
    }

    setName1 = event => {
        this.setState({name1: event.target.value})
    }

    setName2 = event => {
        this.setState({name2: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
    }

    playGame = () => {
        this.setState({
            playerOne: this.signs[Math.floor(Math.random() * 3)],
            playerTwo: this.signs[Math.floor(Math.random() * 3)],
        })
    }

    decideWinner = () => {
        const playerOne = this.state.playerOne
        const playerTwo = this.state.playerTwo

        if (playerOne === playerTwo) {
            return 'It is a Tie!'
        } else if ((playerOne === 'rock' && playerTwo === 'scissors') || (playerOne === 'paper' && playerTwo === 'rock') || (playerOne === 'scissors' && playerTwo === 'paper')) {
            return `${this.state.name1} wins!`
        } else {
            return `${this.state.name2} wins!`
        }
    }

    render() {
        return (
            <div className="style">
                <div>
                    <PlayerCard sign={this.state.playerOne}/>
                    <PlayerCard sign={this.state.playerTwo}/>
                </div>
                <div className="winner">{this.decideWinner()}</div>
                <button type="button" onClick={this.playGame}>Play the Game</button>
                <div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        Player 1 name:
                        <input className="player1" type="text" onChange={this.setName1}/>
                        Player 2 name:
                        <input className="player2" type="text" onChange={this.setName2}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Game