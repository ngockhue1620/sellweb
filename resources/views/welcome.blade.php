<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SELL-WEB</title>

        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <!-- The core Firebase JS SDK is always required and must be listed first -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QR3SM3MGY3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QR3SM3MGY3');
</script>
        

        
    </head>
    <body>
        <div id="root"></div>
        
    </body>
    
    <script src="{{mix('js/app.js')}}" ></script>   
    <script>
        AOS.init();
    </script>
    


    
</html>
