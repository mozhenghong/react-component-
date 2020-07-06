import React, { useState, Fragment } from "react";
import Form from './form'
interface Props{

}

const Formexample:React.FunctionComponent<Props> = () => {
    const [formData,setFormData] = useState({
        username: '',
        password: ''
    })
    const [filds] = useState([{
        name: 'username',
        label: '用户名',
        input: {type: 'text'}},
        {
            name: 'password',
            label: '密码',
            input: {type: 'password'}
    }])
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(formData)
    }
    return(
        <Form 
            value={formData} 
            filds={filds}
            buttons={
                <Fragment>
                    <button type="submit">提交</button>
                    <button type="reset">取消</button>
                </Fragment>
            }
            onSubmit={onSubmit}
            onChange={(newValue)=>{setFormData(newValue)}}
        />
    )
}

export default Formexample