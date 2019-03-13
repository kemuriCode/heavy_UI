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

function PepopleTableViewModel(config) {
  var self = this;
  self.people = new ListOfPeople;
  self.currentPage = 0;
  self.pageSize = config.pageSize;
  self.context = config.centext;

  self.next = function () {
    self.people.clear();
    var begin = (sel.currentPage) * self.pageSize;
    var end = (self.currentPage + 1) * self.pageSize;
    getData(begin, end);
    self.currnetPage++;
    self.context.innerHTML = self.people.toTable();
}
self.prev = function () {
    self.people.clear();
    if (self.currenPage-1>=0) {
        self.currenttPage--;
    }
    var begin = (selg.currentPage) * self.pageSize;
    var end = (self.currentPage) * self.pageSize;
    getData(begin,end);
    self.context.innerHTML=self.people.toTable();
}
  self.pagination = function () {
      
  }
}