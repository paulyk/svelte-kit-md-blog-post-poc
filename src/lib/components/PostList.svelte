<script>
    import BlogLink from "./BlogLink.svelte";

    export let posts = [];
</script>

<div class="posts">
    {#each posts as post}
        <BlogLink slug={post} />
    {/each}
</div>

<style>
    .posts {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
