<!-- for fetching data we need a separate script tags with context attribute equal to module -->
<script context="module">
    // export async function load(context) {
    //     context.fetch()
    // }
    //  destructuring the above fetch functionality
    export async function load({ fetch }) {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(apiUrl);
    }
</script>

<script>
    // let title = 'Ninja Gaming Guides';

    // const updateTitle = () => {
    //     title = 'Something completelly different!';
    // }

    // import Title from '$lib/title.svelte';
</script>

<!-- <Title /> -->

<div class="index">
    <h2>Welcome</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo id tempore nulla exercitationem, perspiciatis ratione voluptatibus cumque? Doloribus dignissimos asperiores doloremque optio nostrum, laudantium suscipit facere blanditiis voluptas eum exercitationem veritatis culpa, deleniti quasi? Suscipit exercitationem quo assumenda animi totam a quia commodi vel ipsum, quod laudantium debitis voluptates quos.</p>
    <a href="/guides">View Guides</a>
    <a href="/about">About us</a>
</div>

<style>
    .index {
        display: block;
        text-align: center;
        margin: 1.5rem auto;
    }
    .index a {
        margin: 1rem;
    }
</style>