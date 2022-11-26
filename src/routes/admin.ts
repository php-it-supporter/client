import majorManagerModule from '../modules/admin/modules/major';
import newManagerModule from '../modules/admin/modules/post/newsManager';
import userApproveModule from '../modules/admin/modules/user/userApprove';
import userPendingModule from '../modules/admin/modules/user/userPending';
import NewDetailModule from 'src/modules/admin/modules/post/newsManager/newsDetail';
import formCreateModule from '../modules/admin/modules/post/formCreate';
import eventManagerModule from 'src/modules/admin/modules/post/eventsManager';

export const AdminRouter = [
  userPendingModule,
  userApproveModule,
  newManagerModule,
  eventManagerModule,
  majorManagerModule,
  formCreateModule,
  NewDetailModule,
];
