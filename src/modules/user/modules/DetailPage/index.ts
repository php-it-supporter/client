import DetailPage from './DetailPage';

interface Modules {
  routeProps: {
    key: string;
    path: string;
  };
  component: () => JSX.Element;
}

const detailPageModules: Modules = {
  routeProps: {
    key: '/:id',
    path: '/:id',
  },
  component: DetailPage,
};

export default detailPageModules;
