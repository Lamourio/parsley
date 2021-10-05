# resources
- [https://github.com/davidkpiano/xstate](https://github.com/davidkpiano/xstate)

# template-story

```json
{
    "title": "title of the story",
    "data": {
        "nodes" : {
            "id_node 1" : {
                "node_type" : "text|image|video|...",
                "content" : [
                    "string text to display",
                    {
                        "option" : "text option",
                        "linkPath" : "(id) to a node",
                        "ifConditions" : "string",
                        "notIfConditions" : "string",
                        "__Conditions__" : "(flagName) condition if the option wil display or not",
                    },
                    {
                        "option" : "text option 2",
                        "linkPath" : "(id) to a node",
                        "ifConditions" : "string",
                        "notIfConditions" : "string",
                        "__Conditions__" : "(flagName) condition if the option wil display or not",
                    }
                    
                ],
            },
            "id_node 2" : {
                "node_type" : "text|image|video|...",
                "content" : [
                    "string text to display",
                    {"divert" : "(id) to a node"},
                    {"flagName": "flag to associete to this node when parse"},
                    {"flagName" : "string"},
                ],
            },
            "id_node 3" : {
                "node_type" : "text|image|video|...",
                "content" : [
                    "string text to display",
                    {"divert" : "(id) to a node"},
                    {"ifCondition" : "flagName"},
                    {"notIfConditions" : "flagName"},
                ],
            },
            
        },
        "initial" : "(id) to the first node",
    }
}
```
# rules : 

* ### divert or option
    * can't be both   
* ### ifCondition and notIfConditions
    * in option : rule to the option.
    * in node : rule to the node.
