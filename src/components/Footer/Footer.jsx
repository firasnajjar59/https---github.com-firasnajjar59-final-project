/** @format */

import 'components/Footer/Footer.scss';
import { links, loggedOut,business,Profile } from 'links/links';
import NavLink from 'components/navBar/NavLink';
import { useSelector } from 'react-redux';
const Footer = () => {
  const isLogged=useSelector(state=>state.auth.isLogged)
  const isBussiness=useSelector(state=>state.auth.isBiz)
  return (
    <div className='footer bg-primary'>
      <div className='container mt-3 mb-3'>
        <div className='row'>
          <div className='col-sm-2'>
            <ul className='list-group white-color'>
              {links.map((item, indx) => (
                <li key={indx} className="nav-item">
                  <NavLink
                    
                    label={item.label}
                    path={item.path}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='col-sm-2'>
            <ul className='list-group white-color'>
              {isLogged
                ?isBussiness? business.map((item, indx) => (
                  <li key={indx} className="nav-item"><NavLink
                      
                      label={item.label}
                      path={item.path}
                    /></li>
                  )):Profile.map((item, indx) => (
                    <li key={indx} className="nav-item"><NavLink
                      label={item.label}
                      path={item.path}
                    /></li>
                  ))
                : loggedOut.map((item, indx) => (
                    <li key={indx} className="nav-item"><NavLink
                      
                      label={item.label}
                      path={item.path}
                    /></li>
                  ))}
            </ul>
          </div>
          <div className='col-sm-8'></div>
        </div>
        <div className='d-flex align-content-center justify-content-center'>
          <p className='white-color'>Copy Rights Firas Najjar</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
