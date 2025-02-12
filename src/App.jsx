// import React, { Component } from 'react';
// import CBCPropsex1 from './propsexample/CBCPropsex1';

// const App=()=>{
//   // let ele =React.createElement("div",{id:"demo"},
//   // 	React.createElement("h1",null,"Header"),

//   // )
//   let x=1000;
//   return (
//     <div id="demo">
//       <h1>header</h1>
//       <p>Lorem ipsum dolor.</p>
//       {x}<br/>
//       {100*2}
//     </div>

//   )
// }
// export default App

//!component composition
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";


// class App extends Component{
//   render(){
//     return(
//       <div>App
//         <hr />
//         <CBCPropsex1
//         username="swetha"
//         age={20}
//         desig={["developer","tester"]}
//         userDetails={{city:"Hyd", area:"Maisammaguda"}}
//         sendFun={function(){alert("Hi Iam from parent component")}}
//         />
//       </div>
//     )
//   }
// }
// export default App;

//! props children example
// import React from 'react'
// import ChildProps from './propsexample/ChildProps'
// import PropsChildrenEx from './propsexample/PropsChildrenEx'
//  const App=()=>{
//   return(
//   <div>
//     {/* <FBCPropsex1
//     username="swetha"
//     isLoggedIn={false}
//     hobbies={["Roaming","Watching movies","travelling"]}
//     /> */}
//     <PropsChildrenEx username="swetha" company="meta">
//       <h1>This data is passed as props children</h1>
//       <ChildProps/>
//     </PropsChildrenEx>
//   </div>
//   )
//  }

//  export default App

// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'

// const App = () => {
//   return (
//     <div>
//       <CBCStateEx />
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import FBCStateEx from './stateexamples/FBCStateEx'

// const App = () => {
//   return (
//     <div>
//       <FBCStateEx />
//     </div>
//   )
// }

// export default App

// import React from 'react'

// import ExUseEffect from './hooks/ExUseEffect'
// const App=()=>{
  
//     return (
//       <div>
//         <ExUseEffect/>
//       </div>
//     )
  
// // }

// // export default App
// import React from 'react'
// import RefExamples from './hooks/RefExamples'
// const App=()=>{
  
//     return (
//       <div>
//         <RefExamples/>
//       </div>
//     )
  
// }

// export default App

import React from 'react'
import ContextC1 from './context/ContextC1'
import ContextAPI from './context/ContextAPI'

const App = () => {
  return (
    <div>
     <ContextAPI>
      <ContextC1/>
     </ContextAPI>
    </div>
  )
}

export default App