//show page
import { useState } from 'react'
const SinglePokeComponent = (props) => {

    const [showing, setShowing] = useState(false)
    const toggleShowing = () => { setShowing(!showing) }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })

    const [updatePoke, setUpdatePoke] = useState({
        productName: props.poke.productName,
        amount: props.poke.amount,
        _id : props.poke._id
    })
    const handleInputChange = (e) => {
        setUpdatePoke({
            ...updatePoke,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdatePoke = (e) =>{
        e.preventDefault()
        props.updatePoke(props.poke._id, updatePoke)
        setShowing(false)
    }
    return (
        <div className="index-single-Poke">
            <h2>{props.poke.productName}</h2>
            {props.poke.amount > 0
                ?
                <div className="index-single-poke-details">
                    <p>Quantity in stock: {props.poke.amount}</p>
                </div>
                :
                <p>Out of Stock!</p>
            }
            <button onClick={() => {
                props.deletePoke(props.poke._id)
            }}>Delete</button>

            <>
                {showing ?
                    <div id="edit-poke-form">
                        <button onClick={toggleShowing}>X</button>
                        <form onSubmit={submitUpdatePoke}>
                            {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                            Product Name: <input minLength={2} onChange={handleInputChange} type="text" name="productName" value={updatePoke.productName} />
                            Quantity: <input onChange={handleInputChange} type="number" name="amount" value={updatePoke.amount} />
                            <button type="submit">Change</button>
                        </form>
                    </div>
                    :
                    <button onClick={toggleShowing}>Edit this Poke</button>
                }
            </>
        </div>
    )
}
export default SinglePokeComponent