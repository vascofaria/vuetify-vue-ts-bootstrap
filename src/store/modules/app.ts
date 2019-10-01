import { VuexModule, Module, getModule, Mutation } from 'vuex-module-decorators';
import { App } from '../types';
import store from '../index';

@Module({
  namespaced: true,
  name: 'app',
  store,
  dynamic: true,
})
class AppModule extends VuexModule {
  private app: App | null = null;

}

export default getModule(AppModule);
