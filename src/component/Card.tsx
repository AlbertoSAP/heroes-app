import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  img: string;
  title?: string;
  description?: string;
  moreInformationUlr: string;
  bage?: {
    bageStyle: string;
    bageText: string;
  };
  
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  description,
  moreInformationUlr,
  bage,
}) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {!!bage && (
          <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${bage.bageStyle}`}>
            <span style={{fontSize:'10px', 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'1.5rem'
          }} className="badge" >{bage.bageText}</span>
          </span>
        )}
        <img
          width={100}
          height={400}
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div
          style={{
            flexDirection: "column",
          }}
          className="card-body d-flex justify-content-center"
        >
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text">{description}</p>
          <Link className="btn btn-primary" to={moreInformationUlr}>
            More Information
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
