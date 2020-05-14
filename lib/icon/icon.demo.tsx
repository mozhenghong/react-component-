import React from 'react'
import IconExample from './icon.example'
import Demo from '../../demo'

//raw-loader可以拿到某刻文件下的所有代码
const x = require('!!raw-loader!./icon.example')

const IconDemo= () => {
    return (
       <Demo code={x.default}>
           <IconExample/>
       </Demo>
    )
}

export default IconDemo