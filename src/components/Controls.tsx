import {useContext} from "react"
import { CounterContext } from "../ContextApi"
function Controls(props:any){
const context = useContext(CounterContext)
if(!context){
    throw new Error("Controls must be used within a CounterProvider")
}
    return(
        <>
        <button onClick={context.increment}>Increment</button>
        <button onClick={context.decrement}>Decrement</button>
        </>
    )
}

export default Controls;