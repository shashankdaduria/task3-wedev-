
  const feature = document.getElementById('feature');
    const sidebar = document.getElementById('sidebar');
    const modal = document.getElementById('modal');
    const popup = document.getElementById('modal-body');
    const clsbtn = document.querySelector('.exit');

    const apiURL = 'https://coding-week-2024-api.onrender.com/api/data';
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            renderBlogs(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    function renderBlogs(data) {
        data.forEach(blog => {
            if (blog.type === 'science') {
                createFeature(blog);
            }
            createSidebar(blog);
        });}

    function createFeature(blog) {
        const blogElement = document.createElement('div');
        blogElement.classList.add('img-container');
        blogElement.innerHTML = ` <div class="align">
            <img src="${blog.image}" alt="${blog.headline}" class="img">
            <span class="text">
                <span class="button">Featured</span>
                &nbsp;&nbsp;
                <span class="button">${blog.type}</span>
                <br>${blog.headline}<br>
                <i class="fa-regular fa-calendar"></i>&nbsp;${blog.date}
                Author=${blog.author}
                </span>
            </div>`;
        blogElement.addEventListener('click', () => openModal(blog));
        feature.appendChild(blogElement);
    }

    function createSidebar(blog) {
        const blogElement = document.createElement('div');
        blogElement.classList.add('side');

        blogElement.innerHTML = `
            <img src="${blog.image}" alt="${blog.headline}">
            <a href="#">
                <p><b>${blog.headline}</b></p>
            </a>
            <br>
            <i class="fa-regular fa-calendar"></i> ${blog.date} `;
        blogElement.addEventListener('click', () => openModal(blog));
        sidebar.appendChild(blogElement);}

    function openModal(blog) {
        popup.innerHTML = `
            <h2>${blog.headline}</h2>
            <p><i>${blog.date}</i> by ${blog.author}</p>
            <img src="${blog.image}" alt="${blog.headline}" style="width: 100%;">
            <p>${blog.content}</p>`;
        modal.style.display = 'block';  }
        
    clsbtn.addEventListener('click', () => {
        modal.style.display = 'none';});
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
