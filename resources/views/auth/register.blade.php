@extends('layouts.app')

@section('content')
<div class="container">

    <section>
       <div class="imgBx">
        <img
            src="https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w">
       </div>
       <div class="contentBx">
           <div class="formBx">
               <h2>
               {{ __('Register') }}
                </h2>
        <form method="POST" action="{{ route('register') }}">
            @csrf
            <div class="inputBx">
                <span>{{ __('Name') }}</span>
                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                 @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
            </div>
             <div class="inputBx">
                <span>{{ __('E-Mail Address') }}</span>
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                 @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
            </div>
            
            <div class="inputBx">
                <span>{{ __('Password') }}</span>
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
             @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
            </div>
            <div class="inputBx">
                <span>{{ __('Confirm Password') }}</span>
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
             @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
            </div>
           
            <div class="inputBx">
               
                <input type="submit" value="Register" name="">
            </div>
            <div class="inputBx">
            <p>Already have acount?<a href="http://127.0.0.1:8000/login">Login</a></p>
                
            </div>
        </form>
    </div>
       </div>
   </section>
</div>
@endsection
