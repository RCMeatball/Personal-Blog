var blog = JSON.parse(localStorage.getItem('blog'));
var blogNum = JSON.parse(localStorage.getItem('blog#'));
var blog1 = document.getElementById("table");

if (blogNum += 0) {
  for (let i = 0; i = blogNum; i++) {
    blog.forEach(item => {
      const newTitle = document.createElement('h3');
      const newName = document.createElement('h2');
      const newContent = document.createElement('p');
      newTitle.textContent = item;
      newName.textContent = item;
      newContent.textContent = item;
      blog1.appendChild(newTitle);
      blog1.appendChild(newName);
      blog1.appendChild(newContent);
    })
  }
} else {
  blog.forEach(item => {
    const newTitle = document.createElement('h3');
    const newName = document.createElement('h2');
    const newContent = document.createElement('p');
    newTitle.textContent = item;
    newName.textContent = item;
    newContent.textContent = item;
    blog1.appendChild(newTitle);
    blog1.appendChild(newName);
    blog1.appendChild(newContent);
  })
} 
