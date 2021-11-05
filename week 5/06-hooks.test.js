let counter = [0,0]

function golDeLocal(){
  counter[0]++;
}

function golDeVisitante() {
  counter[1]++;
}

function iniciarPartido() {
  counter = [0,0];
}

function resultado() {
  return counter;
}

function quiniela() {
}

describe('Partido de furgol', () => {

  describe('golDeLocal', () => {

    beforeAll(() => {
      console.log('------------beforeAll-------------------')
    })

    afterAll(() => {
      console.log('++++++++++++afterAll++++++++++++++++++++')
    })

    beforeEach(() => {
      console.log('beforeEach-------------------')
      iniciarPartido();
    })

    afterEach(() => {
      console.log('afterEach+++++++++++++++++++++')
    })

    test('marca un gol', () => {
      golDeLocal();

      expect(resultado()).toEqual([1, 0])
    })

    test('marca dos goles', () => {
      golDeLocal();
      golDeLocal();

      expect(resultado()).toEqual([2, 0])
    })

  })
})

