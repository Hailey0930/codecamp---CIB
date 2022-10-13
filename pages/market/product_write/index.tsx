import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import ProductWriteContainer from "../../../src/components/units/market/write/ProductWrite.container";

function ProductWritePage() {
  return <ProductWriteContainer isEdit={false}></ProductWriteContainer>;
}

export default withAuth(ProductWritePage);
