import  { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'


/** @type {import('contentlayer/source-files').ComputedFields} */
const ComputedFields = {
    slug:{
        type:'string',
        resolve: (doc) => '/${doc._raw.flattenedPath}',
    },
    slugAsParams:{
        type:'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    }
}

export const Doc = defineDocumentType(() => ({
    name : 'Doc',
    filePathPattern: 'content/**/*.mdx',
    contentType: 'mdx',
    fields:{
        title:{
            type: 'string',
            required:true,
        },
        description:{
            type:'string',
        },
        published:{
            type:'boolean',
            default: true,
        },
    },
    computedFields,
}))

export default makeSource({
    contentDirPath:'pages',
    documentTypes:[Doc],
})