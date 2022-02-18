import React, { Component } from 'react'
import { randomCity } from './Cities'
import './Hangman.css'

class Hangman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: ['0', '1', '2', '3', '4', '5', '6', '7'],
            guessWord: new Set(),
            city: randomCity(),
            lives: 7
        }
        this.handleGuess = this.handleGuess.bind(this)
        this.restart = this.restart.bind(this)
    }

    restart() {
        window.location.reload()
    }

    randWord() {
        return this.state.city.split('').map(ltr => (this.state.guessWord.has(ltr) ? ltr : <h1 className='guessWord'>__</h1>))
    }

    handleGuess(e) {
        let letter = e.target.value;
        this.setState(st => ({
            guessWord: st.guessWord.add(letter),
            lives: st.lives - (st.city.includes(letter) ? 0 : 1),
            randomWord: st.randomWord + letter
        }))
    }

    generateButtons() {
        let alphaets = 'abcdefghijklmnopqrstuvwxyz'
        return alphaets.split('').map(ltr =>
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessWord.has(ltr)}
            >
                {ltr}
            </button>
        )
    }

    render() {
        const isWinner = this.randWord().join("") === this.state.city
        const isGameOver = this.state.lives === 0 ? alert(`GAME OVER => City is ****${this.state.city}****`) : this.generateButtons()
        const restart = this.state.lives === 0 && <button className='restart' onClick={this.restart}>Restart</button>
        return (
            <div className='hangman'>
                <h1>Hangman Game</h1>
                <p>Lives : {this.state.lives} </p>
                <img src={`Hangman/${this.state.images[Math.abs(this.state.lives - 7)]}.jpg`} alt='hangman' />
                <div className='words'>
                    {this.randWord()}
                    {isWinner && alert('Congrats! You Won')}
                    {isWinner && window.location.reload()}
                </div>
                <div className='createBtns'> {isGameOver} </div>
                {restart}
            </div>
        )
    }
}

export default Hangman;