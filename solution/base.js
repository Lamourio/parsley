const types = ["text","gate"];



const options = [ // every node has the ability to use this options
  { divert: "nodeId" }, // requiare
  { flagName: "string" }, // optional needed to track the state of progresstion : presistance
  { extra: "a,b,c,d" }, // optional needed to identifie or add extra parametre to the object : only when used
  { blockNext: true|false }, // default : true, optional use to block the next node or let it pass before the end of the current
  { checkPoint: "checkPoint name" }, // optional save from this node and give it a name
  { ifConditions: "flagName", notIfConditions: "flagName", linkPath: "nodeId" }, // optional if condition skip this node and go to linkPath
];

const nodeText = {
  // the main purpuse of the text is to handle text only 
  node_type: "text", // requiare
  content: [
    // requiare
    "text", // requiare
    ...options,
  ],
};

  
const nodeGate = {
  // the main purpuse of the gate is to handle mutiple direction only 
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

