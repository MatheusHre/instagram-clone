import { action } from "typesafe-actions";
import { Stories, TypesStories } from "./types";


export const getStorie = (payload: Stories) => action(TypesStories.GET_STORIES, payload)