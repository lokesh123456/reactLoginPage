import React from 'react';
import {Link,browserHistory} from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Signup from './Signup';
import Logout from './Logout';



export default class Login extends React.Component {
  constructor(props){
    super(props)
      this.state={
        LoginDetails:{
          username:'',
          password:''
      }
      }
    }
    onChange=(e)=>{
      let LoginDetails=this.state.LoginDetails;
      let name=e.target.name;
      let value=e.target.value;

      this.setState({
        LoginDetails :{
             ...LoginDetails,
             [name]: value,
           }

      });
    }
      onSubmit=()=>{
        let {username,password} = this.state.LoginDetails
        new Promise(function(resolve, reject) {
              var localData = localStorage.getItem('userData');
              if(localData ===null){
                reject('no data found');
              }
              else {
                let data = JSON.parse(localData)
                resolve(data.data)
              }
            }).then(
              (data) => {
                let check = data.filter(
                  ({Email,password}) => {
                    return (Email.data == username && password.data == this.state.LoginDetails.password)
                  }
                )
                if(check.length>0){
                  browserHistory.push('/Logout/'+check[0].firstName.data)
                }else{
                  alert('wrong details')
                }

              }
            )

      }


        render() {
        let {LoginDetails} = this.state
            return (
              <Card className="container-fluid" id="login">
             <form className="form-horizontal">
               <h2 className="card-heading" >Login</h2>
               <div className="field-line">
                    <TextField
                      floatingLabelText="username"
                      name="username"
                      onChange={this.onChange}
                      value={LoginDetails.username}
                      required
                    />
               </div>
               <div className="field-line">
                    <TextField
                      floatingLabelText="Password"
                      type="password"
                      name="password"
                      onChange={this.onChange}
                      value={LoginDetails.password}
                      required
                    />
                  </div>
                  <div className="button-line">
                          <RaisedButton type="button" label="Log in" primary onClick={this.onSubmit}/>
                  </div>

                <CardText>
                Dont have an account?
                <Link to={'/Signup'}>Sign up </Link>
              </CardText>
            </form>
         </Card>

             );
            }



        }
