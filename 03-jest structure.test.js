// This should be imported from another file
function sum(a,b) {
    if(a === undefined && b === undefined) return 0;
    return a + b;
}

describe('Function sum()', () => {

    describe('when correct parameters are provided', () => {
        test('adds the numbers', () => {
            expect(sum(2,2)).toBe(4);
        })

        test('adds when one of the numbers is zero' , () => {
            expect(sum(5,0)).toBe(5);
        })

        test('adds when one of the numbers is negative', () => {
            expect(sum(1, -3)).toBe(-2);
        })
    })

    describe('when no parameters are provided', () => {
        test('returns zero', () => {
            expect(sum()).toBe(0);
        })
    })
})