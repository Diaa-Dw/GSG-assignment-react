import React from "react";

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src='logo.png' alt='Company Logo' />
      </div>
      <div className='header-text'>
        <h1>Our Products</h1>
        <p>
          Browse through our wide range of products. Use the filter below to
          narrow down your choices.
        </p>
      </div>
    </header>
  );
};

export default Header;
