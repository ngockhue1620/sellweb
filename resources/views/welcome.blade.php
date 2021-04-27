<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SELL-WEB</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="root"></div>
        
    </body>
    <script src="{{asset('js/app.js')}}" ></script>
    <script src="{{asset('js/resources_js_components_public-page_HomePage_js')}}" ></script>
    <script src="{{ mix('js/axiosClient.js') }}"></script>
    <script src="{{asset('resources_js_components_admin_admin-components_category_index_js')}}"></script>
</html>