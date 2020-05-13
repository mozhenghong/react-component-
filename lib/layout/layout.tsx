import React, { ReactElement } from 'react';
import {scopedClassMaker} from '../classes';
import './layout.scss'
import Aside from './aside'

const scopedClass = scopedClassMaker('moui-layout')
const sc = scopedClass
interface Props extends React.HTMLAttributes<HTMLElement>{
    children: ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    let hasAside = false
    if((props.children as Array<ReactElement>).length) {
        (props.children as Array<ReactElement>).map((node) => {
            if(node.type === Aside) {
                hasAside = true
            }
        })

        
    }
    return (
        <div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;