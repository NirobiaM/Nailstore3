import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = (props) => {
  return (
    <div className = "grid grid-col-12 ">
        <NavBar />
        {props.children}
        <Footer />
    </div>
  );
}

export default Layout
