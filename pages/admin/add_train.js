import React from "react";
import TrainFormCard from "../../components/Cards/TrainFormCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <TrainFormCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
