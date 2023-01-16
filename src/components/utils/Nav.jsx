import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();

  function hasDoubleSlashes(url) {
    return url.split("/").length - 1 >= 2;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div //header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          justifyItems: "center",
          height: "80px",
        }}>
        <div>
          <Link to="/home">
            <img
              src="/eco_logo_blue.jpg"
              alt="logo"
              style={{ height: "80px" }}
            />
          </Link>
        </div>
        <div>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              margin: "0",
              color: "#092C4C",
            }}>
            {props.header}
          </p>
        </div>

        <div
          style={{
            marginRight: "5%",
            gap: "30%",
            display: "flex",
            fontSize: "20px",
          }}>
          <div>
            <Link
              style={{ textDecoration: "none", color: "#092C4C" }}
              to="/home">
              Home
            </Link>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "#092C4C" }}
              to="/login">
              Logout
            </Link>
          </div>
        </div>
      </div>
      <hr style={{ margin: 0 }} />
      <hr style={{ margin: 0 }} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "300px",
            height: "91vh",
            border: "solid",
            borderWidth: "1px",
            borderColor: "#BCBCBC",
            borderRadius: "5px",
          }}>
          <div>
            <>
              <Navigation
                // you can use your own router's api to get pathname
                // activeItemId="/management/members"
                onSelect={({ itemId }) => {
                  hasDoubleSlashes(itemId) ? navigate(itemId) : void 0;
                }}
                items={[
                  {
                    title: "Accounts",
                    itemId: "/dashboard",
                    subNav: [
                      {
                        title: "Rebuils",
                        itemId: "/account/rebuild",
                      },
                    ],
                    // you can use your own custom Icon component as well
                    // icon is optional
                    // elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: "GRA",
                    itemId: "/gra",
                    // elemBefore: () => <Icon name="users" />,
                    subNav: [
                      {
                        title: "Bulk Request Upload",
                        itemId: "/gra/bulkrequests",
                      },
                      {
                        title: "Raise New Request",
                        itemId: "/gra/newrequest",
                      },
                      {
                        title: "View Submitted Request",
                        itemId: "/gra/submittedrequests",
                      },
                      {
                        title: "View All Request",
                        itemId: "/gra/allrequests",
                      },
                      {
                        title: "TIN Status",
                        itemId: "/gra/tinstatus",
                      },
                      {
                        title: "GRA Simulation",
                        itemId: "/gra/simulation",
                      },
                      {
                        title: "GRA Response Submission",
                        itemId: "/gra/submission",
                      },
                    ],
                  },
                ]}
              />
            </>
          </div>
        </div>
        <div style={{ width: "80%" }}>{props.component}</div>
      </div>
    </div>
  );
}
