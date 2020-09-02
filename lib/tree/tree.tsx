import React from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './tree.scss'
import RenderItem from './tree-item'

// interface SourceDataItem {
//     text: string;
//     value: string;
//     children?: SourceDataItem[]
// }

// //联合类型
// type A = { selected: string[], multiple: true, onChange: (newSelected: string[], multiple: boolean) => void }
// type B = { selected: string, multiple: false, onChange: (newSelected: string, multiple: boolean) => void }
// type Props = {
//     sourceData: SourceDataItem[];
// } & (A | B)

const scopedClass = scopedClassMaker('moui-tree')
const sc = scopedClass

const Tree: React.FunctionComponent<TreeProps> = (props) => {
    return (
        <div className={sc('wrap')}>
            {props.sourceData.map((item) => {
                return <RenderItem key={item.value} treeProps={props} item={item} level={1} />
            })}
        </div>
    )

}

export default Tree