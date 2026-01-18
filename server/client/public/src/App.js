import AdminLogin from "./pages/AdminLogin";
import AdminGenerator from "./pages/AdminGenerator";
import Wallet from "./pages/Wallet";

export default function App() {
  return (
    <>
      <h1>QIZIL KAZINO</h1>

      <a href="#admin">ADMIN</a> | <a href="#wallet">BALANS</a>

      {window.location.hash === "#admin" && <AdminLogin />}
      {window.location.hash === "#generator" && <AdminGenerator />}
      {window.location.hash === "#wallet" && <Wallet />}
    </>
  );
}
