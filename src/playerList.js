import React from 'react'
import './player.css'
import Player2 from './player'

function Player() {
    const players = [
        {"name": "Messi", "age":36,"team":"PSG", "Nationality":"Argentina",
        "jerseyNumber":11, "image":"https://i.dailymail.co.uk/1s/2023/08/17/22/74450309-12418653-image-a-14_1692306963225.jpg"},
       
        {"name": "Mbappe", "age":24,"team":"PSG", "Nationality":"France",
        "jerseyNumber":10, "image":"https://pbs.twimg.com/media/F3vLSp4WEAAatWL?format=webp&name=900x900"},
     
        {"name": "Ronaldo", "age":38,"team":"man united", "Nationality":"Portugal",
        "jerseyNumber":7, "image":"https://images2.minutemediacdn.com/image/upload/c_crop,w_8256,h_4644,x_0,y_532/c_fill,w_360,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01h3ef71rrh9fg53htmj.jpg"},
     
        {"name": "Lewandowski", "age":25,"team":"Bayern Munich", "Nationality":"Poland",
        "jerseyNumber":9, "image":"https://img.a.transfermarkt.technology/portrait/header/38253-1642434304.jpg?lm=1"}
     
     ]
  return (
    <div className='cardStyle'>
      {players.map((value, index)=>(
        <Player2 
        name={value.name}
        team={value.team} 
        nationality={value.nationality}
        jerseyNumber={value.jerseyNumber}
        age={value.age}
        image={value.image}/>
        ))}
    </div>
  )
}

export default Player
