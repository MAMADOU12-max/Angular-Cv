export class Personne {
  id: number ;
  firstname: string;
  name: string ;
  job: string ;
  path: string ;
  age: number ;
  cni: number;

  constructor(id = 0, firstname = '', name = '', job = '', path = '', age = 0, cni = 1) {
    this.id = id;
    this.firstname = firstname;
    this.name = name;
    this.job = job;
    this.path = path;
    this.age = age;
    this.cni = cni;
  }
}
