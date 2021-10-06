import { shallowMount, mount } from '@vue/test-utils';
import PastEvent from '@/components/PastEvent.vue';

// The two last tests are still in development, since I haven't decided on the functionality yet.

describe('PastEvent.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = pastMeetups
    wrapper = shallowMount(PastEvent, {
      propsData: {
        pastMeetup: data
      }
    });
  });

  it('should render the time of a meetup with data from App.vue upon loading', () => {
    const expected = data.time;
    const wrapper = mount(PastEvent, {
      propsData: {
        pastMeetup: data
      }
    });

    const meetupTime = wrapper.find('.meeting-time');
    const text = meetupTime.text();

    /*     console.log(expected);
        console.log(text); */

    expect(text).toBe(expected);
  });

  it('should render the title of a meetup with data from App.vue upon loading', () => {
    const expected = data.title;
    const wrapper = mount(PastEvent, {
      propsData: {
        pastMeetup: data
      }
    });

    const meetupTitle = wrapper.find('.meeting-title');
    const text = meetupTitle.text();

    expect(text).toBe(expected);
  });

  it('should render the place of a meetup with data from app.vue upon loading', () => {
    const expected = data.place;
    const wrapper = mount(PastEvent, {
      propsData: {
        pastMeetup: data
      }
    });

    const meetupPlace = wrapper.find('.meeting-place');
    const text = meetupPlace.text();

    expect(text).toBe(expected);
  });

  /*   it('should render the amount of attendees of a meetup with data from app.vue upon loading', () => { }); */

  it('should render a review text from input field', async () => {
    const expected = 1;

    const inputElem = wrapper.find('.review-text');
    await inputElem.setValue('It was fine. Someone stole all the canapes.')

    const buttonElem = wrapper.find('.add-review');
    await buttonElem.trigger('click');

    const reviewLength = wrapper.findAll('.added-review').length;
    expect(reviewLength).toBe(expected);
  });

  it('should return an error if a review that is an empty string', async () => {
    await wrapper.setData({ error: false });

    const buttonElem = wrapper.find('.add-review');
    await buttonElem.trigger('click');

    expect(wrapper.find('.review-error').isVisible()).toBe(true);
  });

  it('should render the input field invisible after adding review', async () => {
    await wrapper.setData({ isVisible: false });

    const buttonElem = wrapper.find('.add-review');
    await buttonElem.trigger('click');

    expect(wrapper.find('.review').isVisible()).toBe(true);
  });

  // Might add this functionality
  // it('should let the user rate the meetup', async () => { });
});

const pastMeetups =
{
  id: 6,
  time: "MON, SEP 21, 2015, 4:00 PM U",
  title: "Extraterrestrial Meetup #14",
  place: "Anywhere really",
  attendees: [
    "Zoidberg",
    "Kodos",
    "Drax the Destroyer",
    "Zaphod Beeblebrox",
    "The Master",
    "Gordon Shumway",
    "Indrid Cold",
  ],
}

/* console.log(pastMeetups); */