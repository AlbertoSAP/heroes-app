import { createContext, useEffect, useState } from "react"
import { ApiUrlConfig } from "../api/ApiUrlConfig"
import { Heroes } from "../Interface/IHeroe"
import { IResponseHeroe } from "../Interface/IResponseHeroe"



export const useHeroe = () => {
    // state heroes
  const [state, setState] = useState<Heroes>([]);
  // search
  const [search, setSearch] = useState<string>("a");

  const fetchHeroes = async () => { 
     console.log(search);
    try {
      const { data } = (await ApiUrlConfig.get(
        `search/${search}`
      )) as IResponseHeroe;
      setState((!!data.results) ? data.results : [] );
      console.log('response=>',data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    
    fetchHeroes();
  }, [search]);



  return { 
    state,
    setSearch
 };
}


