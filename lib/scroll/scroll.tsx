import React, { HTMLAttributes, UIEventHandler, MouseEventHandler,useState,useEffect,useRef} from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbar-width'

interface Props extends HTMLAttributes<HTMLDivElement>{

}

const Scroll:React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props
    const [barHeight,setBarHeight]=useState(0)
    const [barTop, setBarTop] = useState(0)
    const [barVisible, setBarVisible] =  useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const draggingRef = useRef(false)
    const firstYRef = useRef(0)
    const firstBarTopRef = useRef(0)
    const timeIdRef = useRef<number | null>(null)
    const _setBarTop = (number)=> {
        if(number<0){return}
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        const maxBarTop = (scrollHeight-viewHeight)*viewHeight/scrollHeight
        if(number>maxBarTop){return}
        setBarTop(number)
    }

    const onScroll: UIEventHandler = (e) =>{
        setBarVisible(true)
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        const scrollTop = containerRef.current!.scrollTop
        _setBarTop(scrollTop*viewHeight/scrollHeight)
        if(timeIdRef.current!==null){
            window.clearTimeout(timeIdRef.current)
        }
        timeIdRef.current = window.setTimeout(() => {
            setBarVisible(false)
        }, 300)
    }
    const onMouseDownBar:MouseEventHandler = (e) => {
        draggingRef.current = true
        firstYRef.current = e.clientY
        firstBarTopRef.current = barTop
    }
    const onMouseMoveBar = (e:MouseEvent) => {
        if(draggingRef.current){
            const delta = e.clientY - firstYRef.current
            const newBarTop = firstBarTopRef.current + delta
            _setBarTop(newBarTop)
            const scrollHeight = containerRef.current!.scrollHeight
            const viewHeight = containerRef.current!.getBoundingClientRect().height
            containerRef.current!.scrollTop = newBarTop*scrollHeight/viewHeight
        }
    }
    const onMouseUpBar = (e:MouseEvent) => {
        draggingRef.current = false
    }
    const onSelect = (e:Event) => {
        if(draggingRef.current){
            e.preventDefault()
        }
    }
    useEffect(() => {
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        setBarHeight(viewHeight*viewHeight/scrollHeight)
    },[])
    useEffect(() => {
        document.addEventListener('mouseup', onMouseUpBar)
        document.addEventListener('mousemove', onMouseMoveBar) 
        document.addEventListener('selectstart', onSelect)
        return () =>{
            document.removeEventListener('mouseup', onMouseUpBar)
            document.removeEventListener('mousemove', onMouseMoveBar)
            document.removeEventListener('selectstart', onSelect)
        }
    },[])
    return (
        <div className="moui-scroll" {...rest}>
            <div className="moui-scroll-inner" style={{right:-scrollbarWidth()}}
                ref={containerRef}
                onScroll={onScroll}>
                {children}
            </div>
            {barVisible&&
            <div className="moui-scroll-track">
                <div className="moui-scroll-bar" style={{height:barHeight, transform: `translateY(${barTop}px)`}}
                    onMouseDown = {onMouseDownBar}
                ></div>
            </div>}
        </div>
    )
}

export default Scroll