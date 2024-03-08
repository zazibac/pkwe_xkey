const genId1 = require('6_xid');
const genId2 = require('9_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|Vy5qMefGB8|' + genId2()).digest('base64');
}


module.exports = generateKey;
