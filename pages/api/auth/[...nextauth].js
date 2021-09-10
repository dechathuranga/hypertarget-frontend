import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.Email({
      server: {
        host: 'smtp.gmail.com',
        port: '465',
        auth: {
          user: 'hypertargetmail@gmail.com',
          pass: 'Dwhn0767228870',
        },
      },
      from: 'hypertargetmail@gmail.com',
    }),
  ],
  pages: {
    signIn: "/payment",
  },
  database: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
