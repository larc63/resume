# Resume Builder

This repository is being updated to support a **Markdown + AI driven resume workflow**. The goal is to make it easier to maintain a single source of truth for your career history, generate a full CV in Markdown, and then tailor that CV to a specific job offer with the help of an AI chat assistant.

> **Note on paths and filenames:** The paths and filenames referenced throughout this README (e.g. `js/resumeData.js`, `build.sh`, `build2.sh`) are currently hardcoded to suit my particular setup. They are easily editable, so feel free to rename files/directories and update the scripts to match your own preferences.

## Workflow overview

1. **Edit the source resume data** in `js/resumeData.js`.
2. **Generate a full CV in Markdown** by running `build.sh`.
3. **Review the generated Markdown output** and use it as input to an AI chat to tailor the resume for a specific job offer.
4. **Run `build2.sh`** after reviewing the first generated output to produce the final tailored version.
5. Optionally **publish the generated resume to GitHub Pages (`gh-pages`)** so the result can be shared publicly.

This setup is intended to make resume maintenance simpler, more reusable, and easier to adapt for different applications.

## Recommended workflow in detail

### 1) Update the source resume data

Start by editing:

- `js/resumeData.js`

This file should remain the canonical source for your resume content. As noted above, this path is hardcoded for my own setup — rename or relocate it as needed, updating any scripts that reference it accordingly.

### 2) Generate a full CV in Markdown

Run:

- `build.sh`

This step should produce a full CV in Markdown format that can be sent to an AI chat assistant for tailoring.

**Expected output:**

- A full Markdown CV file generated from the resume data
- Any supporting build artifacts produced by the script

### 3) Review the Markdown output and tailor it with AI

Once the first Markdown output is generated, review it carefully and then provide it to an AI chat assistant together with the target job offer.

Use the AI to:

- emphasize the most relevant experience
- trim unrelated details
- improve the wording for the specific role
- preserve factual accuracy
- adapt the summary and skills section to the job description

#### Recommendation: tune the Copilot instructions

To improve the resume-tailoring workflow, it is recommended to tweak the Copilot instructions used for this repository so the AI:

- keeps the output concise and job-focused
- prefers measurable impact and outcomes
- avoids inventing experience
- preserves the structure needed by the build scripts
- highlights the most relevant projects, tools, and responsibilities for the target role

This makes the tailoring step more consistent and easier to repeat.

### 4) Run the second build step

After reviewing the first generated output and applying any AI-driven tailoring, run:

- `build2.sh`

This step should produce the final resume version derived from the reviewed content.

**Expected output:**

- The final Markdown resume tailored for the selected job offer
- Any final artifacts intended for publishing or conversion

## Files produced by each step

### Source

- `js/resumeData.js` — editable source resume data (path/filename hardcoded for my setup; rename freely)

### Build output

- `build.sh` output — full Markdown CV for AI tailoring
- `build2.sh` output — final tailored resume version

If your scripts generate additional files, document them here once the build pipeline is finalized. Since the paths and script names used here are hardcoded to my own workflow, update this section to reflect whatever naming/directory structure you choose to use.

## Optional: publish the result with GitHub Pages

If you want to share the generated resumes publicly, you can host them with GitHub Pages. In this project, the generated result may live in a separate `gh-pages` repository or branch, but the general setup is the same.

Helpful GitHub Pages documentation:

- [GitHub Pages documentation](https://docs.github.com/pages)
- [Creating a GitHub Pages site](https://docs.github.com/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Next steps

- [ ] Finalize the Markdown resume generation workflow
- [ ] Improve the AI tailoring instructions
- [ ] Document the exact build outputs from `build.sh` and `build2.sh`
- [ ] Add optional GitHub Pages publishing instructions specific to this repository
- [ ] Remove old style resume builder pieces once the Markdown workflow is complete

