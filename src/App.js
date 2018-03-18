import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd';
import PCIndex from './js/component/pc_index';
import MobileIndex from './js/component/mobi_index';
import 'antd/dist/antd.css';
import './css/pc.css';
import './css/mobi.css';
import MediaQuery from 'react-responsive';

class App extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <PCIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;

