import React from 'react';
import {scopedClassMaker} from '../classes'

const scopedClass = scopedClassMaker('moui-layout')
const sc = scopedClass
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Content: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('content',{extra: className})} {...rest}>
            content
        </div>
    )
}

export default Content;