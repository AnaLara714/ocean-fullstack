import './App.css'
import ReadAll from './components/ReadAll/ReadAll'
import Header from "./components/Header/Header";
import ReadById from './components/ReadById/ReadById';
import Footer from './components/Footer/Footer';

function App() {
 
  return (
    <div className="App">
      <Header/>
      <ReadAll/>
      {/* <ReadById/> */}
      <Footer/>
    </div>
  )
}

export default App
