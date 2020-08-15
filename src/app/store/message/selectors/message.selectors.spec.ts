import * as fromMessage from '../reducers/message.reducer';
import { selectMessageState } from './message.selectors';
import { State } from '../reducers/message.reducer';

describe('Message Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMessageState({
      [fromMessage.messageFeatureKey]: {}
    });

    expect(result).toEqual({} as State);
  });
});
