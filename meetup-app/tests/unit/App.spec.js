import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App)
  });

  it('should push event object from meetups to registeredMeetups upon clicking button', async () => {

  });

  it('should not be able to register to an event more than once', async () => {

  })

  // Lower priority
  /*   it('should push user name into array of participants', async () => { }); */
});