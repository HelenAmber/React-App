import './search-panel.css';
import { Component } from 'react';

class SeachPanel extends Component{
  constructor(props){
     super(props);
     this.state = {
       term:''
     }
  }

  render(){
      return (
        <input type="text"
              className="form-control search-input" 
              placeholder="Найти сотрудника"/>
      )
  }
}

export default SeachPanel;