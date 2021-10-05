const types = ["text", "image", "video", "imageFromVideo", "quiz", "gate", "group"];

const nodeGroup = {
    // TODO : need more work on it
    // the idea of this node is to group nodes inside a group
    // ----------------------------------
    // group inside a group
    // or 
    // node inside a group 
  
    node_type: "group", // requiare
    content: [
      "group name",
      {node : "nodeId1"},
      {node : "nodeId2"},
      {node : "nodeId3"},
    ],
  };