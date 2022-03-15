import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';

const tmpfolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IStorageConfig {
  driver: 'disk' | 's3',
  tmpfolder: string,
  uploadsFolder: string,
  multer: {
    storage: StorageEngine;
  };

  config: {
    disk: {},
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: 'disk',

  tmpfolder,
  uploadsFolder: path.resolve(tmpfolder, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: tmpfolder,
      filename: (request, file, callback) => {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
  config: {
    disk: {},
    aws: {
      bucket: 'app-gobarber'
    }
  }

} as IStorageConfig;
