import React from 'react'

interface SuperPowerProps {
    powerName:string;
    power:string
    }

const SuperPowers:React.FC<SuperPowerProps> = ({
    power,
    powerName
}) => {
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
    <div>
    <label style={{
        display:'flex',
        width:'18%',
        textAlign:'left'
    }} >{powerName}:</label>
              <div
              className={bgColor}
                style={{
                  marginTop: "7px",
                  display: "flex",
                  height: "14px",
                  width: `${power}%`,
                  justifyContent: "center",
                  marginLeft: "3px",
                  flexDirection:'row',
                  borderRadius:'0 100px 100px 0'
                }}
              >
                <span
                  style={{
                    display: "flex",
                    textAlign: "center",
                    marginTop: "-4px",
                    color:'white',
                    fontWeight:'bold'
                  }}
                >
                  {power}%
                </span>
              </div>
  </div>
  )
}

export default SuperPowers
