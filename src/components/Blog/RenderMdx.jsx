"use client"
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from "next/image"
const mdxcomponent = {
    Image
}
const RenderMdx = ({ blog }) => {
    const MDXContent = useMDXComponent(blog.body.code)
    return (
        <div className='col-span-8 font-in prose prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-3 prose-blockquote:px-6 prose-blockquote:border-accent/70 prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent'>
            <MDXContent components={mdxcomponent} />
        </div>
    )
}

export default RenderMdx
