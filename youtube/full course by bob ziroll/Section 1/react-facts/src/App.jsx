import reactLogo from './assets/react.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  
  return (
  <>
    <Navbar logo={reactLogo}/>
    <Main />
  </>
  );
}

export default App
