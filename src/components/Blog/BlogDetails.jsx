import { format, parseISO } from "date-fns"
import Link from "next/link"
import { slug } from "github-slugger"
import ViewCounter from "./ViewCounter"
const BlogDetails = ({ blog, slug: blogslug }) => {
    //console.log(blog);
    return (
        <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
            <time className="m-3">
                {format(parseISO(blog.publishedAt), "LLLL d,yyyy")}
            </time>
            <span className="m-3">
                <ViewCounter slug={blogslug} />
            </span>
            <div className="m-3">
                {blog.readingtime.text}
            </div>
            <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
                #{blog.tags[0]}
            </Link>
        </div>
    )
}

export default BlogDetails
