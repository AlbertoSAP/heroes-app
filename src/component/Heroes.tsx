import  { useContext, useEffect } from "react";
import { useHeroe } from "../Hook/UseHeroe";
import Card from "./Card";
import NotFound from "./NotFound";
import { ComicsEnum } from "../Enums/ComicsEnum";
import { heroesContext } from "../Context/HeroesContext";

const Heroes = () => {

  // const { state, setSearch } = useHeroe();
  const {state,setSearch} = useContext(heroesContext)

  const bageConfig = (publisher: string) => {
    publisher = publisher
      .replace("Comics", "")
      .replace("- Heroes", "")
      .replace(" ", "");

    const stylebages = {
      bageStyle: "",
      bageText: publisher,
    };

    switch (publisher) {
      case ComicsEnum.DC:
        return { ...stylebages, bageStyle: "bg-primary" };
      case ComicsEnum.IMAGE:
        return { ...stylebages, bageStyle: "bg-dark" };
      default:
        return { ...stylebages, bageStyle: "bg-danger" };
    }
  };
 
  return (
    <>
      <div
        style={{ display: state.length > 0 ? "block" : "none" }}>
        
        {/* start card  */}
        <div className="row">
          {state.map(({ id, image, name, biography }) => {
            return (
                <div
                  className={
                    state.length < 4 ? "col-md-3  mx-1" : "col  mx-1 mb-2"
                  }
                  key={`configCardKey1${id}`}
                >
                  <Card
                    key={`superheroe${id}`}
                    img={image.url}
                    title={name}
                    moreInformationUlr={`/heroe/${id}`}
                    bage={bageConfig(biography.publisher)}
                  />
                </div>
            );
          })}
        </div>
        {/* end Card */}
      </div>
      <div
        style={{
          display: state.length === 0 ? "block" : "none",
        }}
      >
        <NotFound key={'pageNotFound'} actionHandler={() => setSearch("a")} />
      </div>
    </>
  );
};

export default Heroes;
