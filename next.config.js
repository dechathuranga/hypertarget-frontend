// module.exports = {
//   // reactStrictMode: true,
//   env: {
//     customKey: 'my-value',
//   },
//   serverRuntimeConfig: {
//     // Will only be available on the server side
//     mySecret: 'secret',
//     secondSecret: process.env.SECOND_SECRET, // Pass through env variables
//   },
//   publicRuntimeConfig: {
//     // Will be available on both server and client
//     staticFolder: '/static',
//   },
// }

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    RESTURL_SPEAKERS: (() => {
      if (isDev) return 'http://localhost:4000/'
      if (isProd) {
        return window.location.protocol + "//" +window.location.host
      }
      if (isStaging) return 'http://localhost:11639'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    RESTURL_SESSIONS: (() => {
      if (isDev) return 'http://localhost:4000/sessions'
      if (isProd) return window.location.protocol + "//" +window.location.host +'/'
      if (isStaging) return 'http://localhost:11639'
      return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
  }

  // next.config.js object
  return {
    env,
  }
}