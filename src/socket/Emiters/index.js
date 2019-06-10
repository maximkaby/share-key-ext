import {socket} from "../index";


export const sendSecretToFront = () => {
  chrome.storage.local.get('my_secret',function (r) {
    let mySecret = r.my_secret;
    socket.emit('receive_secret_ext', mySecret);
  });
}
