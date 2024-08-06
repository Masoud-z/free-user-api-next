export interface BaseResultDto {
  support: {
    url: string;
    text: string;
  };
}

export interface UserDto {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface GetListUsersRequest {
  page?: number;
}

export interface GetListUsersResponse extends BaseResultDto {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserDto[];
}

export interface GetUserRequest {
  id: number;
}

export interface GetUserResponse extends BaseResultDto {
  data: UserDto;
}
