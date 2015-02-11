var appModule1 = {

  myProperty: "someValue",

  
  initMod: {
    useCaching: true,
    hasJS: true,
    hasCSS: true,
    modName: "en"
  },

  // a very basic method
  myMethod: function () {
    console.log(JSON.stringify(this.initMod));
  },

  // output a value based on the current configuration
  myMethod2: function () {
    console.log( "Caching is:" + ( this.initMod.useCaching ) ? "enabled" : "disabled" );
  console.log( "Has JS:" + ( this.initMod.hasJS )  ? "enabled" : "disabled" );
  },

  // override the current configuration
  myMethod3: function( newConfig ) {

    if ( typeof newConfig === "object" ) {
      this.initMod = newConfig;
      console.log( this.initMod.modName );
    }
  }
};
