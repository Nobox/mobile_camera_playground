@extends('layouts.master')

@section('content')

    <h1>Hello Camera!</h1>

    <video autoplay></video>
    <img src="" alt="">
    <canvas style="display: none;"></canvas>

    <p>Click on the video to change the filter effect...</p>
    <p>
        <button id="capture-stop-button">Stop</button>
    </p>

@stop
