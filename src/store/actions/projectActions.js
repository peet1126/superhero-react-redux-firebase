export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make an async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Bruce",
        authorLastName: "Banner",
        authorId: 12345,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
