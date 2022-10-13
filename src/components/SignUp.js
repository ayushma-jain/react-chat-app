import React, { Component } from 'react';
import background from "./beauty.jpg";
import FormValidator from './FormValidator.js';
import './Signup.css';

class SignUp extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([{
      field: 'username',
      method: 'isEmpty',
      validWhen: false,
      message: 'Enter user name.'
    }, {
      field: 'email',
      method: 'isEmpty',
      validWhen: false,
      message: 'Enter your email address.'
    }, {
      field: 'email',
      method: 'isEmail',
      validWhen: true,
      message: 'Enter valid email address.'
    }, {
      field: 'pwd',
      method: 'isEmpty',
      validWhen: false,
      message: 'Enter password.'
    }, {
      field: 'cpwd',
      method: 'isEmpty',
      validWhen: false,
      message: 'Enter Password confirmation.'
    }, {
      field: 'cpwd',
      method: this.passwordMatch, // notice that we are passing a custom function here
      validWhen: true,
      message: 'Password and password confirmation do not match.'
    }]);
    this.state = {
      full_name: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      validation: this.validator.valid(),
    }
    this.submitted = false;
  }
  passwordMatch = (confirmation, state) => (state.password === confirmation)
  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleFormSubmit = event => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({
      validation
    });
    this.submitted = true;
    if (validation.isValid) {
      //reaches here if form validates successfully...
    }
  }
  render() {
    /*const myStyle = {
      backgroundImage: `url(${background})`,
      height: '107vh',
      marginTop: '-1px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

    };*/
    let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
    //console.log(validation);
    return (
      <div className="wrapper">
        <div className="inner row">
          <div className="image-holder col-6">
            <img src={background} alt="hello"></img>

          </div>
          <form action="" className='col-6'>
            <div class="row">
              <h3 className='col-12'>Sign Up</h3>
              <div className=" col-12 form-holder active {validation.username.isInvalid && 'has-error'}">
                <input type="text" name="username" placeholder='Username' onChange={this.handleInputChange} className="form-control" />
                <span className="help-block">{validation.username.message}</span>
              </div>
              <div className="form-holder col-12 {validation.email.isInvalid && 'has-error'}">
                <input type="email" name="email" placeholder='Email' onChange={this.handleInputChange} className="form-control" />
                <span className="help-block">{validation.email.message}</span>
              </div>
              <div className="form-holder col-12 {validation.pwd.isInvalid && 'has-error'}">
                <input type="password" name="pwd" placeholder='Password' onChange={this.handleInputChange} className="form-control" />
                <span className="help-block">{validation.pwd.message}</span>
              </div>
              <div className="form-holder col-12  {validation.cpwd.isInvalid && 'has-error'}">
                <input type="password" name="cpwd" placeholder='Confirm Pwd' onChange={this.handleInputChange} className="form-control" />
                <span className="help-block">{validation.cpwd.message}</span>
              </div>
              <div className="form-login col-12">
                <button onClick={this.handleFormSubmit}>Sign up</button>
              </div>
            </div>

          </form>
        </div>
      </div>

    )
  }
}
export default SignUp;