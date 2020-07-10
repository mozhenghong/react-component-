import React, { InputHTMLAttributes } from 'react'
import './input.scss'
import {scopedClassMaker} from '../helpers/classes'


interface Props extends InputHTMLAttributes<HTMLInputElement>{

}
const scopedClass = scopedClassMaker('moui-input')
const sc = scopedClass

const Input:React.FunctionComponent<Props> = ({ className, ...rest}) => {
    return (
        <input  className={sc('', {extra: className})} {...rest}/>
    )
}

export default Input