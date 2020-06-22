import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather';
const { getCode} = require('country-list');

//initailse
class App extends React.Component{

  state= {
    country:undefined,
    reports: undefined,
    deaths: undefined,
    recovered: undefined,
    error: undefined
  }

  getWeather = async (e)=> {
    e.preventDefault();
    const country=e.target.elements.country.value;
    
    const api_call=await fetch(`https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${country}`,{
      "method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "4a617e9c95msh21b24a7218d2853p11dab6jsn0ab063b6adb6"
	}
    });
    const data=await api_call.json();

if(country && data[0])
{
    // const Code=getCode(country);
    // console.log(Code);
    console.log(data);
    this.setState({
      
      country:data[0].country,
      reports: data[0].confirmed,      
      deaths: data[0].deaths,
      recovered: data[0].recovered,
      error: undefined
    });
  }
  else{
    this.setState({
      country:undefined,
      reports:undefined,
      deaths:undefined,
      recovered:undefined,
      error: "Please enter the values correctly"
    });
  }

  }



//render method to show file returns jsx babel converts jsx to js
render(){
  // only a single parent element to return
  return(
<div>
  <div className="wrapper">
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-xs-5 title-container">
          <Titles/>
          </div>
          <div className="col-xs-7 form-container">
          <Form getWeather={this.getWeather}/>
          <Weather 
          time={this.state.time}
          country={this.state.country}
          reports={this.state.reports}
          deaths={this.state.deaths}
          recovered={this.state.recovered}
          error={this.state.error}
          />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
};



  

export default App;