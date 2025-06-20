const os = require("os") ;   //  imports the built-in Node.js os module — used to get system information.
console.log(os.platform())  // Returns your operating system platform (windos / macos etc).
console.log(os.type()) ;    // Returns the OS name/type. (windows11 ect)
console.log(os.hostname()) ;  //Returns the computer's name on the network.
console.log(os.cpus().length) ; // tells the cores present in cpu
console.log(os.arch()) ;       //Returns your CPU architecture. (32-bit or 64-bit)
console.log(os.uptime()) ;     //Returns the number of seconds the system has been running.
console.log(os.userInfo()) ;    //Returns details about the current user
console.log(os.networkInterfaces()) ;   //Returns an object with info about your system’s network interfaces (Wi-Fi, Ethernet, loopback, etc.).
