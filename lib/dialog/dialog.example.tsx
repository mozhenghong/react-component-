import React, { useState } from 'react'
import Dialog from './dialog'

export default function () {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={() => { setVisible(!visible) }}>click me!</button>
            <Dialog visible={visible}  closeOnClickMask = {false} onClose={() => {
                setVisible(false)
            }}
                buttons={
                    [<button>确定</button>, <button>取消</button>]
                }>
                <div>
                    这是一个弹窗
                </div>
            </Dialog>
        </div>)
}
