import { describe, expect, it } from '@jest/globals';
import { FibSolution } from '@app/fib/fib'

describe('Fib Module', () =>
{
    it('fib 2', () =>
    {
        const fib = new FibSolution();
        expect(fib.fib(2)).toBe(1);
        expect(fib.fib(3)).toBe(2);
        expect(fib.fib(4)).toBe(3);
        expect(fib.fib(6)).toBe(8);
    });
});