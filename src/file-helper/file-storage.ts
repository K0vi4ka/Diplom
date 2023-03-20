// This file should exist in `src/common/helpers`
import fs from 'node:fs';
import { promisify } from 'util';
import { existsSync, mkdirSync } from 'node:fs';
import { writeFile,readFile } from 'node:fs/promises';
import { ApiError } from 'src/exceptions/api-error';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';

/**
 * Check if a file exists at a given path.
 *
 * @param {string} path
 *
 * @returns {boolean}
 */
export const checkIfFileExists = (path: string): boolean => {
  return existsSync(path);
};

/**
 * Gets file data from a given path via a promise interface.
 *
 * @param {string} path
 * @param {string} encoding
 *
 * @returns {Promise<Buffer>}
 */
export const getFile = async (
  path: string,
  encoding: string,
): Promise<string | Buffer> => {
  if(checkIfFileExists(path)){
    return encoding ? readFile(path , 'utf-8' ) : readFile(path, {});
  }
  else {
    throw new HttpException('File not exit', HttpStatus.BAD_REQUEST)
  }
};

/**
 * Writes a file at a given path via a promise interface.
 *
 * @param {string} path
 * @param {string} fileName
 * @param {string} data
 *
 * @return {Promise<void>}
 */
export const createFile = async (
  path: string,
  data: string,
): Promise<boolean> => {
  try{
    console.log(path)
    if (checkIfFileExists(path+'.html')) {
      throw new HttpException('FA',HttpStatus.BAD_REQUEST)
    }
     await writeFile(`${path}.html`, data, 'utf8');
     return true
  }
  catch(e){
    console.log(e)
    return false;
  }
 
};

/**
 * Delete file at the given path via a promise interface
 *
 * @param {string} path
 *
 * @returns {Promise<void>}
 */
export const deleteFile = async (path: string): Promise<void> => {
  const unlink = promisify(fs.unlink);

  return await unlink(path);
};
