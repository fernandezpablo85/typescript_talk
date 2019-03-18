# typescript_talk
code for "Making Javascript Illegal States Unrepresentable" talk


## step zero: no restrictions

- all calls are valid
- there are a lot of valid calls
- no checks of any kind: `Math.Pi`, `Math.round` arguments, our own arguments
- ES5 transpiling (number notation)

## step one: `checkJs:true`

- some simple argument calls are no longer valid
- how does `arguments` use changes that?
- how does `...params` change that? (+ ES5 transpiling `for .. of`)
- no arguments calls are valid, all parameters are optional
- checks for `Math.Pi` and `Math.round` arguments
- additional checks like `noUnusedParameters`