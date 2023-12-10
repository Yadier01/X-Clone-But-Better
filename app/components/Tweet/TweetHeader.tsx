import React from "react";
import { RenderUsername } from "./RenderUsername";
import { UserProfile } from "./UserProfile";

export const TweetHeader = ({ e, className }: any) => {
  return (
    <div className="flex w-full flex-col">
      <div className={className ? "flex" : ""}>
        {className ? <UserProfile userPfp={e.userPFP} /> : ""}
        <RenderUsername
          id={e.id}
          username={e.username}
          ad={e.userad}
          userpfp={e.userPFP}
          className={className}
        />
      </div>
      <p>{e.text}</p>
    </div>
  );
};
