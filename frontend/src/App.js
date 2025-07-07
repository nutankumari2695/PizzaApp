// import logo from './logo.svg';
// import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './screens/Homepage.js';

// import useStore from './store';

function App() {
  // const { message, updateMessage } = useStore();
  return (
    <div className="App">
   <Navbar/>
   <Homepage/>
   
   {/* <p>{message}</p>
      <button onClick={() => updateMessage('Updated message from Zustand!')}>
        Update Message
      </button> */}
    </div>
  );
}

export default App;
