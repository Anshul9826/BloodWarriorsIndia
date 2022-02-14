import logo from './logo1.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <>
      <Header logo={logo} />
      <div className="appBody d-flex">
        <Sidebar/>
        <Feed/>
      </div>
    </>
  );
}

export default App;
