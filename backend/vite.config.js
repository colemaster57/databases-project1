export default {
    server: {
      proxy: {
        '/login': 'http://localhost:3001',
        '/games': 'http://localhost:3001',
        '/library': 'http://localhost:3001',
      },
    },
  };