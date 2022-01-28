<script>
    let title = 'Ninja Gaming Guides';

    const updateTitle = () => {
        title = 'Something completelly different!';
    }
</script>

<div class="index">
    <h2>{title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo id tempore nulla exercitationem, perspiciatis ratione voluptatibus cumque? Doloribus dignissimos asperiores doloremque optio nostrum, laudantium suscipit facere blanditiis voluptas eum exercitationem veritatis culpa, deleniti quasi? Suscipit exercitationem quo assumenda animi totam a quia commodi vel ipsum, quod laudantium debitis voluptates quos.</p>
    <a href="/guides">View Guides</a>
    <a href="/about">About us</a>

    <button on:click={updateTitle}>Change Title</button>
    <input type="text" bind:value={title}>
</div>

<style>
    .index {
        display: block;
        text-align: center;
        margin: 1.5rem auto;
    }
</style>