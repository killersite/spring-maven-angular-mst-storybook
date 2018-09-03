import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';
import addCssWarning from '../src/cssWarning';

addCssWarning();

setOptions({
  hierarchySeparator: /\/|\./, // matches a . or /
  hierarchyRootSeparator: /\|/ // matches a |
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require('../src/stories');

  // automatically import all story ts files that end with *.stories.ts
  const req = require.context('../src', true, /\.stories\.ts$/);
  // const req = require.context('../src/stories', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// configure(() => require('../src/stories'), module);
