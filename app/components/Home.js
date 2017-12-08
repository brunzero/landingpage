import React from 'react';
import Hero from './Hero';
import Column from './Column';
import Header from './Header';
import SVG from './SVG';

if(process.env.BROWSER)
{
  require('./Home.scss');
}

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
            <div className="top">
                <div className="terra"/>
                <div className="locke"/>
                <div className="edgar"/>
                <div className="sabin"/>
                <div className="cyan"/>
                <div className="celes"/>
                <div className="shadow"/>
                <div className="gau"/>
                <div className="setzer"/>
                <div className="mog"/>
                <div className="strago"/>
                <div className="relm"/>
                <div className="gogo"/>
                <div className="umaro"/>
            </div>
            <div className="middle">
              <div className="fflogo"/>
              <span className="on"> Meets </span>
              <div className="switchlogo"/>
            </div>
            <div className="bottom">
            </div>
          </div>
        </div>
        <div className="footer"> © SQUARE ENIX CO., LTD. All Rights Reserved. </div>
      </div>
    );
  }
}

export default Home;
