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

        if (res.ok) {
            return {
                props: {
                    guides
                }
            }
        }

        return {
            status: res.status,
            error: new Error('Could not fetch the guides!')
        }
    }

    // API Routes to some backend DB in the future...
    // export async function load( { fetch }) {
    //     const apiUrl = '/guides.json';
    //     const res = await fetch(apiUrl);
        // we need to destructure because we get an obj
    //     const { guides } = await res.json();

    //     if (res.ok) {
    //         return {
    //             props: {
    //                 guides
    //             }
    //         }
    //     }

    //     return {
    //         status: res.status,
    //         error: new Error('Could not fetch the guides!')
    //     }
    // }
</script>

<script>
    export let guides;
</script>

<div class="guides">
    <!-- <ul>
        <li><a href="/">Guide 1</a></li>
        <li><a href="/">Guide 2</a></li>
    </ul> -->
    <!-- replacing the above with the API data -->
    <!-- <ul>
        {#each guides as guide}
            <li>
                <a href="/">{guide.title}</a>
            </li>
        {/each}
    </ul> -->
    <!-- making the dynamic pages from the code above -->
    <ul>
        {#each guides as guide}
            <li>
                <!-- <a href={`/guides/${guide.id}`}>{guide.title}</a> -->
                <!-- to prefetch the data on hover over the link -->
                <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
            </li>
        {/each}
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