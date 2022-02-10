import { getGifs } from "../../../Helpers/GetGifs"

describe('test on getGifs component (fetch)',()=>{
    
    test('should  bring 10 elements ', async() => { 
        
        const gits = await getGifs('one Punch')
        expect(gits.length).toBe(10)
     })


     test('should  bring 10 elements ', async() => { 
        
        const gits = await getGifs('')
        expect(gits.length).toBe(0)
     })
})