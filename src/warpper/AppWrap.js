import React from 'react';
import { NavigationsDots, SocialMedia } from '../component';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

       
      </div>
      <NavigationsDots active={idName} />
    </div>
  );
};

export default AppWrap;
