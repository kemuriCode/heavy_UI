function Person(json) {
    var self = this;
    self.index = json.id;
    self.name = json.firstName;
    self.surname = json.lastName;
    self.email = json.email;
    self.bday = json.birthsday;
    self.age = json.age;
    self.gender = json.gender;

    self.toTableRow = function () {
        return '<tr><td>' +
            self.index +
            '</td><td>' +
            self.name +
            '</td><td>' +
            self.surname +
            '</td><td>' +
            self.gender +
            '</td><td>' +
            self.email +
            '</td><td>' +
            self.age +
            '</td><td>' +
            self.bday +
            '</td></tr>'
    }

    self.fullName = function () {
        return sum(self.name, self.surname);
    }

    var sum = function (a, b) {
        return a + " " + b;
    }

}