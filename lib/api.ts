export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.example.com'
    : 'http://localhost:8080';
