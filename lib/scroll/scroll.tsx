import React, { HTMLAttributes, UIEventHandler, useState,useEffect,useRef} from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbar-width'

interface Props extends HTMLAttributes<HTMLDivElement>{

}

const Scroll:React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props
    const [barHeight,setBarHeight]=useState(0)
    const [barTop, setBarTop] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const onScroll: UIEventHandler = (e) =>{
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        const scrollTop = containerRef.current!.scrollTop
        setBarTop(scrollTop*viewHeight/scrollHeight)
    }
    useEffect(() => {
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        setBarHeight(viewHeight*viewHeight/scrollHeight)
    },[])
    return (
        <div className="moui-scroll" {...rest}>
            <div className="moui-scroll-inner" style={{right:-scrollbarWidth()}}
                ref={containerRef}
                onScroll={onScroll}>
                {children}
            </div>
            <div className="moui-scroll-track">
                <div className="moui-scroll-bar" style={{height:barHeight, transform: `translateY(${barTop}px)`}}></div>
            </div>
        </div>
    )
}

export default Scroll