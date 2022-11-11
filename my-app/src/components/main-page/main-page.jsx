import React from 'react';
import Header from '../header/header';
import Main from '../main/main';

function MainPage() {
  return (
    <React.Fragment>
      <div className="page__body-bg"></div>
      <Header />
      <Main />
    </React.Fragment>
  );
}

export default MainPage;
