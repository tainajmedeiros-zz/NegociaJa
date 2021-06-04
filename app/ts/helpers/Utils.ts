import { ToStrings } from "../models/index";

export function toString(...objects: ToStrings[]) {
    objects.forEach(object => object.toString());
}