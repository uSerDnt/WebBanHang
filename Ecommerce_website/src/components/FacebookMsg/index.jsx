import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";
const FaceBookMsg = () => {
  return (
    <FacebookProvider appId="7135345683246178" chatSupport>
      <CustomChat pageId="103913405106091" minimized={true} />
    </FacebookProvider>
  );
};

export default FaceBookMsg;
