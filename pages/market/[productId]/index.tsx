import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import ProductDetailContainer from "../../../src/components/units/market/detail/ProductDetail.container";

function MarketDetailPage() {
  return <ProductDetailContainer></ProductDetailContainer>;
}

export default withAuth(MarketDetailPage);
