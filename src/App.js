
//gradeddd
import './App.css';
import Header from "./Header";
import Login from './Login.js';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets.js';
import { useStateValue } from './StateProvider.js';
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header/>

          <div className="app__body">
            <Sidebar/>
            <Feed />
            <Widgets/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
