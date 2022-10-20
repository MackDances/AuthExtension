# AuthExtension

<img src="icon.png" />

Use this extension to generate your 2FA OTPs.

## How to use?
1. Load the extension [Instructions](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)
2. Open the extension and select `Add/Edit Secret` button.
3. Enter the secret from your provider(google, microsoft, etc).
4. After setting the secret, you can enter the OTP generated into the provider's site.
5. From next use, you do not need to set the secret again, simply open the extension and it will show you the latest OTP, which you can copy and use as per needed.

## How it works?
- The extension uses a npm package [link](https://www.npmjs.com/package/totp-generator) to generate a new TOTP every time.
- The npm package follows the RFC 6238 TOTP spec to generate new OTPs based on time and the secret. [Read More](https://www.rfc-editor.org/rfc/rfc6238)
- The extension uses the chrome storage API to be able to store the secret safely and locally on the user's computer.

## Screenshots
TBA

## Credits
1. totp-generator https://www.npmjs.com/package/totp-generator
2. RFC TOTP spec https://www.rfc-editor.org/rfc/rfc6238
3. JSSHA https://www.npmjs.com/package/jssha
4. Icon image: https://www.google.com/url?sa=i&url=https%3A%2F%2Fportswigger.net%2Fdaily-swig%2Fauthentication-bypass-bug-in-nextauth-js-could-allow-email-account-takeover&psig=AOvVaw0ZlLzo-3KdE9_WtNnQmBgf&ust=1666331408338000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJD82K-O7voCFQAAAAAdAAAAABAE
