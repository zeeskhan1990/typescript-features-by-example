import { User } from "./User";
import {Company} from "./Company"
import { CustomMap } from './CustomMap';

const user = new User()
const company = new Company()

console.log(user);
console.log(company);

//All the methods of it is exposed, needs to be wrapped to expose only methods that I want
const customMap = new CustomMap("#map")
customMap.addMarker(user)
customMap.addMarker(company)


