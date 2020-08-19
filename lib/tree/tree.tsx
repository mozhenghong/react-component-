import React from 'react'
import {scopedClassMaker} from '../helpers/classes'
import './tree.scss'

interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[]
}
interface Props {
    sourceData: SourceDataItem[]
}

const scopedClass = scopedClassMaker('moui-tree')
const sc = scopedClass

//递归渲染数据
const renderItem = (item: SourceDataItem, level=1) => {
    const classes = {
        ['level-' + level]: true,
        'item':true
    }
    return <div key={item.value} className={sc(classes)}>
        <div className={sc('text')}>{item.text}</div>
        {item.children?.map((inneritem) => {
            return renderItem(inneritem, level+1)
        })}
    </div>
}

const Tree: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.sourceData.map((item) => {
                return renderItem(item)
            })}
        </div>
    )
}

export default Tree