import Pageable from 'topbar/collections/page';
import {NotificationModel} from 'topbar/models';


export const NotificationCollection = Pageable.extend({
  model: NotificationModel
});
