import React, { ReactFragment } from "react";
import Input from '../input/input'
import {scopedClassMaker} from '../helpers/classes'
import './form.scss'

const scopedClass = scopedClassMaker('moui-form')
const sc = scopedClass
interface FormValue {
    [k: string]: any
}
interface Props {
    value: FormValue,
    filds: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value: FormValue) => void,
    errors: { [k: string]: string[] },
    errorsDisplayMode?: 'first'| 'all'
}

const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }
    const onInputChange = (name, value) => {
        const newFormValue = { ...formData, [name]: value }
        props.onChange(newFormValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <table>
                {props.filds.map((f) => {
                    return (
                        <tr key={f.name} className={sc('tr')}>
                            <td className={sc('td')}><span>{f.label}</span></td>
                            <td className={sc('td')}>
                                <Input
                                    type={f.input.type}
                                    value={formData[f.name]}
                                    onChange={(e) => { onInputChange(f.name, e.target.value) }}
                                />
                                <div className={sc('error')}>{
                                props.errors[f.name]?
                                (props.errorsDisplayMode === 'first'? props.errors[f.name][0]:
                                props.errors[f.name].join(' ')):<span>&nbsp;</span>
                                }</div>
                            </td>
                        </tr>
                    )
                })}
                <tr className={sc('tr')}>
                    <td className={sc('td')}></td>
                    <td className={sc('td')}>
                        <div>
                            {props.buttons}
                        </div>
                    </td>
                </tr>
            </table>
        </form>
    )
}

Form.defaultProps = {
    errorsDisplayMode: 'first'
}
export default Form