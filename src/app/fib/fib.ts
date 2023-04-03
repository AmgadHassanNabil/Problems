import { add } from '@app/shared/add'

export class FibSolution
{
    fib(x: number): number
    {
        if (x <= 2) return 1;
        return add(this.fib(x - 1), this.fib(x - 2));
    }
}