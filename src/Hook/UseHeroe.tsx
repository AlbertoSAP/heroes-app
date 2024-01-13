import { useEffect, useState } from "react"
import { ApiUrlConfig } from "../api/ApiUrlConfig"
import { Heroes } from "../Interface/IHeroe"
import { IResponseHeroe } from "../Interface/IResponseHeroe"

export const useHeroe = () => {
    // state heroes
  const [state, setState] = useState<Heroes>([]);
  // search
  const [search, setSearch] = useState<string>("a");

  const fetchHeroes = async () => {
    try {
      const { data } = (await ApiUrlConfig.get(
        `search/${search}`
      )) as IResponseHeroe;
      setState((!!data.results) ? data.results : [] );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, [search]);

  console.log(state);

  return { 
    state,
    setSearch
 };
}


