
function bananize(arrayA, arrayB) {
  let result = []
  let combinedArrays = [...arrayA, ...(arrayB || [])]
  
  for(element of combinedArrays) {
    result = result.concat(['banana', element]);
  }

  return result
}

describe('Function bananize()', () => {

  test('bananizes one array', () => {
    const arrayA = [1,2];

    const result = bananize(arrayA)

    expect(result).toEqual([
        'banana', 1, 'banana', 2,
    ])
  })

  test('bananizes two arrays', () => {
      const arrayA = [1,2];
      const arrayB = [3,4,5];
  
      const result = bananize(arrayA, arrayB)
  
      expect(result).toEqual([
          'banana', 1, 'banana', 2,
          'banana', 3, 'banana', 4, 'banana', 5
      ])
  })

})

