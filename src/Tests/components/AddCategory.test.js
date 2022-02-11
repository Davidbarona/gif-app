
import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory'


describe("Testo on AddCategory Component",()=>{
    const setCategories = jest.fn()
    let wrapper

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('should render AddCategory Correctly', () => {
        expect(wrapper).toMatchSnapshot()
     })

     test('must to change the text box', () => {
        const input =  wrapper.find('input') 

        const value = 'hello world'
        input.simulate('change',{target:{
            value
        }})

        expect(wrapper.find('p').text().trim()).toBe(value)
       
    })

    test('no must of public the information with subtmit ', () => {

        wrapper.find('form').simulate('submit',{preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled()

    })



})