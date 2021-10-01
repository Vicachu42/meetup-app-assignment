import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App)
  });

  it('should at least have one passing test', () => { });

  /*   it('should push event object from meetups to registeredMeetups upon clicking button', async () => { }); */

  // Lower priority
  /*   it('should push user name into array of participants', async () => { }); */
});
