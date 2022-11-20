import majorManagerModule from '../modules/admin/modules/major';
import newManagerModule from '../modules/admin/modules/post/newsManager';
import userApproveModule from '../modules/admin/modules/user/userApprove';
import userPendingModule from '../modules/admin/modules/user/userPending';
import formCreate from '../modules/admin/modules/post/newsManager/formCreate';

export const AdminRouter = [
  userPendingModule,
  userApproveModule,
  newManagerModule,
  majorManagerModule,
  formCreate,
];
