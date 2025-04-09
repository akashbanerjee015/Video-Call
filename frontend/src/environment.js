let IS_PROD = True;
const server = IS_PROD ?
    "http://localhost:8000" :
    "https://video-callbackend-hfoy.onrender.com"




export default server;