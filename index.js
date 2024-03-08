const genId1 = require('mwrd_xid');
const genId2 = require('pcbc_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|92F7Jxd6oe|' + genId2()).digest('base64');
}


module.exports = generateKey;
