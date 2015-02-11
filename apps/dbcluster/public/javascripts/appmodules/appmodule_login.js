var appModule_login={

    init: function () {
      console.log("app module for login called");
      this.setlogin();
    },
    setlogin:function(){
    	// alert("set login");
    	// jsCookies.set('login_remember', '{"username":"ahmed","password":"secret"}', 5 ); 
    },
    getlogin:function(callback){
    	callback(jsCookies.get('login_remember'));
    }
};



// USAGE - get    ::   jsCookies.get("cookie_name_here");  [returns the value of the cookie]
// USAGE - set    ::   jsCookies.set("cookie_name", "cookie_value", 5 );  [give name, val and # of days til expiration]
// USAGE - check  ::   jsCookies.check("cookie_name_here");  [returns only true or false if the cookie exists or not]