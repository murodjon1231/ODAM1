document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');
    const searchInput = document.getElementById('search');
    const themeToggle = document.getElementById('theme-toggle');
    let users = [];
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        users = data;
        render(users);
      });
  

    function render(userArray) {
      userContainer.innerHTML = userArray.map(user => `
        <div class="user-card">
          <h2>${user.name}</h2>
          <i>👩‍💻</i>
          <p><i>📧</i>${user.email}</p>
          <p><i>📞</i>${user.phone}</p>
          <p><i>🏠</i>${user.address.city}, ${user.address.street}</p>
        </div>
      `).join('');
    }
  
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
      );
      render(filteredUsers);
    });
  

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? '☀️ Light Mode' 
        : '🌙 Dark Mode';
    });
  });
  