import React from 'react'
import NotificationTable from '../../components/Cards/NotificationTable'
import Admin from '../../layouts/Admin'

const notification = () => {
  return (
    <div >
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <NotificationTable />
      </div>
      {/* <div className="w-full mb-12 px-4">
        <CardTable color="dark" />
      </div> */}
    </div>
  </div>
  )
}

export default notification

notification.layout=Admin