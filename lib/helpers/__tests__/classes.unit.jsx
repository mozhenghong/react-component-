import classes from '../classes'

describe("classes", () => {
    it('接受一个className', () => {
      const result = classes('a')
      expect(result).toEqual('a')
    })
    it('接受两个className', () => {
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })
    it('接受undefined不会出现undefined', () => {
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('接受各种奇怪值不会返回', () => {
        const result = classes('a', '啦', null, false)
        expect(result).toEqual('a 啦')
    })
    it('接受0个参数', () => {
        const result = classes()
        expect(result).toEqual("")
    })
})