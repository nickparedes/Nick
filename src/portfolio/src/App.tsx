import './App.css';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FrontPage from './section/frontPage/FrontPage.tsx';
import Main from './section/main/Main.tsx';

function App() {
  return (
    <Main>
        <NavBar />
        <FrontPage className="bg-black"/>
        <FrontPage/>
        <FrontPage/>
        <FrontPage/>
        <FrontPage/>
        <Footer/>
    </Main>
  )
}

export default App
