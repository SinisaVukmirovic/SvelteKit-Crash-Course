<script>
    import Title from '$lib/title.svelte';
    import '../styles/global.css';
</script>

<header>
    <Title title="Ninja Gaming Guides" />
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
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 60rem;
        margin: 1.5rem auto;
    }
    footer {
        text-align: center;
    }
</style>