export const AppRoutes = {
  Home: '',
  products: 'products',
  Login: 'login',
  UserProfile: 'menu-profile',
  Admin: {
    Main: 'admin',
    Panel: 'panel',
    Customers: 'customers',
    Reports: 'reports',
    Products: 'products',
    Basket: 'baskets',
    Setting: {
      setting: 'setting',
      userInfo: 'user-info',
      mainMenu:'main-menu'
    },
  },
  Error: {
    ErrorPage: '404',
    AllOthers: '**'
  },
};

export const MAIN_ROUTE = { GET: 'http://localhost:8580/api/' };
// export const MAIN_ROUTE = { GET: 'http://api.softara.ir/api/' };
export const ServerRoutes = {
  USER: {
    GENERAL: MAIN_ROUTE.GET + 'user/',
    BAN: MAIN_ROUTE.GET + 'user/toggle-ban/'
  },
  MENU: {
    GENERAL: MAIN_ROUTE.GET + 'menu',
    CHANGE_ORDER: MAIN_ROUTE.GET + 'menu/change-order',
    TOGGLE_ACTIVE: MAIN_ROUTE.GET + 'menu/toggle-active/'
  },
  PRODUCT: {
    GENERAL: MAIN_ROUTE.GET + 'product/',
    EXIST: MAIN_ROUTE.GET + 'product/toggle-exist'
  },
  BASKET: {
    GENERAL: MAIN_ROUTE.GET + 'basket/',
    SET_STATUS: MAIN_ROUTE.GET + 'basket/SetStatus'
  }
}


