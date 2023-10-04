import AuthLayout from "./components/AuthLayout/AuthLayout.jsx";
import Login from "./modules/LogIn/Login.jsx";
import "./index.scss"

function App() {
  return (
    <>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </>
  );
}

export default App;
