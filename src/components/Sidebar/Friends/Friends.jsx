import React from "react";
import s from "./Friends.module.css";
import Friend from "../Friend/Friend";
import { useSelector } from "react-redux";

const Friends = () => {
   const friendsData = useSelector((state) => state.sidebar?.friendsData || []);
   const friendElement = friendsData.map((f) => (
      <Friend key={f.id} name={f.name} id={f.id} />
   ));
   return <div className={s.f}>{friendElement}</div>;
};

export default Friends;
