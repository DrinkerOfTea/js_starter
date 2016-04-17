import {Map} from 'immutable'
import {createStore} from 'redux'
import board from '../../app/js/components/noughtsandcrosses/reducers/board'
import {makeMove} from '../../app/js/components/noughtsandcrosses/actions/actions'

describe("A noughts and crosses board map", () => {

    beforeEach(() => { });
    afterEach(() => { });

    it('initialised with only a nought in the middle should have the right contents', () => {

        let board = Map( [
            ["0,0", "empty"], ["0,1", "empty" ], ["0,2", "empty"],
            ["1,0", "empty"], ["1,1", "nought" ], ["1,2", "empty"],
            ["2,0", "empty" ], ["2,1", "empty"], ["2,2", "empty" ]
        ] );

        expect(board.get("0,0")).to.equal("empty");
        expect(board.get("2,1")).to.equal("empty");
        expect(board.get("1,1")).to.equal("nought");
    });
});

describe("A game of noughts and crosses", () => {

    let store, state;

    beforeEach(() => {
        store = createStore(board);
        state = store.getState();
    });

    afterEach(() => { });

    it('starts with every square being empty', () => {
        expect(state.board.get("0,0")).to.equal("empty");
        expect(state.board.get("2,1")).to.equal("empty");
        expect(state.board.get("1,1")).to.equal("empty");
    });

    it('starts with noughts being the player and noone is the winner', () => {
        var state = store.getState();
        expect(state.turn).to.equal("noughts");
        expect(state.winner).to.equal("noone");
    });

    it('if crosses moves on noughts turn, the state is not changed', () => {
        store.dispatch(makeMove(1,1,"crosses"));
        state = store.getState();
        expect(state.board.get("0,0")).to.equal("empty");
        expect(state.board.get("2,1")).to.equal("empty");
        expect(state.board.get("1,1")).to.equal("empty");
        expect(state.turn).to.equal("noughts");
        expect(state.winner).to.equal("noone");
    });

    it('after one move, board state has one nought, with crosses as the player', () => {
        store.dispatch(makeMove(1,1,"noughts"));
        state = store.getState();
        expect(state.board.get("1,1")).to.equal("noughts");
        expect(state.turn).to.equal("crosses");
    });

    it('if noughts plays winning moves on first column, the winner is noughts and the turn is noone', () => {
        store.dispatch(makeMove(0,0,"noughts"));
        store.dispatch(makeMove(1,1,"crosses"));
        store.dispatch(makeMove(0,1,"noughts"));
        store.dispatch(makeMove(1,2,"crosses"));
        store.dispatch(makeMove(0,2,"noughts"));

        state = store.getState();
        expect(state.board.get("0,0")).to.equal("noughts");
        expect(state.board.get("0,1")).to.equal("noughts");
        expect(state.board.get("0,2")).to.equal("noughts");
        expect(state.winner).to.equal("noughts");
        expect(state.turn).to.equal("noone");
    });

    it('if crosses plays winning moves on leading diagonal, the winner is crosses and the turn is noone', () => {
        store.dispatch(makeMove(0,1,"noughts"));
        store.dispatch(makeMove(1,1,"crosses"));
        store.dispatch(makeMove(0,2,"noughts"));
        store.dispatch(makeMove(0,0,"crosses"));
        store.dispatch(makeMove(2,1,"noughts"));
        store.dispatch(makeMove(2,2,"crosses"));

        state = store.getState();
        expect(state.board.get("0,0")).to.equal("crosses");
        expect(state.board.get("1,1")).to.equal("crosses");
        expect(state.board.get("2,2")).to.equal("crosses");
        expect(state.winner).to.equal("crosses");
        expect(state.turn).to.equal("noone");
    });

    it('if board fills up without a winner, it is noones turn', () => {
        store.dispatch(makeMove(0,0,"noughts"));
        store.dispatch(makeMove(1,0,"crosses"));
        store.dispatch(makeMove(2,0,"noughts"));
        store.dispatch(makeMove(2,1,"crosses"));
        store.dispatch(makeMove(1,1,"noughts"));
        store.dispatch(makeMove(2,2,"crosses"));
        store.dispatch(makeMove(1,2,"noughts"));
        store.dispatch(makeMove(0,2,"crosses"));
        store.dispatch(makeMove(0,1,"noughts"));

        state = store.getState();
        expect(state.winner).to.equal("noone");
        expect(state.turn).to.equal("noone");
    });

    //store.dispatch(makeMove(1,1,"noughts"));

});
