import React from "react";

class WheatherTop extends React.Component {
  constructor(props) {
    super(props);
  }

  toDatestring(intTime) {
    const d = new Date(intTime);
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`
  }

  toHgmm(gectoPascal) {
    let Hgmm = Math.round(gectoPascal * 100 / 133.3224)
    return Hgmm
  }

   render() {
       let wheatherItem = this.props.wheather.list[this.props.num]
       return (
         <div className="wheather-contatiner">
           <div className="datetime">
             { this.toDatestring(wheatherItem.dt_txt) } { this.props.toTimeSting(wheatherItem.dt_txt) }
           </div>
           <div className="wheather-props">
             <div className="main-wheather-prop">
               <div className="cloudness">
                 <div className="cloudness-icon">{this.props.wheatherIcon(wheatherItem.weather[0].id, wheatherItem.dt_txt)}</div>
                 <div className="cloudness-text">{wheatherItem.weather[0].description}</div>
               </div>
               <div className="temprature">{wheatherItem.main.temp.toFixed()}<span className="temprature-unit">°C</span></div>
             </div>
               <div className="extra-wheather-props">
                 <div className="wheather-prop">
                   <span className="wheather-prop-icon"><i className="icon-wind"></i></span>
                   {wheatherItem.wind.speed}
                   <span className="wheather-prop-unit"> m/s</span>
                 </div>
                  <div className="wheather-prop">
                   <span className="wheather-prop-icon"><i className="fa fa-compass" aria-hidden="true"></i></span>
                   {this.toHgmm(wheatherItem.main.pressure)}
                   <span className="wheather-prop-unit"> mm. mercury</span>
                 </div>
                  <div className="wheather-prop">
                   <span className="wheather-prop-icon"><i className="fa fa-tint" aria-hidden="true"></i></span>
                   {wheatherItem.main.humidity}
                   <span className="wheather-prop-unit"> %</span>
                 </div>
               </div>
           </div>
         </div>
     );
   }
}


export default WheatherTop;