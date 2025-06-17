export default ({ env }) => ({
  host: env('HOST', 'https://promising-butterfly-aece44035d.strapiapp.com'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
