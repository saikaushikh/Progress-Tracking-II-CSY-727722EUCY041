import {add,subtract,multi} from './Calculator'
test("Addition of two numbers",()=>{
    expect(add(3,4)).toBe(7);
    expect(add(-3,4)).toBe(1);
    expect(add(4,-4)).toBe(0);
})
test("Subtraction of two numbers",()=>{
    expect(subtract(3,4)).toBe(-1);
    expect(subtract(-3,4)).toBe(-7);
    expect(subtract(4,-4)).toBe(8);
})
test("Addition of two numbers",()=>{
    expect(multi(5,0)).toBe(0);
    expect(multi(1,1)).toBe(1);
    expect(multi(0,0)).toBe(0);
})