const app = require('./config/express/express');

// Cabeçalhos do HEADER
app.disable("x-powered-by");

app.use((request, response, next) => {

   response.setHeader("X-Frame-Options", "SAMEORIGIN");
   response.setHeader("X-Content-Type-Options", "nosniff");
   response.setHeader("X-XSS-Protection", "1; mode=block");
   response.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; object-src 'none'"
   );
   response.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
   );
   response.setHeader("Referrer-Policy", "no-referrer");

   response.setHeader(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=()"
   );
   response.setHeader("X-DNS-Prefetch-Control", "off");
   response.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
   response.setHeader("Cross-Origin-Opener-Policy", "same-origin");
   response.setHeader("Cross-Origin-Resource-Policy", "same-origin");

   next();
});


// ROTAS
const route_home = require('./routes/home/home');
const route_registered = require('./routes/registered/registered');
const route_login = require('./routes/login/login');
const route_about = require('./routes/about/about');
const page_error = require('./routes/error/page_error');
const postSendTo = require('./routes/forum/sendTo'); // ROTA enviar POST

// Middleware para requisições usuarios
const simpleMiddleware = (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`${req.method} - ${ip} - ${req.originalUrl}`);
    next();
}
app.use(simpleMiddleware);

app.use('/', route_home);
app.use('/registered', route_registered);
app.use('/login', route_login);
app.use('/about', route_about);
app.use('/error', page_error);
app.use('/post', postSendTo);



module.exports = app;
