
const submit = document.getElementById("submit");
var blog = JSON.parse(localStorage.getItem(`blog`));
var blogNum = JSON.parse(localStorage.getItem(`blog#`));


submit.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    var blog1 = {
        "name": name.value,
        "title": title.value,
        "content": content.value,

    }

    if (blogNum != 0) {
        blogNum += 1;
        localStorage.setItem('blog#', JSON.stringify(blogNum))
    } else {
        blogNum = 1;
        localStorage.setItem('blog#', JSON.stringify(blogNum));
    }

    if (blog != 0) {
        var Blog = [];
        for (let i = 0; i < blogNum - 1; i++) {
            Blog.push(blog[i]);
        }
        Blog.push(blog1);
        localStorage.setItem('blog', JSON.stringify(Blog));
    } else {
        var Blog = [];
        Blog.push(blog1);
        localStorage.setItem('blog', JSON.stringify(Blog));
    }

    window.open(`blog.html`, '_self');

});

