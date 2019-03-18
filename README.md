# typescript_talk
code for "Making Javascript Illegal States Unrepresentable" talk


## step zero: no restrictions

- all calls are valid
- there are a lot of valid calls
- no checks of any kind: `Math.Pi`, `Math.round` arguments, our own arguments
- ES5 transpiling (number notation, backtick strings)

## step one: `checkJs:true`

- some simple argument calls are no longer valid
- no longer 65535 parameter calls.
- how does `arguments` use changes that? (taste of "control flow analysis")
- how does `...params` change that? (+ ES5 transpiling `for .. of`)
- no arguments calls are valid, all parameters are optional
- checks for `Math.Pi` and `Math.round` arguments
- additional checks like `noUnusedParameters`

## step two: Typescript as a superset

- just a single character change on the file name `main.js` => `main.ts`
- all previous invalid states are invalid here too (`Math.Pi`)
- extra parameters break single param invocations (no more optionals)
- extra checks like `noUnusedParameters` are still valid