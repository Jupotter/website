module.exports = function(grunt) {
    grunt.initConfig( {
        bake: {
            build: {
                options: {
                    basePath: 'include/'
                },
                files: [ {
                    expand: true,
                    cwd: 'static/',
                    src: ['**/*.html'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'temp-dist/',
                    src: ['**/*.html'],
                    dest: 'dist/'
                } ]
            },
        },
        shell: {
            copy: {
                command: function (folder) {
                    return 'cp -vr '+ folder + ' dist/';
                }
            },
        },
        copy: {
            build: {
                files: [
                    { cwd: "static/content", src: "**/*", dest: "dist/content", expand: true, },
                    { cwd: "static/octicons", src: "**/*", dest: "dist/octicons", expand: true, },
                ],
            },
        },
        md2html: {
            options: {
                layout: 'include/layout.html'
            },
            build: {
                files: [ {
                    expand: true,
                    cwd: 'static/',
                    src: ['**/*.md', '!**/README.md'],
                    dest: 'temp-dist/',
                    ext: '.html'
                } ]
            }
        },
        watch: {
            files: [ "static/**/*.{html,js}", "static/content/**/*"],
            tasks: ['bake'],
        },
    } )

    grunt.loadNpmTasks( "grunt-bake" );
    grunt.loadNpmTasks( "grunt-copy" );
    grunt.loadNpmTasks( "grunt-md2html");
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-shell" );

    grunt.registerTask('default', ['shell:copy:content', 'shell:copy:octicons', 'md2html', 'bake']);
};
