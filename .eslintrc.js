// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: 'vue',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// disallow the use of console (no-console)
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// enforce consistent indentation
		"indent": ["error", "tab"],
		// 函数定义时括号前不要有空格
		'space-before-function-paren': ['error', 'never'],
		// 当存在更简单的替代方案时，不允许三元运算符（此项默认开启，为0关闭）。
		'no-unneeded-ternary': 0
	}
}
