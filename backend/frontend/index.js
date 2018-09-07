function generatePicture() {
   const account = PE.newAccount();
   const privateKey = account.privateKey;
   const address = account.address;

    const password = PE.checkPassword('password', 'error');
    if (!password)
        return;

    const encrypted = PE.encryptAccount(privateKey, password);

    document.getElementById('body').innerHTML = `
        <p>Your address: <span>${address}</span></p>
        <br>
        <p>Save this QR code. It's your access to account</p>
        <br>
        <img id="qr">
        <br>
        `;

    PE.createQRCode('qr', encrypted);
}