import './App.css'
import ReadAll from './components/ReadAll/ReadAll'
import Header from "./components/Header/Header";
import ReadById from './components/ReadById/ReadById';

function App() {
 
  return (
    <div className="App">
      <Header/>
      <ReadAll/>
      {/* <ReadById/> */}
    </div>
  )
}

export default App
