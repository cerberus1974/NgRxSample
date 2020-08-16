import { reducer, initialState, State } from './message.reducer';
import { Actions } from '../actions/message.actions';
import { Message } from '../message.model';

describe('Message Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('sendMessage', () => {
    it('ローディング中になる', () => {
      const state = { ...initialState, loading: false, success: true };
      const action = { type: Actions.SendMessage };
      const exepcted = { ...initialState, loading: true, success: false };

      expect(reducer(state, action)).toEqual(exepcted);
    });
  });

  describe('getAllMessageSuccess', () => {
    it('messagesがStoreにセットされる', () => {
      const messages = [ { id: 1 } as Message, { id: 2 } as Message ];
      const state = { ...initialState, loading: true };
      const action = { type: Actions.GetAllMessageSuccess, messages };

      const actual = reducer(state, action);

      expect(actual.ids).toEqual([1, 2]);
      expect(actual.loading).toBeFalse();
    });
  });
});
