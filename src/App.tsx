import {useState} from "react"
import Display from "./components/Display"
import {CounterContext} from "./ContextApi"



function App() {

  const [count , setCount] = useState<number>(0)

  const increment = ()=>{
    setCount(prev => prev+1)
  }

  const decrement = ()=>{
    setCount(prev => prev-1)
  }

  return (
   <>
   <CounterContext.Provider value = {
    {
      count,
      increment,
      decrement
    }
   }
   >
    <Display />


   </CounterContext.Provider>
   </>
  )
}

export default App
