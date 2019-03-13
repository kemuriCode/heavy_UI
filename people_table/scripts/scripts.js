var viewModel = new PepopleTableViewModel({
    paeSize: 25,
    count: data.length,
    context: document.getElementById('table')
});

var getData = function (begin, end) {
    if (end > data.length) {
        end = data.length;
    }
    if (begin < 0) {
        begin = 0;
    }
    for (var i = begin; i < end; i += 1) {
        self.people.addPerson(data[i]);
    }
}

function init() {
    var listOfPeople = new ListOfPeople();
    for (var i = 0; i < data.length; i++) {
        listOfPeople.addPerson(data[i]);
    }
    var context = document.getElementById('table');
    context.innerHTML = listOfPeople.toTable();
    viewModel.next();
}