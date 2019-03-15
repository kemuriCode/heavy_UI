function ListOfPeople() {
    var people = [];
    var self = this;
    self.addPerson = function (json) {
        people.push(new Person(json));
    }

    self.toTable = function () {
        var table = '<table>';
        table += generateTableHeader();
        for (var i = 0; i < people.length; i++) {
            table += people[i].toTableRow();
        }
        table += '</table>'
        return table;
    }

    var generateTableHeader = function () {
        return '<tr><th>ID</th> <th><button onclick="viewModel.sort(comparator.byName)">Name</button></th> <th><button onclick="viewModel.sort(comparator.bySurname)">Surname</button></th> <th>Gender</th> <th>Email</th> <th><button onclick="viewModel.sort(comparator.byAge)">Age</button></th> <th>Birthsday</th></tr>'

    }
    self.clear = function () {
        people = [];
    }
}