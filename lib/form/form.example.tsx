import React, { useState, Fragment } from "react";
import Form from './form'
import Button from '../button/button'
import Validator from './validator'

const Formexample:React.FunctionComponent = () => {
    const [formData,setFormData] = useState({
        // username: '',
        // password: ''
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
    const [errors, setErrors] = useState({})
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required:true},
            {key: 'password', minLength:3,maxLength: 8}
        ]
        const errors = Validator(formData,rules)
        console.log(errors,'errors')
        setErrors(errors)
    } 
    return(
        <Form 
            value={formData} 
            filds={filds}
            buttons={
                <Fragment>
                    <Button type="submit" level="important">提交</Button>
                    <Button type="reset" level="danger">取消</Button>
                </Fragment>
            }
            onSubmit={onSubmit}
            onChange={(newValue)=>{setFormData(newValue)}}
            errors = {errors}
        />
    )
}

export default Formexample 