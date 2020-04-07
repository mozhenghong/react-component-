import React, { useState } from 'react'
import Dialog from './dialog'

export default function () {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={() => {setVisible(!visible)}}>click me!</button>
            <Dialog visible = {visible}>
                <div>
                    这是一个弹窗
                </div>
            </Dialog>
        </div>)
}
