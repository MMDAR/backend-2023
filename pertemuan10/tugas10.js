/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */

const showDownload = (result) => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    console.log("Download 35%");
    delay(1000).then(() => {
        console.log("Download 79%");
        return delay(1000);
    }).then(() => {
        console.log("Download 99%");
        return delay(1000);
    }).then(() => {
        console.log(`File didownload : ${result}`);
    });
}

const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "DANA Mod Unlimited Saldo.apk";
            resolve(result);
        }, 1500);
    });
}

const main = () => {
    download()
        .then(showDownload);
};

main();
