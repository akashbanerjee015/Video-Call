let IS_PROD = process.env.MODE === "production" ? true : false;

const server = IS_PROD ?
    
    "https://video-callbackend-hfoy.onrender.com":
    "http://localhost:8000" ;
export default server;