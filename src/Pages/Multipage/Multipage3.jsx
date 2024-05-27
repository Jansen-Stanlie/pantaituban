import React from 'react'
import About6 from '../../Components/About/About6';
import Spacing from '../../Components/Spacing/Spacing';
import Department from '../../Components/Department/Department';
import SpecialistsSlider from '../../Components/Slider/SpecialistsSlider';
import TestimonialSlider from '../../Components/Slider/TestimonialSlider';
import Appointment from '../../Components/Appointment/Appointment';
import Hero18 from '../../Components/Hero/Hero18';
import Iconbox from '../../Components/Iconbox/Iconbox';

const heroData = {
  bgImg: '/images/hero-bg19.jpg',
  title: `Work class medical <br /> service provider.`,
  subTitle: `Lorem ipsum dolor sit amet, consectetur mag. <br />Tempor incididunt ut labore et dolore elit.`
}

const iconboxData = [
  {
    bg: 'purple',
    icon: '/icons/icon1.svg',
    title: 'Qualified Doctors',
    subTitle:
      'Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.',
  },
  {
    bg: 'green',
    icon: '/icons/icon2.svg',
    title: '24 Hours Service',
    subTitle:
      'Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.',
  },
  {
    bg: 'red',
    icon: '/icons/icon3.svg',
    title: 'Need Emergency',
    subTitle:
      'Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.',
  },
];

const aboutData = {
  title:
    'A hospital is a health care institution providing patient treatment with specialized medical',
  subTitle:
    '  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc  laboris nisi ut aliquip. Commodo consequat.<br /><br />  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut aliquip. Commodo consequat. Sed do eiusmod  tempor incidid unt labore et dolore magna aliqua.',

  avater: {
    img: '/images/avatar1.png',
    name: 'David Ambrose',
    designation: 'Founder & Director',
  },
  timeTable: [
    {
      day: 'Monday',
      startTime: '8:00',
      endTime: '7:00',
    },
    {
      day: 'Tuesday',
      startTime: '9:00',
      endTime: '6:00',
    },
    {
      day: 'Wednesday',
      startTime: '9:00',
      endTime: '6:00',
    },
    {
      day: 'Thursday',
      startTime: '8:00',
      endTime: '7:00',
    },
    {
      day: 'Friday',
      startTime: '9:00',
      endTime: '5:00',
    },
    {
      day: 'Saturday',
      startTime: '8:00',
      endTime: '7:00',
    },
    {
      day: 'Sunday',
      startTime: '9:00',
      endTime: '3:00',
    },
  ],
  contact: '(+01) - 234 567 890',
};

const specialistData = [
  {
    img: '/images/member1.jpg',
    name: 'Dr. Philip Bailey',
    designation: 'Urology',
  },
  {
    img: '/images/member2.jpg',
    name: 'Dr. Vera Hasson',
    designation: 'Cardiology',
  },
  {
    img: '/images/member3.jpg',
    name: 'Dr. Matthew Hill',
    designation: 'Neurosurgery',
  },
  {
    img: '/images/member4.jpg',
    name: 'Dr. Jeanette Hoff',
    designation: 'Surgery',
  },
  {
    img: '/images/member1.jpg',
    name: 'Dr. Philip Bailey',
    designation: 'Urology',
  },
  {
    img: '/images/member2.jpg',
    name: 'Dr. Vera Hasson',
    designation: 'Cardiology',
  },
  {
    img: '/images/member3.jpg',
    name: 'Dr. Matthew Hill',
    designation: 'Neurosurgery',
  },
  {
    img: '/images/member4.jpg',
    name: 'Dr. Jeanette Hoff',
    designation: 'Surgery',
  },
];

const testimonialData = [
  {
    img: '/images/avatar2.png',
    name: 'Ralph Jones',
    designation: 'Executive',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar3.png',
    name: 'Francis Jara',
    designation: 'Biographer',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar4.png',
    name: 'David Baer',
    designation: 'UX Designer',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar2.png',
    name: 'Ralph Jones',
    designation: 'Executive',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar3.png',
    name: 'Francis Jara',
    designation: 'Biographer',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar4.png',
    name: 'David Baer',
    designation: 'UX Designer',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
];


const Multipage3 = () => {
  return (
    <>
      <Hero18 data={heroData} />
      <Iconbox data={iconboxData} varient="st-type2"/>
      <About6 data={aboutData} />
      <Spacing lg={120} md={80} />
      <hr />
      <Department />
      <Appointment />
      <SpecialistsSlider data={specialistData} />
      <hr />
      <TestimonialSlider data={testimonialData} />
    </>
  )
}

export default Multipage3
