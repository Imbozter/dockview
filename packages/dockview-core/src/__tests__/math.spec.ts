import { clamp, range } from '../math';

describe('math', () => {
    describe('clamp', () => {
        it('should clamp between a minimum and maximum value', () => {
            expect(clamp(45, 40, 50)).toBe(45);
            expect(clamp(35, 40, 50)).toBe(40);
            expect(clamp(55, 40, 50)).toBe(50);
        });

        it('should throw an error if min > max', () => {
            expect(() => clamp(55, 50, 40)).toThrow(
                '50 > 40 is an invalid condition'
            );
        });
    });

    test('range', () => {
        expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
        expect(range(5, 0)).toEqual([5, 4, 3, 2, 1]);
        expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });
});
