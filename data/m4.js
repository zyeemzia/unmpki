TRACK.modules.push({id:'m4',code:'REQUIREMENTS',title:'Requirements: From Concern to Question',sub:'CCIR, PIR, SIR, EEI and RFI; the Force acquisition plan and daily lists; NLT and LTIOV; writing requirements that can be answered.',lessons:[
{id:'m4l1',title:'CCIR, PIR, IR and RFI',mins:25,source:'MPKI Handbook (2025), pp.16–21; PKISR Staff Handbook (2025), pp.10–14, 40–41, 45',
objectives:['Define CCIR, PIR, SIR, EEI, IR and RFI','Break a PIR into SIRs and EEIs','Use priority levels correctly','Run an RFI log'],
body:`<p>The MINUKA Force Commander says at the evening brief: “I need to know if the Karana Liberation Front will hit our bases before the rains.” The U2 writes it down word for word. That sentence is the start of a chain that will end, days later, with a patrol leader in Sector East asking one precise question at one crossing point.</p>
<h3>The chain</h3>
<div class="tw"><table><tr><th>Term</th><th>Meaning</th><th>MINUKA example</th></tr>
<tr><td><b>CCIR</b></td><td>What the commander needs for key decisions; may include non-PKI items. The U2 often drafts it for endorsement.</td><td>Threats to UN bases before the rains</td></tr>
<tr><td><b>PIR</b></td><td>Priority PKI question, coherent with mission PIRs through the MICM</td><td>PIR 2: Will armed groups attack UN bases in Sector East before 30 June?</td></tr>
<tr><td><b>SIR</b></td><td>More specific question, often split into intent and capability</td><td>SIR 2.1: Does the group intend to attack UN sites? SIR 2.2: Does it have the means?</td></tr>
<tr><td><b>EEI</b></td><td>The final question an asset can answer; retired when answered</td><td>Are armed men gathering near the Sector East base at night?</td></tr>
<tr><td><b>IR</b></td><td>Information requirement; the basis of tasking. Civilian staff may use IR for everything, so clarify.</td><td>Any of the above, once tasked</td></tr>
<tr><td><b>RFI</b></td><td>Request to a higher or parallel body you cannot task; open to all components</td><td>Sector asks JMAC for its view of local tensions</td></tr></table></div>
<p>The MPKI Handbook gives a simple logic: threat equals intent multiplied by capability. Split each threat PIR along those two lines and you will rarely miss a SIR.</p>
<h3>Indicators and warnings</h3>
<p>Each EEI usually rests on indicators: things that would be seen if the answer were yes. The Handbook lists alert or warning, tactical, identification, gender early warning and civilian vulnerability indicators. Link each one to a named area of interest so an asset knows where to look.</p>
<h3>Priority levels</h3>
<ul><li><b>Mission Critical:</b> rare; the mission cannot succeed without it.</li>
<li><b>Mission Essential:</b> needed for important decisions.</li>
<li><b>Mission Desirable:</b> useful if capacity allows.</li></ul>
<div class="callout"><b class="h">RFI log template</b>Columns: RFI number; originator; question; linked EEI; priority (Immediate or Routine); marking; due date; dissemination route; status; date closed and confirmed by originator. The PKISR Staff Handbook says RFIs without dissemination details must be rejected, and only the requester can confirm an RFI is met. Check existing databases first: acquire once, use many times.</div>
<div class="callout red"><b class="h">Requirements carry risk</b>The Handbook says acquisition tasks must assess protection risks to victims, witnesses and others who speak to the UN. Write that risk into the requirement, not as an afterthought.</div>`,
keys:['CCIR to PIR to SIR to EEI','Threat equals intent times capability','Indicators link to named areas of interest','RFIs need dissemination details and closure by the requester'],
quiz:[{q:'Which item is the final question given to an asset?',o:['CCIR','PIR','EEI','MIAP'],a:2,e:'The EEI is the final, answerable question; it is retired once answered.'},
{q:'An RFI arrives with no dissemination details. Under the PKISR Staff Handbook it should be…',o:['Rejected and returned for completion','Answered by phone','Passed to the Host State','Held without reply'],a:0,e:'RFIs lacking dissemination details must be rejected.'},
{q:'To break down a threat PIR, the MPKI Handbook suggests splitting it into…',o:['Terrain and weather','Intent and capability','Past and future','Men and women only'],a:1,e:'Threat equals intent times capability.'}]},

{id:'m4l2',title:'The Force acquisition plan and lists',mins:25,source:'MPKI Handbook (2025), pp.18–22; PKISR Staff Handbook (2025), pp.11, 15–20, 39–42',
objectives:['Describe the purpose and owner of the Force IAP','Distinguish the IAP from the daily acquisition list','Explain the handbook difference on tasking and how to resolve it','Follow the tasking flow from analyst to asset'],
body:`<p>MINUKA’s Acquisition Manager opens the Force plan spreadsheet. It has 4 PIRs, 22 SIRs and over 60 EEIs. A sector operations officer asks: “Which of these do I give my patrol tomorrow?” He is right to ask. A plan that large is a management document, not an order.</p>
<h3>The Force Information Acquisition Plan</h3>
<p>The MPKI Handbook calls the Force IAP the most important direction tool. Every military component must have one, cascaded to sub-units, and it is a living document. The Chief U2 owns it; an IAP or Information Acquisition Manager runs it. Sector and battalion plans must stay coherent with it, and it with the mission plan.</p>
<div class="tw"><table><tr><th>PIR</th><th>SIR</th><th>EEI</th><th>Acquiring unit</th><th>Source protection</th><th>NAI</th><th>NLT</th><th>LTIOV</th></tr>
<tr><td>2</td><td>2.2</td><td>2.2.3</td><td>Sector East battalion</td><td>No names recorded; open contact only</td><td>NAI 14</td><td>12 May</td><td>15 May</td></tr></table></div>
<p>These suggested headings come from the PKISR Staff Handbook. Keep the plan complete even where no asset exists: the empty rows show capability gaps to leadership.</p>
<h3>Plan versus list</h3>
<p>Here the handbooks differ. The MPKI Handbook describes the Force IAP as the basis of an execution order. The PKISR Staff Handbook says the IAP should not be used as the tasking format, and that tasking goes by a daily Information Acquisition List (IAL). These can be reconciled: the plan drives, the list tasks. Follow your mission SOP.</p>
<div class="tw"><table><tr><th>IAP ref</th><th>IR</th><th>Indicators</th><th>Acquiring unit</th><th>LTIOV</th><th>Dissemination</th></tr>
<tr><td>2.2.3</td><td>Report any gathering of armed men near the Sector East base</td><td>Groups above ten at night; new vehicles</td><td>Battalion patrol</td><td>15 May 1800</td><td>S2 to G2 by INTREP</td></tr></table></div>
<h3>Tasking authority</h3>
<p>Tasking normally sits with Operations unless assets are placed under MPKI control. MPKI builds the requirements; Operations generates and deconflicts tasks. Work together daily.</p>
<h3>The tasking flow</h3>
<ol><li>Analyst or RFI Manager identifies a need.</li>
<li>IAP Manager breaks it into EEIs and indicators and prioritises.</li>
<li>PKISR Plans builds rolling 24, 48 and 72-hour lists.</li>
<li>PKISR Ops tasks units and collects results.</li>
<li>Originator confirms the answer; the IAP is updated.</li></ol>
<div class="callout"><b class="h">Review rhythm</b>The PKISR Staff Handbook suggests a full IAP review ideally quarterly, and at least every six months. The MPKI Handbook gives no interval. Put the review date in the plan itself.</div>
<div class="callout red"><b class="h">Every task from a requirement</b>Every task given to a PKISR asset must come from an agreed requirement. Curiosity is not a requirement.</div>`,
keys:['Force IAP: owned by Chief U2, living, cascaded','Daily IAL tasks; the IAP manages','Handbooks differ on tasking: follow the SOP','Operations normally holds tasking authority'],
quiz:[{q:'Under the PKISR Staff Handbook, what is the tasking format?',o:['The Force IAP','The daily Information Acquisition List','The INTSUM','The MISP'],a:1,e:'The IAP is a management document; the IAL tasks.'},
{q:'Why keep IAP rows that have no asset?',o:['To show capability gaps','Because deleting is forbidden','To confuse adversaries','To fill space'],a:0,e:'Complete plans evidence gaps to leadership.'},
{q:'Who normally holds tasking authority over Force assets?',o:['The JMAC','The Host State','Each patrol leader','Operations, unless assets are under MPKI control'],a:3,e:'MPKI builds requirements; Operations tasks and deconflicts.'}]},

{id:'m4l3',title:'LTIOV and writing good requirements',mins:25,source:'MPKI Handbook (2025), pp.17–18, 91; PKISR Staff Handbook (2025), pp.15, 20–21',
objectives:['Explain NLT and LTIOV and the gap between them','Recognise the different LTIOV expansions','Write a requirement with all six elements','Improve weak requirements using a checklist'],
body:`<p>A MINUKA G2 receives an answer about a planned roadblock at 0900. The convoy left at 0600. The report was accurate and useless. Nobody had written down when the answer stopped being worth anything.</p>
<h3>NLT and LTIOV</h3>
<p><b>NLT</b> (no later than) is when the acquiring unit must report. <b>LTIOV</b> is the latest time the information is still of value to the decision. The gap between NLT and LTIOV is the analyst’s time to check and assess. If NLT and LTIOV are the same, you have planned no time for analysis.</p>
<div class="callout"><b class="h">One term, three spellings</b>The MPKI Handbook expands LTIOV as last time information of value. The PKISR Staff Handbook uses both latest time intelligence is of value and latest time information is of value, on the same page. The meaning is the same. Use the expansion in your mission SOP and be consistent.</div>
<h3>Six elements of a requirement</h3>
<div class="tw"><table><tr><th>Element</th><th>Question</th></tr>
<tr><td>Who</td><td>Who acquires, and who needs the answer?</td></tr>
<tr><td>What</td><td>What exactly must be found out?</td></tr>
<tr><td>Where</td><td>Which named area of interest?</td></tr>
<tr><td>When</td><td>NLT and LTIOV; and the period of interest</td></tr>
<tr><td>Why</td><td>Which decision or PIR it supports</td></tr>
<tr><td>How to disseminate</td><td>Format, route and marking</td></tr></table></div>
<p>The PKISR Staff Handbook adds a seventh: how sources will be protected and kept confidential.</p>
<h3>Worked example</h3>
<div class="tw"><table><tr><th>Weak</th><th>Better</th></tr>
<tr><td>Find out about threats to POC around Lemu</td><td>Sector Central battalion: report signs of armed men moving toward Lemu IDP site (NAI 7), 10 to 17 May; NLT daily 1800, LTIOV 17 May 0600; supports PIR 1 on threats to civilians; INTREP to G2; no names of informants recorded</td></tr>
<tr><td>Monitor the KLF</td><td>Report numbers and weapons openly carried by KLF members at the Bira checkpoint (NAI 3) during patrols, 1 to 31 May; NLT 24 hours after patrol; supports SIR 2.2</td></tr></table></div>
<h3>Analysis timelines</h3>
<p>The PKISR Staff Handbook sets levels that help you set LTIOV realistically: Level 1 within 10 minutes for threat to life; Level 2 within 2 hours; Level 3 within 24 hours; Level 4 within 72 hours for multi-source assessment. Not every unit can produce Level 4.</p>
<div class="callout"><b class="h">Checklist</b>Does it ask one thing? Is it tied to a decision? Can an asset answer it with what it can observe openly? Are NLT and LTIOV set with time between them? Is the method within the rules? Is the source risk addressed?</div>
<div class="callout red"><b class="h">Proper questions only</b>A neat requirement can still be improper. If it targets peaceful politics or a State institution as such, stop and question it through the chain.</div>`,
keys:['NLT is when to report; LTIOV is when value ends','The gap is analyst time','Who, what, where, when, why, how to disseminate, plus source protection','LTIOV expansions differ: follow the SOP'],
quiz:[{q:'NLT and LTIOV are both set at 0600. What is the problem?',o:['None','No time is left for analysis','LTIOV must be earlier than NLT','NLT is not a valid term'],a:1,e:'The gap between NLT and LTIOV is the analyst’s time.'},
{q:'Which element does the PKISR Staff Handbook add to the six?',o:['How sources will be protected','Budget code','Contingent nationality','Weather forecast'],a:0,e:'It adds source protection and confidentiality.'},
{q:'A threat-to-life item falls under which analysis level?',o:['Level 4','Level 3','Level 2','Level 1, within 10 minutes'],a:3,e:'Level 1 covers threat to life and time-sensitive information.'}]},
]});
