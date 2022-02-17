// API routes
export async function get() {
    // connect to DB and get data

    const guides = [
        { id: 1, title: "API route title 1" },
        { id: 2, title: "API route title 2" },
        { id: 3, title: "API route title 3" },
        { id: 4, title: "API route title 4" },
        { id: 5, title: "API route title 5" }
    ];

    return {
        status: 200,
        body: { guides }
    }
}