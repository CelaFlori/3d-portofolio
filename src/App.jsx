import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";


const App = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
      </Routes>

    </BrowserRouter>
  );
};

export default App;
