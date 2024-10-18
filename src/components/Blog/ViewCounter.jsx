"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react";
const supabase = createClientComponentClient();
const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
    const [views, setviews] = useState(0);
    useEffect(() => {
        const incrementview = async () => {
            try {

                let { error } = await supabase
                    .rpc('increment', {
                        slug_text: slug,
                    })
                if (error) { console.error(error) }

            } catch (err) {
                console.error("Error occured while incrementing the view count:", err);
            }
        };
        if (!noCount) {
            incrementview();
        }
    }, [slug, noCount]);
    useEffect(() => {
        const getViews = async () => {
            try {
                let { data, error } = await supabase
                    .from('views')
                    .select('count')
                    .match({ slug: slug })
                    .single()

                if (error) { console.error(error) }
                setviews(data ? data.count : 0);
            } catch (err) {
                console.error("Error occured while incrementing the view count:", err);
            }
        };
        getViews();

    }, [slug]);
    if (showCount) {
        return (
            <div>
                {views} views
            </div>
        )
    } else {
        return null;
    }
}

export default ViewCounter
