import Background from './components/background/Background';
import PasswordGeneratorBoard from './components/password-generator-board/PasswordGeneratorBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="relative flex items-center justify-center bg-[#2e3293] w-screen h-screen overflow-hidden">
      <Background />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Password Generator Board */}
      <PasswordGeneratorBoard />
    </div>
  );
}

export default App;
