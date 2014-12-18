@extends('layouts.base')

@section('title')
    <title>{{ $pageTitle . ' | ' . trans('app.name') }}</title>
@stop

@section('stylesheets')
    <link rel="stylesheet" media="all" href="css/main.css">
@stop

@section('scripts-head')

@stop

@section('body')
    @if(file_exists(public_path() . '/svg/symbols.svg'))
        <?php include(public_path() . '/svg/symbols.svg'); ?>
    @endif

    @yield('content')
@stop

@section('scripts-body')
    <script src="js/main.js"></script>
@stop
