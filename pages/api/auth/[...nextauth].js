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
      // sendVerificationRequest({
      //   identifier: email,
      //   url,
      //   provider: { server, from }
      // }) {
      //   "<html><div> <ul ><li><a  >Sign In</a></li>  <li><a >Sign Up</a></li> </ul></div></html>"
      // },
    }),
  ],
  pages: {
    signIn: "/signin",
    verifyRequest: "/check-your-email",
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      // console.log("Sign In User: " + JSON.stringify(user, null, 4));
      return Promise.resolve(true);
    },
    redirect: async (url, baseUrl) => {
      // console.log("URL: " + JSON.stringify(url, null, 4));
      // console.log("Base URL: " + JSON.stringify(baseUrl, null, 4));
      return Promise.resolve(
        // `${process.env.APP_URL || "http://localhost:3000"}/how-do-you-want-to-add-the-script`
        `${baseUrl}/how-do-you-want-to-add-the-script`
      );
    },
    // jwt: async (token, user, account, profile, isNewUser) => { 
      
    //   if (user) {
    //     token.user = { _id: user._id, email: user.email, status: user.status, provider: 'credentials' };
    // }

    //   return Promise.resolve(token)
    //  },
    session: async (session, user) => {
      session.user = user;
    //   if (user) {
    //     token.user = { _id: user._id, email: user.email, status: user.status, provider: 'credentials' };
    // }
      // console.log("Session Session: " + JSON.stringify(session, null, 4));
      // console.log("Session User: " + JSON.stringify(user, null, 4));
      return Promise.resolve(session);
    },
  },
  database: {
    type: 'mongodb',
    url: 'mongodb+srv://admin:admin@cluster0.w9t0r.mongodb.net/hypertarget',
    ssl: true,
    // replicaSet: 'Cluster0-shard-0',
    authSource: 'admin',
    retryWrites: true,
    synchronize: true
},
  // database: {
  //   type: "sqlite",
  //   database: ":memory:",
  //   synchronize: true,
  // },
};

export default (req, res) => NextAuth(req, res, options);
