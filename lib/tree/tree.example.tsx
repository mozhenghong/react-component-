import React, { useState } from 'react'
import Tree, {SourceDataItem} from './tree'

const TreeExample:React.FunctionComponent = () => {
    const [treeData] = useState([{
        text: '1',
        value: '1',
        children: [{
            text: '1.1',
            value: '1.1',
            children: [{
                text: '1.1.1',
                value: '1.1.1'
            },{
                text: '1.2.1',
                value: '1.2.1'
            }]
        },{
            text: '1.2',
            value: '1.2'
        }]
    },{
        text: '2',
        value: '2',
        children: [{
            text: '2.1',
            value: '2.1'
        },{
            text: '2.2',
            value: '2.2'
        }]
    }])
    const [selectedValues,setSelectedValues] = useState(['1.1.1','2.2'])
    const onChange = (item:SourceDataItem, bool:boolean) => {
        if(!bool){
            setSelectedValues([...selectedValues,item.value])
        }else{
            setSelectedValues(selectedValues.filter(value => value!==item.value))
        }
    }
    return (
        <div>
            <h3>展示数据</h3>
            <div style={{width: '200px'}}>
                <Tree sourceData={treeData} selectedValues={selectedValues} onChange={onChange}/>
            </div>
        </div>
    )
}

export default TreeExample