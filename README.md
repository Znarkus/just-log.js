
just-log.js
===========

Another logging lib for node.js. Features:

* 4 log levels: `debug`, `verbose`, `info` and `error`
* `error` writes to stderr
* Log level output can be toggled
* Timestamped
* Colored output
* `util.format` style text formatting


## Usage

Modes `debug` and `verbose` are by default turned off.

	var logger = require('just-log');

	logger.mode.debug = true;
	logger.mode.verbose = true;

	logger.debug('Data read: %j', someData);
	logger.verbose('Connection received');
	logger.info('Server started on %s:%d', ip, port);
	logger.error('Failed to start server');


## License

Copyright 2012, [Markus Hedlund](http://markushedlund.com), [Snowfire](http://snowfire.net).  
Licensed under the MIT License.  
Redistributions of files must retain the above copyright notice.