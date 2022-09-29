import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailPresenter from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { message } from "antd";

export default function BoardDetailContainer() {
  // router 코드 생성
  const router = useRouter();

  // 게시물 가져오기 query 코드 생성
  const { data: boardData } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  // 게시물 삭제하기 mutation 코드 생성
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDeleteButton = async () => {
    if (typeof router.query.boardId !== "string") return;
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });

      message.success(
        `${String(router.query._id)
          .slice(-3)
          .toUpperCase()}번 게시물이 삭제되었습니다.`,
        3
      );
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdateButton = () => {
    router.push(`/boards/${router.query.boardId}/freeboard_edit`);
  };

  const onClickMoveToListButton = () => {
    router.push(`/boards/`);
  };

  // 좋아요 mutation 코드 생성
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickThumbsUp = () => {
    if (typeof router.query.boardId !== "string") return;
    likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  // 싫어요 mutation 코드 생성
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickThumbsDown = () => {
    if (typeof router.query.boardId !== "string") return;
    dislikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  return (
    <BoardDetailPresenter
      boardData={boardData}
      onClickDeleteButton={onClickDeleteButton}
      onClickUpdateButton={onClickUpdateButton}
      onClickMoveToListButton={onClickMoveToListButton}
      onClickThumbsUp={onClickThumbsUp}
      onClickThumbsDown={onClickThumbsDown}
    ></BoardDetailPresenter>
  );
}
