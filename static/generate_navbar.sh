#! /bin/bash

output=includes/navbar.html
base=pages

cat << EOF > $output
<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/index.html">Jupotter's Lair</a>
        </div>

        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li id="navbar-home"><a href="/index.html">Home</a></li>
EOF

for dir in $(find $base/* -type d); do
    name=$(basename $dir)
    cat << EOF >> $output
    <li class="dropdown">
    <a href="#" id="navbar-$name" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">$name<span class="caret"></span></a>
    <ul class="dropdown-menu">
EOF

    for file in $(find $dir -type f); do
        name=$(basename ${file%.*} | sed -e 's/_/ /g')
        id=$(echo ${file%.*} | sed -e 's#/#_#g')
        cat << EOF >> $output
        <li id="navbar-$id"><a href="/$file">$name</a></li>
EOF
    done
    echo "</ul></li>" >> $output
done

cat << EOF >> $output
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>
EOF
