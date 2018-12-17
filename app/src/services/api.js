export default {
  test() {
    return fetch('/api')
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

  }
};