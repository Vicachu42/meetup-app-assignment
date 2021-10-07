import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = meetups;
    wrapper = shallowMount(App)
  });

  it('should push event object from meetups to registeredMeetups upon clicking button', async () => {
    const attendMeetup = jest.spyOn(App.methods, 'registerToMeetup');
    const wrapper = mount(App);

    const buttonElem = wrapper.find('.attend-meetup');
    await buttonElem.trigger('click');

    expect(attendMeetup).toBeCalled();
  });
});

const meetups = [
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
  },
  {
    id: 3,
    time: "FRI, SEP 1, 1939, 1:00 AM DST",
    title: "Extraterrestrial Meetup #-712",
    place: "25°20′42″S 131°02′10″E",
    attendees: [
      "Zoidberg",
      "E.T.",
      "Queen Beryl",
      "Lrrr",
      "Zaphod Beeblebrox",
      "Predator",
      "Indrid Cold",
    ],
  },
  {
    id: 4,
    time: "WED, NOV 23, 2022, 3:00 AM U",
    title: "Extraterrestrial Meetup #65",
    place: "Slottsskogen, Göteborg",
    attendees: [
      "Zoidberg",
      "The Doctor",
      "The Master",
      "The Thing",
      "Xenomorph XX121",
    ],
  },
  {
    id: 5,
    time: "MON, JUNE 10, 1129, 9:00 PM CAST",
    title: "Extraterrestrial Meetup #9",
    place: "45°32′50.8″S 16°49′41.4″W",
    attendees: ["Zoidberg", "Optimus Prime", "Spock", "Gordon Shumway"],
  },
]