/**
 * Created by chriswhishaw on 2018/3/18.
 */
import React from 'react';
import MobileHeader from './mobi_header'
import MobileFooter from './mobi_footer'


export default class MobileIndex extends React.Component{
  render(){
    return(
        <div>
          <MobileHeader></MobileHeader>
          <MobileFooter></MobileFooter>
        </div>

    )
  }
}