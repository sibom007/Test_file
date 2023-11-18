export type Guardian = {
  fathername: string;
  fatherOccupation: string;
  fathercontactNo: string;
  mothername: string;
  motherOccupation: string;
  mothercontactNo: string;
};
export type Localguardian = {
  name: string;
  Occupation: string;
  contactNo: string;
  address: string;
};

export type Username = {
  firstname: string;
  middelname: string;
  lastname: string;
};

export type student = {
  id: string;
  name: Username;
  email: string;
  gender: "male" | "female";
  contactno: string;
  dateofBrith: string;
  emgcontactno: string;
  boolgGrop?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  Localguardian: Localguardian;
  profileimg?: string;
  isActive: "active" | "blocked";
};
