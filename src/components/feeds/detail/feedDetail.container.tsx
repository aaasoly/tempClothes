import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import FeedDetailUI from "./feedDetail.presenter";
import { M_DELETE_FEED, Q_FETCH_FEED } from "./feedDetail.queries";

function FeedDetail() {
  const router = useRouter();
  const { data } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: String(router.query.feedId),
    },
  });
  const [deleteFeed] = useMutation(M_DELETE_FEED);

  const onClickDeleteFeed = async () => {
    try {
      await deleteFeed({
        variables: { feedId: String(router.query.feedId) },
      });
      alert("게시물이 삭제되었습니다");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <FeedDetailUI data={data} onClickDeleteFeed={onClickDeleteFeed} />
    </>
  );
}

export default FeedDetail;
