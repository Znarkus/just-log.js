var Util = require('util'),
	strftime = require('strftime'),
	Dye = require('dye'),
	pad = require('pad'),
	colors = { info: null, verbose: 'magenta', error: 'red', info: 'green', debug: 'yellow' };

module.exports = {
	mode: { verbose: false, debug: false },
	info: function () {
		_log('info', 'out', arguments);
	},
	debug: function () {
		_log('debug', 'out', arguments);
	},
	verbose: function () {
		_log('verbose', 'out', arguments);
	},
	error: function () {
		_log('error', 'err', arguments);
	}
};


function _log(level, out, messageData) {
	if (module.exports.mode[level] === false) {
		return;
	}

	var color = colors[level],
		time = strftime('%e %b %H:%M:%S'),
		levelText = pad('  [' + level + ']', 15, ' '),
		messageFormatted = Util.format.apply(this, messageData);

	switch (out) {
		case 'out':
		case 'err':
			console[out == 'err' ? 'error' : 'log'](
				'  '
				+ Dye.grey(time)
				+ (color ? Dye[color](levelText) : time)
				+ messageFormatted
			);
			break;
	}
}