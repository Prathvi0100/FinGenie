// import PublicNavbar from './components/PublicNavbar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Homepage from './components/HomePage'
// // import Login from './components/Login'
// import Register from './components/Register'
// import Learn from './components/Learn';
// function App() {
//   return (<>
//     <BrowserRouter>
//       <PublicNavbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         {/* <Route path="/login" element={<Login/>}/> */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/learn" element={<Learn />} />
//       </Routes>
//     </BrowserRouter>

//   </>

//   )
// }


// export default App
import PublicNavbar from './components/PublicNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

