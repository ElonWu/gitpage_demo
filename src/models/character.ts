// 角色生存状态
export const STATUSES = {
  Alive: "存活",
  Dead: "已跪",
  UNKNOW: "未知"
};
export enum STATUS {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOW = "unknown"
}

// 角色性别
export const GENDERS = {
  Female: "女性",
  Male: "男性",
  Genderless: "无性别",
  UNKNOW: "未知"
};
export enum GENDER {
  FEMALE = "Female",
  MALE = "Male",
  GENDERLESS = "Genderless",
  UNKNOW = "unknown"
}

export class CHARACTERFILTER {
  name: string; //filter by the given name.
  status: string; // filter by the given status (alive, dead or unknown).
  species: string; // filter by the given species.
  type: string; // filter by the given type.
  gender: string; // filter by the given gender (female, male, genderless or unknown)
}

// 角色出生地
interface CharactorOrigin {
  name: string;
  url: string;
}

// 角色居住地
interface CharactorLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number; //	int	The id of the character.
  name: string; //	string	The name of the character.
  status: string; //	string The status of the character ('Alive', 'Dead' or 'unknown').
  species: string; //	string The species of the character.
  type: string; //	string The type or subspecies of the character.
  gender: string; //	string	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
  origin: CharactorOrigin; // object	Name and link to the character's origin location.
  location: CharactorLocation; // object	Name and link to the character's last known location endpoint.
  image: string; //	string (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
  episode: Array<string>; //	array (urls)	List of episodes in which this character appeared.
  url: string; //	string (url)	Link to the character's own URL endpoint.
}
