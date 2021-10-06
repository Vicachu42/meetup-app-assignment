import { shallowMount, mount } from '@vue/test-utils';
import UpcomingEvent from '@/components/UpcomingEvent.vue';

// The test works for now, but there are some issues. If I mount the component in beforeEach, the test will bug out and it won't understand what "time" or "title" etc from the component is. 
// I would prefer to be able to mount the component before each test and to declare the data as a global variable. But I'll keep it around for when it's time to clean up the project.

// The last test is still in development, since I haven't decided on the functionality yet.

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

    /*     console.log(expected);
        console.log(text); */

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

  /*   it('should render the amount of attendees of a meetup with data from app.vue upon loading', () => { }); */

  it('should register user to meetup when clicking attend-meetup button', async () => {
    await wrapper.find('.attend-meetup').trigger('click');

    wrapper.vm.emitAttendMeetup();
    console.log(wrapper.emitted());
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
