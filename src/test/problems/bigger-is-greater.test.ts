import { describe, expect, it } from '@jest/globals';
import { biggerIsGreater } from '@app/problems/bigger-is-greater'

describe('Bigger is Greater', () =>
{
    it('calculate correct', () =>
    {
        expect(biggerIsGreater("lmno")).toBe("lmon");
        expect(biggerIsGreater("abdc")).toBe("acbd");
        expect(biggerIsGreater("abcd")).toBe("abdc");
    });
    it('calculate correct', () =>
    {
        expect(biggerIsGreater("dcba")).toBe(null);
        expect(biggerIsGreater("dcbb")).toBe(null);
    })
    it('Performant', () =>
    {
        expect(biggerIsGreater("fedcbabcd")).toBe("fedcbabdc");
        expect(biggerIsGreater("abcdefghjijrtfgsdfgasd")).toBe("abcdefghjijrtfgsdfgdas");
    });
});