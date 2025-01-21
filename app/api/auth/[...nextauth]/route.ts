import NextAuth, { RequestInternal } from 'next-auth';
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
  pages: {
    signIn: '/login', // 사용자 정의 로그인 페이지
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
