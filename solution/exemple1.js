/**
 * ------ keys --------------------
 * 
 * video => v
 * gate => g
 * 
 * ------ illustration horizontal --------------------
 * 
 *              -- v  -- v
 *      v -- g  
 *              -- v
 * 
 * 
 * ------- illustration vertical -------------
 * 
 *                     v
 *                     |
 *                     g
 *                    | |
 *                    v v
 *                      |
 *                      v      
 * 
 *   
 * --------- => from horizontal to vertical clockwise rotation ----------
 */



 
 const template =  { 
    title: "title of the story",
    data: {
        nodes : {
            NodeVideo1 : {
                node_type : "video",
                content : [
                    "www.video.com",
                    {divert : "NodeGate1"},
                    {start : 0},
                    {end : 4}
                ],
            },
            NodeGate1 : {
                node_type : "gate",
                content : [
                    "what is your choice !",
                    {option : "choice 1",linkPath : "NodeVideo2"},
                    {option : "choice 2",linkPath : "NodeVideo3"}
                ],
            },
            NodeVideo2 : {
                node_type : "video",
                content : [
                    "www.video.com",
                    {divert : null}
                ],
            },
            NodeVideo3 : {
                node_type : "video",
                content : [
                    "www.video.com",
                    {divert : "NodeVideo4"}
                ],
            },
            NodeVideo4 : {
                node_type : "video",
                content : [
                    "www.video.com",
                    {divert : null}
                ],
            },
            
        },
        initial : "NodeVideo1",
    }
}