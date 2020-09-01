import React, { useState } from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './tree.scss'
import Icon from '../icon/icon'

export interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[]
}

//联合类型
type A = { selected: string[], multiple: true, onChange: (newSelected: string[], multiple: boolean) => void }
type B = { selected: string, multiple: false, onChange: (newSelected: string, multiple: boolean) => void }
type Props = {
    sourceData: SourceDataItem[];
} & (A | B)

const scopedClass = scopedClassMaker('moui-tree')
const sc = scopedClass

const Tree: React.FunctionComponent<Props> = (props) => {
    //递归渲染数据
    const renderItem = (item: SourceDataItem, level = 1) => {
        const classes = {
            ['level-' + level]: true,
            'item': true
        }
        const onChange = (item: SourceDataItem, bool: boolean) => {
            if (props.multiple) {
                if (bool) {
                    props.onChange([...props.selected, item.value], props.multiple)
                } else {
                    props.onChange(props.selected.filter(value => value !== item.value), props.multiple)
                }
            } else {
                props.onChange(item.value, props.multiple)
            }
        }
        const [expended, setExpened] = useState(true)
        const expend = () => {
            setExpened(!expended)
        }
        const collapse = () => {
            setExpened(!expended)
        }
        const checked = props.multiple ? props.selected.indexOf(item.value) >= 0 : props.selected === item.value
        return <div key={item.value} className={sc(classes)}>
            <div className={sc('text')}>
                <input type="checkbox"
                    checked={checked}
                    onChange={(e) => { onChange(item, e.target.checked) }}
                />
                {item.text}
                {
                    !!item.children &&
                    <span onSelect={(e) => {e.preventDefault()}}>
                        {expended ?
                            <span onClick={expend}>
                                <Icon name="expend" />
                            </span> :
                            <span onClick={collapse}>
                                <Icon name="collapse" />
                            </span>
                        }
                    </span>
                }
            </div>
            <div className={sc({'children': true,'collapse':!expended})}>
                {item.children?.map((inneritem) => {
                    return renderItem(inneritem, level + 1)
                })}
            </div>
        </div>
    }
    return (
        <div className={sc('wrap')}>
            {props.sourceData.map((item) => {
                return renderItem(item)
            })}
        </div>
    )

}

export default Tree