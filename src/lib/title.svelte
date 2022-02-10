<script>
    export let title = 'Ninja Gaming';
</script>

<div class="title">
    <img src="/controler.svg" alt="Site logo">
    <h1>{title}</h1>
</div>

<style>
    .title {
        display: flex;
    }
    .title img {
        display: inline-block;
        transform: scale(2.75);
        margin: 0 1rem;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    }
    .title h1 {
        margin-left: .75rem;
    }
</style>