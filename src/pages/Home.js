import Header from '../components/Header';
import Footer from '../components/Footer';
import {  Outlet } from 'react-router-dom';
import {UserContext} from '../utility/userContext';

const Home = () =>{

    return (<>
    <UserContext.Provider  value={{name:'Tarika'}}>
    <Header/>
    </UserContext.Provider>
    <Outlet />
    <Footer />
    </>)
}

export default Home;