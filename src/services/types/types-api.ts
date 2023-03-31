import { TIngredientType } from "./types";

export interface IPersonInfoUser {
    email: string;
    name: string;
  }
  export interface IResponse<T> extends Response {
  json(): Promise<T>
}

export interface IResponseBody {
    success: boolean
  }

export interface IGetBurgerIngredients extends IResponseBody {
    data: Array<TIngredientType>
  }
  export interface IOrderPost extends IResponseBody {
    order: {
      number: number
    }
  }
  export interface IPasswordResponse extends IResponseBody {
    message: string
  }

  export interface IPersonUser extends IResponseBody {
    user: IPersonInfoUser;
  }

  export interface ITokenResponse extends IResponseBody {
    accessToken: string;
    refreshToken: string;
    user: IPersonInfoUser;
  }

  export interface IToken extends IResponseBody {
    accessToken: string;
    refreshToken: string;
    user: IPersonInfoUser;
  }