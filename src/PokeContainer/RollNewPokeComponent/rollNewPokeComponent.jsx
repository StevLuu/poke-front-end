//show page
import { useState } from 'react'
import DisplayRolledRandos from './DisplayRolledRandos/displayRolledRandos'
import './rollNewPoke.css'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

const RollNewPokeComponent = (props) => {
    const [threeRolledPokes, setThreeRolledPokes] = useState([])
    const [pokes, setPoke] = useState([])
    const [rollShowing, rollSetShowing] = useState(false)
    const toggleSetShowing = () => { rollSetShowing(!rollShowing) }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    const getNewRandoPokes = async () => {
        try {
            for (let i = 0; i < 3; i++) {
                let randoNum = getRandomInt(1, 826)
                let apiLink = 'https://pokeapi.co/api/v2/pokemon/' + randoNum
                let randoPoke = await fetch(apiLink)
                let parsedRandoPoke = await randoPoke.json()
                threeRolledPokes.push(parsedRandoPoke)
                // console.log(`random num: ${randoNum}`)
                console.log(`parsed Random poke: ${threeRolledPokes[threeRolledPokes.length - 1].name}`)
            }
            // toggleSetShowing(true)
            rollSetShowing(true)
        } catch (err) {
            console.log(err)
        }
    }
    const argon = { "name": "argon" }
    return (
        <div className="index-single-Poke">
            <button onClick={getNewRandoPokes}>roll</button>
            <>
                {rollShowing ?
                    <div id="display-3-cards">
                        <h3>You discovered three Pokemon!</h3>
                        {/* <DisplayRolledRandos pokemon={threeRolledPokes}></DisplayRolledRandos> */}
                        <ul id="three-cards">
                            {threeRolledPokes.map((pokemon, index) => {
                                return (
                                    <li><DisplayRolledRandos
                                    createNewPoke = {props.createNewPoke}
                                    pokemon={pokemon}
                                    rollSetShowing = {rollSetShowing}
                                    ></DisplayRolledRandos></li>)
                            })}
                            <button onClick={toggleSetShowing}>X</button>
                        </ul>
                    </div>
                    :
                    <button onClick={toggleSetShowing}>show</button>
                }
            </>
        </div>
    )
}
export default RollNewPokeComponent