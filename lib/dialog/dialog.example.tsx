import React, { useState, Fragment} from 'react'
import Dialog from './dialog'

export default function () {
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    return (
        <Fragment>
        <div style={{marginBottom: '10px'}}>
            <button onClick={() => { setVisible(!visible) }}>点浮层不可关闭</button>
            <Dialog visible={visible}  closeOnClickMask = {false} onClose={() => {
                setVisible(false)
            }}
                buttons={
                    [<button onClick={() => { setVisible(false) }}>确定</button>, 
                    <button onClick={() => { setVisible(false) }}>取消</button>]
                }>
                <div>
                    这是一个弹窗
                </div>
            </Dialog>
        </div>
         <div>
         <button onClick={() => { setVisible1(!visible1) }}>点浮层可以关闭</button>
         <Dialog visible={visible1}  closeOnClickMask = {true} onClose={() => {
             setVisible1(false)
         }}
             buttons={
                 [<button onClick={() => { setVisible1(false) }}>确定</button>, 
                 <button onClick={() => { setVisible1(false) }}>取消</button>]
             }>
             <div>
                 这是一个弹窗
             </div>
         </Dialog>
     </div>
     </Fragment>
        )
}
