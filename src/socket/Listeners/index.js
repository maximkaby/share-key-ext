import {socket} from "../index";

socket.on('reconnect_error', () => {
  console.log('recon err')
})

socket.on('get_secret_ext', (message) => {
  chrome.storage.local.get('my_secret',function (r) {
    let mySecret = r.my_secret;
    socket.emit('receive_secret_ext', {
      mySecret
    });
  });
});

socket.on('set_secret_ext', secret => {
  chrome.storage.local.set({'my_secret': secret});
});
