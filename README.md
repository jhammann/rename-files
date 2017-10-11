## Rename files

I had a bunch of files I wanted to keep in the original order but the filenames were all over the place so I created this workflow which takes a list of files (determined in `input.js`) and renames each of them by their index in the array using [gulp-rename](https://github.com/hparra/gulp-rename).

#### Installation
Clone this repository and execute the following command in the root of the cloned directory:

```bash
$ yarn install
```

After which you adjust `input.js` with your requested file order. Then execute:

```bash
$ gulp
```

After this you'll have a `new` directory (this script doesn't overwrite files) with the new files.
