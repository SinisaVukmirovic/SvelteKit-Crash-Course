<!-- for fetching api data we need aditional script tag with context attribute of module -->
<script context="module">
    // export async function load(context) {
    //     context.fetch();
    // }
    // destructuring the above fetch call
    export async function load( { fetch }) {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(apiUrl);
        const guides = await res.json();
    }
</script>

<script>

</script>

<div class="guides">
    <ul>
        <li><a href="/">Guide 1</a></li>
        <li><a href="/">Guide 2</a></li>
    </ul>
</div>

<style>
    .guides {
        margin-top: 1.5rem;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    a {
        display: inline-block;
        margin-top: .75rem;
        padding: .75rem;
        border: 1px dotted rgba(255, 255, 255, .3);
    }
</style>