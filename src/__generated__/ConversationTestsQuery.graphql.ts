/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/* @relayHash 88c722ac24f37caf9d17f892e4a23c2a */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ConversationTestsQueryVariables = {
    conversationID: string;
};
export type ConversationTestsQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"Conversation_me">;
    } | null;
};
export type ConversationTestsQuery = {
    readonly response: ConversationTestsQueryResponse;
    readonly variables: ConversationTestsQueryVariables;
};



/*
query ConversationTestsQuery(
  $conversationID: String!
) {
  me {
    ...Conversation_me
    id
  }
}

fragment ArtworkPreview_artwork on Artwork {
  slug
  internalID
  title
  artistNames
  date
  image {
    url
    aspectRatio
  }
}

fragment AttachmentPreview_attachment on Attachment {
  internalID
}

fragment Composer_conversation on Conversation {
  conversationID: internalID
  items {
    item {
      __typename
      ... on Artwork {
        artworkID: internalID
        href
        slug
        isOfferableFromInquiry
      }
      ... on Show {
        href
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
  orderConnection(first: 10, participantType: BUYER) {
    edges {
      node {
        __typename
        ...ReviewOfferButton_order
        __isCommerceOrder: __typename
        state
        id
      }
    }
  }
}

fragment Conversation_me on Me {
  conversation(id: $conversationID) {
    ...Composer_conversation
    ...Messages_conversation
    internalID
    id
    lastMessageID
    unread
    to {
      name
      id
    }
    from {
      email
      id
    }
  }
}

fragment FileDownload_attachment on Attachment {
  fileName
  downloadURL
  ...AttachmentPreview_attachment
}

fragment ImagePreview_attachment on Attachment {
  downloadURL
  ...AttachmentPreview_attachment
}

fragment Message_message on Message {
  body
  createdAt
  internalID
  isFromUser
  isFirstMessage
  from {
    name
    email
  }
  attachments {
    id
    internalID
    contentType
    downloadURL
    fileName
    ...PDFPreview_attachment
    ...ImagePreview_attachment
    ...FileDownload_attachment
  }
}

fragment Messages_conversation on Conversation {
  id
  internalID
  from {
    name
    email
    id
  }
  to {
    name
    id
  }
  initialMessage
  lastMessageID
  messagesConnection(first: 10, sort: DESC) {
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        internalID
        isFromUser
        isFirstMessage
        body
        createdAt
        attachments {
          id
          internalID
          contentType
          downloadURL
          fileName
          ...ImagePreview_attachment
          ...PDFPreview_attachment
          ...FileDownload_attachment
        }
        ...Message_message
        __typename
      }
    }
  }
  items {
    item {
      __typename
      ... on Artwork {
        href
        ...ArtworkPreview_artwork
      }
      ... on Show {
        href
        ...ShowPreview_show
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment PDFPreview_attachment on Attachment {
  fileName
  ...AttachmentPreview_attachment
}

fragment ReviewOfferButton_order on CommerceOrder {
  __isCommerceOrder: __typename
  internalID
  state
  stateReason
  stateExpiresAt
  ... on CommerceOfferOrder {
    lastOffer {
      fromParticipant
      createdAt
      id
    }
    offers(first: 5) {
      edges {
        node {
          internalID
          id
        }
      }
    }
  }
}

fragment ShowPreview_show on Show {
  slug
  internalID
  name
  coverImage {
    url
    aspectRatio
  }
  fair {
    name
    id
  }
  partner {
    __typename
    ... on Partner {
      name
    }
    ... on Node {
      __isNode: __typename
      id
    }
    ... on ExternalPartner {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conversationID"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "aspectRatio",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = [
  (v7/*: any*/)
],
v10 = {
  "kind": "InlineFragment",
  "selections": (v9/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v11 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v14 = [
  (v11/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "DESC"
  }
],
v15 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ID"
},
v16 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v17 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v19 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v20 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Float"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v22 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v23 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceOffer"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConversationTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Conversation_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConversationTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "conversationID"
              }
            ],
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              {
                "alias": "conversationID",
                "args": null,
                "kind": "ScalarField",
                "name": "internalID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationItem",
                "kind": "LinkedField",
                "name": "items",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "item",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "artworkID",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "internalID",
                            "storageKey": null
                          },
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isOfferableFromInquiry",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artistNames",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Fair",
                            "kind": "LinkedField",
                            "name": "fair",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v1/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v6/*: any*/)
                                ],
                                "type": "Partner",
                                "abstractKey": null
                              },
                              (v10/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v9/*: any*/),
                                "type": "ExternalPartner",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Show",
                        "abstractKey": null
                      },
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  (v11/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "participantType",
                    "value": "BUYER"
                  }
                ],
                "concreteType": "CommerceOrderConnectionWithTotalCount",
                "kind": "LinkedField",
                "name": "orderConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceOrderEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isCommerceOrder"
                          },
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "state",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "stateReason",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "stateExpiresAt",
                            "storageKey": null
                          },
                          (v7/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommerceOffer",
                                "kind": "LinkedField",
                                "name": "lastOffer",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "fromParticipant",
                                    "storageKey": null
                                  },
                                  (v12/*: any*/),
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "first",
                                    "value": 5
                                  }
                                ],
                                "concreteType": "CommerceOfferConnection",
                                "kind": "LinkedField",
                                "name": "offers",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CommerceOfferEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommerceOffer",
                                        "kind": "LinkedField",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          (v4/*: any*/),
                                          (v7/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "offers(first:5)"
                              }
                            ],
                            "type": "CommerceOfferOrder",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:10,participantType:\"BUYER\")"
              },
              (v7/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationInitiator",
                "kind": "LinkedField",
                "name": "from",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v13/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationResponder",
                "kind": "LinkedField",
                "name": "to",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "initialMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastMessageID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v14/*: any*/),
                "concreteType": "MessageConnection",
                "kind": "LinkedField",
                "name": "messagesConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasPreviousPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MessageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Message",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isFromUser",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isFirstMessage",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "body",
                            "storageKey": null
                          },
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Attachment",
                            "kind": "LinkedField",
                            "name": "attachments",
                            "plural": true,
                            "selections": [
                              (v7/*: any*/),
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "contentType",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "downloadURL",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fileName",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "MessageInitiator",
                            "kind": "LinkedField",
                            "name": "from",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v13/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "messagesConnection(first:10,sort:\"DESC\")"
              },
              {
                "alias": null,
                "args": (v14/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "Messages_messagesConnection",
                "kind": "LinkedHandle",
                "name": "messagesConnection"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "unread",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "88c722ac24f37caf9d17f892e4a23c2a",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.conversation": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Conversation"
        },
        "me.conversation.conversationID": (v15/*: any*/),
        "me.conversation.from": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationInitiator"
        },
        "me.conversation.from.email": (v16/*: any*/),
        "me.conversation.from.id": (v17/*: any*/),
        "me.conversation.from.name": (v16/*: any*/),
        "me.conversation.id": (v17/*: any*/),
        "me.conversation.initialMessage": (v16/*: any*/),
        "me.conversation.internalID": (v15/*: any*/),
        "me.conversation.items": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationItem"
        },
        "me.conversation.items.item": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ConversationItemType"
        },
        "me.conversation.items.item.__isNode": (v16/*: any*/),
        "me.conversation.items.item.__typename": (v16/*: any*/),
        "me.conversation.items.item.artistNames": (v18/*: any*/),
        "me.conversation.items.item.artworkID": (v17/*: any*/),
        "me.conversation.items.item.coverImage": (v19/*: any*/),
        "me.conversation.items.item.coverImage.aspectRatio": (v20/*: any*/),
        "me.conversation.items.item.coverImage.url": (v18/*: any*/),
        "me.conversation.items.item.date": (v18/*: any*/),
        "me.conversation.items.item.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "me.conversation.items.item.fair.id": (v17/*: any*/),
        "me.conversation.items.item.fair.name": (v18/*: any*/),
        "me.conversation.items.item.href": (v18/*: any*/),
        "me.conversation.items.item.id": (v17/*: any*/),
        "me.conversation.items.item.image": (v19/*: any*/),
        "me.conversation.items.item.image.aspectRatio": (v20/*: any*/),
        "me.conversation.items.item.image.url": (v18/*: any*/),
        "me.conversation.items.item.internalID": (v17/*: any*/),
        "me.conversation.items.item.isOfferableFromInquiry": (v21/*: any*/),
        "me.conversation.items.item.name": (v18/*: any*/),
        "me.conversation.items.item.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "me.conversation.items.item.partner.__isNode": (v16/*: any*/),
        "me.conversation.items.item.partner.__typename": (v16/*: any*/),
        "me.conversation.items.item.partner.id": (v17/*: any*/),
        "me.conversation.items.item.partner.name": (v18/*: any*/),
        "me.conversation.items.item.slug": (v17/*: any*/),
        "me.conversation.items.item.title": (v18/*: any*/),
        "me.conversation.lastMessageID": (v18/*: any*/),
        "me.conversation.messagesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MessageConnection"
        },
        "me.conversation.messagesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "MessageEdge"
        },
        "me.conversation.messagesConnection.edges.cursor": (v16/*: any*/),
        "me.conversation.messagesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Message"
        },
        "me.conversation.messagesConnection.edges.node.__typename": (v16/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Attachment"
        },
        "me.conversation.messagesConnection.edges.node.attachments.contentType": (v16/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.downloadURL": (v16/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.fileName": (v16/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.id": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.internalID": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node.body": (v18/*: any*/),
        "me.conversation.messagesConnection.edges.node.createdAt": (v18/*: any*/),
        "me.conversation.messagesConnection.edges.node.from": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MessageInitiator"
        },
        "me.conversation.messagesConnection.edges.node.from.email": (v18/*: any*/),
        "me.conversation.messagesConnection.edges.node.from.name": (v18/*: any*/),
        "me.conversation.messagesConnection.edges.node.id": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node.internalID": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node.isFirstMessage": (v21/*: any*/),
        "me.conversation.messagesConnection.edges.node.isFromUser": (v21/*: any*/),
        "me.conversation.messagesConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.conversation.messagesConnection.pageInfo.endCursor": (v18/*: any*/),
        "me.conversation.messagesConnection.pageInfo.hasNextPage": (v22/*: any*/),
        "me.conversation.messagesConnection.pageInfo.hasPreviousPage": (v22/*: any*/),
        "me.conversation.messagesConnection.pageInfo.startCursor": (v18/*: any*/),
        "me.conversation.orderConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderConnectionWithTotalCount"
        },
        "me.conversation.orderConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceOrderEdge"
        },
        "me.conversation.orderConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrder"
        },
        "me.conversation.orderConnection.edges.node.__isCommerceOrder": (v16/*: any*/),
        "me.conversation.orderConnection.edges.node.__typename": (v16/*: any*/),
        "me.conversation.orderConnection.edges.node.id": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.internalID": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.lastOffer": (v23/*: any*/),
        "me.conversation.orderConnection.edges.node.lastOffer.createdAt": (v16/*: any*/),
        "me.conversation.orderConnection.edges.node.lastOffer.fromParticipant": {
          "enumValues": [
            "BUYER",
            "SELLER"
          ],
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderParticipantEnum"
        },
        "me.conversation.orderConnection.edges.node.lastOffer.id": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.offers": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOfferConnection"
        },
        "me.conversation.orderConnection.edges.node.offers.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceOfferEdge"
        },
        "me.conversation.orderConnection.edges.node.offers.edges.node": (v23/*: any*/),
        "me.conversation.orderConnection.edges.node.offers.edges.node.id": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.offers.edges.node.internalID": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.state": {
          "enumValues": [
            "ABANDONED",
            "APPROVED",
            "CANCELED",
            "FULFILLED",
            "PENDING",
            "REFUNDED",
            "SUBMITTED"
          ],
          "nullable": false,
          "plural": false,
          "type": "CommerceOrderStateEnum"
        },
        "me.conversation.orderConnection.edges.node.stateExpiresAt": (v18/*: any*/),
        "me.conversation.orderConnection.edges.node.stateReason": (v18/*: any*/),
        "me.conversation.to": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationResponder"
        },
        "me.conversation.to.id": (v17/*: any*/),
        "me.conversation.to.name": (v16/*: any*/),
        "me.conversation.unread": (v21/*: any*/),
        "me.id": (v17/*: any*/)
      }
    },
    "name": "ConversationTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
(node as any).hash = '64e0e5fa20a72cb800d56c9645fd6790';
export default node;
