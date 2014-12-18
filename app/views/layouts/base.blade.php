<!DOCTYPE html>
<html lang="{{ $locale }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @section('title')
    <title>App Title</title>
    @show

    @section('meta')
        {{-- Page meta tags --}}
    @show

    @section('stylesheets')
        {{-- Page stylesheets --}}
    @show

    @section('scripts-head')
        {{-- Scripts required afap --}}
    @show
</head>
<body data-base="{{ url() }}"
      data-assets="{{ asset('') }}"
      data-route="{{ $route }}">

    @yield('body')

    @section('scripts-body')
        {{-- Scripts are loaded last --}}
    @show
</body>
</html>
