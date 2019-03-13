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

self.next = function () {
    self.people.clear();
    var begin = (sel.currnetPage) + self.pageSize;
    var end = (self.currnetPage + 1) + self.paeSize;
    getData(begin, end);
    self.currnetPage++;
    self.context.innerHTML = self.people.toTable();
}
self.prev = function () {
    self.people.clear();
    if (self.currnetPage - 1 >= 0) {
        self.currnetPage--;
    }
    var begin = (selg.currnetPage) + self.paeSize;
    var end = (self.currnetPage)*self.pageSIze;
    getData(begin,end);
    self.context.innerHTML=self.people.toTable();
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