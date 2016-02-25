import {Nav} from './models';
import {NavView} from './views';

export const navInit = function() {
  const model = new Nav();
  const nav = new NavView({model: model});
  nav.render();
};
