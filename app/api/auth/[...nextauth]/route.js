import User from "@/models/User";
import { connectToDB } from "@/mongodb/database";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // ...add more providers here
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          await connectToDB();

          const user = await User.findOne({ email: email });
          if (!user) {
            console.log("User not found");
            return null;
          }

          const passwordMatched = await bcrypt.compare(password, user.password);
          if (!passwordMatched) {
            console.log("Password does not match");
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error during authentication:", error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session?.user?.email });
      session.user.id = sessionUser._id.toString();
      session.user = { ...session.user, ...sessionUser._doc };
      return session;
    },
    async signIn({ account, profile }) {
      //
      if (account.provider === "google" || account.provider === "github") {
        try {
          await connectToDB();

          // Check if the user exists or not
          let user = await User.findOne({ email: profile.email });

          if (!user) {
            user = await User.create({
              email: profile.email,
              name: profile.name,
              wishlist: [],
              cart: [],
              order: [],
              work: [],
            });
          }

          return user;
        } catch (error) {
          console.log("Error checking if user exists or not", error.message);
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
