# LUSA Web Boilerplate

**Install the dependencies.**

```bash
npm install
```

Rename `.env.example` to `.env` and replace the values for `AUTH0_CLIENT_ID`, `AUTH0_DOMAIN`, and `AUTH0_CLIENT_SECRET` with your Auth0 credentials. If you don't yet have an Auth0 account, [sign up](https://auth0.com/signuo) for free.

```bash
# copy configuration and replace with your own
cp .env.example .env
```

**Environment Variables**

```
 ENVIRONMENT=<dev|prod>
 ALLOW_ANONYMOUS=<true|false>
 FORCEHTTPS=<true|false>
 KEEPWWW=<true|false>
 AUTH0_DOMAIN=<auth0 domain name>
 AUTH0_CLIENT_ID=<auth0 client id>
 AUTH0_CLIENT_SECRET=<auth0 client secret>
 AUTH0_CONNECTION=<auth0 connection name>
 HOST=<application host name eg. http://localhost:3000>
 SESSION_SECRET=<express session secret>
```
Run the app.

```bash
npm start
```

The app will be served at `localhost:3000`.
