# LUSA Web Boilerplate

##Details

The application uses the following external libraries

**<a href="https://github.com/EliLillyCo/lusa-pkg-web-pattern">lusa-pkg-web-pattern</a> :** The web pattern takes express, Handlebars, <a href="https://github.com/EliLillyCo/lusa-pkg-web-auth">LUSA Web Auth</a>, <a href="https://github.com/EliLillyCo/lusa-pkg-web-redirects">LUSA Web Redirect</a>, and New Relic and organizes them into a ready to use website project. It's a fast way to get working on your Node website without having to worry about the setup. It takes care of all the boring parts, like setting up your views, 404 page, 500 page, getting the modules organized, etc...


##Install the dependencies.

```bash
npm install
```

Rename `.env.example` to `.env`

```bash
# copy configuration and replace with your own
cp .env.example .env
```

##Environment Variables

**Authentication Configuration :**
  ````
  ALLOW_ANONYMOUS=<true|false> * default false
  AUTH0_DOMAIN=<auth0 domain name> * required if ALLOW_ANONYMOUS = false
  AUTH0_CLIENT_ID=<auth0 client id> * required if ALLOW_ANONYMOUS = false
  AUTH0_CLIENT_SECRET=<auth0 client secret> * required if ALLOW_ANONYMOUS = false
  AUTH0_CONNECTION=<auth0 connection name> * required if ALLOW_ANONYMOUS = false
  SESSION_SECRET=<express session secret> * required if ALLOW_ANONYMOUS = false
  CALLBACK_URL=<authentication oauth callback url> * default '/callback'
 ````
 replace the values for `AUTH0_CLIENT_ID`, `AUTH0_DOMAIN`, and `AUTH0_CLIENT_SECRET` with your Auth0 credentials. If you don't yet have an Auth0 account, [sign up](https://auth0.com/signuo) for free.
  for more detail check <a href="https://github.com/EliLillyCo/lusa-pkg-web-auth">lusa-pkg-web-auth</a> module.

**New Relic Configuration :**
  ````
  ENABLE_NEW_RELIC=<true|false> * default false
  NEW_RELIC_LICENSE_KEY=<new relic license key> * required if ENABLE_NEW_RELIC = true
  NEW_RELIC_APP_NAME=<application name use to track application trafic> 
  NEW_RELIC_LOG=stdout * required if ENABLE_NEW_RELIC = true
  NEW_RELIC_NO_CONFIG_FILE=true * required if ENABLE_NEW_RELIC = true
  ````
**Extra Configuration :**
 ````
 ENVIRONMENT=<dev|prod> * default prod
 FORCEHTTPS=<true|false> * default false
 KEEPWWW=<true|false> * default false
 HOST=<application host name eg. http://localhost:3000> * required 
 ERROR_PAGE=<application error page> * default '/error'
 ````

##Run the app.

```bash
npm start
```

The app will be served at `localhost:3000`.

##Running Tests
```bash
npm run test
```

##Running Lint
```bash
npm run lint
```

##Running Vulnerablity Check via Snyk
```bash
npm run snyktest
```

##Running Vulnerablity Check via nsp
```bash
npm run nsptest
```

