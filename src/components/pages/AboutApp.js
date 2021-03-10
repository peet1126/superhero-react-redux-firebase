import React from "react";

const AboutApp = props => {
    return (
        <div className="container section about-app">
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card z-depth-0 project-summary ">
                        <div className="card-content grey-text text-darken-3">
                            <h1 className="card-title top-header">About This App</h1>
                            <p>This app is a React, Redux, and Firebase project that allows the user to create a post associated with a location on a map and share it with the other logged-in members of the app.</p>
                            <h1 className="card-title">App's Current State</h1>
                            <p>Currently, users can create an account, log in and log out, create a post with a title and text, and share the post with the community.  There is a dashboard that displays all of the posts and a section that displays live notifications of the three most recent posts from any user. I am currently working on implementing the map features so that a user can associate their post with a particular location.</p>
                            <h1 className="card-title">Future Plans For This App</h1>
                            <p>In this app, a user will be able to use their current location or click on the map to drop a pin and write a post to be associated with that pin location. Users will have profiles with a list of all of their posts and a map displaying all of the post locations. Users will be able to view each other's profiles and if they go to a user's pin location in the physical world and log into the app they will get the option to put a check next to that pin and leave a comment on that post.</p>
                            <h1 className="card-title">Try The App</h1>
                            <p>Try logging in and creating a new project. A fake email will work fine. Create a new user account, then click on 'New Project' in the navigation bar to create a new post.</p>
                            <h1 className="card-title">Contact the Developer</h1>
                            <p>Peter McDonald</p>
                            <p>Email: <a href={'mailto: pbmcdonald7@gmail.com'}>pbmcdonald7@gmail.com</a></p> 
                            <p>LinkedIn: <a href={'https://www.linkedin.com/in/peterbarkermcdonald/'}>https://www.linkedin.com/in/peterbarkermcdonald/</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutApp;