import React from 'react';
import './importAllIcons';
import './icon.scss';
import calsses from './helpers/classes'
interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, ...restProps} = props
    return (
        <svg className={calsses('reactComponent-icon', className)} {...restProps}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
}

export default Icon