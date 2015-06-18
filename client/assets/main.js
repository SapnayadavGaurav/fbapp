var myApp = {
   access_token: '',
   table : $("#table"),
   init: function () {
     FB.login(function(response) {
       if ('authResponse' in response && typeof response.authResponse !== 'undefined') {
         var access_token =   FB.getAuthResponse()['accessToken'];
         console.log('Access Token = '+ access_token);
         myApp.tokenData(access_token);
       } else {
         alert("You have to authorize this application with your facebook authentication");
       }
     });
   },
   tokenData: function(token) {
     this.access_token = token;
     console.log("initialized");
     this.getPosts();
   },
   getPosts: function() {
     FB.api('/happiestminds?fields=posts{message,likes,shares,comments}', function(response) {
       console.log(response);
     });
   }
};


$(document).ready(function() {
  /**
   * @description : Calling properties.json to get facebook based requirements
   * @author : Pradeep Patro <pradeeppatro16@gmail.com>
   */
  $.ajax({
    url: "./properties.json",
    dataType: 'json',
    cache: false,
    success: function (data) {
      var fbappid = data.fbappid,
          fbscriptversion = data.fbscriptversion;

	  /**
       * @description : Adding Facebook's Javascript Sdk to the <head> asynchronusly 
       * @author : facebook
	   * @param: object d : Browsers DOM object
	   *         string s : script tag
	   *         string id : for script tag's id 
	   * @return null
       */
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      window.fbAsyncInit = function() {
        FB.init({
          appId      : fbappid,
          xfbml      : true,
          version    : fbscriptversion
        });
        myApp.init();
      }
    },
    error: function() {
      //@TODO : catch the error
    }
  });
});
