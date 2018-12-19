let token = '';

const getOptions = (method, data) => {
  const options = {
    method,
    headers: {}
  };
  if(data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }
  if(token) {
    options.headers.Authorization = token;
    console.log('got here', token); 
  }
  return options;
};

export default {
  setToken(t) {
    token = t;
  },
  getTopStreamers() {
    return fetch('/api/twitch', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Client-ID': '8sb2kt99biht5q3k79k7hsejyj0q2y',
        'Authorization': token
      }
    })
      .then(response => response.json());
  },

  signUp(profile) {
    return fetch('/api/auth/signup', getOptions ('POST', profile))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  }, 

  signIn(credentials) {
    return fetch('/api/auth/signin', getOptions ('POST', credentials))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },

  getStreamers(searchTerm = '') {
    console.log('search term', searchTerm);
    return fetch(`https://api.twitch.tv/helix/users?login=${encodeURIComponent(searchTerm)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Client-ID': '8sb2kt99biht5q3k79k7hsejyj0q2y'
      }
    })
      .then(response => response.json());
  },

  getTop100() {
    return fetch('https://api.twitch.tv/helix/streams?first=100', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Client-ID': '8sb2kt99biht5q3k79k7hsejyj0q2y'
      }
    })
      .then(response => response.json());
  },
  addStreamer(favorite) {
    return fetch('/api/favorites', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(favorite)
    })
      .then(response => response.json());
  },
  deleteStreamer(id) {
    return fetch(`/api/favorites/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  }, 
  getStreamer() {
    return fetch('/api/favorites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(response => response.json()); 
  }
};


