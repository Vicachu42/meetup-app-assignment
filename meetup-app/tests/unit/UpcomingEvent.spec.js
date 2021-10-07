import { shallowMount, mount } from '@vue/test-utils';
import UpcomingEvent from '@/components/UpcomingEvent.vue';

describe('UpcomingEvent.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = meetups
    wrapper = shallowMount(UpcomingEvent, {
      propsData: {
        meetup: data
      }
    });
  });

  it('should render the time of a meetup with data from app.vue upon loading', () => {
    const expected = data.time;
    const wrapper = mount(UpcomingEvent, {
      propsData: {
        meetup: data
      }
    });

    const meetupTime = wrapper.find('.meeting-time');
    const text = meetupTime.text();

    expect(text).toBe(expected);
  });

  it('should render the title of a meetup with data from App.vue upon loading', () => {
    const expected = data.title;
    const wrapper = mount(UpcomingEvent, {
      propsData: {
        meetup: data
      }
    });

    const meetupTitle = wrapper.find('.meeting-title');
    const text = meetupTitle.text();

    expect(text).toBe(expected);
  });

  it('should render the place of a meetup with data from app.vue upon loading', () => {
    const expected = data.place;
    const wrapper = mount(UpcomingEvent, {
      propsData: {
        meetup: data
      }
    });

    const meetupPlace = wrapper.find('.meeting-place');
    const text = meetupPlace.text();

    expect(text).toBe(expected);
  });

  it('should render the amount of attendees of a meetup with data from app.vue upon loading', () => {
    const expected = 6;

    const amountAttendees = wrapper.findAll('ul > li').length;

    expect(amountAttendees).toBe(expected);

  });

  it('should render the guest list invisible upon loading', () => {
    wrapper.setData({ isVisible: false });

    expect(wrapper.find('.meeting-attendees').isVisible()).toBe(false);
  })

  it('should render the guest list visible on click', async () => {
    await wrapper.setData({ isVisible: false });

    const buttonElem = wrapper.find('.view-attendees');
    await buttonElem.trigger('click');

    expect(wrapper.find('.meeting-attendees').isVisible()).toBe(true);
  })

  it('should register user to meetup when clicking attend-meetup button', async () => {
    await wrapper.find('.attend-meetup').trigger('click');

    wrapper.vm.emitAttendMeetup();
  })
});

const meetups =
{
  id: 1,
  time: "FRI, DEC 24, 2021, 3:00 PM CEST",
  title: "Extraterrestrial Meetup #2",
  place: "66°13′12.6″N 172°19′36.9″E",
  attendees: [
    "Zoidberg",
    "Boros",
    "Kang",
    "Kodos",
    "Predator",
    "Christopher Johnson",
  ],
}
