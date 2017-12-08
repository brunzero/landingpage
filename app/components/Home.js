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
          <span className="message message1 typewriter">
            The Great Demon War...<br/>
            Long ago, after this conflict ended,<br/>
            The power of "Magic" simply vanished.<br/>
          </span>
          <span className="message message2 typewriter">
            10,000 years have passed...<br/>
            With iron, gunpowder, and steam engines,<br/>
            people have used machinery<br/>
            to revive the world.<br/>
          </span>
          <span className="message message3 typewriter">
            But now, the legendary power of "Magic"<br/>
            has been revived secretly,<br/>
            and a group has risen that intends<br/>
            to control the world with this power.<br/>
          </span>
          <span className="message message4 typewriter">
            Is mankind on the verge of repeating<br/>
            a terrible mistake...?<br/>
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
              <span className="on"> Coming Soon To </span>
              <div className="switchlogo"/>
            </div>
            <div className="bottom">
              <span> Thank you for pre-ordering, Bruno</span>
            </div>
          </div>
        </div>
        <div className="footer"> © SQUARE ENIX CO., LTD. All Rights Reserved. </div>
      </div>
    );
  }
}

export default Home;
