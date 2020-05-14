import React, { ReactElement } from 'react';
import scopedClassMaker from '../helpers/classes';
import './layout.scss'
import Aside from './aside'

const scopedClass = scopedClassMaker('moui-layout')
const sc = scopedClass
interface Props extends React.HTMLAttributes<HTMLElement>{
    children: ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
       let hasAside = ('length' in (props.children as Array<ReactElement>))&&(props.children as Array<ReactElement>)
       .reduce((result, node) => result || node.type === Aside, false)
    return (
        <div className={sc({'':true, hasAside}, {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;
export {Layout}
export {default as Header} from './header'
export {default as Footer} from './footer'
export {default as Content} from './content'
export {default as Aside} from './aside'
