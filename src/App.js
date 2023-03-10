import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { Descriptions } from "antd";

function App() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const upload = (formData) => {
    axios
      .post("http://localhost:3003/api/users/upload/7", formData)
      .then((response) => {
        console.log(response);
        console.log("hahaha");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3003/api/image")
      .then((response) => setMessage(response.data.content))
      .catch((error) => console.error(error));
  }, []);
  console.log(message);

  const onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("file", file);
    upload(data);
  };

  const handleChangePic = (e) => {
    console.log(e.target.files);
    const file = e.target.files;
    setFile(file);
  };

  return (
    <div>
      <h1>hello</h1>
      <form onSubmit={onsubmit}>
        <input multiple type="file" onChange={handleChangePic} />
        <button type="submit">hahahuhu</button>
      </form>
    </div>
  );
}

export default App;
