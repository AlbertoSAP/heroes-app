import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Heroe } from "../Interface/IHeroe";
import { ApiUrlConfig } from "../api/ApiUrlConfig";
import { IResponseOneHeroe } from "../Interface/IResponseHeroe";
import SuperPowers from "./SuperPowers";
import { IntialvalueHeroe } from "../intialvalue/initialValues";

const HeroeDetails = () => {
  const [heroe, setHeroe] = useState<Heroe>(IntialvalueHeroe);

  

  const {name ,biography, powerstats} = heroe
  const { "full-name":fullName,aliases,alignment } = biography


  const { id } = useParams();

  const getHeroeDetails = async () => {
    try {
      const { data } = (await ApiUrlConfig.get(`${id}`)) as IResponseOneHeroe;
      setHeroe(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHeroeDetails();
  }, []);

  console.log(heroe);

  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <h4>{name}</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <img
                style={{
                  width: "50%",
                }}
                height={400}
                src={heroe.image.url}
                className="card-img-top"
                alt="HeroeErrorNoImage"
              />
            </div>
            <div className="col">
              {/* information field */}
              <div className="form-group text-start mb-2">
                <label className="ms-1 text-secondary"> Nombre </label>
                <input
                 key={'fullnameInput'}
                  className="form-control border-top-0 bg-transparent"
                  value={fullName}
                  disabled
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group text-start">
                    <label className="ms-1 text-secondary"> Bando </label>
                    <input
                    key={`BandoInput`}
                      className="form-control border-top-0 bg-transparent"
                      value={alignment}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group text-start">
                    <label className="ms-1 text-secondary"> Alias </label>
                    <input
                      className="form-control border-top-0 bg-transparent"
                      value={aliases}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <h4 className="mt-3">Super poderes</h4>
              {/* render super powers  */}
              
              {
              Object.entries(powerstats).map(([key,value])=>{
                return <SuperPowers
                key={`${key}00`}
                powerName={key}
                power={value}
                />
              })
                
              }
        
              {/* render super powers  */}
            </div>
          </div>

          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-warning">
            Go back
          </a>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </>
  );
};

export default HeroeDetails;
