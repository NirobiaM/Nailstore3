 import Layout from './components/layout/Layout';
import AboutMe from './pages/AboutMe';
import ServiceShop from './pages/ServiceShop';
import SignupPage from './pages/SignupPage';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
  
const App =() => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Router>
    <Layout>
  
        <Routes>
          <Route path ="/signup"element= {<SignupPage/>}/>
      <Route path ="/about-me" element = {<AboutMe/>}/>
        </Routes>
    
      
    
    </Layout>
    </Router>
    </div>
 
  );
};

export default App;

