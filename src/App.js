
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import Header from './components/layouts/Header';


function App() {
  return (
    <div className="App">
    <Header className='sticky top-0'/>
    <AllRoutes/> 

    </div>
    
  );
}

export default App;
