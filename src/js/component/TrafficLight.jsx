import React from "react";
import '../../styles/trafficlight.css';
import { useState } from "react";


const TrafficLight = () => {
       const [selectedColor, setSelectedColor] = useState(""); 

       const selectRandomColor = () => {
            const colors = ["red", "yellow", "green"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setSelectedColor(randomColor);
       }

    return (
        <>
            <div className="stem"></div>
            <div className="traffic-light-body">
                <div onClick={() => setSelectedColor("red")} 
                className={
                    selectedColor === "red" ? "red selected" : "red"
                    }></div>
                <div onClick={() => setSelectedColor("yellow")}
                className={
                    selectedColor === "yellow" ? "yellow selected" : "yellow"
                }  
                ></div>
                <div onClick={() => setSelectedColor("green")}
                className={
                    selectedColor === "green" ? "green selected" : "green"
                }></div>
            </div>
            <div className="button">
                <button onClick={selectRandomColor}>Click me</button>
            </div>
        </>
    );
};

export default TrafficLight;