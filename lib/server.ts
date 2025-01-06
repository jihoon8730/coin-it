import process from 'node:process';

export const apiURL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';
