import React from 'react';
import Hero from './Hero';
import Column from './Column';
import { browserHistory } from 'react-router';


if(process.env.BROWSER){
  require('./Header.scss');
}

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      active: false,
      slide: false
    }
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({slide: true})}, 50);
  }
  routeTo(route){
    browserHistory.push(route);
  }
  toggleActive(){
    if(this.state.active)
      this.setState({active:false});
    else this.setState({active:true});
  }
  render(){
    let title = this.props.title || "";
    let subtitle = this.props.subtitle || "";
    let size = this.props.size || "";
    let color = this.props.color || "";
    let textcolor = this.props.textcolor || "";
    let active = this.state.active ? "active" : "";
    let slide = this.state.slide ? 'slide' : "";
    return(
      <div className="header-wrapper">
        <img src="/resources/icons/squareenix.gif"/>
      </div>
    )      
  }
}

export default Header;