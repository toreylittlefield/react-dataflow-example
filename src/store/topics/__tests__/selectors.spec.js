import Immutable from 'seamless-immutable';
import { Selector } from 'redux-testkit';
import * as uut from '../reducer';

const emptyState = Immutable({
  topics: {
    topicsByUrl: undefined,
    selectedTopicUrls: [],
    selectionFinalized: false
  }
});

describe('store/topics/selectors', () => {

  it('should get selected topics by URL when empty', () => {
    Selector(uut.getSelectedTopicsByUrl).expect(emptyState).toReturn({});
  });

});