
chmod +x scripts/*.sh

npm install

export PKG=eslint-config-airbnb-base;
npm info "$PKG@latest" peerDependencies --json \
  | command sed 's/[\{\},]//g ; s/: /@/g' \
  | xargs npm install --save-dev "$PKG@latest"

npm run smoke-setup
npm run dbuild
