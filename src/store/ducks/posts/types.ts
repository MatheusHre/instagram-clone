export enum PostsTypes{
    GET_POSTS = 'GET_POST'
}

export interface PostsItem{
    id: number,
    user: string,
    userPicture: string,
    postPicture: string,
    location: string,
    description: string,
    likes: number
}

export interface Posts{
    arrayPosts: PostsItem[]
}
export interface PostState{
    post: Posts
}