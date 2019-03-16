function Comparators() {
 var self = this;
 self.byName = function (person1, person2) {
  return person1.firstName.localeCompare(person2.firstName);
 }

 self.bySurname = function (person1, person2) {
  return person1.lastName.localeCompare(person2.lastName);
 }

 self.byAge = function (person1, person2) {
  return person1.age - person2.age
 }

 self.byId = function (person1, person2) {
  return person1.index > person2.index
 }

 self.byGender = function (person1, person2) {
  return person1.gender.localeCompare(person2.gender);
 }

 self.byBirthday = function (person1, person2) {
  return person1.bday.localeCompare(person2.bday);

 }

 self.byEmail = function (person1, person2) {
  return person1.email.localeCompare(person2.email);

 }
}