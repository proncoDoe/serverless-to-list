// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '46c9m7kn0m'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'proncotech.us.auth0.com',            // Auth0 domain
  clientId: 'm5xm9uNXdp4mG9J9XjSVhqs1cThEtPnx',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}

