// listen for the DOMContentLoaded event to ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // define an array of skill objects, each with a name and level
    const skills = [
        { name: 'HTML', level: '100%' },
        { name: 'CSS', level: '80%' },
        { name: 'JavaScript', level: '80%' },
        { name: 'TypeScript', level: '80%' },
        { name: 'Angular', level: '85%' },
        { name: 'Node.js', level: '80%' },
        { name: 'React', level: '40%' },
        { name: 'C# + .NET', level: '85%' },
        { name: 'JAVA', level: '65%' },
        { name: 'EF + MVC', level: '80%' },
        { name: 'PHP', level: '70%' },
        { name: 'MongoDB', level: '80%' },
        { name: 'MySQL + LINQ', level: '80%' },
        { name: 'Bootstrap', level: '95%' },
        { name: 'Materialize CSS', level: '95%' },
        { name: 'Foundation', level: '75%' }
    ];

    // get the container element where skills will be displayed
    const skillsContainer = document.getElementById('skillsContainer');

    // iterate over each skill in the skills array
    skills.forEach(skill => {
        // create a new div element for each skill
        const skillElement = document.createElement('div');
        // assign class names for styling
        skillElement.className = 'bar flex';
        // set the inner HTML of the div to display the skill name and level
        // the width of the inner bar div represents the skill level
        skillElement.innerHTML = `
            <div class="bar fill" style="width:${skill.level}">
                <div class="tag bold flex">${skill.name}</div>
            </div>
            <span>${skill.level}</span>
        `;
        // append the skill element to the skills container
        skillsContainer.appendChild(skillElement);
    });
});