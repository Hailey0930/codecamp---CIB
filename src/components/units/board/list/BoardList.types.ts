import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToCreateBoard: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  BoardsCount?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
  search: string;
}

export interface ITokenProps {
  isMatched: boolean;
}
