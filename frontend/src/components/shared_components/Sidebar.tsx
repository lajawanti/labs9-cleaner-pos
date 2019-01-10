import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <>
      <nav>
        <div>
          <h3>Guests</h3>
        </div>
        <div>
          <Link to='/'>
            <h3>Checkout</h3>
          </Link>
        </div>
        <br />
        <div>
          <h3>------</h3>
        </div>
        <div>
          <Link to='/'>
            <h3>Houses</h3>
          </Link>
        </div>
        <div>
          <Link to='/'>
            <h3>Assistants</h3>
          </Link>
        </div>
        <div>
          <Link to='/'>
            <h3>Reports</h3>
          </Link>
        </div>
        <div>
          <Link to='/'>
            <h3>Settings</h3>
          </Link>
        </div>
        <div>
          <Link to='/'>
            <h3>Billing</h3>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;