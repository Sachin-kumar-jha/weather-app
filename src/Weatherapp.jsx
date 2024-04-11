import SearchBox from "./SearchBox"
import InfoBox  from './InfoBox'
import './weather.css';
import { useState } from "react"
export default function weatherApp(){
    const [WeatherInfo,SetInfo]=useState({
        city:"Delhi",
        temp:20.40,
        tepMin:25.00,
        tempMax:30.98,
        feelslike:22.25,
        weather:"Haze"
    });
    let initializeInfo=(newInfo)=>{
     SetInfo(newInfo);
    }
    return(
        <div className="Weather">
            <SearchBox updateInfo={initializeInfo}/>
            <InfoBox Info={WeatherInfo}/>
        </div>
    )
}