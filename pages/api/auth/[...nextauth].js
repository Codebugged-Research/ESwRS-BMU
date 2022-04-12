import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  site: process.env.NEXTAUTH_URL, 
  providers: [
    CredentialsProvider({
      name: "credentials",
      authorize: async (credentials) => {
        try {
          const user = await axios.post('http://143.110.249.208:3000/api/auth/login',
          {
            password: credentials.password,
            email: credentials.username
          },
          {
            headers: {
              accept: '*/*',
              'Content-Type': 'application/json'
            }
          })  
          if (user) {
            return {status: 'success', data: user}
          } 
        } catch (e) {
          const errorMessage = e
          // Redirecting to the login page with error message          in the URL
          throw new Error(errorMessage + '&email=' + credentials.username + '&password=' + credentials.password)
        }
  
      }
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.accessToken = user.token
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.accessToken = token.accessToken;
      }

      return session;
    },
  },
  secret : 'E4AA615993B61ACA9BD342FAE451D', 
  jwt: {
    secret: "E4AA615993B61ACA9BD342FAE451D",
    encryption: true,
  },
  pages: {
    signIn: "/",
    error: "/",
  },
});
