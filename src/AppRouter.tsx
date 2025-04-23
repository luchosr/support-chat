import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AuthLayout } from './auth/layout/AuthLayout';
import { LoginPage } from './auth/pages/LoginPage';
import { RegisterPage } from './auth/pages/RegisterPage';
// import ChatLayout from './chat/layout/ChatLayout';
// import ChatPage from './chat/layout/pages/ChatPage';

import { sleep } from './lib/sleep';

const ChatPage = lazy(() => {
  return import('./chat/layout/pages/ChatPage');
});

const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import('./chat/layout/ChatLayout');
});

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route
          path="/chat"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <div
                    className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-primary"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }
            >
              <ChatLayout />
            </Suspense>
          }
        >
          <Route index element={<ChatPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}
