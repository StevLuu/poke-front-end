import React, { useState, useEffect } from 'react'
import './pc.css'
import './SinglePcPokeComponent/singlePcPokeComponent'
import SinglePcPokeComponent from './SinglePcPokeComponent/singlePcPokeComponent'


const PcComponent = (props) => {
    const [pcShowing, pcSetShowing] = useState(false)
    const pcToggleShowing = () => { pcSetShowing(!pcShowing) }
    props.displayPokes()
    return (
        <div className="global-pc">
            <h1>This is the Global Pokedex</h1>
            <div id="pokes">
                {props.pokes.slice(0).reverse().map((poke) => {
                    return (
                        <div>
                            <SinglePcPokeComponent
                                poke={poke}
                                deletePoke={props.deletePoke}
                                displayPokes={props.displayPokes}
                                updatePoke={props.updatePoke}
                            ></SinglePcPokeComponent></div>
                    )
                })}
            </div>
        </div>
    )
}
export default PcComponent