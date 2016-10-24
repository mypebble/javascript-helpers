import {Collection} from 'backbone';
import NotificationModel from './models';


export const NotificationCollection = Collection.extend({
  model: NotificationModel,
  url: '/notifications/'
});
