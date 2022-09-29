import BoardWriteContainer from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function FreeBoardMutationPage() {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return;
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  return <BoardWriteContainer isEdit={true} data={data}></BoardWriteContainer>;
}
