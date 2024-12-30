import NextAuth from "next-auth/next"
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

console.log("Google auth ", process.env.AUTH_SECRET);
export const authOptions :AuthOptions= {

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  callbacks:{
    async session({session, token}:any){ //here we have access to everything related to 
        console.log("session", session,"token" ,token);
        return session;
    }

  },
  secret:process.env.AUTH_SECRET,
}

const handlers=NextAuth(authOptions);

export {handlers as GET, handlers as POST}
