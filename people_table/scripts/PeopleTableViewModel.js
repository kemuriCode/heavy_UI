function PepopleTableViewModel(config) {
  var self = this;
  self.people = new ListOfPeople;
  self.currentPage = 0;
  self.pageSieze = config.pageSize;
  self.contex = config.centext;

  self.next = function () {
    alert('kliknąłeś następny');
  }
  self.prev = function () {
    alert('kliknąłeś następny');
  }
}