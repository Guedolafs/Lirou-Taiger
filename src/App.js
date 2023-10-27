import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login.page';
import Home from './pages/home/home.page';
import Tigrinho from './joguinhos/tigrinho';
import Mines from './joguinhos/mines';
import Aviaozinho from './joguinhos/aviaozinho';
import MatrixRain from './components/matrix.component';
import Header from './components/header.component';

function App() {
  return (
    <div>
      <MatrixRain/>
    </div>
  );
}

export default App;
