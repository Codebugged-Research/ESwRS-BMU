import React from "react";
import RakeEditCard from "../../components/Cards/RakeEditCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <RakeEditCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
