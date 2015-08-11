module.exports = function(grunt) {
    grunt.initConfig( {
        bake: {
            build: {
                files: {
                    "dist/index.html": "static/index.html",
                    "dist/sierra.html": "static/sierra.html",
                    "dist/zombie.html": "static/zombie.html",
                    "dist/light-out.html": "static/light-out.html",
                }
            },
        },
    } )

    grunt.loadNpmTasks( "grunt-bake" );

    grunt.registerTask('default', ['bake']);
};
