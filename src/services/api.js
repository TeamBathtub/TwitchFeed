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
  }
  return options;
};
export default {
  setToken(t) {
    token = t;
  },

  getTopStreamers() {
    // I don't know why this one call is going thru server. If twitch supports
    // CORS, just connect their API directly
    return fetch('/api/twitch', {
      method: 'GET',
      headers: {
        // Don't include the client id here, server already knows about it
        // 'Content-Type': 'application/json',
        // 'Client-ID': '8sb2kt99biht5q3k79k7hsejyj0q2y',
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

  // wait, why is one call proxied thru the server, but the rest are here?
  getStreamerDetails(searchTerm = '') {
    return fetch(`https://api.twitch.tv/kraken/search/channels?query=${encodeURIComponent(searchTerm)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Client-ID': '8sb2kt99biht5q3k79k7hsejyj0q2y'
      }
    })
      .then(response => response.json());
  },

  getStreamers(searchTerm = '') {
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

  deleteStreamer(name) {
    return fetch(`/api/favorites/${name}`, {
      method: 'DELETE',
      headers: {
        // no body
        // 'Content-Type': 'application/json',
        'Authorization': token
      }
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
  },

  addRating(rating) {
    return fetch('/api/ratings', getOptions ('POST', rating))
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

  getStats() {
    return fetch('/api/ratings/stats', getOptions('GET'))
      .then(response => response.json());
  },

  getAllFavorites() {
    return fetch('/api/community', getOptions('Get'))
      .then(response => response.json()); 
  }
};