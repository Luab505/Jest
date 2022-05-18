const sum = require('./sum');

it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adicionando números positivos não é zero', () => {
    for (let c = 1; c < 10; c++) {
        for (let d = 1; d < 10; d++) {
            expect(c + d).not.toBe(0);
        }
    }
});