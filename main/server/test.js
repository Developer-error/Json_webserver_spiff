//document.getElementById("test").innerHTML = "WebSocket is not connected";

var websocket = new WebSocket('ws://'+location.hostname+'/');



document.getElementById('jsonform').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Array.from(formData.entries()).reduce((memo, pair) => ({
    ...memo,
    [pair[0]]: pair[1],
  }), {});
    var objectJson = JSON.stringify(data);
  document.getElementById('output').innerHTML = objectJson ;
    console.log(objectJson);
    alert(objectJson);
    websocket.send(objectJson);
});





function sendMsg() {
  //websocket.send("sup playa!");
  
   console.log({ objectJson });
  console.log('Sent message to websocket');
}