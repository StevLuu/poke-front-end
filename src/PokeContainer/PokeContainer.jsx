//index page
import { useEffect, useState } from 'react'
import PcComponent from '../PcComponent/pcComponent'
import NewPokeComponent from './NewPokeComponent/newPokeComponent'
import RollNewPokeComponent from './RollNewPokeComponent/rollNewPokeComponent'
import SinglePokeComponent from './SinglePokeConponent/singlePokeComponent'
const PokeContainer = () => {
    const [requestError, setRequestError] = useState("")
    const [pokes, setPokes] = useState([])
    const [newPokeServerError, setNewPokeServerError] = useState('')

    const createNewPoke = async (newPoke) => {
        //send request to back-end
        const apiResponse = await fetch("https://poke-backend-app.herokuapp.com/pokes", {
            method: "POST",
            body: JSON.stringify(newPoke),
            headers: {
                "Content-Type": "application/json"
            }
        })
        //parse response from back-end
        const parsedResponse = await apiResponse.json()
        //if response is success:
        console.log(parsedResponse)
        if (parsedResponse.success) {
            //add the new Poke to state!
            setPokes([parsedResponse.data, ...pokes])
        } else {
            setNewPokeServerError(parsedResponse.data)
            //else:
            //TODO: refactor state from newPokeForm to here

        }
    }
    const deletePoke = async (idToDelete) => {
        //idToDelete == pokeId
        try {
            const apiResponse = await fetch(`https://poke-backend-app.herokuapp.com/pokes/${idToDelete}`, {
                method: "DELETE"
            })
            const parsedResponse = await apiResponse.json()
            if (parsedResponse.success) {
                console.log("deleting poke ID\n" + idToDelete)
                // const newPokes = pokes.filter(poke => poke._id !== idToDelete)
                // setPokes(newPokes)
            } else {
                //TODO: handle an unsuccessful delete
            }
        } catch (err) {
            console.log(err)
            setRequestError(err)
            //TODO: handle front end error
        }

    }
    const displayPokes = async (pokeArr) => {
        try {
            const pokes = await fetch("https://poke-backend-app.herokuapp.com/pokes")
            const parsedPokes = await pokes.json()
            setPokes(parsedPokes.data)

        } catch (err) {
            console.log(err)
            //TODO
        }
    }
    const updatePoke = async (idToUpdate, pokeToUpdate) => {

        const apiResponse = await fetch(`https://poke-backend-app.herokuapp.com/pokes/${idToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify(pokeToUpdate),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await apiResponse.json()
        if (parsedResponse.success) {
            console.log(`update API success: ${parsedResponse.success}`)
            const newPokes = pokes.map(poke => poke._id === idToUpdate ? pokeToUpdate : poke)
            setPokes(newPokes)
        } else {
            //TODO
            // console.log(err)
            setRequestError(parsedResponse.data)
        }
    }
    // useEffect(getPokes, [])

    return (
        <div>
            <h2>Pokes Here!</h2>
            <RollNewPokeComponent
                createNewPoke={createNewPoke}
            ></RollNewPokeComponent>
            
            <ul>
                <PcComponent
                    deletePoke = {deletePoke}
                    displayPokes = {displayPokes}
                    updatePoke = {updatePoke}
                    pokes={pokes}
                ></PcComponent>
            </ul>

        </div>
    )
}

export default PokeContainer