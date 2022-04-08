import React from "react";
import TrainEditCard from "../../components/Cards/TrainEditCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <TrainEditCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
