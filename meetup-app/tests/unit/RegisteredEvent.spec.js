import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';
import RegisteredEvent from '@/components/RegisteredEvent.vue';

// Will need some cleanup and possibly edited for more functionality.

describe('RegisteredEvent.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = registeredMeetups
    wrapper = shallowMount(RegisteredEvent, {
      propsData: {
        registeredMeetup: data
      }
    }); /* console.log(registeredMeetups); */
  });

  it('should render the title of a meetup with data from App.vue upon loading', () => {
    const expected = data.title;
    const wrapper = mount(RegisteredEvent, {
      propsData: {
        registeredMeetup: data
      }
    });

    const meetupTitle = wrapper.find('.registered-meeting-title');
    const text = meetupTitle.text();

    expect(text).toBe(expected);
  });

  it('should render the time of a meetup with data from app.vue upon loading', () => {
    const expected = data.time;
    const wrapper = mount(RegisteredEvent, {
      propsData: {
        registeredMeetup: data
      }
    });

    const meetupTime = wrapper.find('.meeting-time');
    const text = meetupTime.text();

    /*     console.log(expected);
        console.log(text); */

    expect(text).toBe(expected);
  });

  it('should render the place of a meetup with data from app.vue upon loading', () => {
    const expected = data.place;
    const wrapper = mount(RegisteredEvent, {
      propsData: {
        registeredMeetup: data
      }
    });

    const meetupTime = wrapper.find('.meeting-place');
    const text = meetupTime.text();

    expect(text).toBe(expected);
  });

  it('should render the amount of attendees of a meetup with data from app.vue upon loading', () => {
    const expected = 5;

    const amountAttendees = wrapper.findAll('ul > li').length;
    /* console.log(amountAttendees); */

    expect(amountAttendees).toBe(expected);

  });

  it('should render some information invisible upon loading', () => {
    wrapper.setData({ isVisible: false });

    expect(wrapper.find('.meeting-attendees').isVisible()).toBe(false);
  })

  it('should render more information visible on click', async () => {
    await wrapper.setData({ isVisible: false });

    const buttonElem = wrapper.find('.view-attendees');
    await buttonElem.trigger('click');

    expect(wrapper.find('.meeting-attendees').isVisible()).toBe(true);
  })

  // Import home

  it('should recieve data from the meetups array and display in this component', async () => {
    const expected = 2;
    const wrapper = mount(App, {
      propsData: {
        registeredMeetup: data
      }
    });

    const buttonElem = wrapper.find('.attend-meetup');
    await buttonElem.trigger('click');


    const textElem = wrapper.findAll('.registered-meeting-title').length;
    expect(textElem).toBe(expected);
  })
});

const registeredMeetups =
{
  id: 2,
  time: "SUN, APR 20, 2042 11:00 PM PSST",
  title: "Extraterrestrial Meetup #-19",
  place: "At Gary's place",
  attendees: [
    "Zoidberg",
    "Drax the Destroyer",
    "The Doctor",
    "Zeta Reticulan 36",
    "Kif",
  ],
}

/* console.log(registeredMeetups); */