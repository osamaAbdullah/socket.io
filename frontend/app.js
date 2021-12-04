const socket = io('ws://127.0.0.1:8080/')
socket.on('my-custom-message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
});

document.querySelector('button').onclick = _ => {
    const text = document.querySelector('input').value;
    socket.emit('my-custom-message', text)
};