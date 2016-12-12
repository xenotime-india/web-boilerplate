
require('dotenv').config({ silent: true });

const app = require('lusa-pkg-web-pattern')({ basePath: __dirname });

app.listen(process.env.PORT || 3000);
