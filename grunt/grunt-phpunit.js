module.exports = function (grunt) {

    'use strict';

    grunt.config('phpunit', {
        classes: {
            dir: 'tests'
        },
        options: {
            bin: 'vendor/bin/phpunit',
            colors: true
        }
    });

};