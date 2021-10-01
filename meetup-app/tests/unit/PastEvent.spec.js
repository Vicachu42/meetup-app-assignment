import { shallowMount, mount } from '@vue/test-utils';
import PastEvent from '@/components/PastEvent.vue';

// Not much use to start up with this until I get the problems with the other two fixed

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PastEvent)
  });

  it('should at least have one passing test', () => { });

});
