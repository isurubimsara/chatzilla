import React from 'react';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectID="efa4b673-13c1-4ddf-b5bf-cd00510ce165"
        username={props.user.username}
        secret={props.user.secret}
        private_key='e5374696-36ad-4ca8-8a10-52a9e12a2fc3'
      />
    </div>
  );
};

export default ChatsPage;
