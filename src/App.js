import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ContainerHeader from './Components/ContainerHeader/ContainerHeader'
import ContainerBody from './Components/ContainerBody/ContainerBody'
import ContainerFooter from './Components/ContainerFooter/ContainerFooter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/> 
      </header>
      <div className="app-container">
          <div className="container-box">
            <ContainerHeader/>
              <ContainerBody/>
              <ContainerFooter/>
          </div>
      </div>
    </div>
  );
}

export default App;
