import image1 from "./Assets/Research101/event1.webp"
import image2 from "./Assets/Research101/event2.webp"
import image3 from "./Assets/Research101/event3.webp"
import image4 from "./Assets/FiresideChat/fsevent1.webp"

const eventData = {
  "Research-101": {
    title: "Research 101",
    description:
      "An exclusive series of programs designed for both novice and advanced learners, featuring sessions led by renowned research experts from various top institutes worldwide",

    cards: [
      {
        title: "Episode 1",
        description:
          "Professor Ganapathy Krishnamurthi, a renowned researcher in Biomedical Engineering, conducting our first event Research 101 session",
        link: "https://www.youtube.com/watch?v=ucsNu-1jeKk&list=PLxGxZvLgVTsVV_vIMrrMzOt75JtlZL-6k",
        image: image1,
      },
      {
        title: "Episode 2",
        description:
          "Dr. Sarika Mahajan, an academician, trainer and Finance Professor at JBIMS, covered Literature Review and Hypothesis Development",
        link: "https://www.youtube.com/watch?v=8BFQr0K-qM0",
        image: image2,
      },
      {
        title: "Episode 3",
        description:
          "Dr. Atul Shiva, Associate Professor of Management at Chandigarh University, covered Research tools and Softwares",
        link: "https://www.youtube.com/watch?v=0S_pI5Lugec",
        image: image3,
      },
    ],
  },
  "Fireside-Chat": {
    title: "Fireside Chat",
    description:
      "Experience the thrill, where leading researchers share their personal journeys in research and engage in interactive discussions with our community members",
    cards: [
      {
        title: "Episode 1",
        description:
          "Abhinandan Sethi, an upcoming research intern from Lakehead University, Canada and one of our  own BS Student.This interactive session covered his aspiration, suggestion and guidance on how to get research internships.",
        link: "https://www.youtube.com/watch?v=cB9bZ4L8PwU",
        image: image4,
      },
    ],
  },
  "Summit": {
    title: "Summit",
    description:
      "An event with thrilling workshops and contests that brings together researchers, and students from diverse fields to discuss and learn about the latest trends and methodologies in research.",

    cards: [],
  },
};

export default eventData;