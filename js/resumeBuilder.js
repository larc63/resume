// var Course = function (data) {
//     this.title = data.title;
//     this.school = data.school;
//     this.dates = data.dates;
//     this.url = data.url;
//     this.certificate = data.certificate;
// }

// var School = function (data) {
//     this.name = data.name;
//     this.location = data.location;
//     this.degree = data.degree;
//     this.major = data.major;
//     this.dates = data.dates;
//     this.url = data.url;
// }

// var Project = function (data) {
//     this.name = data.name;
//     this.description = data.description;
// }

// var Job = function (data) {
//     this.employer = data.employer;
//     this.title = data.title;
//     this.location = data.location;
//     this.dates = data.dates;
//     this.brief = data.brief;
//     this.description = data.description;
//     // this.roles = ko.observableArray([]);
//     // for (r in data.roles) {
//     //     this.roles.push({
//     //         role: data.roles[r]
//     //     });
//     // }
//     this.url = data.url;
// };

var ResumeBuilder = function () {
    var self = this;
    setInnerText('title-name', data.bio.name);
    setInnerText('title-role', data.bio.role);
    
    for (const c in data.contacts) {
        if (Object.hasOwnProperty.call(data.contacts, c)) {
            const contact = data.contacts[c];
            setInnerHTML(`contact-${c}`, `<a href="${contact.url}${contact.text}"><i class="fa ${contact.fa}"></i></a>`);
            setInnerHTML(`contact-${c}-print`, `<a href="${contact.url}${contact.text}">${contact.text}<i class="fa ${contact.fa}"></i></a>`);
        }
    }
    let skillsHTML = ['<tr>'];
    let rows = data.skills.length / 3;
    for (let i = 0; i < data.skills.length; i++) {
        const skill = data.skills[i];
        skillsHTML.push(`<td>${skill}</td>`);
        if(i > 0 && i % 3 == 2){
            skillsHTML.push('</tr><tr>');
        }
    }
    skillsHTML.push('</tr>');
    setInnerHTML('skills', skillsHTML.join(''));

    let jobsHTML = [];
    for (const j in data.work.jobs) {
        if (Object.hasOwnProperty.call(data.work.jobs, j)) {
            const job = data.work.jobs[j];
            jobsHTML.push('<div class="item-inner">');
            jobsHTML.push(`<div class="item-title">${job.employer} - ${job.title}</div>`);
            jobsHTML.push(`<div class="item-dates">${job.dates}</div>`);
            jobsHTML.push('</div>');
            jobsHTML.push(`<div class="item-description">${job.roles}</div>`);
        }
    }
    setInnerHTML('jobs', jobsHTML.join(''));

    let projectsHTML = [];
    for (const p in data.work.projects) {
        if (Object.hasOwnProperty.call(data.work.projects, p)) {
            const project = data.work.projects[p];
            projectsHTML.push('<div class="item-inner">');
            projectsHTML.push(`<div class="item-title">${project.name}</div>`);
            projectsHTML.push(`<div class="item-dates">${project.dates}</div>`);
            projectsHTML.push('</div>');
            projectsHTML.push(`<div class="item-description">${project.description}</div>`);
        }
    }
    setInnerHTML('projects', projectsHTML.join(''));

    let schoolsHTML = [];
    for (const s in data.education.schools) {
        if (Object.hasOwnProperty.call(data.education.schools, s)) {
            const project = data.education.schools[s];
            schoolsHTML.push('<div class="item-inner">');
            schoolsHTML.push(`<div class="item-title">${project.name}</div>`);
            schoolsHTML.push(`<div class="item-dates">${project.dates}</div>`);
            schoolsHTML.push('</div>');
            schoolsHTML.push(`<div class="item-description">${project.major}</div>`);
        }
    }
    setInnerHTML('schools', schoolsHTML.join(''));


    // this.jobs = ko.observableArray([]);
    // for (j in data.work.jobs) {
    //     this.jobs.push(new Job(data.work.jobs[j]));
    // }

    // this.projects = ko.observableArray([]);
    // for (p in data.projects.projects) {
    //     this.projects.push(new Project(data.projects.projects[p]));
    // }

    // this.schools = ko.observableArray([]);
    // for (p in data.education.schools) {
    //     this.schools.push(new School(data.education.schools[p]));
    // }

    // this.courses = ko.observableArray([]);
    // for (p in data.education.onlineCourses) {
    //     this.courses.push(new Course(data.education.onlineCourses[p]));
    // }
    // this.coursesDisplay = ko.computed(function () {
    //     var result = [],
    //         row = [],
    //         colLength = (window.innerWidth / 750) >> 0;
    //     this.dummyObservable();
    //     //loop through items and push each item to a row array that gets pushed to the final result
    //     for (var i = 0, j = data.education.onlineCourses.length; i < j; i++) {
    //         if (i % colLength === 0) {
    //             if (row) {
    //                 result.push(row);
    //             }
    //             row = [];
    //         }
    //         row.push({
    //             course: data.education.onlineCourses[i]
    //         });
    //     }

    //     //push the final row  
    //     if (row) {
    //         result.push(row);
    //     }

    //     return result;
    // }, this);
};

ResumeBuilder.prototype.resizeListener = function () {
    this.dummyObservable.notifySubscribers();
}
var vm = new ResumeBuilder();


// window.addEventListener('load', function () {
//     console.log("type the konami code!");
// });
// var secret = ["Up", "Up", "Down", "Down", "Left", "Right", "Left", "Right", "U+0042", "U+0041", "U+0042", "U+0041"];
// var input = [];
// var timer;
// window.addEventListener('keyup', function (e) {
//     console.log(e.keyIdentifier);
//     var index = input.length;
//     if (e.keyIdentifier === secret[index]) {
//         input.push(e.keyIdentifier);
//         console.log(input);
//     }
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//         input = [];
//     }, 500);
//     if (input.length === secret.length) {
//         var oldlink = document.getElementsByTagName("link").item(0);
//         var newlink = document.createElement("link");
//         newlink.setAttribute("rel", "stylesheet");
//         newlink.setAttribute("type", "text/css");
//         newlink.setAttribute("href", "css/alternate-style.css");
//         document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        
//     }
// });
