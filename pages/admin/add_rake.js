import React from "react";
import RakeFormCard from "../../components/Cards/RakeFormCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <RakeFormCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
