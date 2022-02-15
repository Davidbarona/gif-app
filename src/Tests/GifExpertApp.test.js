import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('test on GitExpertApp',()=>{
    
    test('should render GifExpertApp Correctly', () => { 
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show a list categories', () => {

        const categories =['one punch','dragon ball z']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
     })
     

    
})