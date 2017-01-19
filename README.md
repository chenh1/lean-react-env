A relatively simple react js environment. You pick your state management tool or make one yourself. Comes with a some basic components already hooked up via react-router.

1. Run `npm install`.
2. Run `npm start` for dev mode:
  - Compiles sass and watches
  - Runs mocha and watches
  - Runs tools/srcServer.js with babel transpiler (starts up in browser)
  - Runs eslint and watches
3. Run `npm run build` to compile to production
  - Compiles sass
  - Removes dist directory (if it exists) and creates a new dist directory
  - Runs mocha and eslint
  - Runs tools/buildHtml.js with babel transpiler to generate an index.html in dist directory
  - Runs tools/distServer.js with babel transpiler (previews prod build in browser)