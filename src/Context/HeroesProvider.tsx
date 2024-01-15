import React, { useEffect, useState } from "react";
import { heroesContext } from "./HeroesContext";
import { Heroes } from "../Interface/IHeroe";
import { ApiUrlConfig } from "../api/ApiUrlConfig";
import { IResponseHeroe } from "../Interface/IResponseHeroe";

interface HeroesProviderProps {
  children: React.JSX.Element | React.JSX.Element[];
}

const HeroesProvider: React.FC<HeroesProviderProps> = ({ children }) => {
  // state heroes
  const [state, setState] = useState<Heroes>([]);
  // search
  const [search, setSearch] = useState<string>("a");

  const fetchHeroes = async () => {
    try {
      const { data } = (await ApiUrlConfig.get(
        `search/${search}`
      )) as IResponseHeroe;
      setState(!!data.results ? data.results : []);
      console.log("response=>");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, [search]);

  return (
    <heroesContext.Provider value={{ state, setSearch }}>
      {children}
    </heroesContext.Provider>
  );
};

export default HeroesProvider;
