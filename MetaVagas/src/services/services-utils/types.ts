// Entity User

export type Role = "admin" | "advertiser" | "candidate";

export type User = {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
  role?: Role;
  createdAt: Date;
  updatedAt: Date;
};

export type Users = User[];

export type CreateUser = {
  name: string;
  email: string;
  password: string;
};

export type UpdateUser = Partial<CreateUser>;
