Parse more forms of latitude, longitude, including the
[sexagesimal](http://en.wikipedia.org/wiki/Sexagesimal) form.

```javascript
latlonreps.parse('66° 30′ 0″ N');
// 66.5

latlonreps.parse('66° 30′ 0″ S');
// -66.5

latlonreps.parse('66.5');
// 66.5
```
