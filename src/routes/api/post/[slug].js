import fs from 'fs'
import util from 'util'

const readFileAsync = util.promisify(fs.readFile)
const existsAsync = util.promisify(fs.exists)

export async function get({ params }) {
    const { slug } = params
    console.log('read async ' + slug)
    const filename = `${process.cwd()}/src/posts/${slug}.md`

    const exits = await existsAsync(filename, 'utf-8')
    if (!exits) {
        return {
            body: {
                title: slug,
                content: "404 Not found"
            }
        }
    }

    const content = await readFileAsync(filename, 'utf-8')

    return {
        body: {
            title: slug,
            content
        }
    }
}