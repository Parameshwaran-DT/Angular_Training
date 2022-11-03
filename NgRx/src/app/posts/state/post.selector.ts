import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { PostState } from "./post.state";

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
});

export const getPostById = createSelector(getPostsState, (state: { posts: any[]; }, props: { id: any; }) => {
    return state.posts.find((post: { id: any; }) => post.id === props.id);
  });