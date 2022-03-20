import crypto from 'crypto'

export const hashsalt = (password) => {
    const salt = crypto.randomBytes(128).toString('base64');
    const iterations = 10000;
    const keyLength = 64;
    const digest = 'sha1';
    const hashFormat = 'hex'

    try {
        const hash = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString(hashFormat);
        return {
            salt,
            hash,
            iterations,
            keyLength,
            digest,
            hashFormat,
        };
    } catch (e) {
        return null;
    }
}

export const verify = (password, { hash, salt, iterations, keyLength, digest, hashFormat }) => {
    return hash === crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString(hashFormat);
}