import { mount } from '@vue/test-utils';
import RegisteredEvent from '@/components/RegisteredEvent.vue';

// Similar issues here as with UpcomingEvent.spec. I did manage to use a global variable with varying degrees of success. The data can be printed in a log under describe, but not in an actual test.

// Will need some cleanup and possibly edited for more functionality.

describe('RegisteredEvent.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = registeredMeetups
    /* wrapper = mount(RegisteredEvent); */
    /* console.log(registeredMeetups); */
  });

  it('should render the time of a meetup with data from app.vue upon loading', () => {
    const expected = data[0].time;
    const wrapper = mount(RegisteredEvent, {
      propsData: {
        registeredMeetup: data[0]
      }
    });

    const meetupTime = wrapper.find('.meeting-time');
    const text = meetupTime.text();

    /*     console.log(registeredMeetups);
        console.log(data);
        console.log(text); */

    expect(text).toBe(expected);
  });

  it('should render the title of a meetup with data from App.vue upon loading', () => {
    const expected = data[0].title;
    const wrapper = mount(RegisteredEvent, {
      propsData: {
        registeredMeetup: data[0]
      }
    });

    const meetupTitle = wrapper.find('.meeting-title');
    const text = meetupTitle.text();

    expect(text).toBe(expected);
  });
});

const registeredMeetups = [
  {
    id: 2,
    time: "SUN, APR 20, 2042 11:00 PM PSST",
    title: "Extraterrestrial Meetup #-19",
    place: "At Gary's place",
    attendees: 7,
  },
]

/* console.log(registeredMeetups); */