/**
 * Created by James on 22/03/2016.
 */
import {List} from 'immutable'

describe("An immutable list", () => {

    beforeEach(() => { });
    afterEach(() => { });

    it('should not change when an element changed', () => {
        let list1 = List(["a", "b", "c"]);
        let list2 = list1.set(1, "d");
        expect(list1.get(1)).to.equal("b");
        expect(list2.get(1)).to.equal("d");
    });
});