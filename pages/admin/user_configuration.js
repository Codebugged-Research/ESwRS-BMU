import React from "react";
import RakeTable from "../../components/Cards/RakeTable.js";
import UserTable from "../../components/Cards/UserTable.js";

// components

// layout for page

import Admin from "../../layouts/Admin.js";

export default function Tables() {
  return (
    <div >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <UserTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </div>
  );
}

Tables.layout = Admin;
