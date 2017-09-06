# Blog

`git clone https://github.com/MaitreManuel/blog.git`

## Install

1. You need to have an apache environnement. If you need one :

* Linux: [LAMP](https://forum.ubuntu-fr.org/viewtopic.php?id=1990066)
* Windows: [WAMP](http://alcatiz.developpez.com/tutoriel/installer-wamp-windows10/)

2. You move the repository here :

* Linux: `/var/www/`
* Windows: `C:/wamp/www/`

3. You install front dependencies in this folder `/blog/apps/front/` :

```
npm i                   # install node_modules and compile assets
npm run build:watch     # watcher : dev mode
```

4. You need to set-up your database in phpMyAdmin, so follow this instructions :

* In this folder `apps/back/_sql_/`, you'll find this file `blog_trystan.sql`
* Go to your [phpMyAdmin](http://localhost/phpmyadmin/)
* Click on "New databases" on left-top
* Call it `blog_trystan` and choose in interclassement utf8 -> utf8_bin
* Click on "Create"
* Then click on your blog database in left panel and go to "SQL" tab
* Copy all content of `blog_trystan.sql` and paste it in "SQL" field
* Click on "Execute"
* Done

## Use

Launch in your favorite [browser](http://localhost/blog/apps/front/src/AppBundle/Resources/index.html) and that's all
