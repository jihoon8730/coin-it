import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { API_URL } from '@/lib/api';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
      ) {
        // 사용자 인증 로직
        const res = await axios.post(`${API_URL}/api/login`, {
          email: credentials?.email,
          password: credentials?.password,
        });
        if (res?.data.token) {
          return {
            id: res.data.id,
            email: res.data.email,
            name: res.data.name,
            image: '',
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60 * 24 * 30, // 세션 만료시간 Default 30일
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
