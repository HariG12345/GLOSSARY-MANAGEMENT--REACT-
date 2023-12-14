// App.js
import React from 'react';
import Logo from './Logo/Logo'
import Login from './Login/Login';




const App = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${require('./Image/supermarket-min.jpg')})`,
      backgroundSize: 'cover', 
        backgroundPosition: 'fixed',
        width: '150%', 
        height:'10%',
        margin:'-25px',
}}>
      <Logo/>
       {/* <h1 style={{margin: '-20px',width:'-0px' }}></h1> */}
      {/* <center><h1>SUPERMARKET MANAGEMENT</h1></center> */}
        
          <Login />
          
          <div>
          <button type="submit"><a href='/myproject/src/SignUp.js'></a></button>
          
        </div>
        
        </div>
        
  );
};

export default App;
