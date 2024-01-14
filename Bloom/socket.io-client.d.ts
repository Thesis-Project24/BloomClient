declare module "socket.io-client" {
  interface Socket {
    emit(event: string, ...args: any[]): Socket;
    on(event: string, callback: (...args: any[]) => void): Socket;
    off(event: string, callback?: (...args: any[]) => void): Socket;
    // Add any additional properties or methods here, if needed
  }

  const io: {
    connect(uri?: string, options?: any): Socket;
   
    // Add any additional properties or methods for 'io' here, if needed
  };

  export = io;

}