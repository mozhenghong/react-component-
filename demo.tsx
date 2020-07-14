import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Button from './lib/button/button'

interface Props {
    code: string
}
const Demo: React.FunctionComponent<Props> = (props) => {
    const [codevisible, setCodevisible] = React.useState(false)
    return (
        <div>
            <div>
                {props.children}
            </div>
            <div>
                <Button onClick={() => { setCodevisible(!codevisible) }}>查看代码</Button>
            </div>
            {codevisible &&
                <Highlight {...defaultProps} code={props.code} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            }
        </div>
    )
}

export default Demo