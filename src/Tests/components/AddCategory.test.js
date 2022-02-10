import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory'


describe("Testo on AddCategory Component",()=>{
    const setCategories = () =>{}
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

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



})