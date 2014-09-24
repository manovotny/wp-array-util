module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'manovotny@gmail.com',
            name: 'Michael Novotny',
            url: 'http://manovotny.com',
            username: 'manovotny'
        },
        project: {
            composer: 'manovotny/wp-array-util',
            description: 'A clever array utility for WordPress development.',
            git: 'git://github.com/manovotny/wp-array-util.git',
            name: 'WP Array Util',
            slug: 'wp-array-util',
            type: 'plugin', // Should be `plugin` or `theme`.
            url: 'https://github.com/manovotny/wp-array-util',
            version: '1.0.0'
        },
        translations: {
            domain: 'wp-array-util',
            path: 'lang'
        }
    };

}());
