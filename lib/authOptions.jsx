import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  throw new Error("GITHUB_ID and GITHUB_SECRET must be defined");
}
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be defined");
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
