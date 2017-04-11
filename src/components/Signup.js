import React from 'react';
import {browserHistory} from 'react-router';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={value:'fff'},
    this.state={page:0,
    formDetails:{
      companyName:{data:'',isError:true},
      streetAddress1:{data:'',isError:true},
      city:{data:'',isError:true},
      zipCode:{data:'',isError:true},
      phone:{data:'',isError:true},
      contact:{data:'',isError:true},
      firstName:{data:'',isError:true},
      lastName:{data:'',isError:true},
      phone:{data:'',isError:true},
      Title:{data:'',isError:true},
      Email:{data:'',isError:true},
      password:{data:'',isError:true},
      confirmPassword:{data:'',isError:true}

    }};
  }

  changeForm=(e)=>{
      let formDetails=this.state.formDetails;
      if(formDetails.companyName.isError||formDetails.streetAddress1.isError||formDetails.city.isError||formDetails.zipCode.isError||formDetails.phone.isError){

      }
      else{

    this.setState({page:1});
  }

  }
  onChange=(e)=>{
    let formDetails=this.state.formDetails;
    let name=e.target.name;
    let value=e.target.value;

    this.setState({
      formDetails :{
           ...formDetails,
           [name]: {data:value,isError:isEmpty(value) }
         }

    });
  }

  onSubmit =() =>{
      let formDetails=this.state.formDetails;
      if((formDetails.firstName.isError) || (formDetails.lastName.isError)||(formDetails.Title.isError)||(formDetails.Email.isError)|| (formDetails.password.isError)||(formDetails.confirmPassword.isError)
      ||(formDetails.password.data!=formDetails.confirmPassword.data)){

      }
       else {
           try{
             let localData  = window.localStorage.getItem('userData')
             if(localData  === null){
               let a = {data:[formDetails]}
                localStorage.setItem('userData',JSON.stringify(a))
                browserHistory.push('/Login')
             }


             else  {
               new Promise(function(resolve, reject) {
                    try{
                      let lData = JSON.parse(localData);
                      lData.data = [...lData.data,formDetails]
                      localStorage.setItem('userData',JSON.stringify(lData))
                    }catch(err){
                      reject('no Data')
                    }
                    resolve();
                  }).then(
                    () => {
                        browserHistory.push('/Login')
                    }
                  );


                
             }



           }catch(err){
             console.log(err)
           }
       }



  }
  render(){
    let {formDetails} = this.state
    return(
       <Card className="container">
      <div className="container" >
      {
        this.state.page===0?<div className="form-horizontal form1">
              <div className="row">
              <h1 className="text-center">Supplier Profile</h1>
              <fieldset>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <div className="field-line">
                         <TextField
                           floatingLabelText="companyName"
                           name="companyName"
                           onChange={this.onChange}
                           value={formDetails.companyName.data}
                           required
                         />
                    </div>

                </div>
                  <div className="col-md-2 col-md-offset-right-12">
                {formDetails.companyName.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
              </div>
                </div>
            </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <div className="field-line">
                         <TextField
                           floatingLabelText="streetAddress1"
                           name="streetAddress1"
                           onChange={this.onChange}
                           value={formDetails.streetAddress1.data}
                         />
                    </div>
                   </div>
                   <div className="col-md-2">
                       {formDetails.streetAddress1.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
                     </div>
                 </div>

              </div>
              <div className="form-group">


              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="field-line">
                       <TextField
                         floatingLabelText="streetAddress2(optional)"
                         name="streetAddress2"
                       />
                  </div>
               </div>
             </div>

              </div>
              <div className="form-group">


              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="field-line">
                       <TextField
                         floatingLabelText="city"
                         name="city"
                         onChange={this.onChange}
                         value={formDetails.city.data}
                       />
                  </div>
            </div>
            <div className="col-md-2">
             {formDetails.city.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
           </div>
         </div>

              </div>

          <div className="form-group">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="field-line">
                       <TextField
                         floatingLabelText="zipCode"
                         name="zipCode"
                         onChange={this.onChange}
                         value={formDetails.zipCode.data}
                       />
                  </div>
             </div>
           <div className="col-md-2">
             {formDetails.zipCode.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
             {isNaN(formDetails.zipCode.data)?<span className='error'>Should be a Number</span>:<span className='ok'>Ok</span>}
             {isLength(formDetails.zipCode.data,{min :5,max:5})?<span className='Ok'>ok</span>:<span className='error'>Length Should be a 5</span>}

           </div>
         </div>

              </div>
              <div className="form-group">


              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="field-line">
                       <TextField
                         floatingLabelText="phone"
                         name="phone"
                         onChange={this.onChange}
                         value={formDetails.phone.data}
                       />
                  </div>
           </div>
           <div className="col-md-2">
           {formDetails.phone.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
           {isNaN(formDetails.phone.data)?<span className='error'>Should be a Number</span>:<span className='ok'>Ok</span>}
             {isLength(formDetails.phone.data,{min :10,max:10})?<span className='Ok'>ok</span>:<span className='error'>Length Should be a 10</span>}
         </div>
       </div>

              </div>
              <div className="form-group">

              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="field-line">
                       <TextField
                         floatingLabelText="website(optional)"
                         name="website"
                       />
                  </div>
               </div>
             </div>


              </div>
            <center>
              <div className="button-line">
                      <RaisedButton type="button" label="NEXT"  primary onClick={this.changeForm}/>
              </div>
            </center>

              </fieldset>
              </div>
            </div>:  <div className="form-horizontal form2">
                <fieldset>
                <div className="form-group">


                  <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                      <div className="field-line">
                           <TextField
                             floatingLabelText="firstName"
                             name="firstName"
                             onChange={this.onChange}
                             value={formDetails.firstName.data}
                           />
                      </div>
            </div>
              <div className="col-md-2">
              {formDetails.firstName.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
              </div>
            </div>

                </div>
                <div className="form-group">

                  <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                      <div className="field-line">
                           <TextField
                             floatingLabelText="lastName"
                             name="lastName"
                             onChange={this.onChange}
                             value={formDetails.lastName.data}
                           />
                      </div>
            </div>
              <div className="col-md-2">
              {formDetails.lastName.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
            </div>
          </div>

                </div>

                <div className="form-group">
                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <div className="field-line">
                         <TextField
                           floatingLabelText="contact"
                           name="contact"
                           onChange={this.onChange}
                           value={formDetails.contact.data}
                         />
                    </div>
               </div>
                 <div className="col-md-2">
               {formDetails.contact.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
               {isNaN(formDetails.contact.data)?<span className = 'error'>Should be a Number</span>:<span className = 'ok'>Ok</span>}
               {isLength(formDetails.contact.data,{min:10,max:10})?<span className = 'ok'>OK</span>:<span className = 'error'>Ok</span>}
             </div>
           </div>

                </div>

                <div className="form-group">
                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <div className="field-line">
                         <TextField
                           floatingLabelText="Title"
                           name="Title"
                           onChange={this.onChange}
                           value={formDetails.Title.data}
                         />
                    </div>
                  </div>
                   <div className="col-md-2">
                  {formDetails.Title.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
                </div>
              </div>

                </div>
                <div className="form-group">


                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <div className="field-line">
                         <TextField
                           floatingLabelText="Email"
                           name="Email"
                           onChange={this.onChange}
                           value={formDetails.Email.data}
                         />
                    </div>
                 </div>
                 <div className="col-md-2">
                  {formDetails.Email.isError?<span className = 'error'>Should not be Empty</span>:<span className = 'ok'>Ok</span>}
                       {isEmail(formDetails.Email.data)?<span className = 'ok'>Ok</span>:<span className = 'error'>Enter Valid Email</span>}
                     </div>
                   </div>

                </div>

                <div className="form-group">


                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <div className="field-line">
                         <TextField
                           floatingLabelText="password"
                           type="password"
                           name="password"
                           onChange={this.onChange}
                           value={formDetails.password.data}
                         />
                    </div>
                </div>
                 <div className="col-md-2">
                  {formDetails.password.isError?<span className = 'error'>Should not be Empty </span>:<span className = 'ok'>Ok</span>}
                      {isAlphanumeric(formDetails.password.data)?<span className = 'error'>Should  be atleast 1 number & 1 special Number </span>:<span className = 'ok'>Ok</span>}
                    </div>
                  </div>

                </div>
                <div className="form-group">


                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <div className="field-line">
                         <TextField
                           floatingLabelText="confirmPassword"
                           type="password"
                           name="confirmPassword"
                           onChange={this.onChange}
                           value={formDetails.confirmPassword.data}
                         />
                    </div>
               </div>
               <div className="col-md-2">
                {formDetails.confirmPassword.isError?<span className = 'error'>Should not be Empty </span>:<span className = 'ok'>Ok</span>}
              </div>
            </div>

            </div>
                <center>
                  <div className="button-line">
                          <RaisedButton type="button" label="Register"  primary onClick={this.onSubmit}/>
                  </div>
                </center>
                </fieldset>
                </div>
      }

      </div>
    </Card>

  );
  }

}
