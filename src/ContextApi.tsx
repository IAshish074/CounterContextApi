import { createContext } from "react";

interface ContextApiType{
    count:number;
    increment:()=>void;
    decrement:()=>void;
}


export const CounterContext = createContext<ContextApiType | null> (null)