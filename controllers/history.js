/**
 * @file Create folders for save the export.
 * @author Guillaume Brioudes
 * @copyright GNU GPL 3.0 Cosma's authors
 */

import fs from 'node:fs';
import path from 'node:path';
import envPaths from 'env-paths';
import { getTimestampTuple } from '../core/utils/misc.js';

const { data } = envPaths('cosma-cli', { suffix: '' });

/**
 * Get path to store cosmscope file in history
 * @param {string} projectName
 * @param {'global'|'local'} projectScope
 * @returns {Promise<string>}
 */

async function getHistorySavePath(projectName, projectScope) {
  let pathDir;
  switch (projectScope) {
    case 'global':
      pathDir = path.join(data, projectName);
      break;
    case 'local':
      pathDir = path.join(process.cwd(), 'history');
      break;
    default:
      throw new Error('Unknown project scope');
  }
  const pathFile = path.join(pathDir, `${getTimestampTuple().join('')}.html`);

  return new Promise(async (resolve, reject) => {
    if (fs.existsSync(pathDir) === false) {
      fs.mkdir(pathDir, { recursive: true }, (err) => {
        if (err) {
          reject(err.message);
        }
        resolve(pathFile);
      });
    }
    resolve(pathFile);
  });
}

export default getHistorySavePath;
