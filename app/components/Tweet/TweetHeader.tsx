import React from "react";
import { RenderUsername } from "./RenderUsername";
import { UserProfile } from "./UserProfile";

export const TweetHeader = ({ e, singleTweetMode }: any) => {
  return (
    <div className="flex w-full flex-col">
      <div className={singleTweetMode ? "flex" : ""}>
        {singleTweetMode ? <UserProfile userPfp={e.userPFP} /> : ""}
        <RenderUsername
          id={e.id}
          username={e.username}
          ad={e.userad}
          userpfp={e.userPFP}
          singleTweetMode={singleTweetMode}
        />
      </div>
      <p>{e.text}</p>
    </div>
  );
};
