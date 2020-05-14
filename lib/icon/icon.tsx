import React from 'react';
import './importAllIcons';
import './icon.scss';
import scopedClassMaker from '../helpers/classes'
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
const scopedClass = scopedClassMaker('moui-icon')
const sc = scopedClass
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...rest}) => {
    return (
        <svg className={sc('', {extra: className})} {...rest}>
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}

export default Icon