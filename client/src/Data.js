import { IoIosHome, IoIosPlayCircle } from "react-icons/io";
import React from "react";
export default {
  ex2Project: {
    title: "Andrew's Life",
    src:
      "https://media.discordapp.net/attachments/445760181738012676/673680115456278571/FF1DB683CB2C03E08F7BB08A071CC7EA4B141E1AF08FE2E0C5pimgpsh_fullsize_distr.jpg?width=264&height=468",
    due: new Date(),
    tasks: [
      {
        title: "Make a living doing basic shit",
        tags: ["Hello", "there", "Taggy_boi"],
        description: ""
      },
      {
        title: "Clean room",
        tags: ["Personal", "Cleanliness"],
        description:
          "Clean bathroom with chemicals, and bring all dishes and materials that need to be downstairs, downstairs.",
        tasks: [
          {
            title: "Bathroom",
            tags: ["Personal", "Cleanliness"],
            description: "Use super cleaning chemicals."
          },
          {
            title: "Clothes",
            tags: ["Personal", "Cleanliness"],
            description: "Finish laundry and put out clothes for tomorrow"
          }
        ]
      }
    ]
  },

  exProject: {
    title: "Holcomb",
    src:
      "https://media.discordapp.net/attachments/445760181738012676/673680145437163562/62E1B8F4841754C5B63B789E69656CB12C3FF82556814C9479pimgpsh_thumbnail_win_distr.jpg",
    due: new Date(),
    tasks: [
      {
        title: "Clean up drywall on ground",
        tags: ["Work", "Stage 1"],
        description: "Enhance overall cleanliness of the house."
      },
      { title: "Install sliding glass door", tags: ["Work", "Stage 1"] },
      {
        title: "Lay down sub-flooring in purple room",
        tags: ["Work", "Stage 1"]
      },
      {
        title: "Clean room",
        tags: ["Personal", "Cleanliness"],
        description:
          "Clean bathroom with chemicals, and bring all dishes and materials that need to be downstairs, downstairs.",
        tasks: [
          {
            title: "Clean up drywall on ground",
            tags: ["Work", "Stage 1"],
            description: "Enhance overall cleanliness of the house."
          },
          { title: "Install sliding glass door", tags: ["Work", "Stage 1"] },
          {
            title: "Lay down sub-flooring in purple room",
            tags: ["Work", "Stage 1"]
          }
        ]
      },
      { title: "Laundry", tags: ["Personal", "Cleanliness"] }
    ]
  },
  shrinkItems: [
    {
      title: "Home",
      icon: <IoIosHome size={25} />,
      link: "/"
    },
    {
      title: "Start Next Task",
      icon: <IoIosPlayCircle size={25} />,
      link: "/next_task"
    }
  ]
};
