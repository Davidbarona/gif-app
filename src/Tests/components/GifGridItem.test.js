import React from 'react'
import {GifGridItem} from '../../components/GifGridItem'
import {shallow} from 'enzyme'


describe('test on GifGridItem component',()=>{
    
    const title = "test title"
    const url ="https://localhost/somenthing.jpg"
    let wrapper = shallow(<GifGridItem title={title} url={url} />)


    test('must show a render component', () => { 
        
        expect(wrapper).toMatchSnapshot()
     })

     test('should to have a paragraph with the title', () => {
        const p =  wrapper.find('p')
        expect(p.text().trim()).toBe(title)
     } )

     test('should have the image equal to url and alt of the props', () => { 
         const img = wrapper.find('img')
         //console.log(img.prop('src'))
         expect(img.prop('src')).toBe(url)
         expect(img.prop('alt')).toBe(title)
      })

    test('should have animate__rubberBand ', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        // expect(div.prop('className')).toBe('card animate__animated animate__rubberBand')
        expect(className.includes('animate__rubberBand')).toBe(true)

     })
    
    

})

