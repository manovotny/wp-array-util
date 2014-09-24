module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'manovotny@gmail.com',
            name: 'Michael Novotny',
            url: 'http://manovotny.com',
            username: 'manovotny'
        },
        files: {
            browserify: 'bundle'
        },
        paths: {
            curl: 'curl_downloads',
            source: 'src',
            translations: 'lang'
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
        }
    };

}());
