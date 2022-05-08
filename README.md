# Wordpress Factory.

Boilerplate project for easier management of a wordpress project.

# Requires
- [Composer](https://getcomposer.org/)
- [Laravel Valet](https://laravel.com/docs/9.x/valet)
- [Node 16+](https://nodejs.org/en/download/)

# Setup
Ensure you have `valet` installed, and have parked/linked `this` pwd after you have cloned.

Running composer install will install this driver [WordpressFactoryValetDriver.php](https://gist.github.com/permpkin/f1c0434796c3c9230f39a1704637a3f4) into your valet drivers folder ( e.g. `~/.config/valet/drivers/WordpressFactoryValetDriver.php` ).

It will also auto create a wp-config.php file under your `$PWD/public/` folder *( for local use only )* 

# Getting Started

Run `composer install` to install php and various other package dependencies.

Run `npm i` or `yarn` to install node dependencies.

to compile blocks and stylesheets run `npm start` to build and watch the src folder.

# Usage
To access WP Factory open your sites local url (e.g. `example.com.test`), you can either login to the Wordpress admin and click the "Wordpress Factory" link found in the admin bar, or simply head to `example.com.test/wp/factory`.

From here you can manage your sites configuration and featureset.

## Notes

most features will apply through the factory ui, however for native blocks to become available the node script needs to be run atleast once per block ( leaving the watcher running will also compile blocks subsequently built through the factory ui ).

once a block is deployed through the ui, a blocks/{name-of-block} folder is created in the wordpres theme directory (`$PWD/public/wp-content/themes/factory/blocks/`).

The folder structure is as follows:
```yaml
/blocks/
  /name-of-your-block/
    block.json # wp register instructions on block
    block.js # compiled javascript for editing block
    style.css # front-end styles
    editor.css # admin/editor styles
    block.asset.php # version + dependecy attributes for wp
```

This project is a work in progress.

## Roadmap

- version control
- deployment tools
- added block features

more to come...