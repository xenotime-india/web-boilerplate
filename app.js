//Require'ing both so .defaults will fill in the blanks
//DO NOT EDIT .defaults - add your specific settings to .env
//DO NOT CHECK .env into source control!
//Refer to INSTRUCTIONS.md

require('dotenv').config({ path: '.env', silent: true });
require('dotenv').config({ path: '.defaults', silent: true });

const app = require('lusa-pkg-web-pattern')({ basePath: __dirname });

app.listen(process.env.PORT || 3000);

