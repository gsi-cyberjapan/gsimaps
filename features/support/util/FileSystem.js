const { promisify } = require('util');
const fs = require('fs');

// Create promise based versions of the callback functions
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);
const unlink = promisify(fs.unlink);

/**
 * Creates a folder if it doesn't exist.  Any missing intermediate directories in the 
 * folder path will be created as well.
 * @param {String} path Full path to the folder to create.
 */
async function createFolder(path){
    if(!await pathExists(path)){
        await mkdir(path, {recursive: true});
    }
}

/**
 * Deletes a file if it exists
 * @param {String} path Full path of file to delete.
 */
async function deleteFile(path){
    if(await pathExists(path)){
        await unlink(path);
    }
}

/**
 * Checks if a given path exists.
 * @param {String} path Full path to check for existence.
 */
async function pathExists(path){
    let exists;
    try {
        await access(path);
        exists = true;
    } catch(e){
        exists = false;
    }
    return exists;
}

module.exports = {
    createFolder,
    deleteFile,
    pathExists
}