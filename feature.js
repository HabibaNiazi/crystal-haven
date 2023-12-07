const products = [
  {
      name:'healing crystal',
      link:'healing.html',
    },
  {
    name: 'bracelet',
   link: 'bracelet.html',

  },
  {
    name: 'crystal ball',
   link: 'balls.html',

  },
  {
    name: 'cravings',
   link: 'craving.html',

  },
  
  ];
  function showSuggestions() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const suggestionList = document.getElementById('suggestionList');
    suggestionList.innerHTML = '';
  
    if (query === '') {
      suggestionList.style.display = 'none';
      return;
    }
  
    const suggestions = products.filter(product => product.name.toLowerCase().includes(query));
    
    if (suggestions.length === 0) {
      suggestionList.style.display = 'none';
      return;
    }
  
    for (let i = 0; i < suggestions.length; i++) {
      const suggestion = suggestions[i];
      const suggestionItem = document.createElement('li');
      suggestionItem.textContent = suggestion.name;
      suggestionItem.onclick = function() {
        document.getElementById('searchInput').value = suggestion.name;
        suggestionList.style.display = 'none';
      };
      suggestionList.appendChild(suggestionItem);
    }
  
    suggestionList.style.display = 'block';
  }
  
  function searchProduct() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productName = product.name.toLowerCase();
  
      if (productName === query) {
        window.location.href = product.link;
        return;
      }
    }
  
    alert('Product not found!');
  }
  
  document.addEventListener('click', function(event) {
    const suggestionList = document.getElementById('suggestionList');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput.contains(event.target)) {
      suggestionList.style.display = 'none';
    }
  });
  