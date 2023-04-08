import { describe, expect, it } from '@jest/globals';
import { gridSearch } from '@app/problems/grid-search'

describe('Grid Search', () =>
{
    it('Can Find - right top', () =>
    {
        expect(gridSearch(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [
                [2, 3],
                [5, 6]
            ]
        )).toBe(true);
    });
    it('Can Find - right bottom', () =>
    {
        expect(gridSearch(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [
                [5, 6],
                [8, 9]
            ]
        )).toBe(true);
    });
    it('Can Find - left top', () =>
    {
        expect(gridSearch(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [
                [1, 2],
                [4, 5]
            ]
        )).toBe(true);
    });
    it('Can Find - left bottom', () =>
    {
        expect(gridSearch(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [
                [4, 5],
                [7, 8]
            ]
        )).toBe(true);
    });
    it('Can Find - middle', () =>
    {
        expect(gridSearch(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [
                [5]
            ]
        )).toBe(true);
    });
    it('Can Find - middle 2r', () =>
    {
        expect(gridSearch(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [
                [2],
                [5]
            ]
        )).toBe(true);
    });
    it('Can Find Performant', () =>
    {
        expect(gridSearch(
            [
                [7, 2, 8, 3, 4, 5, 5, 8, 6, 4],
                [6, 7, 3, 1, 1, 5, 8, 6, 1, 9],
                [8, 9, 8, 8, 2, 4, 2, 6, 4, 3],
                [3, 8, 3, 0, 5, 8, 9, 3, 2, 4],
                [2, 2, 2, 9, 5, 0, 5, 8, 1, 3],
                [5, 6, 3, 3, 8, 4, 5, 3, 7, 4],
                [6, 4, 7, 3, 5, 3, 0, 2, 9, 3],
                [7, 0, 5, 3, 1, 0, 6, 6, 0, 1],
                [0, 8, 3, 4, 2, 8, 2, 9, 5, 6],
                [4, 6, 0, 7, 9, 2, 4, 1, 3, 7]
            ],
            [
                [9, 5, 0, 5],
                [3, 8, 4, 5],
                [3, 5, 3, 0]
            ]
        )).toBe(true);
    });

    it('Can not Find', () =>
    {
        expect(gridSearch(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [
                [2, 7],
                [5, 6]
            ]
        )).toBe(false);
    });
});