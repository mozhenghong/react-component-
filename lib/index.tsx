import React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target)
}
ReactDom.render(
    <div>
        <Icon name="wechat" onClick={fn}/>
        {/* <Icon name="QQ"/>
        <Icon name="alipay"/> */}
    </div>
    , document.querySelector("#root"))