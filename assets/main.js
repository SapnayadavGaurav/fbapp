var myApp = {
   access_token: '',
   table : $("#table"),
   init: function (){
     FB.login(function(response) {
       if (response.authResponse) {
         var access_token =   FB.getAuthResponse()['accessToken'];
         console.log('Access Token = '+ access_token);
         myApp.tokenData(access_token);
       }
     });
   },
   tokenData: function(token) {
     this.access_token = token;
     console.log("initialized");
     this.getPosts();
   },
   getPosts: function() {
     FB.api('/happiestminds', function(response) {
       console.log(response);
     });
   }
};

