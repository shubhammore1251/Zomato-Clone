import './App.css';
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Dinning from './components/Dinning';
import NightLife from './components/NightLife';
import Delivery from './components/Delivery';
import Header from './components/Header';
import TabOptions from './components/TabOptions';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <>
      <Router>

      <Header/>

      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>

        <Routes>
          <Route exact path='/' element={<Navigate to="/delivery"/>}></Route>
          <Route exact path='/delivery' element={< Delivery />}></Route>
          <Route exact path='/dinning' element={< Dinning />}></Route>
          <Route exact path='/nightlife' element={< NightLife />}></Route>
        </Routes>

      <Footer/>
      </Router>
    </>
  );
}

export default App;
