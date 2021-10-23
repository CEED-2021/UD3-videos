


function breakProgram(description) {
  throw 'Terrible error: ' + description;
}

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

  test('toBeTruthy / toBeFalsy', () => {
    expect('banana').toBeTruthy();
    expect({}).toBeTruthy();

    expect('').toBeFalsy();
    expect(NaN).toBeFalsy();
  })

  test('toMatch', () => {
    expect('555.121.212').toMatch(/[0-9.]+/);
    expect('The banana was from La Palma').toMatch('banana');
  })

  test('toMatchObject', () => {
    const studentData = {
      name: 'James Bond',
      birthDate: '11 November 1920',
      preferences: 'Shaken, not stirred'
    }
    const obtainedData = {
      name: 'James Bond',
      birthDate: '11 November 1920',
    }

    expect(studentData).not.toBe(obtainedData);
    expect(studentData).not.toEqual(obtainedData);

    expect(studentData).toMatchObject(obtainedData);
    expect(obtainedData).not.toMatchObject(studentData);
  })

  test.only('toContain / toContainEqual', () => {

    const array = ['a','b',[2,3],'c']

    expect(array).toContain('a')
    expect(array).not.toContain([2,3])

    expect(array).toContainEqual([2,3])
  })

  test.only('arrayContaining', () => {

  })

  test('toThrow', () => {
    // This won't work:
    // expect(breakProgram('banana')).toThrow('papaya')

    expect(() => breakProgram('banana')).toThrow(/banana/)
    expect(() => breakProgram('banana')).not.toThrow(/papaya/)
  })
})
