import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from '@shopify/polaris';

function Products() {
  const navigate = useNavigate();

  return (
    <Page
      title="Products"
      backAction={{content: "Home", onAction: () => navigate("/") }}
    >

    </Page>
  );
}

export default Products;
