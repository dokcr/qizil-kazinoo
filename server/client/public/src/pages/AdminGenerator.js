import axios from "axios";

export default function AdminGenerator() {
  const generate = async () => {
    const amount = document.getElementById("a").value;
    const res = await axios.post("http://localhost:5000/admin/generate", { amount });
    document.getElementById("out").innerText = res.data.code;
  };

  return (
    <>
      <h3>Kod Generator</h3>
      <input id="a" placeholder="Məbləğ" />
      <button onClick={generate}>Yarat</button>
      <p id="out"></p>
    </>
  );
}
