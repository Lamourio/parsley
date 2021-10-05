const types = ["text", "image", "video", "imageFromVideo", "quiz", "gate", "group", "tunnel"];



const options = [
  { divert: "nodeId" }, // requiare
  { flagName: "string" }, // optional needed to track the state of progresstion : presistance
  { extra: "a,b,c,d" }, // optional needed to identifie or add extra parametre to the object : only when used
  { blockNext: true|false }, // default : true, optional use to block the next node or let it pass before the end of the current
  { checkPoint: "checkPoint name" }, // optional save from this node and give it a name
  { ifConditions: "flagName", notIfConditions: "flagName", linkPath: "nodeId" }, // optional if condition skip this node and go to linkPath
];

const nodeText = {
  node_type: "text", // requiare
  content: [
    // requiare
    "text", // requiare
    ...options,
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



const nodeGate = {
  node_type: "gate",
  content: [
    "text",
    {
      option: "text option",
      linkPath: "idNode",
      ifCondition: "flags",
      notIfConditions: "flags",
      visited : "flags"
    },
    {
      option: "text option",
      linkPath: "idNode",
      ifCondition: "flags",
      notIfConditions: "flags",
      visited : "flags"
    },
    {
      option: "text option",
      linkPath: "idNode",
      ifCondition: "flags",
      notIfConditions: "flags",
      visited : "flags"
    },
  ],
};
