import axios from "axios";

export default function Wallet() {
  const redeem = async () => {
    const code = document.getElementById("c").value;
    const res = await axios.post("http://localhost:5000/redeem", { code });
    document.getElementById("msg").innerText =
      res.data.success ? "Balans: " + res.data.balance : res.data.error;
  };

  return (
    <>
      <h3>Kod daxil et</h3>
      <input id="c" />
      <button onClick={redeem}>Təsdiqlə</button>
      <p id="msg"></p>
    </>
  );
}
