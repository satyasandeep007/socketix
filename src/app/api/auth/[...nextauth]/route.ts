/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: "2.0", // Twitter API v2
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: any) {
      console.log(token, "token");
      console.log(account, "account");
      console.log(profile, "profile");
      // Add Twitter-specific information to the token
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.userId = account.providerAccountId; // Twitter user ID
      }
      if (profile) {
        token.email = profile.email; // Ensure email is included
        token.username = profile.username || profile.screen_name; // Add username
      }
      return token;
    },
    async session({ session, token }: any) {
      // Add Twitter-specific information to the session
      session.user.id = token.userId;
      session.user.email = token.email;
      session.user.username = token.username;
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
