export default {
  getStreamers() {
    return fetch('/api/twitch', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Client-ID': '8sb2kt99biht5q3k79k7hsejyj0q2y'
      }
    })
      .then(response => response.json());
  }
};

