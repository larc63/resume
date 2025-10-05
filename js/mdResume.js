

const { data } = require('./resumeData')
const { writeFileSync } = require('fs');

let out = [];

out.push('<style>th { display: none;} h3,h4,h5 {margin-block-start: 0px;margin-block-end: 0px;}</style>');

out.push('<div style="display:flex;justify-content: space-between">')
out.push('<div style="display:flex;justify-content: flex-start;flex-direction:column">')
out.push(`<h2>${data.bio.name}</h2>`);
out.push(`<h3>${data.bio.role}</h3>`);
out.push('</div>')

out.push('<div style="display:flex;justify-content: space-between;flex-direction:column">')
out.push(`<h4>Mobile: <a href="${data.contacts.mobile.url}">${data.contacts.mobile.text}</a></h4>`);
out.push(`<h4>Email: <a href="${data.contacts.email.url}">${data.contacts.email.text}</a></h4>`);
out.push(`<h4>Linkedin: <a href="${data.contacts.linkedin.url}">${data.contacts.linkedin.text}</a></h4>`);
out.push(`<h4>Location: ${data.contacts.location}</h4>`);
out.push('</div>\n')
out.push('</div>\n')

out.push('### Skills\n');


    out.push(`|||`);
    out.push(`|:--|:--|`);
for (let skillSet of data.skills) {
    // console.log(JSON.stringify(skillSet));
    var a = '';
    skillSet.skills.forEach((skill, i) => {
        if (i == skillSet.skills.length - 1) {
            a += skill.name;
        } else {
            a += skill.name + ', ';
        }
    });
    out.push(`|${skillSet.name}|${a}|`)

    // console.log()
}

// for (let i = 0; i < data.skills.length; i++) {
//     const element = data.skills[i];
//     const k = Object.keys(element)[0];
//     const v = Object.values(element)[0];
//     skills.push(k);
//     skillLevels.push(v);
// }
// out.push('```mermaid');
// out.push(`---\nconfig:
//     xyChart:
//         width: 900
//         chartOrientation: horizontal`);
// out.push('---');
// out.push('xychart-beta');
// out.push(`x-axis [${skills.join(',')}]`);
// out.push('y-axis "Expertise (0-100)" 0 --> 100');
// out.push(`bar [${skillLevels.join(',')}]`);
// out.push('```\n\n')

out.push('### Work Experience');
for (const job of data.work.jobs) {
    if (job.url) {
        out.push(`#### [${job.employer}](${job.url}) -- ${job.title}`);
    } else {
        out.push(`#### ${job.employer} -- ${job.title}`);
    }
    for (const R of job.roles) {
        // console.log(typeof(R))
        switch (typeof (R)) {
            case 'object':
                const desc = R.description.trim();
                const t = R.title.trim();
                const u = R.url?.trim();
                const d = R.date;
                const flex = (t.length > 0 && d?.length > 0);
                if (flex) {
                    out.push('<div style="display:flex;justify-content: space-between">')
                }
                if (t.length > 0) {
                    if (u) {
                        out.push(`<h5 style="flex:1;"><a href="${u}" target="_blank">${t}</a></h5>`)
                    } else {
                        out.push(`<h5 style="flex:1;">${t}</h5>`)
                    }
                }
                if (d?.length > 0) {
                    out.push(`<h5 style="flex:1;text-align: right">${d}</h5>`)
                }
                if (flex) {
                    out.push('</div>')
                }
                if (desc.length > 0) {
                    out.push(`${desc}`)
                }
                break;
            case 'string':
                if (R.trim().length > 0) {
                    out.push(`* ${R}`)
                }
                break;
        }
    }
    out.push('\n');
}
out.push('### Education');
for (const s of data.education.schools) {
    out.push(`#### [${s.name}](${s.url})`);
    out.push(`${s.degree} in ${s.major}, ${s.dates}`);
    
    if (s.projects) {
        out.push('#### Academic Project');
        const desc = s.projects[0].description.trim();
        const t = s.projects[0].title.trim();
        const d = s.projects[0].date;

        out.push('<div style="display:flex;justify-content: space-between">')
        out.push(`<h5 style="flex:1;">${t}</h5>`)
        out.push(`<h5 style="flex:1;text-align: right">${d}</h5>`)
        out.push('</div>\n')
        out.push(`${desc}\n`)
    }
}

// out.push(`* ${skill}`);
out.push('### Online Courses');
for (const c of data.education.onlineCourses) {
    out.push(`* ${c.title} - ${c.dates}`)
}
out.push(``);
out.push(``);
// Other projects?
out.push(``);
out.push(``);

writeFileSync('../output/MasterCV.md', out.join('\n'), 'utf-8');
