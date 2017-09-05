# Blog

`git clone https://github.com/MaitreManuel/blog.git`

## Install

1. You need to have an apache environnement. If you need one :

* Linux: [LAMP](https://forum.ubuntu-fr.org/viewtopic.php?id=1990066)
* Windows: [WAMP](http://alcatiz.developpez.com/tutoriel/installer-wamp-windows10/)

2. You move the repository here :

* Linux: `/var/www/`
* Windows: `C:/wamp/www/`

3. You install front dependencies :

```
npm i                   # install node_modules and compile assets
npm run build:watch     # watcher : dev mode
```

## Use

Launch in your favorite [browser](http://localhost/blog/apps/front/src/AppBundle/Resources/index.html) and that's all
