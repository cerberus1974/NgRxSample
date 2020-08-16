import * as fromMessage from '../reducers/message.reducer';
import { selectMessageState, getLoading } from './message.selectors';
import { Message } from '../message.model';
import { getMessages } from './message.selectors';

describe('Message Selectors', () => {

  let state: fromMessage.State;

  beforeEach(() => {
    state = {
      loading: false,
      success: true,
      entities: {'1': {id: 1} as Message, '2': {id: 2} as Message},
      ids: [1, 2],
      error: {},
    }
  });

  it('should select the feature state', () => {
    const result = selectMessageState({
      [fromMessage.messageFeatureKey]: {}
    });

    expect(result).toEqual({} as fromMessage.State);
  });

  describe('getMessages', () => {
    it('メッセージが全て取得できる', () => {
      expect(getMessages.projector(state)).toBe(fromMessage.selectAll(state));
    });
  });

  describe('getLoading', () => {
    it('Loadingが取得できる', () => {
      expect(getLoading.projector(state)).toBe(false);
    });
  })
});
