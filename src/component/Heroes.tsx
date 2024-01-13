import React, { useState } from 'react'
import { useHeroe } from '../Hook/UseHeroe';
import Card from './Card';

const Heroes = () => {

    const { state, setSearch } = useHeroe();
    const [inputSearch, setInputSearch] = useState("");
    const search = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      console.log("click");
      setSearch(inputSearch);
    };
  
    // if(state.length === 0){
    //   return <NotFound/>
    // }

  return (
    <>
    <div className="mx-3 mt-5">
      <div className="form-group mb-5">
        <label className="mb-2" htmlFor="inputSearch">
          Search
        </label>
        <input
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
        {state.map(({ id, image }) => {
          return (
            <>
              <div
                className={state.length < 4 ? "col-md-3  mx-1" : "col  mx-1"}
              >
                <Card key={`superheroe${id}`} img={image.url} />
              </div>
            </>
          );
        })}
      </div>
      {/* end Card */}
    </div>
  </>
  )
}

export default Heroes
