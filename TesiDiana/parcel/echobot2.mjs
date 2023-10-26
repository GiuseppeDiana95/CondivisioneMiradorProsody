//import * as Strophe2 from 'strophe.js';
import {Strophe as Strophe2} from './strophe.muc.js';


window.addEventListener('load', waitForElement, 'test');
//document.addEventListener('DOMContentLoaded', bot_connect, false);

function waitForElement()
{
        bot_connect();
}
function bot_connect() 
{
    var connection = new Strophe.Connection('http://localhost:5280/http-bind/');
    connection.connect('rasabot@localhost','rasabot', onConnect);
    var a = connection.muc.init(connection);
    connection.muc.join("chat@localhost",  "rasabot", room_msg_handler, room_pres_handler, room_pres_handler);
    console.log(' hgg');
}
function onConnect(status)
{

    if (status == Strophe.Status.CONNECTING) 
    {
        console.log('Strophe is connecting.');
    }else if (status == Strophe.Status.CONNFAIL) 
    {
        console.log('Strophe failed to connect.');
    }else if (status == Strophe.Status.DISCONNECTING) 
    {
        console.log('Strophe is disconnecting.');
    }else if (status == Strophe.Status.DISCONNECTED) 
    {
        console.log('Strophe is disconnected.');
    }else if (status == Strophe.Status.CONNECTED) 
    {
        console.log('Strophe is connected.');
    }

}

function room_msg_handler(a, b, c) {
    log('MUC: room_msg_handler');
    return true;
  }
  
  function room_pres_handler(a, b, c) {
    log('MUC: room_pres_handler');
    return true;
  }
