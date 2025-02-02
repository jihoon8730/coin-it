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

        // 로그인 성공 시 next-auth 에서는 기본적으로 email, name, image 만 반환 해줌
        if (res?.data.token) {
          return {
            id: res.data.id, // 반환 하지 않음
            email: res.data.email,
            name: res.data.name,
            image: res.data.image,
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
