//import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MenuComponent';
import NavBar from './components/NavBar';
import MyCarousel from './components/MyCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar/>
    {/*<MenuComponent/>*/}
    <MyCarousel/>
    <div className='bg-red-300'>grdgrgrd</div>
    
    </>
  );
}

export default App;
