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

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftDropzone from "components/SoftDropzone";

function Media() {
  return (
    <SoftBox>
      <SoftTypography variant="h5">Media</SoftTypography>
      <SoftBox mt={3}>
        <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Product Image
          </SoftTypography>
        </SoftBox>
        <SoftDropzone options={{ addRemoveLinks: true }} />
      </SoftBox>
    </SoftBox>
  );
}

export default Media;
