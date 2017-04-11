import React from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Login from './components/Login';

export default class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='container-fluid'>
        <AppBar title="React Login App" id="title"
        showMenuIconButton = {false}
          iconElementRight = { <div className="top-bar-right">
          <Link to="/login"><FlatButton label="Login"/></Link>

        </div>}

        />
      {this.props.children}
     </div>
  );

  }
}
