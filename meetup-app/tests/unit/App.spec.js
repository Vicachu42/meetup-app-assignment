import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = meetups;
    /*     wrapper = mount(App) */
  });

  it('should push event object from meetups to registeredMeetups upon clicking button', async () => {
    /*     const wrapper = mount(App, {
          data() {
            return {
              meetups
            }
          }
        }) */

    /*     const meetup = [{
          id: 1,
          time: "FRI, DEC 24, 2021, 3:00 PM CEST",
          title: "Extraterrestrial Meetup #2",
          place: "66°13′12.6″N 172°19′36.9″E",
          attendees: 5,
        }];
        console.log(meetup); */

    /*     const expected = data[0].time
        const wrapper = mount(App, {
          data() {
            return {
              meetups: data[0]
            }
          }
        })
    
        console.log(data);
        const buttomElem = wrapper.find('.attend-meetup');
        await buttomElem.trigger('click');
     */

  });

  /*   it('should not be able to register to an event more than once', async () => {
  
    }) */

  // Lower priority
  /*   it('should push user name into array of participants', async () => { }); */
});

const meetups = [
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