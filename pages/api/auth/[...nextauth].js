import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

export default NextAuth({
  providers: [
    Google({
      secret: process.env.SECRET,
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
