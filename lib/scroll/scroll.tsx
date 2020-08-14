import React, { HTMLAttributes, UIEventHandler, MouseEventHandler,useState,useEffect,useRef,TouchEventHandler} from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbar-width'
import Icon from '../icon/icon'

interface Props extends HTMLAttributes<HTMLDivElement>{
    onPull?: () => void
}

const Scroll:React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props
    const [barHeight,setBarHeight]=useState(0)
    const [barTop, setBarTop] = useState(0)
    const [barVisible, setBarVisible] =  useState(false)
    const [translateY,_setTranslateY] = useState(0)

    const containerRef = useRef<HTMLDivElement>(null)
    const draggingRef = useRef(false)
    const firstYRef = useRef(0)
    const firstBarTopRef = useRef(0)
    const timeIdRef = useRef<number | null>(null)
    const lastYRef = useRef(0)
    const moveCount = useRef(0)
    const pulling = useRef(false)

    const _setBarTop = (number)=> {
        if(number<0){return}
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        const maxBarTop = (scrollHeight-viewHeight)*viewHeight/scrollHeight
        if(number>maxBarTop){return}
        setBarTop(number)
    }
    const setTranslateY = (y:number) => {
        if(y<0){
            return
        }else if(y>100){
            y=100
        }
        _setTranslateY(y)
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
    const onTouchStart:TouchEventHandler = (e) => {
        const scrollTop = containerRef.current!.scrollTop
        if(scrollTop!==0){return}
        pulling.current = true
        lastYRef.current = e.touches[0].clientY
        moveCount.current = 0
    }
    const onTouchMove:TouchEventHandler = (e) => {
        const deltaY = e.touches[0].clientY - lastYRef.current
        moveCount.current += 1
        if(moveCount.current===1&&deltaY<0){
            pulling.current = false
            return
        }
        if(pulling.current === false){return}
        if(deltaY>0){
            setTranslateY(translateY+deltaY)
        }else{
            setTranslateY(translateY+deltaY)
        }
        lastYRef.current = e.touches[0].clientY
    }
    const onTouchEnd:TouchEventHandler = (e) =>{
        if(pulling.current){
            setTranslateY(0)
            props.onPull&&props.onPull()
            pulling.current = false
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
            <div className="moui-scroll-inner" style={{right:-scrollbarWidth(), transform: `translateY(${translateY}px)`}}
                ref={containerRef}
                onScroll={onScroll}
                onTouchStart = {onTouchStart}
                onTouchMove = {onTouchMove}
                onTouchEnd = {onTouchEnd}
                >
                {children}
            </div>
            {barVisible&&
            <div className="moui-scroll-track">
                <div className="moui-scroll-bar" style={{height:barHeight, transform: `translateY(${barTop}px)`}}
                    onMouseDown = {onMouseDownBar}
                ></div>
            </div>}
            <div className="moui-scroll-pulling" style={{height: translateY}}>
                {translateY>0&&<Icon name="loading"/>}
            </div>
        </div>
    )
}

export default Scroll