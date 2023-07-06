import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from '@shopify/polaris';

function Orders() {
  const navigate = useNavigate();

  return (
    <Page
      title="Orders"
      backAction={{content: "Home", onAction: () => navigate("/") }}
    >

    </Page>
  );
}

export default Orders;
