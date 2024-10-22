import HomePage from 'pages/Home';
import ErrorPage from 'pages/Error';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
