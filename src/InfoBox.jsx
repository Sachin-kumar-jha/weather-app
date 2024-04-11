import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './Info.css';

export default function infoBox({Info}){
return (

<div className='Info'>
  <h2>Weather Information:{Info.city}</h2>
    <div className='card'>
<Card sx={{ maxWidth: 345,  boxShadow:5 ,  backgroundColor:"transparent" }}>
      <CardMedia
        sx={{ height: 180 }}
        image={Info.temp >20 ?import.meta.env.VITE_HOT_URL :Info.tempMin<18?import.meta.env.VITE_COLD_URL:Info.humidity > 20? import.meta.env.VITE_RAINY_URL:""}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {Info.temp >20 ?<WbSunnySharpIcon/> :Info.tempMin<18?<AcUnitSharpIcon/>:Info.humidity > 20?<ThunderstormIcon/>:""}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
        <p>Temperature:{Info.temp}&deg;C</p>
        <p>Humidity:{Info.humidity}&deg;C</p>
        <p>TempMin:{Info.tempMin}&deg;C</p>
        <p>TempMax:{Info.tempMax}&deg;C</p>
        <p>Weather:Weather can be described as {Info.weather} & feels like {Info.feelslike}&deg;C </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>

)}