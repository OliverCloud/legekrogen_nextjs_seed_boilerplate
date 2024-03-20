"use client"
import { useEffect, useState } from "react";
import SubscribersCard from "./subscribersCard/subscribersCard";

const Subscribers = () => {

  const [subs, setSubs] = useState([]);

  useEffect(() => {
    fetch("/api/subscribers")
      .then((res) => res.json())
      .then((data) => setSubs(data));
  }, []);

  return (
    <div>
      <h1>Subs</h1>
      
      {subs.map((sub, index) => (
          <SubscribersCard key={index} sub={sub} />
      ))}
      
    </div>
  );
}
export default Subscribers;