## SvelteKit Notes

### Components
#### Component is a stand alone sections of a webpage (navbar, article, banner...). In SvelteKit, whole pages are represented by components (index page components to represent index page, about page components to represent the about page...) Svelte components have to be names "something.svelte".
##### It is a "good practice" to give class name to a component the same name as component name.
##### Styles in SvelteKit are scoped to a particular component.

### Routes And Pages
#### Any component in (sub)folder names "index.svelte" is treated as the root component for whatever folder/route it's in (much like the index.html page for a webpage). For exmple index.svelte in ./routes/guides/index.svelte component would be the root component of the guides route/subfolder. So route of just href="/" leades to the index.svelte root component inside guides folder.

### Reusable Components
#### lib folder is a special folder in SvelteKit. When we have somekind of reusable components we usually put them inside of this "lib" folder. When importing something for lib folder we don't need to specify path to the lib folder, instead we can reference lib folder by only typing '$lib/...' (an alias for the path to the lib folder)

### Layout Components
#### Layout components wraps out page component and they contain different elements or different parts of a template that would be common to every page (title, footer...). In order to create Layout component we create and name a component "__layout.svelte" (2 leading underscores). This tells SvelteKit that this is a special layout component.

### Reset Layout
#### Reset layout is just, basically, another layout component. We place it inside whatever folder we want a new layout for components in that folder. Reset layout component is created by naming component as "__layout.reset.svelte". this tells SvelteKit that for this folder we want to use this layout instead.

### Loading Data
#### To fetch some data we do it in a separate script tap inside of whatever component that needs the data. We create a new and separate script tag above the regular script tag and give it an atribute "context" with the value of "module" - context="module". Inside this script we have a special SvelteKit async function called "load", and we use this function to fetch any data.

<pre><code>
<script context="module">
    export async function load (context) {
        context.fetch();
    }

    // or shorter (destructuring)

    export async function load ({ fetch }) {
        fetch();
    }
</script>
</code></pre>

#### The load() function takes in an argument automatically, which is a "context" object. On that context object is a few different things, one of those things is the fetch() function. The fetch() API is meant for the browser, context object exposses it for us on the server too, so that this script can run on the server, to fetch the data so we can prerender our template.

### Dynamic Routes
#### A single page for many different links. It this particular case, all guides have an ID. To create a dynamic component, we wrap the name of the component with square brackerts [ ]. ([id].svelte) This tells the SvelteKit that this part of the URL is changeable. 
#### Property name must be the same as name we chouse to name our file name component!

### Redirects
#### To redirect the user to a different path in case of a page not found or similar, with a "redirect" property  and a path set as value.

### Prefetching Data
#### To prefetch the data on hover on links, all wee need to do is add a directive "sveltekit:prefetch" on the links. 

### Deplay to Vercel