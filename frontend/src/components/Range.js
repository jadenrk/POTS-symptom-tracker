import { useState } from "react";
//const Slider = ({attributeName, rangeOptions, rangeMin, rangeMax, sliderValue}) => {


const Range = () => {
    return (
        <div>
            <div className="radioButton">
                <input checked
                    type="radio" 
                    id="dizziness-0" name="dizziness-0"
                />
                <label for="dizziness-0">
                    0
                </label>
            </div>
            <div className="radioButton">
                <input
                    id="dizziness-1" 
                    type="radio" 
                    name="dizziness-radio-0" 
                />
                <label for="default-0">
                    0
                </label>
            </div>
        </div>
    )
}

export default Range;