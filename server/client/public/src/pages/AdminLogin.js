import axios from "axios";

export default function AdminLogin() {
  const login = async () => {
    const user = document.getElementById("u").value;
    const pass = document.getElementById("p").value;

    const res = await axios.post("http://localhost:5000/admin/login", { user, pass });
    if (res.data.success) window.location.hash = "#generator";
    else alert("Yanlış login");
  };

  return (
    <>
      <h3>Admin Login</h3>
      <input id="u" placeholder="user" />
      <input id="p" type="password" placeholder="pass" />
      <button onClick={login}>Login</button>
    </>
  );
}
