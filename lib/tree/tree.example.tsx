import React, { useState, useEffect } from 'react'
import Tree from './tree'

const TreeExample:React.FunctionComponent = () => {
    const [treeData, setTreeData] = useState([{
        text: '一',
        value: '1',
        children: [{
            text: '一一',
            value: '1.1'
        },{
            text: '一二',
            value: '1.2'
        }]
    },{
        text: '二',
        value: '2',
        children: [{
            text: '二一',
            value: '2.1'
        },{
            text: '二二',
            value: '2.2'
        }]
    }])
    useEffect(() => {
        setTreeData([{
            text: '一',
            value: '1',
            children: [{
                text: '一一',
                value: '1.1'
            },{
                text: '一二',
                value: '1.2'
            }]
        },{
            text: '二',
            value: '2',
            children: [{
                text: '二一',
                value: '2.1'
            },{
                text: '二二',
                value: '2.2'
            }]
        }])
    },[])
    return (
        <div>
            <h3>展示数据</h3>
            <Tree sourceData={treeData}/>
        </div>
    )
}

export default TreeExample