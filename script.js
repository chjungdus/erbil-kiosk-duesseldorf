(function () {
  'use strict';
  var HOURS = [["09:00","22:00"],["07:30","22:00"],["07:30","22:00"],["07:30","22:00"],["07:30","22:00"],["07:30","23:00"],["09:00","23:00"]]; /* Index 0 = Sonntag */
  var DAYS = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

  function berlinNow() {
    var p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
    var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: map[o.weekday], min: parseInt(o.hour, 10) % 24 * 60 + parseInt(o.minute, 10) };
  }
  function toMin(t) { var a = t.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); }
  function fmt(t) { var a = t.split(':'); return parseInt(a[0], 10) + (a[1] === '00' ? '' : ':' + a[1]); }

  /* Öffnungsstatus */
  function status() {
    var now = berlinNow(), t = HOURS[now.day], open = false, text = '', next = '';
    if (t && now.min >= toMin(t[0]) && now.min < toMin(t[1])) { open = true; text = 'Jetzt geöffnet bis ' + fmt(t[1]) + ' Uhr'; next = 'bis ' + fmt(t[1]) + ' Uhr'; }
    else if (t && now.min < toMin(t[0])) { text = 'Gerade zu, öffnet heute um ' + fmt(t[0]) + ' Uhr'; next = 'ab ' + fmt(t[0]) + ' Uhr'; }
    else { for (var i = 1; i <= 7; i++) { var n = (now.day + i) % 7; if (HOURS[n]) { text = 'Gerade zu, öffnet ' + (i === 1 ? 'morgen' : DAYS[n]) + ' um ' + fmt(HOURS[n][0]) + ' Uhr'; next = (i === 1 ? 'morgen ' : DAYS[n] + ' ') + 'ab ' + fmt(HOURS[n][0]) + ' Uhr'; break; } } }
    $$('[data-status]').forEach(function (el) { el.classList.toggle('is-open', open); el.classList.toggle('is-closed', !open); var tx = $('[data-status-text]', el); if (tx) tx.textContent = text; });
    $$('[data-status-short]').forEach(function (el) { el.textContent = (open ? 'Offen ' : 'Zu, ') + next; });
    $$('[data-day]').forEach(function (r) { var t = parseInt(r.getAttribute('data-day'), 10) === now.day; r.classList.toggle('is-today', t); if (t) r.setAttribute('aria-current', 'date'); else r.removeAttribute('aria-current'); });
  }
  status(); setInterval(status, 60000);

  /* Karte erst nach Klick (Zwei-Klick-Lösung, DSGVO) */
  var mapBtn = $('[data-load-map]');
  if (mapBtn) {
    mapBtn.addEventListener('click', function () {
      var box = $('.map'), q = mapBtn.getAttribute('data-load-map'), f = document.createElement('iframe');
      f.src = 'https://www.google.com/maps?q=' + encodeURIComponent(q) + '&output=embed';
      f.title = 'Karte: ' + q; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade';
      box.innerHTML = ''; box.appendChild(f);
    });
  }
})();
