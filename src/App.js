import './App.css'
import Main from "./Main";
import ResourcesContext from './store/ResourcesContext'


function App() {
  return (
    <ResourcesContext>
        <Main />
    </ResourcesContext>
  );
}

export default App;
