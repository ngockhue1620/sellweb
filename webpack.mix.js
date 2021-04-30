const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


<<<<<<< HEAD
 mix.js('resources/js/app.js', 'public/js')
 .js('resources/js/admin.js', 'public/js')    
 .react()
 .sass("resources/sass/app.scss", "public/css")
 .sass("resources/sass/admin/admin.scss", "public/css/admin.css");
=======
mix.js('resources/js/app.js', 'public/js')

    .js('resources/js/admin.js', 'public/js')    


    .react()
    .sass("resources/sass/app.scss", "public/css")
    .sass("resources/sass/admin/admin.scss", "public/css/admin.css");
>>>>>>> dfcac31230d60a9db753c4b4d29bc7561e515a0a
