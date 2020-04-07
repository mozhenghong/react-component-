import React, {Fragment, ReactElement} from 'react'
import ReactDOM from 'react-dom'
import Icon from '../icon/icon'
import './dialog.scss'
import {scopedClassMaker} from '../classes'

interface Props {
    visible: boolean;
    buttons: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('moui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose:React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onClickMask:React.MouseEventHandler = (e) => {
        if(props.closeOnClickMask) {
            props.onClose(e)
        }
    }
    const element  =   props.visible ?
    <Fragment>
        <div className={sc('mask')} onClick={onClickMask}></div>
        <div className={sc()}>
            <div className={sc('close')} onClick={onClickClose}>
                <Icon name="close"/>
            </div>
            <header className={sc('header')}>
                弹窗
            </header>
            <main className={sc('main')}>
                {props.children}
            </main>
            <footer className={sc('footer')}>
               {props.buttons.map((button,index) => {
                   return React.cloneElement(button, {key: index})
               })}
            </footer>
        </div>
    </Fragment> :
     null
    return (
    // react传送门
      ReactDOM.createPortal(element, document.body)
    )
}

Dialog.defaultProps = {
    closeOnClickMask: false
}
export default Dialog