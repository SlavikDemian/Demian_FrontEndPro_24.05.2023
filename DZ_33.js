

function fetchPostById(postId) {
    return new Promise((resolve, reject) => {
        if (postId < 1 || postId > 100) {
            reject("ID must be from 1 to 100");
        } else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(`Error loading post: ${error.message}`);
                });
        }
    });
}



function displayPost(post) {
    const postContent = document.getElementById("postContent");
    postContent.textContent = post.title;
    const postContainer = document.getElementById("postContainer");
    postContainer.style.display = "block";
}


document.getElementById("searchButton").addEventListener("click", () => {
    const postId = parseInt(document.getElementById("postIdInput").value);
    const commentsButton = document.getElementById("commentsButton");
    const commentsContainer = document.getElementById("commentsContainer");
    const commentsList = document.getElementById("commentsList");

    fetchPostById(postId)
        .then(post => {
            displayPost(post);
            commentsButton.addEventListener("click", () => {

                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        commentsList.innerHTML = "";
                        comments.forEach(comment => {
                            const li = document.createElement("li");
                            li.textContent = comment.body;
                            commentsList.appendChild(li);
                        });
                        commentsContainer.style.display = "block";
                    })
                    .catch(error => {
                        console.error(`Error loading comments: ${error.message}`);
                    });
            });
        })
        .catch(error => {
            console.error(error);
        });
});
