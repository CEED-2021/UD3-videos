describe('Testing assertions', function(){

  test('toBe', () => {
    let n1 = 1;
    let n2 = 1;

    expect(n1).toBe(n2);



    let a1 = [1,2,3];
    let a2 = [1,2,3];

    expect(a1).not.toBe(a2);



    let s1 = 'banana';
    let s2 = 'banana';

    expect(s1).toBe(s2);



    let o1 = { p1: 'a', p2: 'b'};
    let o2 = { p1: 'a', p2: 'b'};

    expect(o1).not.toBe(o2);
  })

  test('toEqual', () => {
    let n1 = 1;
    let n2 = 1;

    expect(n1).toEqual(n2);

    let o1 = { p1: 'a', p2: 'b'};
    let o2 = { p1: 'a', p2: 'b'};

    expect(o1).toEqual(o2);
  })

  test.only('toBeTruthy / toBeFalsy', () => {
    expect('banana').toBeTruthy();
    expect({}).toBeTruthy();

    expect('').toBeFalsy();
    expect(NaN).toBeFalsy();
  })

  test.skip('toMatch - regexp y string', () => {

  })

  test.skip('toMatchObject', () => {

  })

  test.skip('toContain', () => {

  })

  test.skip('toContainEqual', () => {

  })

  test.skip('arrayContainig', () => {

  })

  test.skip('toThrow', () => {

  })
})
