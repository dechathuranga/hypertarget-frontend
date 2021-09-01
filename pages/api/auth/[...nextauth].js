import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import Models from "../../../models";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,
  //1. Try removing this to see what happens. I think since you set an adapter you dont need to do this based on code I am reading. I think this could be why the adapter code actually isn't firing.
  //2. Make sure the connection persists if this does work
  //3. Additionally try console logging the npm module to see if you can do that

  //Not with original code. I inserted this to try to extend the built in models
  adapter: Adapters.TypeORM.Adapter(
    // The first argument should be a database connection string or TypeORM config object
    process.env.DATABASE_URL,
    // The second argument can be used to pass custom models and schemas
    {
      models: {
        User: Models.User,
      },
    }
  ),

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: false,

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  //jwt: {
  // A secret to use for key generation (you should set this explicitly)
  // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',

  // Set to true to use encryption (default: false)
  // encryption: true,

  // You can define your own encode/decode functions for signing and encryption
  // if you want to override the default behaviour.
  // encode: async ({ secret, token, maxAge }) => {},
  // decode: async ({ secret, token, maxAge }) => {},
  //},

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: "/login", // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    verifyRequest: "/verify-request", // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    signIn: async (user, account, profile) => {
      //console.log("Sign In User: " + JSON.stringify(user, null, 4));
      return Promise.resolve(true);
    },
    redirect: async (url, baseUrl) => {
      //console.log("URL: " + JSON.stringify(url, null, 4));
      //console.log("Base URL: " + JSON.stringify(baseUrl, null, 4));
      return Promise.resolve(
        `${process.env.APP_URL || "http://localhost:3000"}/member`
      );
    },
    // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) },
    session: async (session, user) => {
      session.user = user;
      //console.log("Session Session: " + JSON.stringify(session, null, 4));
      //console.log("Session User: " + JSON.stringify(user, null, 4));
      return Promise.resolve(session);
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
};

export default (req, res) => NextAuth(req, res, options);

//Ideas:
//1. Spin up two Mongo databases to use. The first is for Next Auth while the second is your custom model for use sessions (Doesn't seem to work)
//2. Try to just write out normal CRUD operations using the adapter. Possibly move logic to JWT or even remove JWT logic
//3. Copy the find user and update user functions Ian already has. First understand what it is doing. The easiest path will be to just work with the model already being created
//4. Experiment adding the shortID using that patch package
