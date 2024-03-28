const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json()
        displayPosts(posts)
    } catch (err) {
        console.log(err)
    }
}

const displayPosts = (posts) => {
    const postsContainer = document.querySelector("#postContainer")
    
    posts.forEach((post) => {
        const postElement = document.createElement("div")
        postElement.classList.add("post")

        const titleElement = document.createElement("h2")
        titleElement.textContent = post.title
        const captionElement = document.createElement("p")
        captionElement.textContent = post.body

        postElement.appendChild(titleElement)
        postElement.appendChild(captionElement)

        postsContainer.appendChild(postElement)
    })
}

fetchData()