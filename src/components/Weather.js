import React from 'react';

const Weather =(props)=>{
    return (
        <div className="weather__info">
            {
            
                props.country && <p className="weather__key">Country:
                
                <span className="weather__value"> {props.country}</span>
                
                </p>
            }

            
            {
            
                props.reports && <p className="weather__key">Total Cases:
                <span className="weather__value"> {props.reports}</span>
                </p>
            }
            
            {
            
                props.deaths && <p className="weather__key">Deaths:
                <span className="weather__value"> {props.deaths}</span>
                </p>
            }

            {

            props.recovered && <p className="weather__key">Recovered :
            <span className="weather__value"> {props.recovered}</span>
            </p>
            }


            {

            props.time && <p className="weather__key">Last Updated :
            <span className="weather__value"> {props.time}</span>
            </p>
            }

            {
            
                props.error && <p className="weather__error">
                {props.error}
                </p>
            
            }
            
        </div> 
     );
}
export default Weather;