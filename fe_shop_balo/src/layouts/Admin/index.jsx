// @flow
import * as React from "react";
import Header from "../../components/Layouts/Header";
import PropTypes from "prop-types";
import ListGroup from "../../components/Layouts/ListGroup";
import { menu_admin_item } from "../../asset/data/menu_admin_item";
import Drawer from "../../components/Layouts/Drawer";
import { FaUsers } from "react-icons/fa";
import "./style.css";

export function AdminLayout(props) {
  const { slot } = props;
  const menu_admin_item_data = [...menu_admin_item];
  return (
    <>
      <Header />
      <Drawer
        slot={
          <>
            {/* <img src={Logo} alt="Logo" width="80" height="80" /> */}

            <h5 className="font-weight-black text-center text-white mt-4">
              <FaUsers /> Admin: Nguyen Van A
            </h5>
            <div className="py-5">
              {/* {user?.type === "Admin" && <ListGroup data={menu_item_admin} />} */}
              {/* {user?.type === "Staff" && <ListGroup data={menu_item_staff} />} */}
              <ListGroup data={menu_admin_item_data} />
            </div>
          </>
        }
      />
      <main id="main" className="main p-5">
        {slot}
      </main>
    </>
  );
}
AdminLayout.propTypes = {
  slot: PropTypes.element.isRequired,
};
