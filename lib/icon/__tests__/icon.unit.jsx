import renderer from 'react-test-renderer' //测试UI
import {mount} from 'enzyme' //测试点击事件
import Icon from '../icon'
import React from 'react'
describe("icon", () => {
    it('render成功', () => {
        const json = renderer.create(<Icon name="wechat"/>).toJSON()
        //toMatchSnapshot()之后会生成__snapshots__，在里面的xxx.unit.jsx.snap文件中可以肉眼看到你的html是否正确，如果不正确继续改，然后运行yarn test -u 更新xxx.unit.jsx.snap文件
        expect(json).toMatchSnapshot()
    })
    it('测试onClick事件', () => {
        const fn = jest.fn()
        //mount()作用把<Icon>放进一个假想的页面
       const component = mount(<Icon name="wechat" onClick={fn}/>)
       //在component中找到svg模拟点击了svg
       component.find('svg').simulate('click')
       //期待fn被调用了
       expect(fn).toBeCalled()
    })
})
