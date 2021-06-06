import fs from "fs";
import path from 'path'
import util from 'util'
const readdirAsync = util.promisify(fs.readdir)



export async function get() {
    const postpath = path.join(process.cwd(),'src/posts')
    const filenames =await readdirAsync(postpath)
    const md_files = filenames.filter(filename => path.extname(filename) === '.md')
    const slugs = md_files.map(filename => filename.slice(0, filename.lastIndexOf('.')))
    return {
        body: slugs
    }
}


