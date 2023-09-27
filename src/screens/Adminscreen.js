import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes , Route} from "react-router-dom";
import { Link } from "react-router-dom";
import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={"/admin/userslist"}>Users List</Link>
            </li>
            <li>
              <Link to={"/admin/pizzaslist"}>Pizzas List</Link>
            </li>
            <li>
              <Link to={"/admin/addpizza"}>Add Pizza</Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"}>Orders List</Link>
            </li>
          </ul>
<Routes>
 
           <Route path="/admin" Component={Userslist}  />
            <Route path="/admin/userslist" Component={Userslist}  />
            <Route path="/admin/orderslist" Component={Orderslist}  />
            <Route path="/admin/pizzaslist" Component={Pizzaslist}  />
            <Route path="/admin/addpizza" Component={Addpizza}  />
            <Route path="/admin/editpizza/:pizzaid" Component={Editpizza}/>
</Routes>
          
        </div>
      </div>
    </div>
  );
}