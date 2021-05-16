const rp = require('request-promise');
const url = 'https://www.carrefour.es/?q=LEJIA+CONEJO+2';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    console.log('handle error');
  });
