let IS_PROD = false;
const server = IS_PROD ?
    "http://localhost:8000" :
    "https://video-callbackend-hfoy.onrender.com"




export default server;