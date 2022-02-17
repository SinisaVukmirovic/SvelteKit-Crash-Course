export async function get({ params }) {

    const guides = [
        { id: 1, title: "API route title 1", body: 'Lorem ipsum dolor sit amet!' },
        { id: 2, title: "API route title 2", body: 'Lorem ipsum dolor sit amet!' },
        { id: 3, title: "API route title 3", body: 'Lorem ipsum dolor sit amet!' },
        { id: 4, title: "API route title 4", body: 'Lorem ipsum dolor sit amet!' },
        { id: 5, title: "API route title 5", body: 'Lorem ipsum dolor sit amet!' }
    ];

    const guide = guides.find((g) => g.id == params.id);

    if (guide) {
        return {
            status: 200,
            body: { guide }
        }
    }

    return {
        status: 404
    }
}