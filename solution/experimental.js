const types = ["text", "image", "video", "imageFromVideo", "quiz", "group","tunnel"];

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


  
  const nodeTunnel = {
    node_type: "tunnel", // requiare
    content: [
      // requiare
      "text", // requiare TODO : maybe we can use this 
      ...options, // blockNext default : false  
    ],
  };
  
  const nodeVideo = {
    node_type: "video", // requiare
    content: [
      // requiare
      "url", // requiare
      ...options,
      {start : "numberInSeconde"}, //default : 0, optional from where start to play 
      {end : "numberInSeconde"}, // default : the end of the video, optional from where it end
      
    ],
  };
  
  const nodeImageFromVideo = {
    node_type: "imageFromVideo", // requiare
    content: [
      // requiare
      "urlVideo", // requiare
      ...options,
      { imageAt: "numberInSeconde" },
    ],
  };
  
  const nodeImage = {
    node_type: "image", // requiare
    content: [
      // requiare
      "url", // requiare
      { alt: "image alt" }, // optional
      ...options,
    ],
  };
  
  const nodeQuiz = {
    // TODO : need more work on it
    // the idea of this node is to add a question and answers 
    node_type: "quiz", // requiare
    content: [
      "idQuiz", // requiare
    ],
  };
  
  

  