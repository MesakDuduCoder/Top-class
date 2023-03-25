const courseContainer = document.createElement('div');
const courses = document.createElement('div');
const courseTitle = document.createElement('div');
const courseOne = document.createElement('div');
const courseTwo = document.createElement('div');
const courseThree = document.createElement('div');
const courseFour = document.createElement('div');
const courseFive = document.createElement('div');
const courseSix = document.createElement('div');

courseContainer.id = 'course-container';
courses.className = 'courses';
courseTitle.className = 'course-title';
courseOne.className = 'course-card';
courseTwo.className = 'course-card';
courseThree.className = 'course-card';
courseFour.className = 'course-card';
courseFive.className = 'course-card';
courseSix.className = 'course-card';

courseTitle.innerHTML = `
    <h2>Featured Categories</h2>
    <div style="width: 100px; height: 5px; border-bottom: 2px solid #FD3A2D;"></div>     
`;

courseOne.innerHTML = `
    <img class="course-image" src="./images/python.webp" alt="python-programming-picture" width="120px" height="120px">
    <div class="course-details">
        <h2>Python for Beginners</h2>
        <h3>By Edin Diaz</h3>
        <div class="line"></div>
        <p>Python For Beginners : This course is meant for absolute beginners in programming or in python.</p>
    </div>
`;

courseTwo.innerHTML = `
    <img class="course-image" src="./images/react.webp" alt="react-js-picture" width="120px" height="120px">
    <div class="course-details">
        <h2>React for Beginners</h2>
        <h3>By John Kim</h3>
        <div class="line"></div>
        <p>React For Beginners : This course is meant for absolute beginners in react.</p>
    </div>
`;

courseThree.innerHTML = `
    <img class="course-image" src="./images/angular.webp" alt="angular-js-picture" width="120px" height="120px">
    <div class="course-details">
        <h2>Angular for Beginners</h2>
        <h3>By Rock Lee</h3>
        <div class="line"></div>
        <p>Angular For Beginners : This course is meant for absolute beginners in angular.</p>
    </div>
`;

courseFour.innerHTML = `
    <img class="course-image" src="./images/guitar.jpg" alt="guitar-picture" width="120px" height="120px">
    <div class="course-details">
        <h2>Learn To Play Guitar</h2>
        <h3>By Estes Tone</h3>
        <div class="line"></div>
        <p>Guitar For Beginners : This course is for anyone who want to learn to play guitar.</p>
    </div>
`;

courseFive.innerHTML = `
    <img class="course-image" src="./images/finance.jpg" alt="finance-picture" width="120px" height="120px">
    <div class="course-details">
        <h2>Accounting for Beginners</h2>
        <h3>By Evelyn Lane</h3>
        <div class="line"></div>
        <p>Accounting For Beginners : This course is meant for absolute beginners in fianace and accounting.</p>
    </div>
`;
courseSix.innerHTML = `
    <img class="course-image" src="./images/game.jpg" alt="gaming-picture" width="120px" height="120px">
    <div class="course-details">
        <h2>Learn Gaming from Professional Gamer</h2>
        <h3>By Arteezy</h3>
        <div class="line"></div>
        <p>Level Up Your Gaming : This course is meant for people who want to level up their gaming skills.</p>
    </div>
`;

const featured = document.getElementById('featured');
courseContainer.appendChild(courseTitle);
courses.appendChild(courseOne);
courses.appendChild(courseTwo);
courses.appendChild(courseThree);
courses.appendChild(courseFour);
courses.appendChild(courseFive);
courses.appendChild(courseSix);
courseContainer.appendChild(courses);

featured.appendChild(courseContainer);