import { run, bench } from 'mitata';

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

bench('JavaScript版本斐波那契性能测试 fibonacci(40)', () => fibonacci(40));

await run();
