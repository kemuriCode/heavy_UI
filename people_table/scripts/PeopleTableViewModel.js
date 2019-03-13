function PepopleTableViewModel(config) {
  var self = this;
  self.people = new ListOfPeople;
  self.currentPage = 0;
  self.pageSieze = config.pageSize;
  self.contex = config.centext;

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
  self.pagination = function () {
      
  }
}