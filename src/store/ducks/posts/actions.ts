import { action } from "typesafe-actions";
import { PostsItem, PostsTypes } from "./types";


export const getPost = (payload: PostsItem) => action(PostsTypes.GET_POSTS, payload)
