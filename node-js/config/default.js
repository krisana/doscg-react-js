module.exports = {
  api: {
    port: 4000,
    root: '/api',
  },
  db: {
    url: 'Mongodb url', // your mongodb cloud
    name: 'test1',
  },
  auth: {
    jwt: {
      secret: '0d7c5c5f-768c-4d98-8900-13aadaa21937',
    },
  },
  google: {
    apiKey: 'google api key'
  }
}