const { exec } = require('child_process')
const symbol = require('log-symbols')
const chalk = require('chalk')

console.log(symbol.success, chalk.green('yc-ui-react downloading... \n'))
exec(
	'rm -rf src/yc-ui-react && cd src && git clone ssh://git@stash.hn.com:7999/frontend/yc-ui-react.git',
	(error) => {
		if (error) {
			console.error(`下载yc-ui出错: ${error}`)
			return
		}
		console.log(symbol.success, chalk.green('yc-ui-react download successful !\n'))
	}
)
