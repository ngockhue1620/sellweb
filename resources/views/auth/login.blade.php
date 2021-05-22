@extends('layouts.app')

@section('content')

<div class="container" id="container_login">
    

<section>
       <div class="imgBx">
        <img
            src="https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w">
       </div>
       <div class="contentBx">
           <div class="formBx">
               <h2>
               Login
                </h2>
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="inputBx">
                <span>{{ __('E-Mail Address') }}</span>
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                 @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
            </div>
            <div class="inputBx">
                <span>{{ __('Password') }}</span>
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
             @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
            </div>
            <div class="remember">
                <label >
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                </label>
            </div>
            <div class="inputBx">
               
                <input type="submit" value="Sign in" name="">
            </div>
            <div class="inputBx">
            {{-- <p>Don't have account?<a href="http://127.0.0.1:8000/register">Register Now</a></p>
                 --}}
            </div>
        </form>
    </div>
       </div>
   </section>
   </div>
@endsection
