// Import necessary types
import mongoose, { Schema, Document, Model, CallbackError, ObjectId } from "mongoose";

import bcrypt from "bcrypt";

// Define the user schema interface
interface IUser extends Document {
  name: string;
  age: number;
  country: string;
  address?: string;
  user_name: string;
  password: string;
  DOB: Date;
  account_currency: string;
  account_type: string;
  email: string;
  occupation : string;
  gender: string;
  marital_status: string;
  phone: string;
  current_balance: number;
  profile_photo?: string;
  acc_num: string;
  activated: boolean;
  last_login?: Date;
}

interface Transaction extends Document{
  amount: number;
  beneficiary_name : string;
  beneficiary_acc_num : string;
  beneficiary_acc_type : string;
  type: "credit" | "debit";
  status: "pending" | "completed" | "failed";
  reference: string;
  createdAt: Date;
  user_id: string;
  sender_name: string;
  sender_acc_num: string;
  sender_acc_type: string;
  transaction_id: ObjectId
}

// Define an interface for the Model that includes statics
interface IUserModel extends Model<IUser> {
  login(email: string, password: string): Promise<IUser>;
}
interface ITransactionModel extends Model<Transaction>{
  
  
}
const TransactionSchema = new Schema<Transaction>({
  amount: { type: Number, required: true },
  type: { type: String, enum: ["credit", "debit"], required: true },
  beneficiary_name : {type : String, required : true},
  beneficiary_acc_num : {type : String, required : true},
  beneficiary_acc_type : {type : String, required : true},
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  reference: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  user_id: { type: String, required: true },
  sender_name: { type: String, required: true },
  sender_acc_num: { type: String, required: true},
  sender_acc_type: { type: String, required: true },
  transaction_id : {type: mongoose.Types.ObjectId, required: true},
});

// Define the user schema
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
  address: { type: String, default: "" },
  user_name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  DOB: { type: Date, required: true },
  account_currency: { type: String, required: true },
  account_type: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  occupation : {type : String},
  gender: { type: String, required: true },
  marital_status: { type: String, required: true },
  phone: { type: String, required: true },
  current_balance: { type: Number, required: true },
  profile_photo: { type: String, default: "" },
  acc_num: { type: String, required: true, unique: true},
  activated: { type: Boolean, default: false },
  last_login: { type: Date },
});

// =================== HASHING PASSWORDS WITH MONGOOSE HOOKS
userSchema.pre("save", async function (next) {
  const user = this as IUser;
  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err) {
    console.log(err);
    next(err as CallbackError);
  }
});

// =================== STATIC METHOD TO LOG IN USERS
userSchema.statics.login = async function (email: string, password: string) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("Email not found");

  const auth = await bcrypt.compare(password, user.password);
  if (!auth) throw new Error("Email or password is incorrect");

  return user;
};

// =============================== CREATING MODEL
const User = mongoose.model<IUser, IUserModel>("user", userSchema);
const Transaction = mongoose.model<Transaction, ITransactionModel>("transactions", TransactionSchema);
export default{ User , Transaction} ;

