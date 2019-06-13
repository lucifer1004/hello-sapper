<script context="module">
  export function preload({params, query}) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return {posts}
      })
  }
</script>

<script>
  export let posts
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }

  li {
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    list-style-type: none;
  }

  figure {
    max-height: 220px;
    overflow: hidden;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    position: relative;
  }

  figure > img {
    width: 100%;
  }

  figure > figcaption {
    position: absolute;
    bottom: 0;
    background-color: rgba(183, 52, 34, 1);
    width: 100%;
    color: white;
    text-align: center;
  }
</style>

<svelte:head>
  <title>博客</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <figure>
        <img src="https://placehold.it/1000x1000" alt={post.title} />
        <figcaption>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </figcaption>
      </figure>
    </li>
  {/each}
</ul>
