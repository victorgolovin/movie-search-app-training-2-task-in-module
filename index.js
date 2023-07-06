fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "PUT"
})
    .then(Response => Response.json())
    .then(json => console.log(json))