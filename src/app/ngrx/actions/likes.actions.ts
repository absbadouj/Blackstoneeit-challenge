export enum ActionLikes {
  LIKE = '[likes] like',
  DISLIKE = '[likes] dislike',
}

export class LikePost {
  type: string = ActionLikes.LIKE;
  payload: number;
  constructor(payload: number) {
    this.payload = payload++;
  }
}

export class DislikePost {
  type: string = ActionLikes.DISLIKE;
  payload: number;
  constructor(payload: number) {
    this.payload = payload--;
  }
}
