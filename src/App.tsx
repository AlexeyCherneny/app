import router from './router/router.ts';
import { RouterProvider } from 'react-router-dom';

import ThemeContainer from 'theme/ThemeContainer';

const App = () => (
  <ThemeContainer>
    <RouterProvider router={router} />
  </ThemeContainer>
);

export default App;
