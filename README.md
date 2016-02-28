# sprity-cli

install globally

```shell
npm install -g sprity-cli
```

usage:

```shell
sprity create <out> <src>... [options]
 
out     path of directory to write sprite file to
src     glob strings to find source images to put into the sprite
```

run this command to create sprite + scss file

```shell
sprity create dist/sprites/ src/**/*.png -s ../scss/sprites.scss --margin 0 -p sass -c ../sprites --style-indent-char tab --style-indent-size 1
```

let me break that down:

```shell
-s, --style             file to write css to, if omitted no css is written (relative to out path)
-c, --css-path          path or url of sprites on the web server used to reference the sprite in the styles (relative or absolute path or full url)  [../images]
-p, --processor         style processing module  [css]
--margin                margin in px between tiles. Default: 4
--style-indent-char     character used for indentation of styles (space|tab)  [space]
--style-indent-size     Number of characters used for indentation of styles  [2]
```


[more info](https://www.npmjs.com/package/sprity-cli)