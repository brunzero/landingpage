import React from 'react';
import Hero from './Hero';
import Column from './Column';
import Header from './Header';
import SVG from './SVG';
import Rubbable from './rubbable';

if(process.env.BROWSER)
{
  require('./Home.scss');
}

var rub; 
var canvas;
var toggle;
class Home extends React.Component {
  componentDidMount(){
  }
  render() {
    //these classnames are all pretty weird
    //i haven't really made a page that is organized quite like this before
    return (
      <div className="home-wrapper">
        <Header size="small" color = "black"/>
        <div className="story1-wrapper">
          <div className="narshe"/>
          <div className="icecliff"/>
          <div className="imperialcamp"/>
          <div className="zozo"/>
          <div className="message-container">
            <span className="message message1 typewriter">
              1000 years after the great demon war
            </span>
          </div>
          <span className="message message2 typewriter">
            People have developed iron, gunpowder, and steam engines
          </span>
          <span className="message message3 typewriter">
            to restore the world
          </span>
          <span className="message message4 typewriter">
            But now, the power of magic has been secretly revived
          </span>
        </div>
        <div className="story2-wrapper">
          <div className="overlay">
            <img className="background"/>
          </div>
          <div className="logo-wrapper">
            <div className="left">
              <div className="click">
                <div className="terra"/>
                Buy
              </div>
              <div className="click">
                <div className="sabin"/>
                Sell
              </div>
              <div className="click">
              </div>
              <div className="click">
              </div>
            </div>
            <div className="middle">
              <div className="fflogo"/>
              <span className="on"> Meets </span>
              <div className="switchlogo"/>
            </div>
            <div className="right">
              <div className="click">
                <div className="terra"/>
                Buy
              </div>
              <div className="click">
                <div className="sabin"/>
                Sell
              </div>
              <div className="click">
              </div>
              <div className="click">
              </div>  
            </div>
          </div>
        </div>
        <div className="footer"> © SQUARE ENIX CO., LTD. All Rights Reserved. </div>
      </div>
    );
  }
}

export default Home;
