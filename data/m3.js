TRACK.modules.push({id:'m3',code:'FORCE',title:'Force Structure: Who Does What',sub:'U2 at Force HQ, G2 at sector, S2 at battalion, company teams and PKISR units; links to the Force Commander, JMAC, JOC, UNDSS and UNPOL; the MICM and the PKI Management Board.',lessons:[
{id:'m3l1',title:'U2, G2 and S2',mins:25,source:'MPKI Handbook (2025), pp.78–81, 108–112',
objectives:['Describe the main tasks of U2, G2 and S2','Outline a suggested U2 branch structure','Explain centralised control and decentralised execution','Use a responsibility checklist for each level'],
body:`<p>MINUKA’s new Chief U2 inherits a cell where everyone does a bit of everything. Requests go unanswered, products repeat each other and Sector North runs its own plan. His first act is to draw a chart of who owns each stage of the cycle. This lesson builds that chart.</p>
<h3>The MPKI architecture</h3>
<p>The MPKI Handbook describes a hierarchy from U2 to G2 to S2, sometimes down to company. Size ranges from a PKI company to a two-person team. Each cell has two functions: support its own commander, and be part of the MPKI network.</p>
<div class="tw"><table><tr><th>Cell</th><th>Main tasks</th></tr>
<tr><td><b>U2</b> (Force HQ)</td><td>Supports the Force Commander and Force HQ planning; mid- to long-term assessments and crisis response; leads and directs all MPKI; allocates scarce capabilities; sets battle rhythm and SOPs; writes the Force PKI Support Plan; keeps the Force Information Acquisition Plan; attends all MICM meetings</td></tr>
<tr><td><b>G2</b> (Sector)</td><td>Carries out U2 direction from the Force plan; supports the Sector Commander; in large missions gives short- and medium-term integrated analysis; keeps its own plan aligned upward</td></tr>
<tr><td><b>S2</b> (Battalion)</td><td>Shorter timelines; one person may cover several stages; directs company acquisition; also handles battalion security tasks; must be properly staffed</td></tr></table></div>
<h3>A suggested U2 structure</h3>
<p>Annex A of the Handbook offers a model, to be adapted to mandate, assets and the mission plan:</p>
<ul><li><b>Command group:</b> Chief, Deputy, information management, administration.</li>
<li><b>Requirements and acquisition management:</b> RFI Manager, Acquisition Manager, PKISR cell if present.</li>
<li><b>Acquisition:</b> open-source and other discipline staff, liaison.</li>
<li><b>Production:</b> all-source analyst teams.</li>
<li><b>Current</b> (support to U3) and <b>Plans</b> (support to U5).</li></ul>
<p>Staff should hold rank and training that match their roles.</p>
<h3>Centralised control, decentralised execution</h3>
<p>The U2 sets priorities, formats and standards for the whole Force. Sectors and battalions execute within them. The PKISR Staff Handbook words this differently, as centralised command and decentralised control. The idea is the same: one plan, many hands. Follow your mission SOP for the exact wording.</p>
<div class="callout"><b class="h">Responsibility checklist</b>At every level, ask: Who obtains the commander’s direction? Who keeps the acquisition plan? Who manages RFIs? Who keeps the source register and registers sources upward? Who releases products? Who keeps the PKI log? If a box is empty, fill it before the next crisis.</div>
<h3>Every level does an AOE</h3>
<p>The U2 must ensure an Analysis of the Operating Environment exists for the whole area, and that subordinates down to company, including each new base, do their own. Sharing them prevents duplication.</p>
<div class="callout red"><b class="h">Objectivity</b>The Handbook asks for moral courage: products must not be bent to suit leadership. A U2 who tells the commander only what pleases is a risk to the Force.</div>`,
keys:['U2 leads all MPKI and attends the MICM','G2 executes U2 direction at sector','S2 works short timelines and directs company acquisition','Centralised control, decentralised execution'],
quiz:[{q:'Which cell writes the Force PKI Support Plan?',o:['G2','U2','S2','COIST'],a:1,e:'The U2 produces the Force plan in line with the mission’s support plan.'},
{q:'The S2 in a small battalion is one person. That is…',o:['Forbidden by the Handbook','Possible, as one person may cover several stages','Only allowed in sectors','A reason to stop MPKI'],a:1,e:'The Handbook accepts combined roles at battalion, though the S2 must be properly staffed.'},
{q:'The U2 is pressed to soften an assessment the commander dislikes. The Handbook principle that applies is…',o:['Need to share','Accessibility','Objectivity','Decentralised execution'],a:2,e:'Objectivity requires moral courage and no distortion.'}]},

{id:'m3l2',title:'Company teams, PKISR units and MASIC',mins:25,source:'MPKI Handbook (2025), pp.79–80, 103; PKISR Staff Handbook (2025), pp.46–51',
objectives:['Explain when a COIST is needed and what it does','Describe the role of a PKISR unit within Force MPKI','Explain why reconnaissance patrols and UAS complement each other','Describe the S2 tasks in the wider PKISR system'],
body:`<p>A MINUKA company is sent alone to a remote site near the eastern border, two days by road from battalion. The company commander needs answers today, not after the next convoy. The battalion S2 proposes a COIST. The commander asks what that means.</p>
<h3>The Company PKI Support Team</h3>
<p>A COIST is a small team, normally two people trained in MPKI, for companies that are remote or on a specific task. It must be robust enough for austere conditions. Its job is the cycle in miniature: take the company commander’s questions, brief patrols, debrief them, record and check what comes back, and report upward to the S2.</p>
<div class="tw"><table><tr><th>COIST does</th><th>COIST does not</th></tr>
<tr><td>Brief patrols with questions and red lines</td><td>Run its own human-source network</td></tr>
<tr><td>Debrief every patrol</td><td>Share with outside forces</td></tr>
<tr><td>Keep a simple log, map overlays and a company AOE</td><td>Task assets outside the company</td></tr>
<tr><td>Pass threat-to-life warnings at once</td><td>Hold information back from S2</td></tr></table></div>
<h3>PKISR units</h3>
<p>A PKISR unit supports acquisition. It may come from one country or several. Some missions use commercial providers managed through Mission Support. Units are described in the PKISR Military Unit Manual (2022); this course does not cover its content. At staff level, what matters is that a PKISR unit is tasked through the Force system, not by itself. The PKISR Staff Handbook states that UAS units must not re-task themselves.</p>
<p>The Handbook also notes that reconnaissance patrols often have as much utility as UAS. A complementary mix is best: people on the ground understand context; aerial assets cover distance. Neither replaces the other.</p>
<h3>MASIC</h3>
<p>Some forces create a Military All-Source Information Cell: a team of analysts with different specialities who fuse inputs into one picture. Whether a mission has one depends on its structure. Where it exists, it sits in the production side of the U2.</p>
<h3>The S2 in the wider system</h3>
<ul><li>Keeps a battalion acquisition plan aligned with the sector.</li>
<li>Gives questions to every patrol and debriefs patrol leaders.</li>
<li>Gets imagery from small battalion UAS into the mission database, with care for human rights.</li>
<li>Sends RFIs upward and tracks them.</li></ul>
<div class="callout"><b class="h">Pre-patrol and post-patrol</b>The Handbook’s annex proposes a pre-patrol brief (recent activity, terrain, people, likely reactions, patrol questions, key leaders) and a mandatory post-patrol debrief by MPKI staff. A COIST lives by these two routines.</div>
<div class="callout red"><b class="h">Small teams, same rules</b>Distance from headquarters does not relax any principle. A remote team that feels pressure to improvise should stop and call the S2.</div>`,
keys:['COIST: two trained people for remote or task-specific companies','PKISR units are tasked through the Force, never self-tasked','Patrols and UAS complement each other','S2 briefs, debriefs and tracks RFIs'],
quiz:[{q:'What is a COIST?',o:['A national intelligence team','A two-person company PKI support team','A UAS unit','A Host State liaison office'],a:1,e:'The MPKI Handbook describes a two-person team trained in MPKI.'},
{q:'A UAS crew sees something interesting and wants to change its flight plan. Who decides?',o:['The crew','The nearest company','The Host State','PKISR Ops in the Force system'],a:3,e:'UAS units must not re-task themselves.'},
{q:'The Handbook view on patrols versus UAS is that…',o:['UAS always replace patrols','A complementary mix is best','Patrols are obsolete','UAS are never useful'],a:1,e:'Reconnaissance patrols often have as much utility as UAS; a mix is best.'}]},

{id:'m3l3',title:'Links across the mission: MICM and PKIMB',mins:25,source:'PKI Policy 2019.08, paras 12, 15; MPKI Handbook (2025), pp.76–79; PKISR Staff Handbook (2025), pp.8, 22–24',
objectives:['Describe the U2 links to the Force Commander, JMAC, JOC, UNDSS and UNPOL','Explain what the MICM does and does not do','Describe the PKI Management Board agenda','Prepare the U2 input to both forums'],
body:`<p>The MINUKA Force Commander, the Chief JMAC and the Police Commissioner all want the same aircraft this week. The Chief U2 has two meetings in his diary: the MICM on Tuesday and the PKI Management Board on Thursday. He must arrive at both with facts, not opinions.</p>
<h3>Who the U2 works with</h3>
<div class="tw"><table><tr><th>Partner</th><th>Relationship</th></tr>
<tr><td><b>Force Commander</b></td><td>Primary manager and client of the U2</td></tr>
<tr><td><b>JMAC</b></td><td>Mission-level integrated analysis for the Head of Mission. The Handbook says all MPKI and other relevant information should be shared with JMAC and the MICM.</td></tr>
<tr><td><b>JOC</b></td><td>Integrated situational awareness and crisis support; the Force sends daily situation reports routinely</td></tr>
<tr><td><b>UNDSS</b></td><td>Security of civilian staff; anything affecting the safety of UN personnel goes to the senior UNDSS representative in time</td></tr>
<tr><td><b>UNPOL</b></td><td>Police PKI unit, often similar in shape to the military one; deconflict requirements and share within the rules</td></tr>
<tr><td>Others</td><td>Political, Civil Affairs, Human Rights, child protection, gender advisers, DDR: valuable context, invited as needed</td></tr></table></div>
<h3>The MICM</h3>
<p>The mission coordination mechanism directs and oversees the cycle. It is chaired by a civilian named by the Head of Mission, preferably the Chief of Staff, sometimes the Chief JMAC. The MPKI Handbook lists five core members: JMAC, JOC, UNDSS, Force U2 and the police PKI unit. The Policy says the MICM does not conduct analysis. It sets mission requirements, validates plans and settles priorities and boundaries. The U2 represents the Force Commander there.</p>
<div class="callout"><b class="h">Texts differ</b>The Policy and handbooks describe chair and membership slightly differently. Follow the terms of reference your mission has issued.</div>
<h3>The PKI Management Board</h3>
<p>The PKISR Staff Handbook describes a monthly board to manage scarce acquisition assets. It is organised by the Chief PKISR, chaired at minimum by the Chief U2, with JMAC, UNPOL and technology staff encouraged to attend. It is not purely U2 business. Missions with few assets may not need one. A typical agenda:</p>
<ol><li>PKI update from U2, JMAC and UNPOL.</li>
<li>Last month: share of effort by requirement or theme.</li>
<li>Unsuccessful acquisition, and why.</li>
<li>Review of the acquisition plan at priority level (full review at least every six months, ideally quarterly).</li>
<li>Next month’s focus; asset availability and hours tasked against hours flown.</li></ol>
<h3>Preparing the U2 input</h3>
<ul><li>Which decisions does each competing request support?</li>
<li>What is the threat to life or to civilians?</li>
<li>Can another means answer it, such as a patrol or an existing database?</li>
<li>Has the host State permitted the activity?</li></ul>
<div class="callout red"><b class="h">Fair to outside requests</b>The PKISR Staff Handbook warns against bias toward the Force’s own requests. JMAC and UNPOL requests deserve the same honest prioritisation.</div>`,
keys:['U2 serves the Force Commander and shares with JMAC and the MICM','MICM directs and oversees; it does not analyse','PKIMB manages scarce assets monthly, chaired at least by Chief U2','Prioritise by decision, threat to life and permission'],
quiz:[{q:'Which statement about the MICM is correct?',o:['It conducts all-source analysis','It directs and oversees the cycle but does not analyse','It is chaired by the Force Commander','It tasks UAS directly'],a:1,e:'The Policy says the mechanism does not conduct analysis.'},
{q:'Information affecting the safety of UN civilian staff must go in time to…',o:['The senior UNDSS representative','The troop-contributing country','The Host State only','No one outside the Force'],a:0,e:'Policy para 11.3.2 sends it to the senior-most UNDSS representative.'},
{q:'Who at minimum chairs the PKI Management Board?',o:['The Head of Mission','The Chief JMAC','The Chief U2','A PKISR pilot'],a:2,e:'The PKISR Staff Handbook names the Chief U2 as minimum chair.'}]},
]});
