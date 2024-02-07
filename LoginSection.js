import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = ({ handleSignupClick }) => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the Google Sign-In response here
  };

  const loginContainerStyle = {
  maxWidth: '400px',
  margin: 'auto',
  textAlign: 'center',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#fff',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};


  const headingStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '10px',
  };

  const inputStyle = {
    padding: '10px',
    width: '100%',
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1em',
  };

  const orDividerStyle = {
    margin: '20px 0',
    position: 'relative',
  };

  const orSpanStyle = {
    backgroundColor: '#fff',
    padding: '0 10px',
    position: 'relative',
    zIndex: '1',
  };

  const orDividerBeforeStyle = {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    borderTop: '1px solid #ccc',
    zIndex: '0',
  };

  const signupLinkStyle = {
    color: '#007bff',
  };

  return (
    <div style={loginContainerStyle} className="login-container">
      <h2 style={headingStyle}>Login</h2>
      <form>
        <input type="email" placeholder="Email" style={inputStyle} required />
        <input type="password" placeholder="Password" style={inputStyle} required />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      <div style={orDividerStyle} className="or-divider">
        <span style={orSpanStyle}>Or</span>
      </div>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        style={{ marginBottom: '20px' }}
      />
      <p>Don't have an account?</p>
       <button className="Signup-button" onClick={handleSignupClick}>Signup
       </button>

    </div>
  );
};

export default Login;
