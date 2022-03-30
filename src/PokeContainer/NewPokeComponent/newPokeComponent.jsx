import { useState } from 'react'
const NewPokeComponent = (props) => {
    const [showing, setShowing] = useState(false)
    const toggleShowing = () => { setShowing(!showing) }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    const [newPoke, setNewPoke] = useState({
        productName: "",
        amount: 0,
        _id: null
    })
    const handleInputChange = (e) => {
        setNewPoke({
            ...newPoke,
            [e.target.name]: e.target.value
        })
    }
    const submitNewPoke = (e) => {
        e.preventDefault()
        let validSubmission = true
        if (newPoke.productName.length < 2) {
            setIsValidState({
                valid: false,
                message: "Name needs to be longer"
            })
            validSubmission = false;
        }
        //if chains for error handling
        if (validSubmission) {
            props.createNewPoke(newPoke)
            setNewPoke({
                productName: "",
                amount: 0
            })
            setIsValidState({
                valid: true,
                message: ""
            })
            setShowing(false)
        }
    }
    return (
        <>
            {
                showing ?
                    <div id="new-poke-form">
                        <button onClick={toggleShowing}>X</button>
                        <form onSubmit={submitNewPoke}>
                            {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                            {props.newPokeServerError ? <p className='form-error'>{props.newPokeServerError}</p> : null}

                            Product Name: <input minLength={2} onChange={handleInputChange} type="text" name="productName" value={newPoke.productName} />
                            Quantity: <input onChange={handleInputChange} type="number" name="amount" value={newPoke.amount} />
                            <button type="submit">Create</button>
                        </form>
                    </div>
                    :
                    <button onClick={toggleShowing}>Create new Poke</button>
            }
        </>
    )
}
export default NewPokeComponent