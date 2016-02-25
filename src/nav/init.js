import {Nav} from './models';
import {NavView} from './views';


export const navInit = function(options) {
  const model = new Nav(options);
  const nav = new NavView({model: model});
  nav.render();
};
