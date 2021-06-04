import { IsEqual } from "./IsEqual";
import { ToStrings } from "./ToStrings";

export interface MyObject<T> extends ToStrings, IsEqual<T> {

}