import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      secret:process.env.SECRET,
      clientId: process.env.CLIENT_ID_GOOGLE,
      clientSecret: process.env.GOOGLE_SECRET_CLIENT,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
})