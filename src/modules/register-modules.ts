export type FieldType = {
  name?: string;
  password?: string;
  remember?: string;
  email?: string;
};

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export interface AuthContextValue {
  registerInfo: RegisterProps;
  updateRegisterInfo: (info: RegisterProps) => void;
  registerUser: () => void;
  isRegisterLoading: boolean;
  registerError: string;
  loginInfo: RegisterProps;
  updateLoginInfo: (info: RegisterProps) => void;
  loginUser: () => void;
}

export interface UserModel {
  email: string;
  name: string;
  token: string;
  _id: string;
}
