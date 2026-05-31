import {useContext} from "react"
import { CounterContext } from "../ContextApi"
import Controls from "./Controls"




function Display(){

    const context = useContext(CounterContext)

    if(!context){
        throw new Error("Display must be used within a CounterProvider")
    }

    return(
        <>
        <h1>{context.count}</h1>
        <Controls increment={context.increment} decrement={context.decrement} />
        </>
    )
}


export default Display;