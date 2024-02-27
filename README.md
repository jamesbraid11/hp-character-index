# Harry Potter Character Index

## Description

The second project set by General Assembly during my training course was to build a multi-component React application that consumed a public API. This was a collaboration project, working alongside one other trainee on the course. We had not been learning React for long, but I felt confident in achieving the remit with succinct code. I also wanted to include useful functionality and enticing styling for a good user experience. My partner and I used the Harry Potter API to make an application in which you can discover information about the characters and spells.


## Deployment link

[https://harry-potter-character-index.netlify.app](https://harry-potter-character-index.netlify.app)


## Getting Started/Code Installation

1. [GitHub Repo](https://github.com/jamesbraid11/hp-character-index) >>
2. Download directory >>
3. npm install axios, react-router-dom, react, react-bootstrap, sass
4. npm run dev
5. Open local host in local browser


## Timeframe & Working Team

This was a collaborative project in which we worked in pairs; I was partnered with Tamanna. We had only two days to complete this project.


## Technologies Used

- VS Code
- GitHub
- Insomnia
- Node.js
- React
- React Router
- Sass
- Bootstrap
- React Bootstrap

## Brief

**Technical Requirements**
- Consume a public API – this could be anything but it must make sense for your project.
- Have several components.
- The app can have a router - with several "pages", this is up to you and if it makes sense for your project.
- Include wireframes - that you designed before building the app.
- Be deployed online and accessible to the public.

**Necessary Deliverables**
- A working application, hosted somewhere on the internet.
- A link to your hosted working app in the URL section of your Github repo.
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project.
- A readme.md file.

**Sign Off Requirements**
- ​A working request in Insomnia from the API you want to use, showing that you can access the dataset you need.
- A basic wireframe of your apps design + components.


## Planning

After discussing ideas for our application, I created a diagram of the components we would need. I then assigned names for the components, their paths and their loaders to be used in our code.

![1-front-end-diagram](https://github.com/jamesbraid11/hp-character-index/assets/147768485/83d26197-4113-4b16-bdb4-f323c26d1e3e)

Alongside this, as we discussed the application, Tamanna created basic wireframes for the components. These included key elements for functionality and further details for some elements that we had already performed research on.

![2-wireframe](https://github.com/jamesbraid11/hp-character-index/assets/147768485/4fca4732-cfd1-45ba-bc97-f3e82209842e)
![3-wireframe](https://github.com/jamesbraid11/hp-character-index/assets/147768485/ca096f42-000a-4ebc-8328-62772481c3a7)
![4-wireframe](https://github.com/jamesbraid11/hp-character-index/assets/147768485/3a09feed-9aaf-4a6a-9691-df9033c4a425)

## Code Process

I created a React project in VS Code and used Live Share to work on it in tandem with my partner, Tamanna. I created folders, JSX files and Sass files for the initial components we would need. After setting up the React Router in the main.jsx file and the structure of App.jsx together, Tamanna began work on the structure of our character index page and fetching data from the API for it. At that time, I set up variables in Sass that I envisaged would be used repeatedly in our application, such as flex-box set ups and colours relating to Gryffindor House from Harry Potter. I also began work on the styling of the home component, creating a burger menu style button for navigation. I also added a React Bootstrap modal containing links to our components. It was styled to cover only the header section of our application.

![5-modal](https://github.com/jamesbraid11/hp-character-index/assets/147768485/4340ce65-fee4-48f5-8c07-8c8ef27eb897)

I created styling for the character index component next, using a React Bootstrap container for our character results display and filters. Once my partner had fetched and collated the data necessary for our character index page, I was able to tweak the styling and add media queries so that our application looked appealing on any screen size.

We came across a frustrating issue at this point in the project: we realised that the majority of entries in the API data did not contain images, which we wanted to be part of the display on the character index page. We came up with a robust and future proof solution, which was to only display the characters that had images by creating the following variable in the CharIndex.jsx file:

![6-charwithimg](https://github.com/jamesbraid11/hp-character-index/assets/147768485/46f2c782-1171-463a-afce-1799f5452cfa)

This ensures that our application will automatically update if any images are added to the API in the future for other characters.

We followed the same pattern of working for the character card component. Here I added a variable id value to the Bootstrap card div so that each character’s card would be themed according to which house they belong to.

With the data now being fetched and displayed in our application successfully, I added functionality to the dropdown menu and search bar in the character index component. I imported useState and useEffect from React to achieve this. I managed to devise a concise way to code the dropdown menu and search bars so that they were handled with one state variable, function and useEffect. This was achieved primarily by creating one state variable as an object that records updates for both types of filter. This of course also meant that the dropdown menu and search bar could be used in tandem. I also ensured to create a variable for an array, and logic in a useEffect to assign it the unique houses from the data, that would be assigned as the dropdown menu options. This was to ensure these options would always be driven by the API. Please see the code written that enables full functionality of the dropdown menu and search bar below:

![7-filters](https://github.com/jamesbraid11/hp-character-index/assets/147768485/b12e1670-6b27-4c67-8c28-f0ff4305ae1a)
![8-filters](https://github.com/jamesbraid11/hp-character-index/assets/147768485/dc7d5fc8-1f45-430b-9c41-8babbd3dffa7)
![9-filters](https://github.com/jamesbraid11/hp-character-index/assets/147768485/a117344b-c6b5-4597-a323-29eb56f45b35)

Next, I coded a spinner into the App component that would display in the application when the render is not in an idle state. To achieve this, I imported useNavigation from React Router and a spinner from React Bootstrap.

![10-loading-spinner](https://github.com/jamesbraid11/hp-character-index/assets/147768485/f5761094-7c24-48eb-a82f-519c924d1924)

While I achieved this, Tamanna created and coded an error page component that would display in our application if the fetching of data from the API should ever fail. At this point, we had gone beyond the requirements in terms of the functionality of our project. Still not satisfied though, we decided to build another component into our application that would display spells from the Harry Potter franchise, taken from the same API but using a different endpoint. While Tamanna worked on fetching the new data and styling in some areas, I took on creating the spell index component. Much of this was taken from the character index component. However, what was to be displayed was different. Also, this component was to contain only a search bar rather than a search bar and a dropdown menu filter. It was therefore a little easier to construct. Please see the key coding below:

![11-search-bar](https://github.com/jamesbraid11/hp-character-index/assets/147768485/214295e5-cd47-4ca2-8770-43fd0cd4e080)
![12-search-bar](https://github.com/jamesbraid11/hp-character-index/assets/147768485/12fcf6da-d4a4-44a0-b50d-eca019d0e794)

From there, my partner and I polished up the styling of our application as much as we could in the remaining time. I am proud of the functionality of the application, and I believe it is visually appealing enough to entice users.

## Challenges

Coding the dropdown menu and search bar in the character index component in a succinct, DRY manner was my biggest challenge. I had initially coded them in separately, with separate functions. I noticed immediately that this looked a little cluttered, particularly in the JSX markup. After conducting some research and consulting my course notes, I wondered about the possibility of using an object inside a useState function. I tested this theory and was elated when it worked. I was then able to streamline all of the logic for the dropdown menu filter and the search bar, and they work in tandem perfectly. I am very proud of my code on the character index component, it was a huge win.

## Wins

Aside from the above, coding in a loading spinner for the first time into an application was a big win. It really helps to show the user that the application is working even if there is a delay with fetching data from the API. I imported useNavigation for the first time to achieve this. I feel I understand React a lot better after learning about the different states of the render.

Working in a pair and collaborating on a project for the first time was a win also. I enjoyed many of its merits, such as:
- Combining ideas, often leading to better outcomes.
- Shared workload, getting more functionality in an application than when working solo.
- Learning from a partner, expanding knowledge.
- Teaching things to a partner, embedding knowledge.
- Sharing project wins and having more fun!

## Key Learning

Over the course of this project, I became very confident with:
- useState: ensuring not to mutate any variables by using spread.
- useEffect: when it is appropriate to use and identify its dependencies.
- Writing JSX and incorporating functions within it.
- Writing syntax to destructure an object.

New learning I achieved while building this project includes:
- Streamlining code for a dropdown menu filter and search bar.
- Coding a loading spinner to appear at appropriate times.
- How to incorporate a modal menu, then size and style it.
- How to code and style information in a Bootstrap card format.

## Bugs

I have tested the application thoroughly and cannot find any bugs currently.

## Future Improvements

I would like to add the following to this application in the future:
- Add a background music button that can be toggled on and off.
- Change the spell index component so that it just contains spell names, then create a new component with the spell descriptions that appears when a spell name is clicked on.
- Audio sound bites for spells.
- A card comparison component where two characters’ cards can be viewed side by side for comparison.
- Further styling - background image/images for components, dropdown menu styling.
