import React, { useState, Fragment } from "react";
import Form from './form'
import Validator from './validator'

const Formexample:React.FunctionComponent = () => {
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
        const rules = [
            {key: 'username', required:true}
        ]
        const errors = Validator(formData,rules)
        console.log('errors->', errors)
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