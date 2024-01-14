import React, { useState } from "react";
import { useHeroe } from "../Hook/UseHeroe";
import Card from "./Card";
import NotFound from "./NotFound";
import { ComicsEnum } from "../Enums/ComicsEnum";

const Heroes = () => {
  const { state, setSearch } = useHeroe();
  const [inputSearch, setInputSearch] = useState("");
  const search = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSearch(inputSearch);
  };

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
  // if(state.length === 0){
  //   return <NotFound/>
  // }

  return (
    <>
      <div
        style={{ display: state.length > 0 ? "block" : "none" }}>
        <div className="form-group mb-5">
          <label className="mb-2" htmlFor="inputSearch">
            Search
          </label>
          <input
            key={'inputSearch'}
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            id="inputSearch"
            className="form-control w-25"
            type="text"
          />

          <button onClick={(e) => search(e)} className="btn btn-success mt-2">
            Search
          </button>
        </div>

        {/* start card  */}
        <div className="row">
          {state.map(({ id, image, name, biography }) => {
            return (
              <>
                <div
                  className={
                    state.length < 4 ? "col-md-3  mx-1" : "col  mx-1 mb-2"
                  }
                >
                  <Card
                    key={`superheroe${id}`}
                    img={image.url}
                    title={name}
                    moreInformationUlr={`/heroe/${id}`}
                    bage={bageConfig(biography.publisher)}
                  />
                </div>
              </>
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
