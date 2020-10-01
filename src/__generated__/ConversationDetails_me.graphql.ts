/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ConversationDetails_me = {
    readonly conversation: {
        readonly internalID: string | null;
        readonly id: string;
        readonly to: {
            readonly name: string;
            readonly initials: string | null;
        };
        readonly from: {
            readonly email: string;
        };
        readonly messagesConnection: {
            readonly edges: ReadonlyArray<{
                readonly __typename: string;
            } | null> | null;
            readonly " $fragmentRefs": FragmentRefs<"AttachmentList_messageConnection">;
        } | null;
        readonly items: ReadonlyArray<{
            readonly item: {
                readonly __typename: string;
                readonly href?: string | null;
                readonly " $fragmentRefs": FragmentRefs<"ItemInfo_item">;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "ConversationDetails_me";
};
export type ConversationDetails_me$data = ConversationDetails_me;
export type ConversationDetails_me$key = {
    readonly " $data"?: ConversationDetails_me$data;
    readonly " $fragmentRefs": FragmentRefs<"ConversationDetails_me">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "href",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "ConversationDetails_me",
  "type": "Me",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "conversation",
          "messagesConnection"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "conversationID",
      "type": "String!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "conversation",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "conversationID"
        }
      ],
      "concreteType": "Conversation",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "internalID",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "to",
          "storageKey": null,
          "args": null,
          "concreteType": "ConversationResponder",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "initials",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "from",
          "storageKey": null,
          "args": null,
          "concreteType": "ConversationInitiator",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "email",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": "messagesConnection",
          "name": "__Details_messagesConnection_connection",
          "storageKey": null,
          "args": null,
          "concreteType": "MessageConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "MessageEdge",
              "plural": true,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "cursor",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Message",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/)
                  ]
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "pageInfo",
              "storageKey": null,
              "args": null,
              "concreteType": "PageInfo",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "endCursor",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "hasNextPage",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "FragmentSpread",
              "name": "AttachmentList_messageConnection",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "items",
          "storageKey": null,
          "args": null,
          "concreteType": "ConversationItem",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "item",
              "storageKey": null,
              "args": null,
              "concreteType": null,
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "InlineFragment",
                  "type": "Artwork",
                  "selections": (v1/*: any*/)
                },
                {
                  "kind": "InlineFragment",
                  "type": "Show",
                  "selections": (v1/*: any*/)
                },
                {
                  "kind": "FragmentSpread",
                  "name": "ItemInfo_item",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '5ca4875e2e7827adf182f3dc7170f151';
export default node;