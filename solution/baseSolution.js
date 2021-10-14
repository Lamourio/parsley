/**
 * ------ keys --------------------
 * 
 * Text => T
 * Gate => G
 * 
 * ------ illustration horizontal --------------------
 * 
 *              -- T  -- T
 *      T -- G  
 *              -- T
 * 
 * 
 * ------- illustration vertical -------------
 * 
 *                     T
 *                     |
 *                     G
 *                    | |
 *                    T T
 *                      |
 *                      T      
 * 
 *   
 * --------- => from horizontal to vertical clockwise rotation ----------
 */


 const template =  { 
    title: "title of the story",
    data: {
        nodes : {
            NodeText1 : {
                node_type : "text",
                content : [
                    "text to display",
                    {divert : "NodeGate1"},
                ],
            },
            NodeGate1 : {
                node_type : "gate",
                content : [
                    "what is your choice !",
                    {option : "choice 1",linkPath : "NodeText2"},
                    {option : "choice 2",linkPath : "NodeText3"}
                ],
            },
            NodeText2 : {
                node_type : "text",
                content : [
                    "text to display",
                    {divert : null}
                ],
            },
            NodeText3 : {
                node_type : "text",
                content : [
                    "text to display",
                    {divert : "NodeText4"}
                ],
            },
            NodeText4 : {
                node_type : "text",
                content : [
                    "text to display",
                    {divert : null}
                ],
            },
            
        },
        initial : "NodeText1",
    }
}