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
        // 사용자 로그인
        const res = await axios.post(`${API_URL}/api/login`, {
          email: credentials?.email,
          password: credentials?.password,
        });

        // 사용자 jwt 인증
        const protectedRes = await axios.get(`${API_URL}/api/protected`, {
          headers: {
            Authorization: res?.data.token,
          },
        });

        // 로그인 성공 시 next-auth 에서는 기본적으로 email, name, image 만 반환 해줌
        if (protectedRes) {
          const user = {
            id: res.data.id,
            email: res.data.email,
            name: res.data.name,
            image: res.data.image,
          };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // user.id를 JWT 토큰에 포함
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  expires: 60 * 60 * 24 * 30, // 토큰 만료시간 Default 30일
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
