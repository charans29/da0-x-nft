
import React from 'react'

function FloatingMeta() {
  return (
    <>
        <img src="/skull.png" alt="Skull Icon"
            style={{
            position: "fixed",
            bottom: "1px",
            right: "40px",
            width: "70px",
            height: "70px",
            }}
        />

        <text className="text-cyan-400 font-extrabold text-sm ml-1 font-sans scale-y-90"
            style={{
                position: "fixed",
                bottom: "20px",
                left: "30px"
            }}
        >
            DAOxNFT
        </text>
    </>
  )
}

export default FloatingMeta