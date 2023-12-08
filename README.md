# YouMove Website

# Description 
Welcome to YouMove website, where you can discover, explore, and fully immerse yourself in the world of movies! Our website is intended to be your go-to movie partner, providing a vast library of films and tailored suggestions based on your tastes.

What We Offer:
Discover Movies: Dive into an extensive collection of movies spanning various genres, and different categories of filtering.Discover full details about your preferred movies, ranging from timeless masterpieces to the newest blockbusters.


    Recommendations: Allow us to lead the way! Receive suited film recommendations from genres and other filtering options based on your preferences, making sure you never miss an interesting movie.

    In-depth Details: Discover deep information about films, such as trailers, cast bios, and story summaries. See a preview of each film's setting before hitting the play button.

    Popular and Top Rated: Keep up with the latest trends! Discover the highest-rated and most popular movies that people all over the world have seen to help you decide what to watch next.

    Upcoming Releases: Stay on top of things! With our carefully curated list of upcoming movie releases, you can get a sneak peek at the future and set your calendars for the next great films.

    Now Playing: Want to see a movie in a theater right now? Check out the latest releases to easily schedule your movie dates.

    Actor Details: Explore the worlds of your favored actors and actresses with Actor Details. Learn about  them.

Our mission at YouMove is to make the magic of movies accessible to everyone. YouMove is here to improve your movie-watching experience, regardless of whether you're an avid moviegoer, a casual viewer, or someone who is just seeking entertainment.


Let Us Hlep You to Get Started:
- Browse through our vast collection of movies.
- Find recommendations that are customized for you based on your choices.
- Explore comprehensive movie details, such as cast bios, trailers, and story summaries.
- Keep abreast of the newest releases, popular films, and forthcoming blockbusters.
- Discover the worlds of the actors and actresses you adore. 


# Our Main Features:
    - Our HomePage
        In our Hompgage you can find a collection of playing-Now movies. The movies card will show a brief information about the movie before you click on it to take you to details-page that shows all you need to know about the movie.
        
            "Adding screenshot here"

    - Our Navbar:
        We desigend our navbar as simple as possible to make it easy to reach your prefrances from genres, othe filterings and searching.
                
                "Adding screenshot here"


    -Our Filtering Results Page:

    -Our Detailed Movie Page:
        In this page you will find more details about the movie such as:
            - The movie poster
            - The movie title
            - Overview of the movie
            - A trailer section that has the movie trailer from youtube
            - Release date
            - Runtime
            - Movie's Language
            - The movie production company name and logo. 
            - The movie rating and how many votes has it received            
            - The main 5 actors of the movies in the credit section
            - A related movies section which includes at least five related movies 
                    
                    "Adding screenshot here"


    - Our Actors Page:
        Here you can access to the actors Profile pages just by click on any of these actors cards
                
                "Adding screenshot here"


    - Our Actor Profile Page 
        Accessing this page will show you a vertiy information about your favorite actor such as:
            - Actor picture
            - Actor name
            - Gender
            - Popularity
            - Birthday
            - Biography
                    
                    "Adding screenshot here"

# Technologies Used
    - Frontend Framework and State Management:
        Next.js: utilizing Next.js's capabilities to create a dynamic and effective front end. Its simplicity of usage and server-side rendering capabilities have been important in creating an interactive user experience.

        useState and useEffect: Utilizing React's hooks, particularly useState for managing component-level state and useEffect for fetching and handling data from the themoviedb API.

    - API Integration:
        themoviedb API: Using the APIs for TheMovieDB to seamlessly fetch comprehensive movie data, including details, cast information, trailers, and more. Enabling users to access a vast array of movie information and recommendations.

    - Styling:
        Tailwind CSS: Employing Tailwind CSS for a streamlined and customizable styling approach. Its large library of pre-built components and utility-first approach have made it easier to create a UI that is both responsive and visually pleasing.

    - Code Quality and Collaboration:
        ESLint: Ensuring code consistency and identifying potential errors or problematic patterns in the codebase, promoting best practices and code quality across the project.

        Prettier: Standardizing code formatting and ensuring a consistent code style throughout the development process. Prettier has streamlined the code formatting workflow for improved readability and maintainability.

    - Version Control and Collaboration:
        GitHub: utilizing GitHub as a platform for team collaboration helps with code review, issue tracking, version control, and milestone management. GitHub proved important in enabling effective project management and teamwork.

    - Additional Tools and Extensions:
        Other Extensions: Utilizing other extensions or tools to enhance the development workflow and productivity, ensuring a smooth and efficient development process.

# Code Layout
    This a small review on our code layout 

    src/
    ├─ pages/
    │  ├─ index.jsx           // Home page
    │   ├─ actors/
    │      ├─ index.jsx        // Actors page
    │      ├─ [actorId].jsx    // Actor Profile page  
    │  ├─ movies/
    │     ├─ index.jsx        // Movies page
    │     ├─ [movieId].jsx    // Single movie page 
    │      ├─ type/
    │         ├─ [type].jsx      //Type Filterin Page 
    │   ├─ Footer.jsx
    │   ├─ Navbar/
    │     ├─ Navbar.jsx
    │
    ├─ api/
    │  ├─ API.js 

# Our Great Team Members
    From Room 13: 
     Lin Ghalib - Noor Alrai - Lubna - Wajd Al-Kayyali
