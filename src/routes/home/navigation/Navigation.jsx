import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../components/assets/crown (2).svg';
import './Navigation.styles.scss';
function Navigation() {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo' to='/'>
                <CrwnLogo/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                  Shop
                </Link>
                
                <Link className='nav-link' to='/sign-in'>
                  Sign In
                </Link>
            </div>
        </div>
  
        <Outlet />
      </Fragment>
  
    );
  }

  export default Navigation;