let request = require('request');
 
let url = `http://ip-api.com/json`
let dados = '';
 
request(url, function (err, response, body) {
   if(err){
       console.log('error:', err);
   } else {
       let ipInfo = JSON.parse(body);
       dados = `                ********** WHERE AM I **********
                -------------------------------
                IP: ${ipInfo.query}
                País: ${ipInfo.country}
                Cidade: ${ipInfo.city}
                Região: ${ipInfo.regionName}
                Latitude: ${ipInfo.lat}
                Longitude: ${ipInfo.lon}
                ISP: ${ipInfo.org}
                -------------------------------
                `
       console.log(dados);
   }
});