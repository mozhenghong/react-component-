import React, {Fragment, ReactElement, ReactNode, ReactFragment} from 'react'
import ReactDOM from 'react-dom'
import Icon from '../icon/icon'
import './dialog.scss'
import {scopedClassMaker} from '../classes'

interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>;
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
            {props.buttons&&props.buttons.length>0&&
            <footer className={sc('footer')}>
            {props.buttons&&props.buttons.map((button,index) => {
                   return React.cloneElement(button, {key: index})
               })}
            </footer>}
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

const alert = (content:string) => {
   const button = <button onClick={() => close()}>OK</button>
   const close = modal(content,[button])
}

const confirm = (content:  string, yes?: ()=>void, no?: ()=> void) => {
    const onYes = () => {
        close()
        yes&&yes()
    }
    const onNo =() => {
        close()
        no&&no()
    }
    const buttons=[
        <button onClick={onYes}>确定</button>, 
        <button onClick={onNo}>取消</button>
    ]
   const close = modal(content,buttons)
}

const modal = (content: ReactNode|ReactFragment, buttons?: Array<ReactElement>, afterClose?:() => void) => {
    const onClose = () =>{
        ReactDOM.render(React.cloneElement(component,{visible: false}),div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog onClose={onClose} visible={true} buttons={buttons}>{content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return onClose
}

export {alert, confirm, modal}
export default Dialog