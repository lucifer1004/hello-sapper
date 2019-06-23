<script>
  import Logo from './Logo.svelte'
  import Space from './Space.svelte'
  export let segment
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    flex-grow: 0;
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .unselected {
    display: inline-block;
  }

  .unselected:hover {
    background-color: beige;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
  }
</style>

<nav>
  <ul>
    <li>
      <a href=".">
        <Logo />
      </a>
    </li>
    <Space />
    <li>
      <a class={segment === undefined ? 'selected' : 'unselected'} href=".">
        首页
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : 'unselected'}
        href="blog">
        博客
      </a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : 'unselected'} href="about">
        关于我们
      </a>
    </li>
    <li>
      <a class={segment === 'joinus' ? 'selected' : 'unselected'} href="joinus">
        招贤纳士
      </a>
    </li>
  </ul>
</nav>
