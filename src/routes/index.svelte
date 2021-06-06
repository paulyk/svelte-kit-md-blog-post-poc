<script context="module">
    export async function load({ fetch }) {
        const posts = await fetch("/api/posts").then((resp) => resp.json());
        const post = await fetch("/api/post/bald-people").then((resp) => resp.json());
        
        return {
            props: {
                title: "result.slug",
                posts,
                post,
            },
        };
    }
</script>

<script>
    import PostList from "$lib/components/PostList.svelte";

    export let posts = [];
    export let post = {};
</script>

<h1>Blog</h1>
<pre>
{JSON.stringify(post, null, 2)}
</pre>

<PostList {posts} />
