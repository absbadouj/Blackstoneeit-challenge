import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Likes, LikesReducer } from './reducers/likes.reducers';

export interface CustomAction {
  type: string;
  payload: any;
}

export const LikesImageReducer: ActionReducerMap<LikesState, any> = {
  likes: LikesReducer,
};

export interface LikesState {
  likes: Likes;
}

let selectassetmanagement = createFeatureSelector<LikesState>('Images Likes');

export let LikesSelector = createSelector(
  selectassetmanagement,
  (state) => state.likes
);
