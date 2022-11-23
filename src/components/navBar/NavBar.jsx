/** @format */

import { loggedIn, loggedOut, links, business, Profile } from 'links/links';
import NavBarLink from 'components/navBar/NavLink';
import 'components/navBar/NavBar.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrimaryButton from 'components/buttons/PrimaryButton';
import useLogOut from 'hooks/useLogOut';

const NavBar = () => {
  const logout=useLogOut()
  const loggedin = useSelector(state => state.auth.isLogged);
  const isBussiness = useSelector(state => state.auth.isBiz);
  const userName = useSelector(state => state.userInfo.userInfo.name);
  return (
    <nav className='navBar navbar navbar-expand-lg navbar-dark bg-primary'>
      <NavLink
        className='navbar-brand'
        to='/'>
        Navbar
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarColor01'
        aria-controls='navbarColor01'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse'
        id='navbarColor01'>
        <ul className='navbar-nav me-auto'>
          {links.map((item, indx) => (
            <NavBarLink
              key={indx}
              label={item.label}
              path={item.path}
            />
          ))}
          {loggedin ? (
            <li className='nav-item dropdown'>
              <p
                className='nav-link dropdown-toggle m-0'
                data-bs-toggle='dropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'>
                Profile
              </p>
              <div className='dropdown-menu'>
                {isBussiness
                  ? business.map((item, indx) => (
                      <NavBarLink
                        Class='dropdown-item text-dark textOpacity'
                        key={indx}
                        label={item.label}
                        path={item.path}
                      />
                    ))
                  : null}
                <div className='dropdown-divider'></div>
                {Profile.map((item, indx) => (
                  <NavBarLink
                    Class='dropdown-item text-dark textOpacity'
                    key={indx}
                    label={item.label}
                    path={item.path}
                  />
                ))}
              </div>
            </li>
          ) : null}
        </ul>
        <ul className='navbar-nav'>
          {loggedin ? (
            <>
              <NavBarLink
                path='/'
                label={userName}
              />
              {loggedIn.map((item, indx) => (
                <PrimaryButton
                  key={indx}
                  placeholder={item.label}
                  onclick={logout}
                />
              ))}
            </>
          ) : (
            loggedOut.map((item, indx) => (
              <NavBarLink
                key={indx}
                label={item.label}
                path={item.path}
              />
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
