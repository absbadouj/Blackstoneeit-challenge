import { ActionLikes } from '../actions/likes.actions';
import { CustomAction } from '../store';

export interface Likes {
  id: number;
  image: string;
  likesNumber: number;
}

let initialState = {
  id: '',
  image: 'path/...',
  likesNumber: 0,
};

export function LikesReducer(state = initialState: Likes, action: CustomAction) {
  switch (action.type) {
    case ActionLikes.LIKE:
      return {
        ...state,
        likesNumber: action.payload,
      };
    case ActionLikes.DISLIKE:
      return {
        ...state,
        likesNumber: action.payload,
      };
    default:
      return { ...state };
  }
}
