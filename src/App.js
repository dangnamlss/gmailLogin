import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { AccountForm } from "./pages/LogIn/AccountForm";
import { PasswordForm } from "./pages/LogIn/PasswordForm";
import { SignUp } from "./pages/SignUp";
import { ProtectedRoutes } from "./utils/ProtectedRoute";
import { Home } from "./pages/Home";

import "./App.css";
import { ForgetEmailForm } from "./pages/ForgetEmailForm";
import { CreateAccountForm } from "./pages/CreateAccountForm";
import { ForgetPasswordForm } from "./pages/ForgetPasswordForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/auth" element={<AuthLayout />}>
            <Route exact path="/auth/log-in">
              <Route
                exact
                path="/auth/log-in/account"
                element={<AccountForm />}
              />
              <Route
                exact
                path="/auth/log-in/password"
                element={<PasswordForm />}
              />
            </Route>
            <Route exact path="/auth/sign-up" element={<SignUp />} />
            <Route
              exact
              path="/auth/find-email"
              element={<ForgetEmailForm />}
            />
            <Route
              exact
              path="/auth/create-account"
              element={<CreateAccountForm />}
            />
            <Route
              exact
              path="/auth/find-password"
              element={<ForgetPasswordForm />}
            />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
