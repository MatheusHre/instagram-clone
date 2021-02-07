export enum TypesStories{
    GET_STORIES = 'GET_STORIE'
} 

export interface StoriesItem {
    id: number,
    user: string,
    userPicture: string,
    time: string
}

export interface Stories {
    arrayStories: StoriesItem[]
}

export interface StorieState {
    storie: Stories
}