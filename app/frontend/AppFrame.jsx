// AppFrame.js
import React from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { Frame, Navigation } from "@shopify/polaris";
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import Routes from "./Routes";

function AppFrame() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Frame
      navigation={
        <Navigation location={location.pathname}>
          <Navigation.Section
            items={[
              {
                label: "Dashboard",
                icon: HomeMinor,
                onClick: () => navigate("/"),
              },
              {
                label: "Orders",
                icon: OrdersMinor,
                onClick: () => navigate("/orders"),
              },
              {
                label: "Products",
                icon: ProductsMinor,
                onClick: () => navigate("/products"),
              },
            ]}
          />
        </Navigation>
      }
    >
      <Routes />
    </Frame>
  );
}

export default AppFrame;
