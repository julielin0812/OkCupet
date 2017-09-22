import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      // errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    // this.setState({ errors: this.props.errors });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    // this.setState({ errors: [] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
      // .fail( resp => this.setState( {errors: resp.responseJSON} ));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error,idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }


  render () {
    return (
      <div>
        <div className="login-form-wrapper">
          <h3>Log In:</h3>

          <form className="login-form" onSubmit={this.handleSubmit}>
            <br />
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')} />
            <br />

              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')} />

            <br />
            <button className="login-form-button" type="submit">Log In</button>
            <div className="auth-errors">{this.renderErrors()}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
