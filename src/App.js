import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/homePage/Home';

function App() {
  return (
    <div className='container'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
