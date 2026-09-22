// Topic filter for the reading-notes page.
// Each note has data-tag="privacy|agents|interp"; each chip has data-filter.
// Without JavaScript the chips stay hidden and every note shows.
(function () {
  var chips = document.querySelector('.chips');
  if (!chips) return;
  chips.hidden = false;

  var buttons = chips.querySelectorAll('[data-filter]');
  var notes = document.querySelectorAll('.note[data-tag]');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      notes.forEach(function (n) {
        n.hidden = !(f === 'all' || n.getAttribute('data-tag') === f);
      });
    });
  });
})();
