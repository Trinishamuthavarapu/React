// // import React from 'react';

// // // const App=()=>{
// //   // let ele =React.createElement("div",{id:"demo"},
// //   // 	React.createElement("h1",null,"Header"),

// //   // )
// // //   let x=1000;
// // //   return (
// // //     <div id="demo">
// // //       <h1>header</h1>
// // //       <p>Lorem ipsum dolor.</p>
// // //       {x}<br/>
// // //       {100*2}
// // //     </div>
// // import Navbar from "./components/Navbar";
// // import Main from "./components/Main";
// // import Sidebar1 from "./components/Sidebar1";
// // import Sidebar2 from "./components/Sidebar2";
// // import Footer from "./components/Footer";


// // const App=()=>{
// //     return(
// //         <div className="app">
// //         <Navbar/>
// //         <Main></Main>
// //         <div className="sidebar">
// //         <Sidebar1/>
// //         <Sidebar2/>

// //         </div>
// //         <Footer/>
// //         </div>
// //     )
// // }

// import React, {Component} from 'react';
// import CBCPropsex1 from './propsexample/CBCPropsex1';
// class App extends Component{
//   render() {
//     return (
//       <div>App
//         <hr />
//         <CBCPropsex1
//         username="Sam"
//         age={25}
//         desig={["developer","tester"]}
//         userDetails={{city:"Hyd",are:"Maisammaguda"}}
//         sendFun={function(){alert("Hi i am from parent")}}
//         />

//       </div>
//     )
//   }
// }
// export default App;
// import React from 'react'
// import FBCPropsex1 from './propsexample/FBCPropsex1'

// const App = () => {
//   return (
//     <div>

//         <FBCPropsex1
//         username="Trinisha"
//         isLoggedIn={false}
//         hobbies={["Watching movies","Playing"]}
//         />
//             </div>
            
//   )
// }

import React from 'react'
import PropsChildrenEx  from './propsexample/PropsChildrenEx'
import ChildProps from './propsexample/ChildProps'
const App = () =>{
  return (
    <div>
      <PropsChildrenEx username="Trinisha" company="Meta">
        <h1>This data is passed as props children</h1>
        <ChildProps/>

      </PropsChildrenEx>
    </div>
  )
}
export default App