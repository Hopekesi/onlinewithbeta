import Network from './module.js';

//create the network objects
const MTN = new Network("MTN", 310);
const AIRTEL = new Network("AIRTEL", 310);
const GLO = new Network("GLO", 310);
const MOBILE = new Network("MOBILE", 250);
const myNetworkObjs = [MTN, AIRTEL, GLO, MOBILE];

myNetworkObjs.forEach((networks)=> {
    networks.tapView();
});