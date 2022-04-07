import React, {useState} from 'react'
import './displayRolled.css'
const DisplayRolledRandos = (props) => {

const [newPoke, setNewPoke] = useState({
    name: props.pokemon.name,
    sprite: props.pokemon.sprites.front_default,
    _id: null
})
const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
const submitNewPoke = (e) => {
    e.preventDefault()
    props.rollSetShowing(false)
    let validSubmission = true
    if (newPoke.name.length < 2) {
        setIsValidState({
            valid: false,
            message: "Name needs to be longer"
        })
        validSubmission = false;
    }
    //if chains for error handling
    if (validSubmission) {
        props.createNewPoke(newPoke)
        setIsValidState({
            valid: true,
            message: ""
        })
    }
}
    return (
        <form onSubmit={submitNewPoke} className="card">
            <h2>{newPoke.name}</h2>
            <img src={newPoke.sprite} alt={"default sprite for " + newPoke.name}  ></img>
            <button type="submit">Record</button>
        </form>
    )
}
export default DisplayRolledRandos