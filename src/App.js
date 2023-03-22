import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';





//  function App(){ 
//     return( 
//     <div className="App">
//       <header className="App-header">
//         <p></p>
//         </header>
//         </div>
        
//        )
//  }


// export default App



class App extends Component {

  render() {
 
    return (
      <div>
        <p>what do you want in your finances?</p>
        <p>you gotta say it younnooo</p>
      </div>


    )

  }

}

export default App;
































// class App extends Component {

//   render() {

//     return (
//       <div>
//         <p>what do you wanna do segun</p>
        
//       </div>


//     )

//   }

// }

// export default App;



























// class App extends Component {
//   state = {
//     isPasswordShown: false
//   }
//   togglePasswordVisibility = () => {
//     const { isPasswordShown } = this.state;
//     this.setState({ isPasswordShown: !isPasswordShown });
//   }

//   render = () => {
//     const { isPasswordShown } = this.state;
//     return (
//       <div>
//         <form className='d-grid text-center' >
//           <h3>Welcome</h3>

//           <br />
//           <br />
//           <div>
//             <input
//               id='in'
//               type="text"
//               placeholder='Email'
//               name='email'
//             />
//           </div>
//           <br /> <br />
//           <div>
//             <input
//               id='pass'
//               type={(isPasswordShown) ? "text" : "password"}
//               placeholder='Password'
//               name='pass'
//               autoComplete='off'
//             />
//             <i className='fa fa-eye fa-1x my-2 ' onClick={this.togglePasswordVisibility} />
//           </div>
//           <br /> <br />
//           <div>
//             <input
//               id='login' 
//               type="submit"
//             />

//           </div>
//         </form>
//       </div>
//     )
//   }
// }















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <p className='text-secondary'>this  h</p>

//         {/* <!-- Example --> */}
//         <div className="container">
//           <div className="row">
//             <div className="col">okv</div>
//             <div className="col"></div>
//             <div className="col">mone</div>


//           </div>
//           <i className="fas fa-home fa-3x"></i>

//         </div>

//       </header >
//     </div >
//   )
// }