// JavaScript logic goes here

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');
    const downloadButton = document.getElementById('downloadButton');

    let generatedResume = '';

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const summary = document.getElementById('summary').value;
        const experience = document.getElementById('experience').value;
        const education = document.getElementById('education').value;
        const skills = document.getElementById('skills').value;
        const projects = document.getElementById('projects').value;
        // Add more fields as needed

        // Create the resume output
        const resumeOutput = `
            <h2>${fullName}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <h3>Summary</h3>
            <p>${summary}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Projects</h3>
            <p>${projects}</p>
            <!-- Add more fields to the output as needed -->
        `;

        generatedResume = `
            <div class="resume-output">
                <h2>${fullName}</h2>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
                <h3>Summary</h3>
                <p>${summary}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
                <h3>Projects</h3>
                <p>${projects}</p>
                <!-- Add more fields to the output as needed -->
            </div>
        `;

        // Display the resume output
        const resumeContainer = document.createElement('div');
        resumeContainer.classList.add('resume-output');
        resumeContainer.innerHTML = resumeOutput;

        document.getElementById('resumeOutputContainer').appendChild(resumeContainer);
        form.reset();
    });
    downloadButton.addEventListener('click', function () {
        if (generatedResume) {
            // Convert the generated resume to a Blob
            const blob = new Blob([generatedResume], { type: 'text/html' });

            // Create a download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'resume.html';
            document.body.appendChild(a);

            // Trigger the download
            a.click();

            // Clean up
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } else {
            alert('Please generate a resume first.');
        }
    });
});
