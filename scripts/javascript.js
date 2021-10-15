function play() {
  var audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

const partnerId = '881'
const secretKey = 'd53429d6bab5c978fbdeacd4ab6eb7d8'

const partnerId2 = '37931'
const secretKey2 = '1ce45b6ec6b5f342eebb09dff81babaf'


// DSFUT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function getUrl() {

  let minBuy = document.getElementById('min_buy').value * 1000
  console.log(minBuy)
  let maxBuy = document.getElementById('max_buy').value * 1000
  console.log(maxBuy)
  let timestamp = Date.now() / 1000 | 0
  let signature = partnerId + secretKey + timestamp
  let hash = md5(signature)
  //console.log(hash)
  let popUrl = ('https://dsfut.net/api/22/ps/' + partnerId + '/' + timestamp + '/' + hash + '?min_buy=' + minBuy + '&max_buy=' + maxBuy)
  console.log(popUrl)
  console.log(new Date(43000 * 1000).toISOString().substr(11, 8));

  document.getElementById("url").innerHTML = popUrl;


  $.getJSON(popUrl, function(data) {

    let checkError = data.error
    if (checkError == "") {
      document.body.style.background = 'red';
      play();
      document.getElementById("grid-1-2").innerHTML = data.player.name
      document.getElementById("grid-2-2").innerHTML = data.player.rating
      document.getElementById("grid-3-2").innerHTML = data.player.position
      document.getElementById("grid-4-2").innerHTML = data.player.startPrice
      document.getElementById("grid-5-2").innerHTML = data.player.buyNowPrice
      document.getElementById("grid-6-2").innerHTML = new Date(data.player.expires * 1000).toISOString().substr(11, 8);
    } else {
      var if_checked = document.getElementById("looper").checked
      console.log(if_checked)

      if (if_checked) {
        setTimeout(() => {
          getUrl();
        }, 1100);
      }
    }


    document.getElementById("grid-7-2").innerHTML = data.error
    document.getElementById("grid-8-2").innerHTML = data.message
  });
}

// FUTSELL !!!!!!!!!!!!!!!!!!!!!!

function getUrl2() {

  let minBuy = document.getElementById('min_buy').value * 1000
  console.log(minBuy)
  let maxBuy = document.getElementById('max_buy').value * 1000
  console.log(maxBuy)
  let timestamp = Date.now() / 1000 | 0
  let signature = partnerId2 + secretKey2 + timestamp
  let hash = md5(signature)
  //console.log(hash)
  let popUrl = ('https://www.futsell.ru/ffa19/api/pop/id/'+partnerId2+'/ts/'+timestamp+'/sign/'+hash+'/sku/FFA19PS4/?min_buy='+minBuy+'&max_buy='+maxBuy)
  console.log(popUrl)

  document.getElementById("url").innerHTML = popUrl;



  $.getJSON(popUrl, function(data) {

    let checkError = data.error
    if (checkError == "") {
      document.body.style.background = 'red';
      play();
      document.getElementById("grid-1-2").innerHTML = data.player.name
      document.getElementById("grid-2-2").innerHTML = data.player.rating
      document.getElementById("grid-3-2").innerHTML = data.player.preferredPosition
      document.getElementById("grid-4-2").innerHTML = data.player.startingBid
      document.getElementById("grid-5-2").innerHTML = data.player.buyNowPrice
      document.getElementById("grid-6-2").innerHTML = new Date(data.player.expires * 1000).toISOString().substr(11, 8);
    } else {
      var if_checked = document.getElementById("looper").checked
      console.log(if_checked)

      if (if_checked) {
        setTimeout(() => {
          getUrl2();
        }, 1100);
      }
    }


    document.getElementById("grid-7-2").innerHTML = data.error
    document.getElementById("grid-8-2").innerHTML = data.message
  });
}
