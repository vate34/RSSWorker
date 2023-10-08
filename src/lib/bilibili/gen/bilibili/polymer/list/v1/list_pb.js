// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/polymer/list/v1/list.proto (package bilibili.polymer.list.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message bilibili.polymer.list.v1.CheckAccountReply
 */
export const CheckAccountReply = proto3.makeMessageType(
  "bilibili.polymer.list.v1.CheckAccountReply",
  () => [
    { no: 1, name: "is_new", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message bilibili.polymer.list.v1.CheckAccountReq
 */
export const CheckAccountReq = proto3.makeMessageType(
  "bilibili.polymer.list.v1.CheckAccountReq",
  () => [
    { no: 1, name: "uid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "periods", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.polymer.list.v1.FavoriteTabItem
 */
export const FavoriteTabItem = proto3.makeMessageType(
  "bilibili.polymer.list.v1.FavoriteTabItem",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.polymer.list.v1.FavoriteTabReply
 */
export const FavoriteTabReply = proto3.makeMessageType(
  "bilibili.polymer.list.v1.FavoriteTabReply",
  () => [
    { no: 1, name: "items", kind: "message", T: FavoriteTabItem, repeated: true },
  ],
);

/**
 * @generated from message bilibili.polymer.list.v1.FavoriteTabReq
 */
export const FavoriteTabReq = proto3.makeMessageType(
  "bilibili.polymer.list.v1.FavoriteTabReq",
  [],
);
