import React, { Component } from 'react';
import Details from './Details';
import './Header.css';


export default class ListItem extends Component{
constructor(props){
    super(props);

    this.state={ 
        movies:[{"itemId":426185816,"salePrice":119.99,"name":"Disney/Pixar Cars 3 Lightning McQueen 20-Inch Vehicle","mediumImage":"https://i5.walmartimages.com/asr/164e191b-699f-47a8-94bf-ff5ba84196b8_1.ae5d714d508b8df2c8d041fc43280e0c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "shortDescription":"Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes. Kids can drive freely on their own, but parents can step in with a remote control to make sure they stay out of danger for peace of mind. Built large and scaled small for your little one's biggest adventures.FEATURES:Realistic driving experience with foot pedal acceleration and steering wheelPowerful 6V motor with 2.5 mph max speed and 3 speed modesIncludes remote control with speed selection and parking modeBuilt-in AUX jack, headlights, horn, and easy start/stop buttonRechargeable battery with charger allows for hour of playtimeRecommended for ages: 2+ yearsDIMENSIONS:Overall Dimensions: 37.5"
  
      },
  
      {"itemId":54987375,"salePrice":9.99,"name":"Disney/Pixar Cars 3 Lightning McQueen 20-Inch Vehicle","mediumImage":"https://i5.walmartimages.com/asr/b2d1cedd-d595-492d-af13-f86c2e74717d_1.d57221fd05fb835f8d350d4ee95576a8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      "shortDescription":"Disney/Pixar Cars fans get big action with this 20"
    }
    
    ]
      };

}

render(){

    let listOfMovies='';
if(this.props.search==''){
    listOfMovies=this.state.movies.map((movie,index)=>{
        return <Details key={index} details={movie}/>
    })
}else{
    let filterMovies=this.state.movies.filter((movie,index)=>{
        return movie.name.includes(this.props.search)
    });
    listOfMovies=filterMovies.map((movie,index)=>{
        return <Details keys={index} details={movie}/>
    })
}

    return(
       <div>

           {listOfMovies}
               
    </div>
     
    )
}

}