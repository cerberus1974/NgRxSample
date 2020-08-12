import * as fromMessage from '../reducers/message.reducer';
import { selectMessageState } from './message.selectors';

describe('Message Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMessageState({
      [fromMessage.messageFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
