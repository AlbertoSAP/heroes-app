import React from 'react'

interface SuperPowerProps {
    powerName:string;
    power:string
    }

const SuperPowers:React.FC<SuperPowerProps> = ({
    power,
    powerName
}) => {

  power = !!(power.replace('null','')) ? power : '0'
  
    let bgColor = ''
    if(+power < 20){
     bgColor= 'bg-danger'
    }
    if(+power > 20){
        bgColor= 'bg-warning'
       }
       if(+power > 40){
        bgColor= 'bg-primary'
       }
       if(+power >= 80){
        bgColor= 'bg-success'
       }

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <span
        style={
          {
            display:'flex',
            width:'7rem',
            justifyContent:'start'
          }
        }
        >{powerName}: </span>
        <div
        style={{
          display:'flex',
          width:'100%',
          marginTop: "5px",
          border:'solid 1px #c5b9b9',
          background:'#c5b9b9',
          borderRadius: "0 10px 10px 0",
          height: "15px", 
        }}
        >
        <div
          className={bgColor}
          style={{
            
            width: `${power}%`,
            height: "15px",
            borderRadius: "0 10px 10px 0",
          }}
        >
          <div
            style={{
              display:'flex',
              marginTop: "-5px",
              color: "white",
              justifyContent:'center',
              marginLeft: +power > 0? '0' :'15px'
            }}
          >
            {power}%
          </div>
        </div>
</div>
      </div>
    </>
  );
}

export default SuperPowers
