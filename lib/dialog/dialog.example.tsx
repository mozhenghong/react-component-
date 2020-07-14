import React, { useState, Fragment } from 'react'
import Dialog, { alert, confirm, modal } from './dialog'
import Button from '../button/button'

export default function () {
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)

    const openModal = () => {
        const close = modal(<h1>
            这是一个弹窗
            <Button onClick={() => close()}>close</Button>
        </h1>)
    }
    return (
        <Fragment>
            <div style={{ marginBottom: '10px' }}>
                <h1>example</h1>
                <Button onClick={() => alert('1')}>alert</Button>
                <Button onClick={() => confirm('1', () => { console.log('yes') }, () => { console.log('no') })}>confirm</Button>
                <Button onClick={openModal}>modal</Button>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <Button onClick={() => { setVisible(!visible) }}>点浮层不可关闭</Button>
                <Dialog visible={visible} closeOnClickMask={false} onClose={() => {
                    setVisible(false)
                }}
                    buttons={
                        [<Button onClick={() => { setVisible(false) }}>确定</Button>,
                        <Button onClick={() => { setVisible(false) }}>取消</Button>]
                    }>
                    <div>
                        这是一个弹窗23
                </div>
                </Dialog>
            </div>
            <div>
                <Button onClick={() => { setVisible1(!visible1) }}>点浮层可以关闭</Button>
                <Dialog visible={visible1} closeOnClickMask={true} onClose={() => {
                    setVisible1(false)
                }}
                    buttons={
                        [<Button onClick={() => { setVisible1(false) }}>确定</Button>,
                        <Button onClick={() => { setVisible1(false) }}>取消</Button>]
                    }>
                    <div>
                        这是一个弹窗
             </div>
                </Dialog>
            </div>
        </Fragment>
    )
}
