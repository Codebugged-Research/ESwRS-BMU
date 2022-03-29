import React from "react";
import FormCard from "../../components/Cards/FormCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <FormCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
