var person = {
  firstName : "Nabila",
  lastName  : "Farapasyet",
  id        : 141292,
  age       : 26,
  fullName  : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Name =", person.fullName());
console.log("ID =", person.id);
console.log("Age =", person.age,"year");
