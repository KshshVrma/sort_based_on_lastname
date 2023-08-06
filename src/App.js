import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [one, setOne] = useState([]);
  let users = [
    { firstname: "jai", lastname: "sinha" },
    { firstname: "Kashish", lastname: "verma" },
    { firstname: "rudra", lastname: "pratap" },
    { firstname: "a", lastname: "z" }
  ];
  let p;
  useEffect(() => {
    users.sort(function (a, b) {
      if (a.lastname < b.lastname) return -1;
      if (a.lastname > b.lastname) return 1;
      return 0;
    });
    setOne(users);
  }, []);

  const t = one.map((e) => {
    return (
      <li>
        {e.firstname} {e.lastname}
      </li>
    );
  });

  return <div className="App">{t}</div>;
}
