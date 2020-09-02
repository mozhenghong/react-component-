import React, { useState, useRef } from 'react'
import Icon from '../icon/icon'
import { scopedClassMaker } from '../helpers/classes'
import './tree.scss'
import useUpdate from '../hooks/useUpdate'
    
interface Props {
    item: SourceDataItem;
    level:number;
    treeProps:TreeProps
}

const scopedClass = scopedClassMaker('moui-tree')
const sc = scopedClass
    
//递归渲染数据
const RenderItem:React.FunctionComponent<Props>= (props) => {
    const {item, level, treeProps} = props
    const classes = {
        ['level-' + level]: true,
        'item': true
    }
    const onChange = (item: SourceDataItem, bool: boolean) => {
        if (treeProps.multiple) {
            if (bool) {
                treeProps.onChange([...treeProps.selected, item.value], treeProps.multiple)
            } else {
                treeProps.onChange(treeProps.selected.filter(value => value !== item.value), treeProps.multiple)
            }
        } else {
            if(bool){
                treeProps.onChange(item.value, treeProps.multiple)
            }else{
                treeProps.onChange('', treeProps.multiple)
            }
        }
    }
    const [expended, setExpened] = useState(true)
    const divref = useRef<HTMLDivElement>(null)
    //使用自定义hooksuseUpdate
    useUpdate(expended, () => {
        if(expended){
            if(!divref.current){return}
            divref.current.style.height = 'auto'
            const {height} = divref.current.getBoundingClientRect()
            divref.current.style.height = '0px'
            divref.current.getBoundingClientRect()
            divref.current.style.height = height + 'px'
        }else{
            if(!divref.current){return}
            const {height} = divref.current.getBoundingClientRect()
            divref.current.style.height = height + 'px'
            divref.current.getBoundingClientRect()
            divref.current.style.height = '0px'
        }
    })
    const expend = () => {
        setExpened(!expended)
    }
    const collapse = () => {
        setExpened(!expended)
    }
    const checked = treeProps.multiple ? treeProps.selected.indexOf(item.value) >= 0 : treeProps.selected === item.value
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
        <div ref={divref} className={sc({'children': true,'collapse':!expended})}>
            {item.children?.map((inneritem) => {
                // return renderItem(inneritem, level + 1)
                return <RenderItem key={inneritem.value} treeProps={treeProps} item={inneritem} level={level + 1} />
            })}
        </div>
    </div>
}

export default RenderItem