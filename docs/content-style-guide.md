# GovtExamsStudy Content Style Guide

## Voice & Tone

- **Exam-focused**: Every explanation ties back to how it gets asked in exams
- **Visual-first**: Use "picture this as...", "think of it like..." framing
- **Direct**: Short sentences. No academic prose. No filler.
- **Hindi-English natural**: Use Hinglish where the audience naturally would (e.g., "yeh topic SSC mein har saal aata hai")
- **Mnemonic-heavy**: Create original memory aids, not recycled coaching tricks

## Do

- State facts directly: "Article 21 guarantees right to life and personal liberty"
- Add exam context: "This is a favourite in SSC CGL — appears almost every year"
- Use our framing: "Visualize the Fundamental Rights as a shield..."
- Cite government sources: "As per Census 2011..." or "Per RBI data..."
- Use active voice: "The President appoints the PM" not "The PM is appointed by the President"

## Don't

- Attribute to textbooks: ~~"As Laxmikanth explains..."~~
- Use academic tone: ~~"It is pertinent to note that..."~~
- Copy coaching phrasing: ~~"Important trick from R.S. Aggarwal..."~~
- Use passive voice when active is clearer
- Use "PYQ" or "Previous Year Questions" anywhere — we call them "Practice Questions"

## Constitutional & Legal Text

- Quote constitutional articles verbatim — they are public domain
- Quote legislation text directly from legislative.gov.in
- Court judgments can be quoted and cited by case name and year
- Government statistics (Census, Economic Survey, Budget) are public domain

## Rewrite Scope

When rewriting existing content, focus on these fields:
- `description` — the main prose explaining the topic
- `keyIdea` — the one-liner summary
- `notes[].content` — detailed explanatory sections (polity/history/geography/economics)

Leave untouched:
- Revision bullets (factual, low risk)
- Problem question text and options (already audited)
- Formula strings and mathematical expressions
- Dates, names, numbers, case citations

## Acceptance Criteria

A rewritten section is "original enough" when:
1. No more than 2 consecutive sentences share structure with a known textbook
2. Includes platform-specific framing ("in SSC CGL, this appears as...", "visualize this as...")
3. Reads distinctly from Laxmikanth/NCERT when placed side by side
