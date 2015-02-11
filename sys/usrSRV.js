var path = require("path");
var hash = require(__dirname+'/lib/pass.js').hash;
module.exports={


users:{
   bob:{ name: 'bob',
  permissions: 'mod',
  salt: 'LFKSnUrHXI+WQvn4mkeRldSOapf6faJdMpZXeTvKda2PhB1wSEAqc7psjgukd1UL/S/PkTtgAjlaVVvx1hAlQyhO17yVJ8et3+/WzTPE58Dqtgj/iD/d43fKpgPmpbh/h71li6PKhpeL2HABu8PHzKgGJQWbzKmG+WRL2f/XQro=',
  hash: 'uo5Tn6zpm+PVsOuN6Y/pyQ8ZO738GfvOgXDBTBai9WovT7AXLRJF4fkjvTlUiPuA16jHMvYp7HhC0aLHz8mrD9iThX4NBNZDdF3I98u56PKV6c8qj+y0u+teevssx1PLquZ04ikjLxYVblw8SP5JeEWJbyr4+QwFmsF5Czi6598='
   },
ahmed:{ 
  name: 'ahmed',
  permissions: 'admin',
  salt: 'SqrmwVp1+N8xQL1PllAJIaMStoUQCZRUs/BX4F0iGiC1JY5vPFxRmivdsgQudqNCokEmmwCLsMljsh8/qOdtqKNP23Mqz27Ow9q18Rlzj/cXb/XSa0g4loYjZJVALcSS7QH2ndanA9ED9pF16iZWV8fP8qvfvFrY0Y1sIjgEKjw=',
  hash: 'ooyVa/JOHD1PTSnCNtIcX0hPqxRMSFIscGOgzRK6WnAMbyA2eOhv9w16iMcoub8qVSF9bfB+QHSJU8GikVflvQlJR1PyZHRUZPQ3PICE2568emDZHMrtgjQogAJ+CrY45uBU7O6HXT7QV3d2AOd0x0c3xrPlKhUmjbowLCggJkk='
   }

}


};


// var users={
//   bob: { name: 'bob',permissions:'mod' },
//   ahmed: { name: 'ahmed',permissions:'admin' }
// };

// var secureusers={
// 	 'bob':{ name: 'bob',
//   permissions: 'mod',
//   salt: 'LFKSnUrHXI+WQvn4mkeRldSOapf6faJdMpZXeTvKda2PhB1wSEAqc7psjgukd1UL/S/PkTtgAjlaVVvx1hAlQyhO17yVJ8et3+/WzTPE58Dqtgj/iD/d43fKpgPmpbh/h71li6PKhpeL2HABu8PHzKgGJQWbzKmG+WRL2f/XQro=',
//   hash: 'uo5Tn6zpm+PVsOuN6Y/pyQ8ZO738GfvOgXDBTBai9WovT7AXLRJF4fkjvTlUiPuA16jHMvYp7HhC0aLHz8mrD9iThX4NBNZDdF3I98u56PKV6c8qj+y0u+teevssx1PLquZ04ikjLxYVblw8SP5JeEWJbyr4+QwFmsF5Czi6598=' }
// 'ahmed':{ name: 'ahmed',
//   permissions: 'admin',
//   salt: 'SqrmwVp1+N8xQL1PllAJIaMStoUQCZRUs/BX4F0iGiC1JY5vPFxRmivdsgQudqNCokEmmwCLsMljsh8/qOdtqKNP23Mqz27Ow9q18Rlzj/cXb/XSa0g4loYjZJVALcSS7QH2ndanA9ED9pF16iZWV8fP8qvfvFrY0Y1sIjgEKjw=',
//   hash: 'ooyVa/JOHD1PTSnCNtIcX0hPqxRMSFIscGOgzRK6WnAMbyA2eOhv9w16iMcoub8qVSF9bfB+QHSJU8GikVflvQlJR1PyZHRUZPQ3PICE2568emDZHMrtgjQogAJ+CrY45uBU7O6HXT7QV3d2AOd0x0c3xrPlKhUmjbowLCggJkk=' }

// };

// function setuser(name,rawpass){
// hash(rawpass, function(err, salt, hash){
//   if (err) throw err;
//   // store the salt & hash in the "db"
//   users[name].salt = salt;
//   users[name].hash = hash;


// console.log(users[name]);
// });
// }

// setuser("bob","secret");
// setuser("ahmed","eries1");

//console.log(users);