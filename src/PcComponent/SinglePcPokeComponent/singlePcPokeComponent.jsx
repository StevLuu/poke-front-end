import React, { useState } from 'react'

const SinglePcPokeComponent = (props) => {
    const [formShowing, formSetShowing] = useState(false)
    const formToggleShowing = () => { formSetShowing(!formShowing) }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })

    const [updatePokemon, setUpdatePoke] = useState({
        name: props.poke.name
    })
    const handleInputChange = (e) => {
        setUpdatePoke({
            ...updatePokemon,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdatePoke = (e) => {
        e.preventDefault()
        props.updatePoke(props.poke._id, updatePokemon)
        formSetShowing(false)
    }

    return (
        <div className="single-pc-poke">
            <h3 onClick={formToggleShowing}  > {props.poke.name}</h3>
            <img onClick={formToggleShowing} src={props.poke.sprite} alt={"default sprite for " + props.poke.name}></img>
            <>
                {formShowing ?
                    <div id="edit-poke-form">
                        <h6>{props.poke._id}</h6>
                        <form onSubmit={submitUpdatePoke}>
                            {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                            <input minLength={2} onChange={handleInputChange} type="text" name="name" value={props.poke.name} />
                            <button type="submit">Change</button>

                            <button onClick={() => {
                                props.deletePoke(props.poke._id)
                            }}>Delete</button>
                        </form>
                    </div>
                    :
                    <p></p>
                }
            </>
        </div>
    )
}
export default SinglePcPokeComponent