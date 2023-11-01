/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2023 BalAsha - Nurture (https://balasha-nurture.web.app)

Coded by www.bal-asha.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// BalAsha - Nurture example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// ProductPage page components
import ProductImages from "layouts/ecommerce/products/product-page/components/ProductImages";
import ProductInfo from "layouts/ecommerce/products/product-page/components/ProductInfo";

// Data
import dataTableData from "layouts/ecommerce/products/product-page/data/dataTableData";

function ProductPage() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Card sx={{ overflow: "visible" }}>
          <SoftBox p={3}>
            <SoftBox mb={3}>
              <SoftTypography variant="h5" fontWeight="medium">
                Product Details
              </SoftTypography>
            </SoftBox>

            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} xl={5}>
                <ProductImages />
              </Grid>
              <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
                <ProductInfo />
              </Grid>
            </Grid>

            <SoftBox mt={8} mb={2}>
              <SoftBox mb={1} ml={2}>
                <SoftTypography variant="h5" fontWeight="medium">
                  Other Products
                </SoftTypography>
              </SoftBox>
              <DataTable
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
              />
            </SoftBox>
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductPage;
