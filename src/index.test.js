import {expect} from 'chai';
import {describe, it} from "eslint/lib/testers/event-generator-tester";


describe('Our first Test', () => {
    it('true to be true', () => {
        expect(true).to.equal(true);
    } );

});

/*describe('index.html', () => {
    it('It should print hello world', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, (window) => {
            const h1 = window.document.getElementById('hello')[0];
            expect(h1.innerHTML).to.equal('Hello');
            done();
            window.close();

        })
    })

});*/

