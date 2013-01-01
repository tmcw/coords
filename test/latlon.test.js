var ll = require('../'),
    assert = require('assert');

describe('latlon', function() {
    describe('detection', function() {

        it('can detect decimal or sexagesimal format', function() {
            assert.equal(ll.parse('66.5'), 66.5);
            assert.equal(ll.parse('66° N'), 66);
        });

    });

    describe('pairing', function() {

        describe('decimals', function() {

            it('supports pairs of decimal numbers', function() {
                assert.deepEqual(ll.parsePair('66.5 30.5'), [66.5, 30.5]);
            });

            it('supports pairs of decimal numbers', function() {
                assert.deepEqual(ll.parsePair('0 0'), [0, 0]);
            });

        });

        describe('sexagesimal', function() {

            it('supports pairs of sexagesimal numbers', function() {
                assert.deepEqual(ll.parsePair('0\' N 0\' E'), [0, 0]);
            });

        });

    });

    describe('sexagesimal', function() {

        it('can parse sexagesimal form of a single dimension', function() {
            assert.equal(ll.parse('0° N'), 0);
            assert.equal(ll.parse('66° N'), 66);
            assert.equal(ll.parse('66° S'), -66);
            assert.equal(ll.parse('16° W'), 16);
            assert.equal(ll.parse('26° E'), -26);
            assert.equal(ll.parse('66° 30\' N'), 66.5);
            assert.equal(ll.parse('0° 30\' N'), 0.5);
            assert.equal(ll.parse('66° 30′ 0″ N'), 66.5);
            assert.equal(ll.parse('66° 30‘ 0″ N'), 66.5);
            assert.equal(ll.parse('66° 30‘ 0” N'), 66.5);
        });

        it('can generate sexagesimal form of a single dimension', function() {
            assert.equal(ll.generate(ll.parse('66°'), 's'), '66° 0\′ 0″');
            assert.equal(ll.generate(ll.parse('0°'), 's'), '0° 0\′ 0″');
            assert.equal(ll.generate(ll.parse('66° 30\' 0"'), 's'), '66° 30\′ 0″');
        });

    });

});
