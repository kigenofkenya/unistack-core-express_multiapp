           | OSX        | Windows    | Linux      | iOS        | Android    
---------- | ---------- | ---------- | ---------- | ---------- | ----------



* Application
* Application Schema (app:// protocol for packaged apps)
* Box (Generic segmentation/border/well widget)
* Button (Normal, Toggle, Radio, Checkbox)
* Button Groups (Segmented Buttons)
* Color, Color Picker, ColorWell (ColorLabel)

Create native applications with Javascript, CSS, HTML5 and node.



* **Why not as a node module, why a whole other executable?** node does not have bindings for application event loops, in addition resources (when an application is packaged) must be available prior to node spinning up, this required modifiying the front start up layer of node to perform these actions, outside of that the code base for node is the same.
* **What platforms does this aim to support?** For the moment OSX and Windows are nearing completion, OSX is in preview release and the Windows preview is coming in October. Shortly after we'll have a QT Linux version. iOS and Android have several other issues/challenges that make it difficult to integrate, but our hope and target is to support all platforms.

Section note: [LinkName](linkUrl)


## Installation
```bash
express -h
Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass) (defaults to plain css)
    -f, --force         force on non-empty directory
```


use options with the prefix - or -- . Either is okay.

An example below.
```bash
express 

  