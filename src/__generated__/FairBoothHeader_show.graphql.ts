/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _FairBoothHeader_show$ref: unique symbol;
export type FairBoothHeader_show$ref = typeof _FairBoothHeader_show$ref;
export type FairBoothHeader_show = {
    readonly fair: ({
        readonly name: string | null;
    }) | null;
    readonly partner: ({
        readonly name?: string | null;
    }) | null;
    readonly counts: ({
        readonly artworks: number | null;
        readonly artists: number | null;
    }) | null;
    readonly " $refType": FairBoothHeader_show$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v2 = [
  v0
];
return {
  "kind": "Fragment",
  "name": "FairBoothHeader_show",
  "type": "Show",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "fair",
      "storageKey": null,
      "args": null,
      "concreteType": "Fair",
      "plural": false,
      "selections": [
        v0,
        v1
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        v1,
        {
          "kind": "InlineFragment",
          "type": "ExternalPartner",
          "selections": v2
        },
        {
          "kind": "InlineFragment",
          "type": "Partner",
          "selections": v2
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "counts",
      "storageKey": null,
      "args": null,
      "concreteType": "ShowCounts",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "artworks",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "artists",
          "args": null,
          "storageKey": null
        }
      ]
    },
    v1
  ]
};
})();
(node as any).hash = '9a9830ee7482d9a70eef8a5a3e6e4b9d';
export default node;
