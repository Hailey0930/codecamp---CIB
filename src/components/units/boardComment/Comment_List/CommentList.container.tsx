import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import CommentListPresenter from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "../Comment_List/CommentList.queries";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function CommentListContainer() {
  // router 코드 생성
  const router = useRouter();

  // 댓글 가져오기 query 코드 생성
  const { data: commentsData, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  // 댓글 infinite scroll 생성
  const FetchMoreComments = () => {
    if (!commentsData) return;

    fetchMore({
      variables: {
        page: Math.ceil(commentsData?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <CommentListPresenter
      commentsData={commentsData}
      FetchMoreComments={FetchMoreComments}
    ></CommentListPresenter>
  );
}
