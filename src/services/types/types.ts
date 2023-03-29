
import { createStore } from 'redux';

import { rootReducer } from '../reducers/rootRaducer';

export type TDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
     rootReducer
  )
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch

export type TIngredientType = {
    id?: string;
    readonly _id: string;
    readonly name: string;
    readonly type: string;
    readonly proteins: number;
    readonly fat: number;
    readonly carbohydrates: number;
    readonly calories: number;
    readonly price: number;
    readonly image: string;
    readonly image_mobile: string;
    readonly image_large: string;
    readonly __v: number;
  };
  
  export type TIngredientReducerType = TIngredientType & {id: string};