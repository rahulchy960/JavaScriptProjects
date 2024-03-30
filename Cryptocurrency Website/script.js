
// const axios = require('axios'); //for running locally onlyu

document.addEventListener("DOMContentLoaded", function() {
    
    let btc = document.getElementById("bitcoin");
    let eth = document.getElementById("ethereum");
    let sol = document.getElementById("solana");
    let ada = document.getElementById("cardano");
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Csolana&vs_currencies=usd";

    axios.get(url)
        .then(response => {
            console.log(response.data);
            btc.innerHTML = response.data.bitcoin.usd;
            eth.innerHTML = response.data.ethereum.usd;
            sol.innerHTML = response.data.solana.usd;
            ada.innerHTML = response.data.cardano.usd;
        })
        .catch(error => {
        console.error("Error fetching data:", error);
        
    });
});






//not working because of free api ... need pain version to feach price in every 10 sec
// document.addEventListener("DOMContentLoaded", function() {
    
//     let btc = document.getElementById("bitcoin");
//     let eth = document.getElementById("ethereum");
//     let sol = document.getElementById("solana");
//     let ada = document.getElementById("cardano");
//     let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Csolana&vs_currencies=usd";

//     function fetchAndUpdatePrices() {
//         axios.get(url)
//             .then(response => {
//                 console.log(response.data); // Log the response data
//                 // Update inner HTML with fetched data
//                 btc.innerHTML = response.data.bitcoin.usd;
//                 eth.innerHTML = response.data.ethereum.usd;
//                 sol.innerHTML = response.data.solana.usd;
//                 ada.innerHTML = response.data.cardano.usd;
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }
//     fetchAndUpdatePrices();
//     setInterval(fetchAndUpdatePrices, 10000);
// });






