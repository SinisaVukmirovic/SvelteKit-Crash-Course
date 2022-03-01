<script context='module'>
    export async function load({ fetch, params }) {
        const id = params.id;
        // console.log(id)
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const res = await fetch(apiUrl);
        const guide = await res.json();

        // for API routes
    // export async function load({ fetch, params }) {
    //     const id = params.id;
    //     console.log(id)
    //     const apiUrl = `/guides/${id}.json`;
    //     const res = await fetch(apiUrl);
        // again !!! must destructure in obj
        // const { guide } = await res.json();

        if (res.ok) {
            return {
                props: {
                    guide
                }
            }
        }

        return {
            status: res.status,
            error: new Error('Could not fetch the guide!')
        }

        // the above code when redirecting
        // return {
        //     status: 301,
        //     redirect: '/guides'
        // }
    }

    
</script>

<script>
    export let guide;
</script>

<div class="guide">
    <h2>{guide.title}</h2>
    <p>{guide.body}</p>
</div>

<style>
    .guide {
        margin-top: 2.5rem;
        padding: .75rem;
        border: 2px dotted rgba(255, 255, 255, .3);
    }
</style>