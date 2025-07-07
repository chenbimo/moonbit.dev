import { readFile } from 'node:fs/promises';
import { run, bench } from 'mitata';

const modules = await WebAssembly.compile(await readFile('./fibonacci.wasm'));
const instance = await WebAssembly.instantiate(modules, {
    spectest: {
        print_char: (char) => {
            console.log(char);
        }
    }
});

bench('MoonBit(wasm)版本斐波那契性能测试 fibonacci(40)', () => instance.exports.fibonacci(40));

await run();
