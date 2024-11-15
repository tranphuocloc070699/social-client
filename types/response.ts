export type ResponseDto<T> = {
  data: T;
  errors: any;
  message: string;
  success: boolean;
  meta: any;
};
