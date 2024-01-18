# About

These are components I reuse in my projects frequently. You are welcome to use them, but there is no gaurantee that I will maintain them or not push breaking changes.

# Installation

First, install the package.

`npm i licks`

Next, add `'./node_modules/licks/**/*.{html,js,svelte,ts}'` to the `contents` field in your `tailwind.config.js`, so tailwind knows to compile the styles in the library.

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/licks/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
```
