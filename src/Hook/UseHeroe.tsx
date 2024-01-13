import { useEffect, useState } from "react"
import { ApiUrlConfig } from "../api/ApiUrlConfig"
import { Heroes } from "../Interface/IHeroe"
import { IResponseHeroe } from "../Interface/IResponseHeroe"

export const useHeroe = (searchParam:string='batman') => {
 
    const [state, setState] = useState<Heroes>([])

    const fetchHeroes = async () => {
        try {
         const {data} = (await ApiUrlConfig.get(`search/${searchParam}`)) as IResponseHeroe
         setState(data.results )
        } catch (error) {
        console.error(error);
        }
    }

    useEffect(() => {
        fetchHeroes()
    }, [])
    
    console.log(state);
    

return {state}
}


