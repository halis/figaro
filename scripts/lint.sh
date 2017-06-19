
export NODE_PATH=./src
eslint . --ext js,jsx --fix \
&& echo No JS lint errors \
&& ./node_modules/.bin/sass-lint '**/*.scss' -v \
&& echo No Sass lint errors \
&& echo;
