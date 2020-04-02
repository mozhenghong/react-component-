import React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target)
}
ReactDom.render(
    <div>
        <Icon name="wechat" onClick={fn} onTouchStart = {() => console.log('touch')} className="xxx"/>
        <Icon name="QQ" onMouseEnter={() => console.log('enter')}/>
        <Icon name="alipay" onMouseLeave = {() => console.log('leave')}/>
    </div>
    , document.querySelector("#root"))