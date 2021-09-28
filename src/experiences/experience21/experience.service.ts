import { Injectable } from '@nestjs/common';
import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';

const iv = randomBytes(16);
const password = 'Password used to generate key';

@Injectable()
export class ExperienceService {
  async encryptData(textToEncrypt): Promise<Buffer> {
    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    return Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);
  }

  async decryptData(textToDecrypt): Promise<Buffer> {
    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const decipher = createDecipheriv('aes-256-ctr', key, iv);

    return Buffer.concat([
      decipher.update(textToDecrypt),
      decipher.final(),
    ]);
  }
}
