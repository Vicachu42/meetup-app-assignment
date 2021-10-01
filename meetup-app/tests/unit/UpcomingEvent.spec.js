import { shallowMount, mount } from '@vue/test-utils';
import UpcomingEvent from '@/components/UpcomingEvent.vue';

// The test works for now, but there are some issues. If I mount the component in beforeEach, the test will bug out and it won't understand what "time" or "title" etc from the component is. 
// I would prefer to be able to mount the component before each test and to declare the data as a global variable. But I'll keep it around for when it's time to clean up the project.

describe('UpcomingEvent.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = [
      {
        id: 1,
        time: "FRI, DEC 24, 2021, 3:00 PM CEST",
        title: "Extraterrestrial Meetup #2",
        place: "66°13′12.6″N 172°19′36.9″E",
        attendees: 5,
      },
      {
        id: 3,
        time: "FRI, SEP 1, 1939, 1:00 AM DST",
        title: "Extraterrestrial Meetup #-712",
        place: "25°20′42″S 131°02′10″E",
        attendees: 13,
      },
      {
        id: 4,
        time: "WED, NOV 23, 2022, 3:00 AM U",
        title: "Extraterrestrial Meetup #65",
        place: "Slottsskogen, Göteborg",
        attendees: 2,
      },
      {
        id: 5,
        time: "MON, JUNE 10, 1129, 9:00 PM CAST",
        title: "Extraterrestrial Meetup #9",
        place: "45°32′50.8″S 16°49′41.4″W",
        attendees: 9,
      },
    ]
    /*     wrapper = shallowMount(UpcomingEvent, {
          data: () => {
            return {
              meetups: data
            }
          }
        }); console.log(wrapper); */
  });

  it('should render the time of a meetup with data from app.vue upon loading', () => { });

  it('should render title of a meetup with data from App.vue upon loading', () => {
    const expected = data[0].title;
    const wrapper = mount(UpcomingEvent, {
      propsData: {
        meetup: data[0]
      }
    });

    const meetupInfo = wrapper.find('.meeting-title');
    const text = meetupInfo.text();

    console.log(expected);
    console.log(text);

    expect(text).toBe(expected);
  });

  it('should render the time of a meetup with data from app.vue upon loading', () => { });

  it('should render the time of a meetup with data from app.vue upon loading', () => { });

  // should these two be in app?
  /*   it('should push event object from meetups to registeredMeetups upon clicking button', async () => { }); */

  // Lower priority
  /*   it('should push user name into array of participants', async () => { }); */
});

/* const meetups = [
  {
    id: 1,
    time: "FRI, DEC 24, 2021, 3:00 PM CEST",
    title: "Extraterrestrial Meetup #2",
    place: "66°13′12.6″N 172°19′36.9″E",
    attendees: 5,
  },
  {
    id: 3,
    time: "FRI, SEP 1, 1939, 1:00 AM DST",
    title: "Extraterrestrial Meetup #-712",
    place: "25°20′42″S 131°02′10″E",
    attendees: 13,
  },
  {
    id: 4,
    time: "WED, NOV 23, 2022, 3:00 AM U",
    title: "Extraterrestrial Meetup #65",
    place: "Slottsskogen, Göteborg",
    attendees: 2,
  },
  {
    id: 5,
    time: "MON, JUNE 10, 1129, 9:00 PM CAST",
    title: "Extraterrestrial Meetup #9",
    place: "45°32′50.8″S 16°49′41.4″W",
    attendees: 9,
  },
] */