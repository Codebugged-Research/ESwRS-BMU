import React from "react";
import CoachEditCard from "../../components/Cards/CoachEditCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <CoachEditCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
