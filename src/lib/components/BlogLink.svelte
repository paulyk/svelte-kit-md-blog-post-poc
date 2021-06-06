<script>
    export let slug = ""

    let title = slug.replace("-", " ")
</script>

<a href={`/blog/${slug}`}>{title[0].toUpperCase() + title.slice(1)}</a>

<style>

    a {
        text-decoration: none;
        font-size: 1.2rem;
        padding: 0.3rem 2rem;
        border: 1px solid #ccc;
        color: #444;
    }

    a:hover {
        background: #eee;
    }
</style>