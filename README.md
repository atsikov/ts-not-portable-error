# ts-not-portable-error
https://github.com/microsoft/TypeScript/issues/42873

```
npm i -g @microsoft/rush
rush update
rush build:dts
```

`rush build:dts` executes `tsc` to build type declarations for both pacakges, and fails with
```
src/index.ts(3,14): error TS2742: The inferred type of 'useRunMutation' cannot be named without a reference to '../../common/node_modules/react-query/types'. This is likely not portable. A type annotation is necessary.
```
