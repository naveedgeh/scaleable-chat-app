import http from 'http';
import SocketService  from './services/socket';
function init(){
    let socketSerive=new SocketService();
    const httpServer=http.createServer();

    // socket server init
    socketSerive.io.attach(httpServer);
    const PORT=process.env.PORT || 8000;
    httpServer.listen(PORT,()=>{
        console.log(`HTTP SERVER RUNNING ON PORT ${PORT}`);
    });
    /// Socket listener
    socketSerive.initListeners();
}

init();