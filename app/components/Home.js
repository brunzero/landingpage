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
    return (
      <div className="home-wrapper">
        <Header size="fullheight" color = "palette1" title = "boilerplate" textcolor = "white" headertitle = "boilerplate"/>
      </div>
    );
  }
}

export default Home;
