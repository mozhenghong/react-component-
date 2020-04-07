import React, {Fragment} from 'react'
import Icon from '../icon/icon'
import './dialog.scss'
import {scopedClassMaker} from '../classes'

interface Props {
    visible: boolean
}

const scopedClass = scopedClassMaker('moui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
           <Fragment>
               <div className={sc('mask')}></div>
               <div className={sc()}>
                   <div className={sc('close')}>
                       <Icon name="close"/>
                   </div>
                   <header className={sc('header')}>
                       弹窗
                   </header>
                   <main className={sc('main')}>
                       {props.children}
                   </main>
                   <footer className={sc('footer')}>
                       <button>确定</button>
                       <button>取消</button>
                   </footer>
               </div>
           </Fragment> :
            null
    )
}

export default Dialog