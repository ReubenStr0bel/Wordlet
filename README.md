# [Wordlet](https://reubenstr0bel.github.io/Wordlet)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/ReubenStr0bel/Wordlet)](https://www.github.com/ReubenStr0bel/Wordlet/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/ReubenStr0bel/Wordlet)](https://www.github.com/ReubenStr0bel/Wordlet/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/ReubenStr0bel/Wordlet)](https://www.github.com/ReubenStr0bel/Wordlet)

This project is a limited version of the popular NYT game 'Wordle', named 'Wordlet' as a reference to the more limited scope of this project compared to the original. In the game, the user tries to guess a randomised sequence of emojis before they run out of turns. It is aimed at anyone who would enjoy playing a game like this, but was developed mostly for my own educational purposes.

![screenshot](documentation/responsiveness/responsive_layout.png)

source: [Wordlet amiresponsive](https://ui.dev/amiresponsive?url=https://reubenstr0bel.github.io/Wordlet)

## UX

### The 5 Planes of UX

#### 1. Strategy Plane
##### Purpose
- Provide users with a simple and fun game to play.
- Deliver instant feedback to improve usability.
- Support accessibility and user-friendly interactions.

##### Primary User Needs
- Quickly provide feedback on which guesses were correct.
- Track consecutive wins to encourage playing multiple games.

##### Business Goals
- Encourage users to engage with the app for recreational purposes.

#### 2. Scope Plane
##### Features
- A full list of [Features](#features) can be viewed in detail below.

##### Content Requirements
- Clear instructions for how to interact with the game.
- Results of interaction shown visually.
- Display for tracking consecutive wins.

#### 3. Structure Plane
##### Information Architecture
- **Hierarchy**:
  - Single page with game content and tutorial information
  - Clear and prominent placement of the buttons used for input.

##### User Flow
1. User lands on the home page → can read brief instructions in a modal or start a new game.
2. If starting a new game → selects an emoji theme in a modal.
3. Inputs 5 emojis at a time, submits their guess and receives feedback.
4. Continues guessing until correct or out of turns.
5. Can choose to start a new game → presented with emoji theme choice again.

#### 4. Skeleton Plane
##### Wireframe Suggestions
- The layout for this page was influenced primarily by the layout for the original Wordle game, with the keyboard below a game grid. For simplicity, Wordlet is made with just one webpage as there is no feature to create an account and a landing page wouldn't serve much purpose.

#### 5. Surface Plane
##### Visual Design Elements
- **[Colours](#colour-scheme)**: see below.
- **[Typography](#typography)**: see below.

### Colour Scheme

I used the same colour scheme as Wordle to represent incorrect/wrong location/correct guesses. The background is just a simple grey to bring attention to the game itself.

- `#C8B653` Correct guesses.
- `#6CA965` Wrong location guesses.
- `Dark grey` incorrect guesses.
- `#EBEBEB` Background colour.

### Typography

- [Montserrat](https://fonts.google.com/specimen/Montserrat) was used with a back-up of sans-serif.
- [Font Awesome](https://fontawesome.com) icons were used for the backspace and submit buttons.
- [Emojipedia](https://emojipedia.org/) Emojis used are from Emojipedia.
- [Favicon.io](https://favicon.io/) The favicon uses an emoji from Favicon.io.

## User Stories

| Target | Expectation | Outcome |
| --- | --- | --- |
| As a user | I would like to click on emojis to add them to the sequence | so that I can guess the combination. |
| As a user | I would like the application to show me which emojis are correct | so that I can make my next guess closer to the answer. |
| As a user | I would like visual feedback to be shown instantly after making a guess | so that I get my result quickly without waiting. |
| As a user | I would like the application to have clear and large buttons | so that I can easily select the correct one on any device. |
| As a user | I would like the application to have high-contrast colors and accessible fonts | so that I can easily read and interact with it. |
| As a user | I would like clear labels and instructions | so that I understand how to use the app without confusion. |
| As a user | I would like the app to show me the correct result if I run out of guesses | so that I can see how close I was to the correct answer. |
| As a user |  I would like to see how many sequences I get correct | so I can challenge myself or others to beat my score. |
| As a user | I would like to see a 404 error page if I get lost | so that it's obvious that I've stumbled upon a page that doesn't exist. |

## Features

### Existing Features

| Feature | Notes | Screenshot |
| --- | --- | --- |
| Instructions | The game page loads with a prompt to open the tutorial modal and which button to click to begin the game | ![screenshot](documentation/features/instructions.png) |
| Tutorial | The tutorial modal shows how the game works and what the various colours mean | ![screenshot](documentation/features/tutorial.png) |
| Choose theme | Clicking the new game button opens a modal where the user can choose which category of emoji they want to play the game with. The selected emoji is coloured in green to confirm the choice | ![screenshot](documentation/features/game_options.png) |
| Emoji keyboard | The keyboard is filled with emojis from the chosen theme. There is also a backspace and submit button separated from the main keyboard. | ![screenshot](documentation/features/emoji_keyboard.png) |
| Guess a sequence and receive feedback | When clicked on the keyboard, emojis are entered into a row on the game grid. When the guess is submitted the background colour of each emoji changes to show whether each is correct or not | ![screenshot](documentation/features/game_grid.png) |
| Show previous guesses | The keyboard itself also updates with colured backgrounds to show which emojis have been guessed already and whether they were correct. This improves the user experience and makes it quicker to play the game and decide which guess to make | ![screenshot](documentation/features/updated_keyboard.png) |
| Display congratulatory message | If the correct sequence is guessed, a congratulatory message is displayed | ![screenshot](documentation/features/game_won.png) |
| Display correct sequence | If the correct sequence is not guessed in time, the correct sequence is shown | ![screenshot](documentation/features/game_lost.png) |
| Display win counter | The number of wins is shown at the top of the screen. Losing a game resets the counter | ![screenshot](documentation/features/win_counter.png) |
| 404 | The 404 error page will indicate when a user has somehow navigated to a page that doesn't exist. This replaces the default GitHub Pages 404 page. This page features a link back to the main page | ![screenshot](documentation/features/404.png) |

### Future Features

- **Landing Page**: Add a home page to link to the game and possibly different game modes.
- **User Account**: Allow the user to create an account and log in to track their score or playing streak.
- **Other emoji categories**: Add more different categories of emojis to choose from.

## Tools & Technologies

| Tool / Tech | Use |
| --- | --- |
| [![badge](https://img.shields.io/badge/Markdown_Builder-grey?logo=markdown&logoColor=000000)](https://markdown.2bn.dev) | Generate README and TESTING templates. |
| [![badge](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) | Version control. (`git add`, `git commit`, `git push`) |
| [![badge](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) | Secure online code storage. |
| [![badge](https://img.shields.io/badge/Gitpod-grey?logo=gitpod&logoColor=FFAE33)](https://gitpod.io) | Cloud-based IDE for development. |
| [![badge](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) | Main site content and layout. |
| [![badge](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) | Design and layout. |
| [![badge](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) | User interaction on the site. |
| [![badge](https://img.shields.io/badge/jQuery-grey?logo=jquery&logoColor=0769AD)](https://jquery.com) | User interaction on the site. |
| [![badge](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com) | Hosting the deployed front-end site. |
| [![badge](https://img.shields.io/badge/Bootstrap-grey?logo=bootstrap&logoColor=7952B3)](https://getbootstrap.com) | Front-end CSS framework for modern responsiveness and pre-built components. |
| [![badge](https://img.shields.io/badge/Jest-grey?logo=jest&logoColor=c21325)](https://jestjs.io) | Automated JavaScript testing. |
| [![badge](https://img.shields.io/badge/Font_Awesome-grey?logo=fontawesome&logoColor=528DD7)](https://fontawesome.com) | Icons. |

⚠️ NOTE ⚠️

Want to add more?

- Tutorial: https://shields.io/badges/static-badge
- Icons/Logos: https://simpleicons.org
  - FYI: not all logos are available to use

🛑 --- END --- 🛑

## Testing

> [!NOTE]
> For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

### GitHub Pages

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://www.github.com/ReubenStr0bel/Wordlet), navigate to the "Settings" tab.
- In Settings, click on the "Pages" link from the menu on the left.
- From the "Build and deployment" section, click the drop-down called "Branch", and select the **main** branch, then click "Save".
- The page will be automatically refreshed with a detailed message display to indicate the successful deployment.
- Allow up to 5 minutes for the site to fully deploy.

The live link can be found on [GitHub Pages](https://reubenstr0bel.github.io/Wordlet).



### Local Development

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://www.github.com/ReubenStr0bel/Wordlet).
2. Locate and click on the green "Code" button at the very top, above the commits and files.
3. Select whether you prefer to clone using "HTTPS", "SSH", or "GitHub CLI", and click the "copy" button to copy the URL to your clipboard.
4. Open "Git Bash" or "Terminal".
5. Change the current working directory to the location where you want the cloned directory.
6. In your IDE Terminal, type the following command to clone the repository:
	- `git clone https://www.github.com/ReubenStr0bel/Wordlet.git`
7. Press "Enter" to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://www.github.com/ReubenStr0bel/Wordlet)

**Please Note**: in order to directly open the project in Gitpod, you should have the browser extension installed. A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository. You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://www.github.com/ReubenStr0bel/Wordlet).
2. At the top of the Repository, just below the "Settings" button on the menu, locate and click the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

### Local VS Deployment

⚠️ INSTRUCTIONS ⚠️

Use this space to discuss any differences between the local version you've developed, and the live deployment site. Generally, there shouldn't be [m]any major differences, so if you honestly cannot find any differences, feel free to use the following example:

⚠️ --- END --- ⚠️

There are no remaining major differences between the local version when compared to the deployed version online.

## Credits

⚠️ INSTRUCTIONS ⚠️

In the following sections, you need to reference where you got your content, media, and any extra help. It is common practice to use code from other repositories and tutorials (which is totally acceptable), however, it is important to be very specific about these sources to avoid potential plagiarism.

⚠️ --- END ---⚠️

### Content

⚠️ INSTRUCTIONS ⚠️

Use this space to provide attribution links for any borrowed code snippets, elements, and resources. Ideally, you should provide an actual link to every resource used, not just a generic link to the main site. If you've used multiple components from the same source (such as Bootstrap), then you only need to list it once, but if it's multiple Codepen samples, then you should list each example individually. If you've used AI for some assistance (such as ChatGPT or Perplexity), be sure to mention that as well. A few examples have been provided below to give you some ideas.

⚠️ --- END ---⚠️

| Source | Notes |
| --- | --- |
| [Markdown Builder](https://markdown.2bn.dev) | Help generating Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | "How to Write a Git Commit Message" |
| [Interactive Frontend Development](https://codeinstitute.net) | Code Institute walkthrough project inspiration |
| [WebDevSimplified](https://www.youtube.com/watch?v=riDzcEQbX6k) | Inspiration for a quiz app |
| [WebDevSimplified](https://www.youtube.com/watch?v=1yS-JV4fWqY) | Inspiration for Rock Paper Scissors |
| [JavaScript30](https://javascript30.com) | Additional JS help |
| [Bootstrap](https://getbootstrap.com) | Various components / responsive front-end framework |
| [ChatGPT](https://chatgpt.com) | Help with code logic and explanations |

### Media

⚠️ INSTRUCTIONS ⚠️

Use this space to provide attribution links to any media files borrowed from elsewhere (images, videos, audio, etc.). If you're the owner (or a close acquaintance) of some/all media files, then make sure to specify this information. Let the assessors know that you have explicit rights to use the media files within your project. Ideally, you should provide an actual link to every media file used, not just a generic link to the main site, unless it's AI-generated artwork.

Looking for some media files? Here are some popular sites to use. The list of examples below is by no means exhaustive. Within the Code Institute Slack community, you can find more "free media" links by sending yourself (or Slackbot) the following command: `!freemedia`.

- Images
    - [Pexels](https://www.pexels.com)
    - [Unsplash](https://unsplash.com)
    - [Pixabay](https://pixabay.com)
    - [Lorem Picsum](https://picsum.photos) (placeholder images)
    - [Wallhere](https://wallhere.com) (wallpaper / backgrounds)
    - [This Person Does Not Exist](https://thispersondoesnotexist.com) (reload to get a new person)
- Audio
    - [Audio Micro](https://www.audiomicro.com/free-sound-effects)
- Video
    - [Videvo](https://www.videvo.net)
- Image Compression
    - [TinyPNG](https://tinypng.com) (for images <5MB)
    - [CompressPNG](https://compresspng.com) (for images >5MB)

A few examples have been provided below to give you some ideas on how to do your own Media credits.

⚠️ --- END ---⚠️

| Source | Notes |
| --- | --- |
| [favicon.io](https://favicon.io) | Generating the favicon |
| [Font Awesome](https://fontawesome.com) | Icons used throughout the site |
| [Pexels](https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg) | Hero image |
| [Wallhere](https://c.wallhere.com/images/9c/c8/da4b4009f070c8e1dfee43d25f99-2318808.jpg!d) | Background wallpaper |
| [Pixabay](https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_1280.jpg) | Background wallpaper |
| [Mixkit](https://mixkit.co/free-sound-effects/game) | Royalty-free sound effects for the game |
| [DALL-E 3](https://openai.com/index/dall-e-3) | AI generated artwork |
| [TinyPNG](https://tinypng.com) | Compressing images < 5MB |
| [CompressPNG](https://compresspng.com) | Compressing images > 5MB |
| [CloudConvert](https://cloudconvert.com/webp-converter) | Converting images to `.webp` |

### Acknowledgements

⚠️ INSTRUCTIONS ⚠️

Use this space to provide attribution and acknowledgement to any supports that helped, encouraged, or supported you throughout the development stages of this project. It's always lovely to appreciate those that help us grow and improve our developer skills. A few examples have been provided below to give you some ideas.

⚠️ --- END ---⚠️

- I would like to thank my Code Institute mentor, [Tim Nelson](https://www.github.com/TravelTimN) for the support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) Tutor Team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and impostor syndrome.
- I would like to thank my partner, for believing in me, and allowing me to make this transition into software development.
- I would like to thank my employer, for supporting me in my career development change towards becoming a software developer.