import AuthLayout from './auth/layout/AuthLayout';
import ChatLayout from './chat/layout/ChatLayout';
import ChatPage from './chat/layout/pages/ChatPage';

function App() {
  return (
    <>
      <ChatLayout>
        <ChatPage />
      </ChatLayout>
    </>
  );
}

export default App;
