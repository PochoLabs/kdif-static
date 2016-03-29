# FONHARE Wireframe
A custom wireframe for FONHARE

### Development Workflow

Make sure you have the following installed:

1. Node
2. NPM
3. Bower
4. Gulp
5. Harp.js
6. Sass

#### Initial Setup

```
npm install
```

```
bower install
```

```
gulp copy-assets
```

#### While Developing

This setup takes advantage of Harp.js to serve locally. In the root directory run:

```
harp server
```

#### Preparinp for GitHub Pages

Once you have developed to a point you feel comfortable publishing, follow this Workflow:

1. Stop Harp server `Ctrl + C`
2. Switch to gh-pages branch
3. Update gh-pages branch from master branch
4. Change referenced css from `_sass/_theme.scss` to `css/theme.css`.
4. `harp compile ./ html/`
5. Move the html from 'html' to the root of the directory
