import renderer from 'react-test-renderer'
import Button from '../button'
import React from 'react'
describe("button", () => {
    it('button是一个div', () => {
        const json = renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})
