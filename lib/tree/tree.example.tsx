import React, { useState } from 'react'
import Tree from './tree'

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
    return (
        <div>
            <h3>展示数据</h3>
            <div style={{width: '200px'}}>
                <Tree sourceData={treeData} selectedValues={['1.1.1','2.2']}/>
            </div>
        </div>
    )
}

export default TreeExample