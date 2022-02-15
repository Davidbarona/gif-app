
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

    test('should call the setCategories component and must clena the text box ', () => { 
       const value = 'hello world'
       
       // simulate the inputchange
        wrapper.find('input').simulate('change',{ target:{value}})

       // simulate te submit
        wrapper.find('form').simulate('submit',{ preventDefault(){}})
    
      // setCategories must be called 
    
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
     // the input value must be empty 
        expect(wrapper.find('input').prop('value')).toBe('')
    
     })


})