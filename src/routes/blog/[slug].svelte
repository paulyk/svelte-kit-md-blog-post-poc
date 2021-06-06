<script context="module">
    export async function load({ page, fetch }) {
        const { slug } = page.params
        const url = `/api/post/${slug}`
        console.log(url)
        const post = await fetch(url).then((resp) => resp.json());
        console.log(post)

        return {
            props: {
                post
            },
        };
    }
</script>

<script>
    export let post = {}
</script>

<h1>{post.title}</h1>
<div>
    {post.content}
</div>