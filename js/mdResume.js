

const { data } = require('./resumeData')
const { writeFileSync, readFileSync } = require('fs');

let out = [];

out.push('<style>th { display: none;} h3,h4,h5,p,hr {margin-block-start: 0px;margin-block-end: 0px;}</style>');

out.push('<div style="display:flex;justify-content: space-between">')
out.push('<div style="display:flex;justify-content: flex-start;flex-direction:column">')
out.push(`<h2>${data.bio.name}</h2>`);
out.push(`<h3>${data.bio.role}</h3>`);
out.push('</div>')

out.push('<div style="display:flex;justify-content: space-between;flex-direction:column">')
out.push(`<h4>Mobile: <a href="${data.contacts.mobile.url}">${data.contacts.mobile.text}</a></h4>`);
out.push(`<h4>Email: <a href="${data.contacts.email.url}">${data.contacts.email.text}</a></h4>`);
out.push(`<h4>Linkedin: <a href="${data.contacts.linkedin.url}${data.contacts.linkedin.text}">www.linkedin.com/in/${data.contacts.linkedin.text}</a></h4>`);
out.push(`<h4>github: <a href="${data.contacts.github.url}${data.contacts.github.text}">www.github.com/in/${data.contacts.github.text}</a></h4>`);
out.push(`<h4>Location: ${data.contacts.location}</h4>`);
out.push('</div>\n')
out.push('</div>\n')

out.push('\n<hr style="margin:none;color:#ddd">\n');
out.push('\n<br/>\n');

out.push('### Summary\n');
out.push(`${data.bio.summary}`);


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

let ts = readFileSync('./master/transferrableskills.md', 'utf-8');
out.push(ts);


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
    out.push(job.description);
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
                out.push('\n<hr style="margin:none;color:#ddd">\n');
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

out.push('### Other Projects');
for (const project of data.work.projects) {

    const t = project.name.trim();
    const d = project.dates;
    const u = project.url?.trim();

    out.push('<div style="display:flex;justify-content: space-between">')
    if (u) {
        out.push(`<h5 style="flex:1;"><a href="${u}" target="_blank">${t}</a></h5>`)
    } else {
        out.push(`<h5 style="flex:1;">${t}</h5>`)
    }
    out.push(`<h5 style="flex:1;text-align: right">${d}</h5>`)

    out.push('</div>')

    out.push(project.description);
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
// out.push('### Online Courses');
out.push('### Professional Development');
for (const c of data.education.onlineCourses) {
    out.push(`* ${c.title} - _[${c.school}](${c.url})_ - ${c.dates}`)
}
out.push(``);
out.push(``);
// Other projects?
out.push(``);
out.push(``);

out.push('<div style="font-size:10px">DISCLAIMER: Portions of this document were created using an AI to tailor experience points to the target role. All content, including dates, titles, and technical claims, is 100% accurate and based on my verified career history. I have thoroughly proofread and confirmed its factual correctness.</div>');

writeFileSync('output/MasterCV.md', out.join('\n'), 'utf-8');
