import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Header from '@/components/Header.vue';

describe('Home.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home);
  });

  it('should find Header.vue as an imported component', () => {
    const header = wrapper.findComponent(Header);
    expect(header.exists()).toBe(true);
  });
});