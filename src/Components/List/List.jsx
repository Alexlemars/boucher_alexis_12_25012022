import React from "react";
import "./List.css"
import carbohydrates from '../../assets/carbohydrates.svg'
import Calories from '../../assets/Calories.svg'
import Fat from '../../assets/Fat.svg'
import Protein from '../../assets/Protein.svg'
import Lists from "./Lists/KeyData";

const List = ({KeyList})=>{
    return(
        <div className="list">
            <Lists
                src={Calories}
                count={KeyList.calorieCount}
                unit={'kCal'}
                nutrientsType={'Calories'}
                className="background-icon-burn background-icon"
            />
            <Lists
                src={Protein}
                count={KeyList.proteinCount}
                unit={'g'}
                nutrientsType={'Proteines'}
                className="background-icon-protein background-icon"
            />
            <Lists
                src={carbohydrates}
                count={KeyList.carbohydrateCount}
                unit={'g'}
                nutrientsType={'Glucides'}
                className="background-icon-carbohydrates background-icon"
            />
            <Lists
                src={Fat}
                count={KeyList.lipidCount}
                unit={'g'}
                nutrientsType={'Lipides'}
                className="background-icon-fat background-icon"
            />

        </div>
    )

}

export default List