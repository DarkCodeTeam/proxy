const crypto = require('crypto');

const ALGORITHM = 'aes-256-cbc';
const KEY = Buffer.from(process.env.ENCRYPTION_KEY || '01234567890123456789012345678901', 'utf-8');
const IV = crypto.randomBytes(16);

function encrypt(data) {
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return IV.toString('hex') + encrypted;
}

function decrypt(data) {
    const iv = Buffer.from(data.slice(0, 32), 'hex');
    const encryptedText = data.slice(32);
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = { encrypt, decrypt };
