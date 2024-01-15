import { createContext } from "react";
import { Heroes } from "../Interface/IHeroe";

export interface HeroesContextProp{
    state:Heroes,
    setSearch:(value:string)=>void
}

export const heroesContext = createContext<HeroesContextProp>({} as HeroesContextProp )