import { shallowMount, mount } from '@vue/test-utils';
import PastEvent from '@/components/PastEvent.vue';

// Not much use to start up with this until I get the problems with the other two fixed

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PastEvent)
  });

  /*   it('should render the time of a meetup with data from App.vue upon loading', () => { });
    it('should render the title of a meetup with data from App.vue upon loading', () => { });
    it('should render the place of a meetup with data from app.vue upon loading', () => { });
    it('should render the amount of attendees of a meetup with data from app.vue upon loading', () => { }); */

  it('should render a review text from input field', async () => {
    const expected = 1;

    const inputElem = wrapper.find('.review-text');
    await inputElem.setValue('It was fine. Someone stole all the canapes.')

    const buttonElem = wrapper.find('.add-review');
    await buttonElem.trigger('click');

    const reviewLength = wrapper.findAll('.added-review').length;
    expect(reviewLength).toBe(expected);
  });

  // What am I testing?
  // I'm testing a scenario where a click of the button will result in an error message if the string is empty
  // I have the expected result
  // I have isolated a trigger event
  // But how do isolate the expected result in the right element?

  /*   it('should return an error if a review that is an empty string', async () => {
      const expected = "You can not submit an empty review";
  
      const buttonElem = wrapper.find('.add-review');
      await buttonElem.trigger('click');
  
      expect().toBe(expected);
    }) */

  it('should render the input field invisible after adding review', async () => {
    await wrapper.setData({ isVisible: false });

    const buttonElem = wrapper.find('.add-review');
    await buttonElem.trigger('click');

    expect(wrapper.find('.review').isVisible()).toBe(true);
  });

  // Might add this functionality
  // it('should let the user rate the meetup', async () => { });
});
