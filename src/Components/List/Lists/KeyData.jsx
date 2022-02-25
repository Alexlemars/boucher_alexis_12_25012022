import React from "react";
import "./KeyData.css"


const KeyData = ({ src, count, unit, nutrientsType,className })=>{

    return(
        <div className="keys-data-card">
            <div className={className}>
                <img className="icon-img" src={src} alt="" />
            </div>
            <p className="key-data-value">
                <span className="calorie-count">
                    {count}
                    {unit}
                </span>
                <span className="nutrients-type">{nutrientsType}</span>
            </p>
        </div>
    )

}

export default KeyData