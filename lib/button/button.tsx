//tsx文件必须引入React
import React, { ButtonHTMLAttributes } from 'react';
import {calsses} from '../helpers/classes'
import './button.scss'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  level?: 'normal' | 'important' | 'danger'
}
const Button: React.FunctionComponent<Props> = (props) => {
    const {className,children, level,...rest} = props
    return (
      //相当于React.createElement('button', null, 'lala')
    <button  className={calsses('moui-button', `moui-button-${level}`,className)} {...rest}>{children}</button>
    )
}

Button.defaultProps = {
  level: 'normal'
}
export default Button