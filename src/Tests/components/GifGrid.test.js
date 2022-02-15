import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../Hooks/useFetchGifs'

// realice a fake called into the useFetchgifs
jest.mock('../../Hooks/useFetchGifs')


describe("Test on GifGrid Component",()=>{
    
    const category = 'one punch'
    
    
    test('should render GifGrid Correctly', () => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true,
        })
        
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
     })

     test('should show itmes when it loading images useFetchGifs', () => { 
        
        const gifs = [{
            id:'ABC',
            url:'https://www.localhost.anything.jpg',
            title:'testing'
        },
        {
            id:'AB',
            url:'https://www.localhost.anything.jpg',
            title:'testing'
        }]
        
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false,
        })

        const wrapper = shallow(<GifGrid category={category} />)
        // create a snapshot about GifGrid 
        expect(wrapper).toMatchSnapshot()
        // if exists some one p tag mmust be false 
        expect(wrapper.find('p').exists()).toBe(false)
        // if there is 1 or more elements then compare with the lenght of the array 
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
       
     })
})