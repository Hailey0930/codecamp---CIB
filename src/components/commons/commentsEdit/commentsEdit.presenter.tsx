* as S from './commentsEdit.styles.ts'

export default CommentsEditUI () {

    return (
        <>
        <S.CommentsListDetail key={el._id}>
                  <S.CommentsDetailImage>
                    <CgProfile style={{ width: "40px", height: "50px" }} />
                  </S.CommentsDetailImage>
                  <S.CommentsDetailMain
                    key={el._id}
                    id={el.writer || ""}
                    onClick={props.onClickCommentsAlert}
                  >
                    <S.CommentsDetailInfo>
                      <S.DetailInfoUser>{el.writer}</S.DetailInfoUser>
                      <S.DetailInfoRating
                        disabled
                        defaultValue={el.rating}
                      ></S.DetailInfoRating>
                    </S.CommentsDetailInfo>
                    <S.CommentsDetailContents>
                      {el.contents}
                    </S.CommentsDetailContents>
                    <S.CommentsDetailDate>
                      {getDate(el.createdAt)}
                    </S.CommentsDetailDate>
                  </S.CommentsDetailMain>
                  <S.CommentsDetailButton>
                    <S.DetailButtonEdit>
                      <GrEdit style={{ width: "60px", height: "60px" }} />
                    </S.DetailButtonEdit>
                    <S.DetailButtonDelete
                      id={el._id}
                      onClick={props.onClickOpenDeleteModal}
                    >
                      <RiDeleteBinLine
                        style={{ width: "60px", height: "60px" }}
                      />
                    </S.DetailButtonDelete>
                  </S.CommentsDetailButton>
                </S.CommentsListDetail>
        </>        
    )
}