/**
 * Case 2: TrendSetters Board of Directors Ballot
 * Google Apps Script to auto-generate the voting/reflection Google Form
 * 
 * INSTRUCTIONS:
 * 1. Go to script.google.com
 * 2. Click "New Project"
 * 3. Delete any existing code and paste this entire script
 * 4. Click the disk icon (Save) or Ctrl+S
 * 5. Click "Run" (play button) - select createCase2Ballot if prompted
 * 6. Click "Review Permissions" when prompted
 * 7. Click your Google account
 * 8. Click "Advanced" then "Go to Untitled project (unsafe)" 
 * 9. Click "Allow"
 * 10. Check your Google Drive - the form will be there!
 */

function createCase2Ballot() {
  // Create the form
  var form = FormApp.create('Case 2: TrendSetters Board of Directors Ballot');
  
  // Form settings
  form.setDescription(
    'TrendSetters Retail - Marketing AI Decision\n\n' +
    'This ballot captures your pre-deliberation position, post-deliberation vote, and reflections on the board discussion.\n\n' +
    'Complete this form at the END of the board meeting after final deliberations.'
  );
  
  form.setCollectEmail(true);
  form.setAllowResponseEdits(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  
  // ============================================
  // SECTION 1: Board Member Information
  // ============================================
  form.addPageBreakItem()
    .setTitle('Board Member Information');
  
  form.addTextItem()
    .setTitle('Your Name')
    .setRequired(true);
  
  form.addTextItem()
    .setTitle('Student Email')
    .setRequired(true);
  
  // ============================================
  // SECTION 2: Pre-Deliberation Position
  // ============================================
  form.addPageBreakItem()
    .setTitle('Pre-Deliberation Position')
    .setHelpText('Before the board meeting began, what was your initial position based on the pre-meeting assignment?');
  
  form.addMultipleChoiceItem()
    .setTitle('Pre-Meeting Vote (Before Deliberation)')
    .setHelpText('What position did you hold BEFORE today\'s discussion?')
    .setChoiceValues([
      'Option 1: Buy Full Vendor Solution (CustomerIQ™ Pro)',
      'Option 2: Build Internal AI Capability',
      'Option 3: Hybrid Approach (Vendor + Internal Team)',
      'Option 4: Start Small - Pilot with Vendor',
      'Option 5: Enhanced Manual Personalization (No AI Yet)'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Primary Reason for Pre-Meeting Position')
    .setHelpText('In 2-3 sentences, what was your main reason for this initial choice?')
    .setRequired(true);
  
  // ============================================
  // SECTION 3: Post-Deliberation Position
  // ============================================
  form.addPageBreakItem()
    .setTitle('Post-Deliberation Vote (OFFICIAL)')
    .setHelpText('After hearing arguments from fellow board members and reviewing the breaking news about CustomerIQ, what is your final vote?');
  
  form.addMultipleChoiceItem()
    .setTitle('Final Board Vote (Post-Deliberation)')
    .setHelpText('This is your OFFICIAL vote that will be counted.')
    .setChoiceValues([
      'Option 1: Buy Full Vendor Solution (CustomerIQ™ Pro)',
      'Option 2: Build Internal AI Capability',
      'Option 3: Hybrid Approach (Vendor + Internal Team)',
      'Option 4: Start Small - Pilot with Vendor',
      'Option 5: Enhanced Manual Personalization (No AI Yet)'
    ])
    .setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('Did You Change Your Vote?')
    .setChoiceValues([
      'Yes, I changed my vote after deliberation',
      'No, I kept my original position',
      'I was undecided before and made a decision during deliberation'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('If You Changed Your Vote, Why?')
    .setHelpText('What argument, consideration, or new information caused you to change your position? Be specific. (Leave blank if you didn\'t change your vote.)')
    .setRequired(false);
  
  // ============================================
  // SECTION 4: Impact of Breaking News
  // ============================================
  form.addPageBreakItem()
    .setTitle('Response to CustomerIQ News')
    .setHelpText('During deliberation, you learned about the CustomerIQ privacy breach and FTC investigation.');
  
  form.addMultipleChoiceItem()
    .setTitle('How Did the Breaking News Affect Your Thinking?')
    .setChoiceValues([
      'Significantly changed my risk assessment of Option 1 (vendor solution)',
      'Somewhat influenced my thinking about vendor trust',
      'Confirmed concerns I already had about privacy/vendor risk',
      'Didn\'t really change my analysis',
      'Made me more confident in my original position'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Explain the Impact of the News')
    .setHelpText('In 2-3 sentences, how did this news factor into your final decision (or why didn\'t it)?')
    .setRequired(true);
  
  // ============================================
  // SECTION 5: Decision Rationale
  // ============================================
  form.addPageBreakItem()
    .setTitle('Your Decision Reasoning');
  
  form.addMultipleChoiceItem()
    .setTitle('Primary Factor Driving Your Decision')
    .setHelpText('What was the MOST important consideration in your final vote?')
    .setChoiceValues([
      'Financial / ROI considerations',
      'Competitive timing / speed to market',
      'Vendor dependency / organizational control',
      'Privacy and ethical concerns',
      'Execution risk / organizational capability',
      'Customer experience / market positioning',
      'Other (please specify below)'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Your Core Argument (Final Version)')
    .setHelpText('Summarize your strongest argument for your chosen option in 3-4 sentences. This is what you\'d say if you had 60 seconds to convince the board.')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Biggest Risk of Your Chosen Option')
    .setHelpText('What\'s the main thing that could go wrong with your choice? Show that you recognize the trade-offs.')
    .setRequired(true);
  
  // ============================================
  // SECTION 6: Build-vs-Buy Perspective
  // ============================================
  form.addPageBreakItem()
    .setTitle('Control Your Destiny?')
    .setHelpText('In Case 1, Brad argued strongly for "controlling your own destiny" rather than relying on vendors to fix critical problems.');
  
  form.addMultipleChoiceItem()
    .setTitle('Does Brad\'s Principle Apply Here?')
    .setChoiceValues([
      'Yes, vendor dependency is a critical risk for TrendSetters (favors Option 2 or 5)',
      'Partially, but the trade-offs are different than Case 1 (might justify Option 1 or 3)',
      'No, this situation is different enough that vendor solution is acceptable (supports Option 1 or 4)',
      'Unsure / Need to think more about this'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Explain Your Thinking on Vendor Dependency')
    .setHelpText('In 2-3 sentences, how did the "control your destiny" principle factor into your decision on this case?')
    .setRequired(true);
  
  // ============================================
  // SECTION 7: Customer Segmentation Insight
  // ============================================
  form.addPageBreakItem()
    .setTitle('Generational Divide')
    .setHelpText('TrendSetters serves both under-35 customers (want AI, less privacy-concerned) and 45+ customers (value privacy, skeptical of AI).');
  
  form.addMultipleChoiceItem()
    .setTitle('Can One Option Serve Both Segments Well?')
    .setChoiceValues([
      'Yes, my chosen option works for both segments',
      'No, but I\'m prioritizing the more valuable/growing segment',
      'No, and TrendSetters may need different approaches for different customers',
      'This wasn\'t a major factor in my decision'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Customer Segment Strategy')
    .setHelpText('In 2-3 sentences, how should TrendSetters handle the fact that different customer age groups have different preferences about AI and privacy?')
    .setRequired(true);
  
  // ============================================
  // SECTION 8: AI Tool Usage During Deliberation
  // ============================================
  form.addPageBreakItem()
    .setTitle('AI Consultation During Meeting (Optional)')
    .setHelpText('During the AI consultation break, did you use an AI tool to help refine your thinking?');
  
  form.addMultipleChoiceItem()
    .setTitle('Did You Use AI During the Deliberation?')
    .setChoiceValues([
      'Yes, I used AI during the consultation break',
      'No, I relied on my pre-meeting analysis',
      'I wanted to but ran out of time'
    ])
    .setRequired(false);
  
  form.addParagraphTextItem()
    .setTitle('If You Used AI During Deliberation, What Did You Ask?')
    .setHelpText('Share one prompt you used during the consultation break and what you learned. Did it change your thinking?')
    .setRequired(false);
  
  form.addCheckboxItem()
    .setTitle('Which AI Tool Did You Use (If Any)?')
    .setChoiceValues([
      'ChatGPT',
      'Claude',
      'Gemini',
      'Perplexity',
      'Other AI tool (specify in comments)',
      'Did not use AI during deliberation'
    ])
    .setRequired(false);
  
  // ============================================
  // SECTION 9: Reflection on Deliberation Quality
  // ============================================
  form.addPageBreakItem()
    .setTitle('Board Discussion Quality');
  
  form.addParagraphTextItem()
    .setTitle('Most Persuasive Argument You Heard')
    .setHelpText('What was the strongest argument made by another board member (not yourself)? Who made it and why was it compelling?')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Argument That Made You Think Differently')
    .setHelpText('What point raised during deliberation challenged your thinking the most, even if you didn\'t ultimately change your vote?')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('Quality of Today\'s Deliberation')
    .setHelpText('How would you rate the overall quality of board discussion today?')
    .setBounds(1, 5)
    .setLabels('Poor', 'Excellent')
    .setRequired(true);
  
  // ============================================
  // SECTION 10: Learning & Next Steps
  // ============================================
  form.addPageBreakItem()
    .setTitle('Course Learning');
  
  form.addMultipleChoiceItem()
    .setTitle('Compared to Case 1, This Decision Felt...')
    .setChoiceValues([
      'More complex / harder decision',
      'About the same difficulty',
      'Less complex / easier decision',
      'Difficult in different ways than Case 1'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('What Made This Case Different or Harder?')
    .setHelpText('In 2-3 sentences, what aspects of this case made it particularly challenging or different from Case 1?')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('One Thing You\'d Do Differently in Case 3')
    .setHelpText('Based on Cases 1 and 2, what\'s one thing you want to improve in your approach for the next board meeting?')
    .setRequired(true);
  
  // ============================================
  // SECTION 11: Optional Feedback
  // ============================================
  form.addPageBreakItem()
    .setTitle('Course Feedback (Optional)');
  
  form.addParagraphTextItem()
    .setTitle('Comments, Concerns, or Suggestions')
    .setHelpText('Any feedback on the case, the deliberation process, the assignment, or the course? This is optional but appreciated.')
    .setRequired(false);
  
  // Set confirmation message
  form.setConfirmationMessage(
    'Vote Recorded - Thank You!\n\n' +
    'Your board vote has been recorded. You should receive a copy of your responses at your email address.\n\n' +
    'WHAT HAPPENS NEXT:\n' +
    '• The instructor will tally votes and determine the board\'s decision\n' +
    '• You\'ll learn the consequences of the board\'s choice at the start of the next session\n' +
    '• There will be a brief reflection on how it worked out\n\n' +
    'Remember: We grade on the quality of your reasoning, not on whether the board\'s decision worked out well. Good decisions can have bad outcomes due to uncertainty—that\'s the nature of business decision-making.\n\n' +
    'See you at the next board meeting!'
  );
  
  // Log the form URL
  Logger.log('Form created successfully!');
  Logger.log('Form URL: ' + form.getPublishedUrl());
  Logger.log('Edit URL: ' + form.getEditUrl());
  
  return form;
}
