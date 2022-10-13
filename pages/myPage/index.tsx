import { withAuth } from "../../src/components/commons/hoc/withAuth";
import MyPageContainer from "../../src/components/units/myPage/MyPage.container";

function MyPage() {
  return <MyPageContainer></MyPageContainer>;
}

export default withAuth(MyPage);
