import React from 'react'

const PlayerCard = props => {
    const sign = props.sign
    let image = ''

    const scissors = 'https://i.imgur.com/pgjyhIZ.png'
    const rock = 'https://i.imgur.com/LghSkIw.png'
    const paper = 'https://i.imgur.com/2gsdqvR.png'


    if (sign === 'rock') {
        image = rock
    } else if (sign === 'paper') {
        image = paper
    } else {
        image = scissors
    }


    return (
        <div className="playerCard">
            <img src={image} width="250" height="250"/>
        </div>
    )
}

export default PlayerCard