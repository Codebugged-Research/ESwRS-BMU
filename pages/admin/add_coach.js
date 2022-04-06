import React from "react";
import CoachFormCard from "../../components/Cards/CoachFormCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <CoachFormCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
