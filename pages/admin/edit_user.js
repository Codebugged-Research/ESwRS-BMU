import React from "react";
import UserEditCard from "../../components/Cards/UserEditCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <UserEditCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
