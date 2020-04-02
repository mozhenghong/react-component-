import React from 'react';
import './importAllIcons';
import './icon.scss';
import calsses from '../helpers/classes'
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
    return (
        <svg className={calsses('reactComponent-icon', className)} {...restProps}>
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}

export default Icon