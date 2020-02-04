class Project {
  constructor(name, due, tasks) {
    this.setName(name);
    this.setDue(due);
    this.setTasks(tasks);
  }
  // GETTERS SETTERS
  getName = () => this.name;
  setName = name => (this.name = name);

  getDue = () => this.due;
  setDue = due => (this.due = due);

  getTasks = () => this.tasks;
  setTasks = tasks => (this.tasks = tasks);
}

const exProject = {
  name: "Holcomb",
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
};
