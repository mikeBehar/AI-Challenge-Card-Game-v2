# AI in Business Course - Repository Guide

**Last Updated**: November 27, 2025

---

## Course Repository Structure

All repositories follow consistent naming: `AI-in-Business-[Component]`

### Student-Facing Repositories:

1. **AI-in-Business-Case-1**
   - URL: https://github.com/mikeBehar/AI-in-Business-Case-1
   - Content: Liberty Regional Bank - AI Loan Screening case
   - Includes: case study, assignments, voting guide, ideal answers, consequence scenarios, ethics tribunal roles

2. **AI-in-Business-Case-2**
   - URL: https://github.com/mikeBehar/AI-in-Business-Case-2
   - Content: TrendSetters Retail - Marketing AI Decision case
   - Includes: case study, assignments, voting guide, ideal answers

3. **AI-in-Business-Master-Rubrics**
   - URL: https://github.com/mikeBehar/AI-in-Business-Master-Rubrics
   - Content: Comprehensive grading rubrics
   - Includes: master rubrics document, quick reference guides, self-assessment checklists

### Instructor-Facing Repositories:

4. **AI-in-Business-Course-Development**
   - URL: https://github.com/mikeBehar/AI-in-Business-Course-Development
   - Content: Course planning and development materials
   - Includes: project management docs (TODO, DONE, ISSUES, LESSONS-LEARNED), course requirements, templates

### Archived (Old Structure):

5. **ai-business-case-studies**
   - URL: https://github.com/mikeBehar/ai-business-case-studies
   - Status: Original repository before reorganization
   - Note: Can be deleted or kept as archive - all content has been reorganized into new repos

---

## Tools Installed

### GitHub CLI
- **Installed**: November 27, 2025
- **Version**: 2.83.1
- **Location**: `C:\Program Files\GitHub CLI\gh.exe`
- **Authenticated**: Yes (username: mikeBehar)
- **Permissions**: repo, gist, read:org, workflow, delete_repo

### Usage:
```bash
gh repo create [name] --public --source=. --description="..."
gh repo list mikeBehar
gh repo view mikeBehar/[repo-name]
```

---

## Local Working Directories

Current local copies (as of Nov 27, 2025):
- `~/Downloads/AI-in-Business-Case-1/` - Created for reorganization
- `~/Downloads/AI-in-Business-Case-2/` - Original creation location
- `~/Downloads/AI-in-Business-Course-Development/` - Created for reorganization
- `~/Downloads/AI-in-Business-Master-Rubrics/` - Original creation location
- `~/Downloads/ai-business-case-studies/` - Cloned from GitHub (old structure)

**Recommendation**: Clone all repos to a dedicated folder like `~/Documents/AI-Course/` for easier management

---

## Future Case Studies

When creating Case 3, Case 4, etc., follow this pattern:

1. Create local directory: `AI-in-Business-Case-[N]/`
2. Add these files:
   - README.md (case overview and navigation)
   - case-study.md (full case narrative)
   - blackboard-assignments.md (student assignments)
   - google-form-voting.md (voting/deliberation guide)
   - ideal-answers.md (teaching guide)
   - .gitignore (standard markdown project ignore file)
3. Create GitHub repo:
   ```bash
   cd AI-in-Business-Case-[N]
   git init
   git add .
   git commit -m "Initial commit: Case [N] - [Title]"
   gh repo create AI-in-Business-Case-[N] --public --source=. --description="Case Study [N]: [Title]"
   git branch -M main
   git push -u origin main
   ```

---

## Key Decisions Made

### Repository Organization Philosophy
- **Modular**: Each case is standalone and portable
- **Consistent naming**: Easy to find and predictable
- **Separation of concerns**: Student materials vs. instructor materials
- **Scalable**: Easy to add Case 3, 4, 5, etc.

### File Structure Standards
- Every repo has comprehensive README.md
- Consistent .gitignore across all repos
- Cross-linking between repos in READMEs
- Git commit messages include Claude Code attribution

---

## Contact & Course Info

**Course**: Generative AI for Business and Creative Professionals
**Institution**: CT State Norwalk Community College
**Instructor**: Mike Behar
**GitHub**: https://github.com/mikeBehar

---

*Created*: November 27, 2025
*Purpose*: Quick reference for AI course repository structure and tools
