# explain xkcd Chrome Extension

[Install it here!](https://chrome.google.com/webstore/detail/explain-xkcd/fpmkngibepdfagmmmenjbfmgohlddakg)

A Chrome Extension that allows you to open the explanation wiki for any xkcd comic with the click of a button.

Whenever I don't understand an xkcd comic, I open a new tab and type "explain xkcd {title of comic I don't understand}" and click the first result. While this approach works fine, I'm too lazy to spend 5 seconds Googling the explanation myself, so I made this extension.

Now, you can click on the picture of man with the black hat at the top right of your browser and instantly navigate to the explanation page.

## Development

```sh
git clone https://github.com/kylejlin/explain-xkcd.git
cd explain-xkcd
chmod +x build
```

Then you can use

```sh
./build
```

to zip up the necessary files for distribution.
The resulting zip file can be found at `./artifacts/explain-xkcd.zip`.

## Photo Credits

Default icon (Black Hat): Randall Munroe - from xkcd.com/1023 "Kill Hitler"
