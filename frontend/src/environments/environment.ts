/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: "http://127.0.0.1:5000", // the running FLASK api server url
  auth0: {
    url: "auth-coffeeshop.us", // the auth0 domain prefix
    audience: "auth-coffee", // the audience set for the auth0 app
    clientId: "kX5F4OMMh9WUPFtR1JXwvtzajgnqpT73", // the client id generated for the auth0 app
    callbackURL: "http://localhost:8080", // the base url of the running ionic application.
  },
};
