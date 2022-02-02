<script>
    import Title from '$lib/title.svelte';
    import '../../styles/global.css';
</script>

<header>
    <nav>
        <Title title="Ninja Gaming Guides" />

        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/guides">Guides</a>
        </div>
    </nav>
</header>

<main>
    <!-- Page Content -->
    <slot></slot>
</main>

<footer>
    <p>Copyright 2022 Net Ninja</p>
</footer>

<style>
    header {
        text-align: center;
        background: rgba(0, 0, 0, .2);
    }
    main {
        max-width: 60rem;
        margin: 1.5rem auto;
    }
    footer {
        text-align: center;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: .75rem;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
    }
</style>