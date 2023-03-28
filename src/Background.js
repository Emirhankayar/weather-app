import React from "react";
import video1 from "./assets/cloudy.mp4";
import video2 from "./assets/sunny.mp4";
import video3 from "./assets/rainy.mp4";
import video4 from "./assets/snowy.mp4";
import video5 from "./assets/foggy.mp4";
import video6 from "./assets/drizzle.mp4";
    
    function Background(props) {
        const videos = [
            {
                name:"Clouds",
                background: video1
            },
            {
                name:"Clear",
                background: video2
            },
            {
                name:"Rain",
                background: video3
            },
            {
                name:"Snow",
                background: video4
            },
            {
                name:"Fog",
                background: video5
            },
            {   name:"Drizzle",
                background: video6
            },
        ]
     const videoURL = videos.find(el => el.name === props.weatherDescription)?.background
        return (
        <div>
            <video id="background" key={videoURL} autoPlay loop muted>
                <source src = {videoURL} type="video/mp4"/> 
            </video>
        </div>
        )
    }
    export default Background;