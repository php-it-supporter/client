import homeModules from '../modules/user/modules/home';
import loginModule from '../modules/user/modules/login';
import newsModule from '../modules/user/modules/news';
import registerModule from '../modules/user/modules/register';

export const UserRouter = [loginModule, registerModule, homeModules, newsModule];
