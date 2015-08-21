module.exports = function(grunt) {
    grunt.initConfig( {
        bake: {
            build: {
                files: {
                    "dist/index.html": "static/index.html",
                    "dist/sierra.html": "static/sierra.html",
                    "dist/zombie.html": "static/zombie.html",
                    "dist/light-out.html": "static/light-out.html",
                    "dist/robots.txt": "static/robots.txt",
                },
            },
        },
        copy: {
            files: {
                cwd: "static/content",
                src: "**/*",
                dest: "dist/content",
                expand: true,
            },
        }
    } )

    grunt.loadNpmTasks( "grunt-bake" );
    grunt.loadNpmTasks( "grunt-copy" );

    grunt.registerTask('default', ['bake', 'copy']);
};
