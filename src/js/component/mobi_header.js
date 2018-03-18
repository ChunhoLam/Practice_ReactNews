/**
 * Created by chriswhishaw on 2018/3/18.
 */
import React from 'react';

export default class MobileHeader extends React.Component{
  render(){
    return(
        <div id="mobileheader">
          <header>
            <img src="https://cdn3.iconfinder.com/data/icons/communication-2-2/256/Newspaper-512.png" alt="logo"/>
            <span>ChrisNews</span>
          </header>
        </div>

    );
  };
}