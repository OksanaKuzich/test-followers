import { GlobalStyle } from 'utils/globalStyles';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Preloader } from './Preloader/Preloader';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Tweets from 'pages/Tweets/Tweets';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};
