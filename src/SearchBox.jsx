
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import { useState } from 'react';
export default function SearchBox({ updateInfo }){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false);
    
    let getWeatherInfo = async ()=>{
       
            let respose= await fetch(`${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
            let data = await respose.json();
            console.log(data);
            let result= {
              city:city,
              temp: data.main.temp,
              humidity:data.main.humidity,
              tempMin:data.main.temp_min,
              tempMax:data.main.temp_max,
              feelslike:data.main.feels_like,
              weather:data.weather[0].description,
            } ;
            console.log(result);
            return result;
    };

    let handleChange=(event)=>{
        setCity(event.target.value);
   
    }
    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
           setCity("");
           setError(false);
          let newInfo= await getWeatherInfo();
          await updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
       
    
    }
    return(
        <>
        <div className="Searchbox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" size='small' value={city} required onChange={handleChange}/> &nbsp; &nbsp;
            <Button variant="contained" type='Submit' >Search</Button>
            {error && <p style={{color:"red"}}>Not Such Place Exist!</p>}
            </form>
        </div>
        </>
    )
}