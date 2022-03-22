import React from 'react';

class ControlledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      courses: 'react',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        courses: '',
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var errKeys=Object.keys(this.state).filter((key)=>{
      if(this.state[key]==='' && key!='errors'){
        return key;
      }
    })
    if(errKeys.length>=1){
      console.error('Please fill all details')
    }else{
      console.log(this.state);
    }
    
  };

  handleChange = (e) => {
    var errors = { ...this.state.errors };
    if (e.target.value === '') {
      errors[e.target.name] = 'Required';
    } else {
      errors[e.target.name] = '';
    }
    this.setState({ errors, [e.target.name]: e.target.value }); //way 1
    //way2 ; rhis.setState({erros:{firstName:'Required', lastName:'Required'}});
  };

  render() {
    return (
      <>
        <h3>UserForm</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={(e) => this.handleChange(e)} // replacing "firstName: e.target.value" with "[e.target.name]:e.target.value}"
            />{' '}
            <br /> <br />
            <span style={{ color: 'red' }}>{this.state.errors.firstName}</span>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <span style={{ color: 'red' }}>{this.state.errors.lastName}</span>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <span style={{ color: 'red' }}>{this.state.errors.email}</span>
          </div>
          <div>
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => this.handleChange(e)}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => this.handleChange(e)}
            />
            Female
          </div>
          <br />
          <br />
          <div>
            <label>Courses</label>
            <select
              name="courses"
              value={this.state.courses}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="mysql">MySQL</option>
              <option value="mongo">Mongo</option>
            </select>
            <br />
            <br />
          </div>
          <button type="submit">Submit</button> &nbsp;
          <button type="button">Reset</button>
        </form>
      </>
    );
  }
}

export default ControlledForm;
