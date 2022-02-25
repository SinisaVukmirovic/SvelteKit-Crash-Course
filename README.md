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