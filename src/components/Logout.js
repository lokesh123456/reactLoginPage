import React from 'react';
import {Link,browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';


export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit=(e)=>{
    browserHistory.push('/Login')
  }
    render(){
      let localData  = window.JSON.parse(localStorage.getItem('userData'));
      return(
        <div className="button-line">
          {console.log(this.props)}
          <h1>Welcome {this.props.params.user}</h1>
                <RaisedButton type="button" label="Log out" primary onClick={this.onSubmit}/>
        </div>
    );
    }

}
