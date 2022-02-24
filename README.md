## SvelteKit Notes

### Components
#### Component is a stand alone sections of a webpage (navbar, article, banner...). In SvelteKit, whole pages are represented by components (index page components to represent index page, about page components to represent the about page...) Svelte components have to be names "something.svelte".
##### It is a "good practice" to give class name to a component the same name as component name.
##### Styles in SvelteKit are scoped to a particular component.

### Routes And Pages
#### Any component in (sub)folder names "index.svelte" is treated as the root component for whatever folder/route it's in (much like the index.html page for a webpage). For exmple index.svelte in ./routes/guides/index.svelte component would be the root component of the guides route/subfolder. So route of just href="/" leades to the index.svelte root component inside guides folder.

### Reusable Components

