import Navbar from './components/Nabar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import styles from'./App.module.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import Protected from './components/Protected/Protected';
import Error from './pages/Error/Error';
import { useSelector } from "react-redux";
function App() {
  const isAuth=useSelector((state)=>state.user.auth);
  return (
    <div className={styles.Container}>
<BrowserRouter>
<div className={styles.layout}>
  <Navbar/>
  <Routes>
<Route
path='/'
exact
element=

{<div className={styles.main}><Home/></div>}
/>
<Route
path='crypto'
exact
element={<div className={styles.main}>crypto page</div>}/>
<Route
path='blogs'
exact
element={<Protected isAuth={isAuth}><div className={styles.main}>blogs page</div></Protected>}/>
<Route
path='submit'
exact
element={<Protected isAuth={isAuth}><div className={styles.main}>submit page</div></Protected>}/>
<Route
path='signup'
exact
element={<div className={styles.main}>sign-up page</div>}/>
<Route
path='login'
exact
element={<div className={styles.main}><Login/></div>}/>
<Route
path='*'
element={<div className={styles.main}><Error/></div>}/>
  </Routes>
  <Footer/>
  </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
