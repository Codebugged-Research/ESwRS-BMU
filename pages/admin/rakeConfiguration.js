import React from "react";
import RakeTable from "../../components/Cards/RakeTable.js";

// components

// layout for page

import Admin from "../../layouts/Admin.js";

export default function Tables() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <RakeTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </div>
  );
}

Tables.layout = Admin;
