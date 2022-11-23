/** @format */
import 'App.scss';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/navBar/NavBar';
import BizGuard from 'Guard/BizGuard';
import LoginGuard from 'Guard/LoginGuard';
import useAutoLogin from 'hooks/useAutoLogin';
import AboutUs from 'pages/AboutUs/AboutUs';
import CreateCard from 'pages/CreateCard/CreateCard';
import HomePage from 'pages/Home/HomePage';
import Login from 'pages/Login/Login';
import MyCards from 'pages/MyCards/MyCards';
import OneCardPage from 'pages/OneCardPage/OneCardPage';
import Page404 from 'pages/Page404/Page404';
import Register from 'pages/Register/Register';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const log=useSelector(state=>state.loading.loading)
  const AutoLogin = useAutoLogin();
  useEffect( () => {
      AutoLogin()
  }, []);
  
  
  return (
    <>
      <NavBar />
      {!log&&<div className='container d-flex align-content-center justify-content-center flex-grow-1'>
        <Switch>
          <Route
            path='/'
            exact
            component={HomePage}
          />
          <BizGuard
            path='/mycards'
            component={MyCards}
          />
          <LoginGuard
            path='/myprofile'
            component={MyCards}
          />
          <Route
            path='/bussinesscard/:id'
            component={OneCardPage}
          />
          <Route
            path='/aboutus'
            component={AboutUs}
          />
          <Route
            path='/login'
            component={Login}
          />
          <Route
            path='/register'
            component={Register}
          />
          <Route
            path='/businessregister'
            component={Register}
          />
            <BizGuard
              path='/createcard/:id'
              component={CreateCard}
            />
          <BizGuard
            path='/createcard'
            component={CreateCard}
          />
          <Route
            path='*'
            component={Page404}
          />
        </Switch>
      </div>}
      <Footer />
    </>
  );
};
export default App;
