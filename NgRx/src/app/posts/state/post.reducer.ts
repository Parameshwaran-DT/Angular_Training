import { Action, createReducer, on } from '@ngrx/store';
import { addPost } from './post.action';
import { initialState, PostState } from './post.state';

const _postReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {

        let post={...action.post};
        post.id=(state.posts.length+1).toString();
        return {
            ...state,
            posts:[...state.posts, post],
        };
    })
);

export function postReducer(state: PostState | undefined, action: Action) {
    return _postReducer(state, action);
}