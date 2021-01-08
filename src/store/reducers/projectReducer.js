const initState = {
  // projects: [
  //   {
  //     id: 1,
  //     title: "Help me find my missing hammer",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde, officia aliquam quasi iure fugit et delectus ex ipsam tempora modi excepturi, voluptate amet consectetur id voluptas suscipit vero quidem!"
  //   },
  //   {
  //     id: 2,
  //     title: "I want to be able to set my schedule",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde, officia aliquam quasi iure fugit et delectus ex ipsam tempora modi excepturi, voluptate amet consectetur id voluptas suscipit vero quidem!"
  //   },
  //   {
  //     id: 3,
  //     title: "Iron suit is rusting",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde, officia aliquam quasi iure fugit et delectus ex ipsam tempora modi excepturi, voluptate amet consectetur id voluptas suscipit vero quidem!"
  //   }
  // ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
