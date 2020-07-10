import {scopedClassMaker} from '../classes'

// describe("", () => {
//     it('接受一个className', () => {
//       const result = classes('a')
//       expect(result).toEqual('a')
//     })
//     it('接受两个className', () => {
//         const result = classes('a', 'b')
//         expect(result).toEqual('a b')
//     })
//     it('接受undefined不会出现undefined', () => {
//         const result = classes('a', undefined)
//         expect(result).toEqual('a')
//     })
//     it('接受各种奇怪值不会返回', () => {
//         const result = classes('a', '啦', null, false)
//         expect(result).toEqual('a 啦')
//     })
//     it('接受0个参数', () => {
//         const result = classes()
//         expect(result).toEqual("")
//     })
// })
describe('scopedClassMaker', () => {
    it('接收字符串或对象', () =>{
       const sc =  scopedClassMaker('moui-layout')
       expect(sc('')).toEqual('moui-layout')
       expect(sc('x')).toEqual('moui-layout-x')
       expect(sc({y: true, z: false})).toEqual('moui-layout-y')
       expect(sc({y: true, z: true})).toEqual('moui-layout-y moui-layout-z')
       expect(sc({y: true, z: true},{extra: 'red'})).toEqual('moui-layout-y moui-layout-z red')
    })
})
