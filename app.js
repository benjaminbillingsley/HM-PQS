// Simple SPA for HM PQS course (no tracking)

const modules = [
  {
    id: "101",
    title: "101 — Safety Fundamentals",
    level: "Fundamentals",
    youtube: "https://www.youtube.com/embed/3-3a9kU4h6I", // example generic safety video
    description:
      "Covers Operational Risk Management (ORM), sharps safety, regulated medical waste, PPE, infection control, and the Hearing Conservation Program.",
    sections: [
      {
        heading: "Overview & Learning Objectives",
        html: `
          <p>By the end of this module, you will be able to:</p>
          <ul>
            <li>Explain the concept and steps of Operational Risk Management (ORM).</li>
            <li>Identify common hazards in medical environments and appropriate controls.</li>
            <li>Describe proper handling and disposal of regulated medical waste and sharps.</li>
            <li>Explain needle-stick protocols and required PPE.</li>
            <li>Define key infection control terms and the purpose of the HAIPC program.</li>
            <li>State the purpose of the Hearing Conservation Program (HCP).</li>
          </ul>
        `
      },
      {
        heading: "Operational Risk Management (ORM)",
        html: `
          <span class="badge">PQS 101.1–101.3</span>
          <p><strong>Operational Risk Management (ORM)</strong> is a structured decision-making process used to identify and control risks that can affect personnel, equipment, and mission success.</p>
          <h4>The Five Steps of ORM</h4>
          <ol>
            <li><strong>Identify hazards:</strong> Recognize anything that can cause injury, illness, or mission degradation (e.g., sharps, biohazards, chemicals, gas cylinders).</li>
            <li><strong>Assess hazards:</strong> Estimate the severity and probability of each hazard.</li>
            <li><strong>Make risk decisions:</strong> Decide if the benefits outweigh the risks and what level of risk is acceptable.</li>
            <li><strong>Implement controls:</strong> Put measures in place to reduce risk (engineering controls, administrative controls, PPE).</li>
            <li><strong>Supervise:</strong> Monitor the situation to ensure controls remain effective and adjust as needed.</li>
          </ol>
          <h4>Four Principles of ORM</h4>
          <ul>
            <li><strong>Accept risk when benefits outweigh the cost.</strong></li>
            <li><strong>Accept no unnecessary risk.</strong></li>
            <li><strong>Anticipate and manage risk by planning.</strong></li>
            <li><strong>Make risk decisions at the right level.</strong></li>
          </ul>
        `
      },
      {
        heading: "Medical Gas Cylinders & Environmental Safety",
        html: `
          <span class="badge">PQS 101.4</span>
          <p>Medical gas cylinders (such as oxygen) are high-pressure containers that can cause severe injury or damage if mishandled.</p>
          <ul>
            <li>Cylinders must be stored <strong>upright</strong> and <strong>secured</strong> with chains or straps.</li>
            <li>Separate <strong>full</strong> and <strong>empty</strong> cylinders and label them clearly.</li>
            <li>Keep cylinders away from heat sources, open flames, and oil/grease.</li>
            <li>Never drag, roll, or drop cylinders; use approved carts.</li>
          </ul>
          <p>In patient care spaces (shipboard, clinic, or field), improper storage can turn a cylinder into a projectile if the valve is damaged.</p>
        `
      },
      {
        heading: "Spill Response, Chemicals, and PPE",
        html: `
          <span class="badge">PQS 101.5</span>
          <p>Personal Protective Equipment (PPE) is selected based on the type of exposure risk.</p>
          <h4>Spill Procedures (Blood/Body Fluids)</h4>
          <ul>
            <li>Don appropriate PPE (gloves at minimum; add gown, mask, and eye protection as needed).</li>
            <li>Contain the spill and prevent spread.</li>
            <li>Use an approved disinfectant and follow contact time requirements.</li>
            <li>Dispose of cleanup materials as regulated medical waste.</li>
          </ul>
          <h4>Chemical Procedures</h4>
          <ul>
            <li>Consult the Safety Data Sheet (SDS) for each chemical.</li>
            <li>Use required PPE (e.g., gloves, goggles, respirator if indicated).</li>
            <li>Ensure adequate ventilation.</li>
            <li>Report any exposure or incident per command policy.</li>
          </ul>
        `
      },
      {
        heading: "Sharps Safety & Needle-Stick Protocol",
        html: `
          <span class="badge">PQS 101.6–101.7</span>
          <h4>Sharps Safety</h4>
          <ul>
            <li>Do <strong>not</strong> recap needles.</li>
            <li>Dispose of sharps immediately in approved sharps containers located at the point of use.</li>
            <li>Do not overfill sharps containers (generally no more than 3/4 full).</li>
            <li>Never reach into a sharps container.</li>
          </ul>
          <h4>Needle-Stick Protocol</h4>
          <ol>
            <li>Stop the procedure safely.</li>
            <li>Wash the affected area with soap and water (or flush mucous membranes with water).</li>
            <li>Notify your supervisor immediately.</li>
            <li>Report the exposure according to command policy.</li>
            <li>Follow medical evaluation and post-exposure protocols.</li>
          </ol>
        `
      },
      {
        heading: "Regulated Medical Waste (RMW) & Hearing Conservation",
        html: `
          <span class="badge">PQS 101.8–101.10</span>
          <h4>Regulated Medical Waste (RMW)</h4>
          <p>RMW includes items contaminated with blood, body fluids, or other potentially infectious materials.</p>
          <ul>
            <li><strong>Document:</strong> Maintain records of waste generation and disposal.</li>
            <li><strong>Prepare:</strong> Use approved containers (e.g., red bags, sharps containers) and label them correctly.</li>
            <li><strong>Sort &amp; Package:</strong> Separate sharps, biohazardous waste, and chemical waste.</li>
            <li><strong>Transportation:</strong> Move waste using designated routes and containers to storage or pickup areas.</li>
          </ul>
          <p>The purpose of the RMW program is to protect personnel, the public, and the environment from exposure to infectious or hazardous materials.</p>
          <h4>Hearing Conservation Program (HCP)</h4>
          <p>The HCP exists to prevent occupational hearing loss in noisy environments (e.g., shipboard engineering spaces, flight decks, certain clinics).</p>
          <ul>
            <li>Baseline and periodic audiograms.</li>
            <li>Use of hearing protection (earplugs, earmuffs) in designated noise-hazard areas.</li>
            <li>Education on noise hazards and proper PPE use.</li>
          </ul>
        `
      },
      {
        heading: "Infection Control & HAIPC Program",
        html: `
          <span class="badge">PQS 101.11–101.12</span>
          <h4>Key Infection Control Terms</h4>
          <ul>
            <li><strong>Chain of infection:</strong> Pathogen → reservoir → portal of exit → mode of transmission → portal of entry → susceptible host.</li>
            <li><strong>Virulence:</strong> The ability of a pathogen to cause disease.</li>
            <li><strong>Reservoir:</strong> Where a pathogen normally lives and multiplies (e.g., humans, animals, environment).</li>
            <li><strong>Direct contact:</strong> Person-to-person transmission.</li>
            <li><strong>Droplet infection:</strong> Transmission via respiratory droplets (coughing, sneezing).</li>
            <li><strong>Indirect contact:</strong> Transmission via contaminated objects or surfaces.</li>
            <li><strong>Universal/Standard precautions:</strong> Treat all blood and certain body fluids as potentially infectious; use appropriate PPE and hygiene.</li>
            <li><strong>Blood-borne disease:</strong> Disease transmitted through blood (e.g., HIV, HBV).</li>
            <li><strong>Occupational exposure:</strong> Contact with blood or body fluids during work duties.</li>
          </ul>
          <h4>HAIPC Program</h4>
          <p>The Healthcare-Associated Infection Prevention and Control (HAIPC) program aims to reduce infections acquired in healthcare settings by standardizing infection control practices, monitoring infection rates, and educating staff.</p>
        `
      },
      {
        heading: "Mini-Scenarios",
        html: `
          <div class="scenario">
            <div class="scenario-title">Scenario 1 — Sharps Recapping</div>
            <p class="scenario-question">You see a junior HM recapping a needle after giving an injection in a shipboard treatment room. What should you do?</p>
            <p class="scenario-answer"><strong>Answer:</strong> Stop the unsafe practice immediately, instruct them not to recap needles, and ensure the needle is disposed of in a sharps container. Provide corrective training and report per command policy if required.</p>
          </div>
          <div class="scenario">
            <div class="scenario-title">Scenario 2 — Oxygen Cylinder Storage</div>
            <p class="scenario-question">In a clinic exam room, you find an oxygen cylinder lying on its side, unsecured. What is the correct action?</p>
            <p class="scenario-answer"><strong>Answer:</strong> Secure the cylinder upright using an approved rack or strap, remove it from the room if not needed, and notify the appropriate personnel about improper storage.</p>
          </div>
          <div class="scenario">
            <div class="scenario-title">Scenario 3 — Blood Spill in Passageway</div>
            <p class="scenario-question">A patient bleeds onto the deck in a passageway outside sickbay. How do you respond?</p>
            <p class="scenario-answer"><strong>Answer:</strong> Don appropriate PPE, contain and disinfect the spill using approved disinfectant, dispose of materials as regulated medical waste, and document the incident per command policy.</p>
          </div>
        `
      },
      {
        heading: "End-of-Block Quiz",
        quiz: {
          questions: [
            {
              text: "What is the first step of Operational Risk Management (ORM)?",
              options: ["Assess hazards", "Identify hazards", "Implement controls", "Supervise"],
              correctIndex: 1
            },
            {
              text: "Which ORM principle states that you should avoid risk that does not contribute to mission success?",
              options: [
                "Accept risk when benefits outweigh the cost",
                "Accept no unnecessary risk",
                "Anticipate and manage risk by planning",
                "Make risk decisions at the right level"
              ],
              correctIndex: 1
            },
            {
              text: "Why must oxygen cylinders be stored upright and secured?",
              options: [
                "To keep them clean",
                "To prevent them from freezing",
                "To prevent them from becoming projectiles if damaged",
                "To make them easier to count"
              ],
              correctIndex: 2
            },
            {
              text: "What is the safest action when you finish using a needle?",
              options: [
                "Recap it carefully and place it in the trash",
                "Recap it using two hands",
                "Do not recap; place it directly into a sharps container",
                "Place it on the tray for later disposal"
              ],
              correctIndex: 2
            },
            {
              text: "What is the first step after a needle-stick injury?",
              options: [
                "Finish the procedure",
                "Notify your supervisor",
                "Wash the affected area with soap and water",
                "Fill out paperwork"
              ],
              correctIndex: 2
            },
            {
              text: "Regulated medical waste (RMW) is typically placed in what type of container?",
              options: ["Clear plastic bag", "Red biohazard bag or sharps container", "Cardboard box", "Regular trash bag"],
              correctIndex: 1
            },
            {
              text: "In infection control, what is a 'reservoir'?",
              options: [
                "A type of disinfectant",
                "The place where a pathogen normally lives and multiplies",
                "The mode of transmission",
                "The susceptible host"
              ],
              correctIndex: 1
            },
            {
              text: "What is the primary purpose of the Hearing Conservation Program (HCP)?",
              options: [
                "To improve communication skills",
                "To prevent occupational hearing loss",
                "To test new hearing aids",
                "To monitor shipboard announcements"
              ],
              correctIndex: 1
            },
            {
              text: "A patient sneezes and droplets land on your face shield. What type of transmission is this?",
              options: ["Indirect contact", "Airborne", "Droplet", "Vector-borne"],
              correctIndex: 2
            },
            {
              text: "What is the main purpose of the HAIPC program?",
              options: [
                "To track patient billing",
                "To prevent healthcare-associated infections",
                "To schedule staff leave",
                "To manage pharmacy inventory"
              ],
              correctIndex: 1
            }
          ]
        }
      }
    ]
  },

  // ---- STUB MODULES (you can expand content similarly to 101) ----
{
  id: "102",
  title: "102 — Healthcare Administration Fundamentals",
  level: "Fundamentals",
  youtube: "https://www.youtube.com/embed/2aQwKxJ8Q2s", 
  description:
    "Covers health records, TDFS, privacy, electronic health systems, documentation standards, and physical exam administrative requirements.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Explain the Terminal Digit Filing System (TDFS).</li>
          <li>Describe the annual verification process for health records.</li>
          <li>Identify the components of the Military Health Treatment Record Jacket.</li>
          <li>Define key patient privacy terms including HIPAA and PII.</li>
          <li>Explain the purpose and required fields of common medical forms.</li>
          <li>Describe the purpose of each part of the health record.</li>
          <li>Explain criteria for closing a health record.</li>
          <li>Understand basic functions of AHLTA/CHCS.</li>
          <li>Explain the purpose of physical examinations and qualifying exams.</li>
          <li>Discuss healthcare systems used at your command.</li>
        </ul>
      `
    },

    {
      heading: "Terminal Digit Filing System (TDFS)",
      html: `
        <span class="badge">PQS 102.1</span>
        <p>The Terminal Digit Filing System (TDFS) organizes medical records using the last two digits of the sponsor’s SSN.</p>
        <ul>
          <li><strong>Primary number:</strong> Last two digits (00–99)</li>
          <li><strong>Secondary number:</strong> Middle two digits</li>
          <li><strong>Tertiary number:</strong> First five digits</li>
        </ul>
        <p>This system evenly distributes records and prevents overcrowding in any one section.</p>

        <div class="youtube-wrapper">
          <iframe src="https://www.youtube.com/embed/1t5xRk5vZpE" allowfullscreen></iframe>
        </div>
      `
    },

    {
      heading: "Annual Verification of Health Records",
      html: `
        <span class="badge">PQS 102.2</span>
        <p>Health records must be verified annually to ensure accuracy and completeness.</p>
        <h4>Verification includes:</h4>
        <ul>
          <li>Correct patient identification data</li>
          <li>Presence of required forms</li>
          <li>Updated immunizations</li>
          <li>Review of allergies and medications</li>
          <li>Ensuring privacy forms (DD 2005) are present</li>
        </ul>
      `
    },

    {
      heading: "Military Health Treatment Record Jacket Components",
      html: `
        <span class="badge">PQS 102.3</span>
        <p>The Military Health Treatment Record Jacket (NAVMED 6150/10–19) contains key administrative and medical forms.</p>

        <h4>Key Components:</h4>
        <ul>
          <li><strong>Folder selection:</strong> Based on last digit of SSN.</li>
          <li><strong>Patient identification data:</strong> Name, SSN, branch, blood type.</li>
          <li><strong>Summary forms:</strong> SF 600, DD 2766, immunization records.</li>
          <li><strong>DD Form 2005:</strong> Privacy Act statement.</li>
          <li><strong>Occupational health data:</strong> Hearing tests, exposure forms.</li>
          <li><strong>Computer-generated forms:</strong> EKGs, labs, radiology.</li>
          <li><strong>SF 601:</strong> Immunization record.</li>
          <li><strong>SF 603:</strong> Dental record.</li>
          <li><strong>DD 2807-1:</strong> Report of Medical History.</li>
          <li><strong>DD 2808:</strong> Report of Medical Examination.</li>
          <li><strong>NAVMED 6150/4:</strong> Abstract of Service.</li>
          <li><strong>OPNAV 5211/9:</strong> Disclosure accounting record.</li>
        </ul>

        <div class="youtube-wrapper">
          <iframe src="https://www.youtube.com/embed/7m2p3uQ2YxA" allowfullscreen></iframe>
        </div>
      `
    },

    {
      heading: "Patient Privacy & HIPAA",
      html: `
        <span class="badge">PQS 102.4</span>
        <p>Patient privacy is governed by federal law and Navy policy.</p>

        <h4>Key Terms:</h4>
        <ul>
          <li><strong>HIPAA:</strong> Protects patient health information.</li>
          <li><strong>PII:</strong> Personally Identifiable Information.</li>
          <li><strong>Privacy Act of 1974:</strong> Governs collection and use of personal data.</li>
          <li><strong>Informed consent:</strong> Patient understands and agrees to treatment.</li>
          <li><strong>Lawful consent:</strong> Consent obtained per legal requirements.</li>
        </ul>

        <div class="youtube-wrapper">
          <iframe src="https://www.youtube.com/embed/2aQwKxJ8Q2s" allowfullscreen></iframe>
        </div>
      `
    },

    {
      heading: "Common Medical Forms",
      html: `
        <span class="badge">PQS 102.5</span>
        <p>These forms are used daily in Navy Medicine.</p>

        <ul>
          <li><strong>SF 600:</strong> Chronological Record of Medical Care.</li>
          <li><strong>NAVMED 6150/2:</strong> Special Duty Medical Abstract.</li>
          <li><strong>DD 2215:</strong> Reference Audiogram.</li>
          <li><strong>DD 2808:</strong> Report of Medical Examination.</li>
          <li><strong>DD 2807-1:</strong> Report of Medical History.</li>
          <li><strong>NAVMED 6120/4:</strong> Periodic Health Assessment.</li>
        </ul>

        <div class="youtube-wrapper">
          <iframe src="https://www.youtube.com/embed/0kYwG6lJx0A" allowfullscreen></iframe>
        </div>
      `
    },

    {
      heading: "Parts of the Health Record",
      html: `
        <span class="badge">PQS 102.6</span>
        <ul>
          <li><strong>Part 1:</strong> Preventive Medicine & Occupational Health.</li>
          <li><strong>Part 2:</strong> Medical Care & Treatment.</li>
          <li><strong>Part 3:</strong> Physical Qualifications & Administrative Forms.</li>
          <li><strong>Part 4:</strong> Ancillary Studies (labs, X-rays, EKGs).</li>
        </ul>
      `
    },

    {
      heading: "Closing a Health Record",
      html: `
        <span class="badge">PQS 102.7</span>
        <p>Records are closed when a service member:</p>
        <ul>
          <li>Dies or is declared dead</li>
          <li>Is discharged</li>
          <li>Resigns</li>
          <li>Is released from active duty</li>
          <li>Retires</li>
          <li>Transfers to Fleet Reserve</li>
          <li>Is missing in action</li>
          <li>Is declared a deserter</li>
          <li>Is disenrolled from a program</li>
        </ul>
      `
    },

    {
      heading: "Electronic Health Record Systems (AHLTA/CHCS)",
      html: `
        <span class="badge">PQS 102.8–102.10</span>
        <p>Electronic systems support documentation, ordering, and patient management.</p>

        <h4>Basic Functions:</h4>
        <ul>
          <li>Demographics</li>
          <li>Health history</li>
          <li>Lab & radiology results</li>
          <li>Clinical notes</li>
          <li>Previous encounters</li>
          <li>Vital signs</li>
          <li>Order sets</li>
          <li>Telephone consults</li>
        </ul>

        <div class="youtube-wrapper">
          <iframe src="https://www.youtube.com/embed/5xGJtG6o9nU" allowfullscreen></iframe>
        </div>
      `
    },

    {
      heading: "Physical Examinations & Qualifying Exams",
      html: `
        <span class="badge">PQS 102.11–102.13</span>
        <p>Physical exams ensure medical readiness and suitability for duty.</p>

        <h4>Types of Exams:</h4>
        <ul>
          <li>Overseas/Operational Screening</li>
          <li>Periodic Health Assessment (PHA)</li>
          <li>Special Duty (diving, aviation, submarine)</li>
          <li>Occupational Health Surveillance</li>
          <li>Separation/Retirement</li>
        </ul>
      `
    },

    {
      heading: "Healthcare Systems at Your Command",
      html: `
        <span class="badge">PQS 102.14</span>
        <p>Common systems include:</p>
        <ul>
          <li>MRRS (Medical Readiness Reporting System)</li>
          <li>AHLTA/CHCS</li>
          <li>DENCAS (Dental)</li>
          <li>CarePoint/MHSPHP</li>
        </ul>
      `
    },

    {
      heading: "The Joint Commission & Navy Medicine Augmentation",
      html: `
        <span class="badge">PQS 102.15–102.16</span>
        <p><strong>The Joint Commission</strong> accredits healthcare facilities and ensures quality and safety.</p>
        <p><strong>Navy Medicine Augmentation Program</strong> provides medical personnel to operational units during contingencies.</p>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "What does TDFS primarily organize?",
            options: ["Dental records", "Medical records by last two digits of SSN", "Lab results", "Radiology files"],
            correctIndex: 1
          },
          {
            text: "Which form is the Chronological Record of Medical Care?",
            options: ["SF 600", "DD 2808", "NAVMED 6150/4", "DD 2215"],
            correctIndex: 0
          },
          {
            text: "Which part of the health record contains immunizations?",
            options: ["Part 1", "Part 2", "Part 3", "Part 4"],
            correctIndex: 0
          },
          {
            text: "Which system is used for medical readiness tracking?",
            options: ["AHLTA", "MRRS", "DENCAS", "CHCS"],
            correctIndex: 1
          },
          {
            text: "What is HIPAA designed to protect?",
            options: ["Financial data", "Personal preferences", "Health information", "Training records"],
            correctIndex: 2
          }
        ]
      }
    }
  ]
},{
  id: "103",
  title: "103 — Medical Assessment Fundamentals",
  level: "Fundamentals",
  youtube: "", // intentionally left blank
  description:
    "Covers patient rights and responsibilities, communication, standbys, SOAP notes, history taking (including OLDCARTS and ROS), pain description, and screening procedures.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Describe basic patient rights and responsibilities.</li>
          <li>Explain effective verbal and non-verbal communication with patients.</li>
          <li>State the purpose of standbys during medical examinations.</li>
          <li>Describe the components of a SOAP note.</li>
          <li>Identify key elements of patient history, including ROS.</li>
          <li>Use OLDCARTS to structure a History of Present Illness (HPI).</li>
          <li>Define terms related to HPI and pain description.</li>
          <li>Discuss basic screening procedures for medical appointments.</li>
        </ul>
      `
    },

    {
      heading: "Patient Rights and Responsibilities",
      html: `
        <span class="badge">PQS 103.1</span>
        <p>Patients have specific rights and responsibilities in the military health system.</p>
        <h4>Common Patient Rights:</h4>
        <ul>
          <li>Right to respectful, considerate care.</li>
          <li>Right to receive understandable information about diagnosis and treatment.</li>
          <li>Right to privacy and confidentiality.</li>
          <li>Right to participate in decisions about care.</li>
          <li>Right to know the identity and role of healthcare personnel.</li>
        </ul>
        <h4>Common Patient Responsibilities:</h4>
        <ul>
          <li>Provide accurate and complete health information.</li>
          <li>Follow the treatment plan as agreed upon.</li>
          <li>Show respect to staff and other patients.</li>
          <li>Keep appointments or notify if unable to do so.</li>
        </ul>
      `
    },

    {
      heading: "Patient Communication",
      html: `
        <span class="badge">PQS 103.2</span>
        <p>Effective communication builds trust and improves care.</p>
        <h4>Verbal Communication:</h4>
        <ul>
          <li>Use clear, simple language.</li>
          <li>Confirm understanding by asking the patient to repeat key points.</li>
          <li>Avoid jargon when possible.</li>
        </ul>
        <h4>Non-Verbal Communication:</h4>
        <ul>
          <li>Maintain appropriate eye contact.</li>
          <li>Use open body posture.</li>
          <li>Be aware of facial expressions and tone.</li>
        </ul>
        <h4>Contact Point:</h4>
        <p>The corpsman is often the first and main contact point for the patient, setting the tone for the entire encounter.</p>
      `
    },

    {
      heading: "Standbys During Medical Examinations",
      html: `
        <span class="badge">PQS 103.3</span>
        <p>A standby is an additional person present during certain medical examinations.</p>
        <h4>Purpose of Standbys:</h4>
        <ul>
          <li>Protect the patient’s dignity and comfort.</li>
          <li>Provide a witness for sensitive exams.</li>
          <li>Support safety and professionalism.</li>
        </ul>
        <p>Standbys are especially important during examinations of sensitive areas or when gender differences may cause discomfort.</p>
      `
    },

    {
      heading: "SOAP Note Components",
      html: `
        <span class="badge">PQS 103.4</span>
        <p>The SOAP format is a standard way to document patient encounters.</p>
        <ul>
          <li><strong>S — Subjective:</strong> What the patient reports (chief complaint, HPI, ROS).</li>
          <li><strong>O — Objective:</strong> Measurable findings (vital signs, physical exam, labs).</li>
          <li><strong>A — Assessment:</strong> Provider’s impression or diagnosis.</li>
          <li><strong>P — Plan:</strong> Treatment, tests, follow-up, patient education.</li>
        </ul>
      `
    },

    {
      heading: "Patient History & Review of Systems (ROS)",
      html: `
        <span class="badge">PQS 103.5</span>
        <p>Patient history provides context for current complaints and overall health.</p>
        <h4>Key Components:</h4>
        <ul>
          <li><strong>Last menstrual period (LMP):</strong> Important for female patients of reproductive age.</li>
          <li><strong>Past medical history:</strong> Chronic illnesses, hospitalizations.</li>
          <li><strong>Past surgical history:</strong> Surgeries and dates.</li>
          <li><strong>Allergies:</strong> Medications, foods, environmental; include reactions.</li>
          <li><strong>Medications:</strong> Name, dose, frequency, over-the-counter and supplements.</li>
          <li><strong>Family history:</strong> Major illnesses in close relatives.</li>
          <li><strong>Social history:</strong> Tobacco, alcohol, drugs, occupation, living situation.</li>
          <li><strong>Review of Systems (ROS):</strong> Systematic review of symptoms by body system.</li>
        </ul>
      `
    },

    {
      heading: "History of Present Illness (HPI) and OLDCARTS",
      html: `
        <span class="badge">PQS 103.6–103.7</span>
        <p>The HPI describes the story of the patient’s current problem.</p>
        <h4>OLDCARTS (Common HPI Framework):</h4>
        <ul>
          <li><strong>O — Onset:</strong> When did it start?</li>
          <li><strong>L — Location:</strong> Where is it?</li>
          <li><strong>D — Duration:</strong> How long has it been present?</li>
          <li><strong>C — Character:</strong> What does it feel like (sharp, dull, burning)?</li>
          <li><strong>A — Aggravating factors:</strong> What makes it worse?</li>
          <li><strong>R — Relieving factors:</strong> What makes it better?</li>
          <li><strong>T — Timing:</strong> Constant or intermittent? Better/worse at certain times?</li>
          <li><strong>S — Severity:</strong> How bad is it (often 0–10 scale)?</li>
        </ul>
        <h4>Other HPI Concepts:</h4>
        <ul>
          <li><strong>Description of complaint:</strong> Patient’s own words.</li>
          <li><strong>Chronology of events:</strong> Sequence of symptoms and actions taken.</li>
          <li><strong>Review patient charts:</strong> Check prior visits, labs, imaging.</li>
          <li><strong>Pertinent positives:</strong> Symptoms that support a possible diagnosis.</li>
          <li><strong>Pertinent negatives:</strong> Expected symptoms that are absent and help rule out conditions.</li>
        </ul>
      `
    },

    {
      heading: "Describing Pain",
      html: `
        <span class="badge">PQS 103.8</span>
        <p>Pain is often described using structured terms.</p>
        <ul>
          <li><strong>Onset:</strong> When the pain started.</li>
          <li><strong>Provocation/Palliation:</strong> What makes it worse or better.</li>
          <li><strong>Quality:</strong> Type of pain (sharp, dull, throbbing, burning).</li>
          <li><strong>Radiates:</strong> Does the pain move or travel to other areas?</li>
          <li><strong>Severity:</strong> Intensity, often rated 0–10.</li>
          <li><strong>Timing:</strong> Constant, intermittent, or related to specific activities.</li>
        </ul>
      `
    },

    {
      heading: "Screening Procedures for Medical Appointments",
      html: `
        <span class="badge">PQS 103.9</span>
        <p>Screening helps prioritize care and ensure safety.</p>
        <h4>Common Screening Steps:</h4>
        <ul>
          <li>Verify patient identity (two identifiers).</li>
          <li>Obtain chief complaint.</li>
          <li>Take vital signs (as required by clinic protocol).</li>
          <li>Ask brief, focused questions related to the complaint.</li>
          <li>Identify red flags (chest pain, shortness of breath, severe pain, suicidal ideation).</li>
          <li>Document findings clearly and promptly.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Incomplete HPI</div>
          <p class="scenario-question">A patient says, "My chest hurts." You only document "chest pain" and move on. What key information are you missing?</p>
          <p class="scenario-answer"><strong>Answer:</strong> OLDCARTS details such as onset, location, duration, character, aggravating/relieving factors, timing, and severity.</p>
        </div>
        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Non-Verbal Cues</div>
          <p class="scenario-question">A patient says they are "fine," but avoids eye contact and appears tense. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Recognize the non-verbal cues, ask open-ended questions, and gently explore concerns to build trust.</p>
        </div>
        <div class="scenario">
          <div class="scenario-title">Scenario 3 — Red Flag During Screening</div>
          <p class="scenario-question">During screening, a patient with abdominal pain reports sudden, severe pain and appears pale and diaphoretic. What is your priority?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Recognize this as a potential emergency, notify a provider immediately, and follow clinic protocols for urgent evaluation.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which of the following is part of the patient's rights?",
            options: [
              "Guarantee of a specific diagnosis",
              "Right to respectful and considerate care",
              "Right to refuse to provide any information",
              "Right to demand any medication"
            ],
            correctIndex: 1
          },
          {
            text: "Which component of SOAP contains the patient’s chief complaint and HPI?",
            options: ["Subjective", "Objective", "Assessment", "Plan"],
            correctIndex: 0
          },
          {
            text: "In OLDCARTS, the letter 'C' stands for:",
            options: ["Cause", "Character", "Chronicity", "Course"],
            correctIndex: 1
          },
          {
            text: "Which of the following is a 'pertinent negative'?",
            options: [
              "Patient reports chest pain and shortness of breath",
              "Patient denies shortness of breath with chest pain",
              "Patient reports fever and chills",
              "Patient reports nausea and vomiting"
            ],
            correctIndex: 1
          },
          {
            text: "Which is an example of non-verbal communication?",
            options: [
              "Explaining the procedure",
              "Writing in the chart",
              "Maintaining appropriate eye contact",
              "Asking closed-ended questions"
            ],
            correctIndex: 2
          }
        ]
      }
    }
  ]
},
{
  id: "104",
  title: "104 — Military Medical Examinations Fundamentals",
  level: "Fundamentals",
  youtube: "", // intentionally blank
  description:
    "Covers primary and secondary assessments, vital signs, environmental factors, orthostatic blood pressure, physical exam techniques, DCAP-BTLS, and normal vs abnormal findings across all major body systems.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Perform a primary and secondary assessment.</li>
          <li>Identify normal and abnormal vital signs.</li>
          <li>Explain environmental factors affecting vital signs.</li>
          <li>Obtain orthostatic blood pressure correctly.</li>
          <li>Define inspection, auscultation, palpation, and percussion.</li>
          <li>Apply DCAP-BTLS during trauma assessment.</li>
          <li>Recognize normal and abnormal findings across major body systems.</li>
        </ul>
      `
    },

    {
      heading: "Primary Assessment",
      html: `
        <span class="badge">PQS 104.1</span>
        <p>The primary assessment identifies immediate life threats.</p>
        <h4>Steps:</h4>
        <ul>
          <li><strong>General impression:</strong> Patient appearance, distress, environment.</li>
          <li><strong>Responsiveness:</strong> AVPU (Alert, Verbal, Pain, Unresponsive).</li>
          <li><strong>Airway:</strong> Open, clear, maintainable.</li>
          <li><strong>Breathing:</strong> Rate, depth, effort, chest rise.</li>
          <li><strong>Circulation:</strong> Pulse, skin color/temp, major bleeding.</li>
          <li><strong>Disability:</strong> Quick neuro check (LOC, pupils, movement).</li>
          <li><strong>Expose:</strong> Expose only as needed for assessment.</li>
        </ul>
      `
    },

    {
      heading: "Secondary Assessment (DCAP-BTLS)",
      html: `
        <span class="badge">PQS 104.2</span>
        <p>The secondary assessment is a head-to-toe exam used after life threats are addressed.</p>
        <h4>DCAP-BTLS:</h4>
        <ul>
          <li><strong>D — Deformities</strong></li>
          <li><strong>C — Contusions</strong></li>
          <li><strong>A — Abrasions</strong></li>
          <li><strong>P — Punctures/Penetrations</strong></li>
          <li><strong>B — Burns</strong></li>
          <li><strong>T — Tenderness</strong></li>
          <li><strong>L — Lacerations</strong></li>
          <li><strong>S — Swelling</strong></li>
        </ul>
        <p>Apply DCAP-BTLS to each body region during trauma assessment.</p>
      `
    },

    {
      heading: "Normal & Abnormal Vital Signs",
      html: `
        <span class="badge">PQS 104.3</span>
        <h4>Normal Adult Vital Signs:</h4>
        <ul>
          <li><strong>Blood pressure:</strong> ~120/80 mmHg</li>
          <li><strong>Respiratory rate:</strong> 12–20 breaths/min</li>
          <li><strong>Pulse:</strong> 60–100 bpm</li>
          <li><strong>Temperature:</strong> 98.6°F (37°C)</li>
        </ul>
        <h4>Abnormal Examples:</h4>
        <ul>
          <li><strong>Hypertension:</strong> >140/90</li>
          <li><strong>Tachycardia:</strong> >100 bpm</li>
          <li><strong>Bradypnea:</strong> <12 breaths/min</li>
          <li><strong>Fever:</strong> >100.4°F (38°C)</li>
        </ul>
      `
    },

    {
      heading: "Environmental Factors Affecting Vital Signs",
      html: `
        <span class="badge">PQS 104.4</span>
        <p>Vital signs can be influenced by environmental and situational factors.</p>
        <ul>
          <li><strong>Temperature:</strong> Heat increases pulse; cold lowers temperature.</li>
          <li><strong>Stress:</strong> Raises pulse and blood pressure.</li>
          <li><strong>Exercise:</strong> Increases pulse and respiratory rate.</li>
          <li><strong>Altitude:</strong> Increases respiratory rate.</li>
          <li><strong>Hydration:</strong> Dehydration increases heart rate.</li>
        </ul>
      `
    },

    {
      heading: "Orthostatic Blood Pressure",
      html: `
        <span class="badge">PQS 104.5</span>
        <p>Orthostatic vitals assess for volume depletion or autonomic dysfunction.</p>
        <h4>Procedure:</h4>
        <ul>
          <li>Have the patient lie supine for 1–3 minutes; record BP and pulse.</li>
          <li>Have the patient sit; wait 1 minute; record BP and pulse.</li>
          <li>Have the patient stand; wait 1 minute; record BP and pulse.</li>
        </ul>
        <h4>Positive Orthostatics:</h4>
        <ul>
          <li>Drop in systolic BP ≥20 mmHg</li>
          <li>Drop in diastolic BP ≥10 mmHg</li>
          <li>Increase in pulse ≥20 bpm</li>
        </ul>
      `
    },

    {
      heading: "Physical Examination Techniques",
      html: `
        <span class="badge">PQS 104.6</span>
        <p>These are the four core techniques used during physical exams.</p>
        <ul>
          <li><strong>Inspection:</strong> Visual observation of appearance, movement, skin, posture.</li>
          <li><strong>Auscultation:</strong> Listening with a stethoscope (heart, lungs, bowel sounds).</li>
          <li><strong>Palpation:</strong> Using hands to feel for tenderness, masses, temperature.</li>
          <li><strong>Percussion:</strong> Tapping to assess underlying structures (air, fluid, solid).</li>
        </ul>
      `
    },

    {
      heading: "DCAP-BTLS Definitions",
      html: `
        <span class="badge">PQS 104.7</span>
        <p>DCAP-BTLS is used to identify trauma-related abnormalities.</p>
        <ul>
          <li><strong>Deformities:</strong> Abnormal shape or alignment.</li>
          <li><strong>Contusions:</strong> Bruising.</li>
          <li><strong>Abrasions:</strong> Scrapes or superficial damage.</li>
          <li><strong>Punctures/Penetrations:</strong> Holes or deep injuries.</li>
          <li><strong>Burns:</strong> Thermal, chemical, or electrical injury.</li>
          <li><strong>Tenderness:</strong> Pain on palpation.</li>
          <li><strong>Lacerations:</strong> Cuts or tears in tissue.</li>
          <li><strong>Swelling:</strong> Edema or inflammation.</li>
        </ul>
      `
    },

    {
      heading: "Physical Examination Components",
      html: `
        <span class="badge">PQS 104.8</span>
        <p>These systems are assessed during a complete physical exam.</p>
        <ul>
          <li><strong>Vital Signs</strong></li>
          <li><strong>General Appearance</strong></li>
          <li><strong>HEENT</strong> (Head, Eyes, Ears, Nose, Throat)</li>
          <li><strong>Cardiovascular</strong></li>
          <li><strong>Pulmonary</strong></li>
          <li><strong>Abdominal</strong></li>
          <li><strong>Genitourinary</strong></li>
          <li><strong>Musculoskeletal</strong></li>
          <li><strong>Dermatological</strong></li>
          <li><strong>Neurological</strong></li>
          <li><strong>Dental</strong></li>
          <li><strong>Endocrine</strong></li>
          <li><strong>Mental Health</strong></li>
        </ul>
      `
    },

    {
      heading: "Normal Assessment Findings",
      html: `
        <span class="badge">PQS 104.9</span>
        <p>Examples of normal findings by system:</p>
        <ul>
          <li><strong>General:</strong> Alert, oriented, no distress.</li>
          <li><strong>HEENT:</strong> Pupils equal/reactive, clear tympanic membranes.</li>
          <li><strong>Cardiovascular:</strong> Regular rate/rhythm, no murmurs.</li>
          <li><strong>Pulmonary:</strong> Clear breath sounds bilaterally.</li>
          <li><strong>Abdominal:</strong> Soft, non-tender, normal bowel sounds.</li>
          <li><strong>GI/GU:</strong> No masses, no CVA tenderness.</li>
          <li><strong>Musculoskeletal:</strong> Full range of motion, no deformities.</li>
          <li><strong>Dermatological:</strong> Warm, dry, intact skin.</li>
          <li><strong>Neurological:</strong> Normal strength, sensation, reflexes.</li>
          <li><strong>Dental:</strong> No cavities or gum disease.</li>
          <li><strong>Endocrine:</strong> No signs of thyroid enlargement.</li>
          <li><strong>Mental Health:</strong> Appropriate mood and affect.</li>
        </ul>
      `
    },

    {
      heading: "Abnormal Assessment Findings",
      html: `
        <span class="badge">PQS 104.10</span>
        <p>Examples of abnormal findings by system:</p>
        <ul>
          <li><strong>General:</strong> Lethargy, diaphoresis, distress.</li>
          <li><strong>HEENT:</strong> Unequal pupils, ear discharge, swollen tonsils.</li>
          <li><strong>Cardiovascular:</strong> Irregular rhythm, murmurs, weak pulses.</li>
          <li><strong>Pulmonary:</strong> Wheezes, crackles, diminished breath sounds.</li>
          <li><strong>Abdominal:</strong> Guarding, rigidity, rebound tenderness.</li>
          <li><strong>GI/GU:</strong> Hematuria, masses, severe flank pain.</li>
          <li><strong>Musculoskeletal:</strong> Deformities, swelling, limited ROM.</li>
          <li><strong>Dermatological:</strong> Rashes, lesions, cyanosis.</li>
          <li><strong>Neurological:</strong> Weakness, numbness, slurred speech.</li>
          <li><strong>Dental:</strong> Caries, abscesses, gum inflammation.</li>
          <li><strong>Endocrine:</strong> Goiter, unexplained weight changes.</li>
          <li><strong>Mental Health:</strong> Hallucinations, suicidal ideation.</li>
        </ul>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which step is part of the primary assessment?",
            options: [
              "Checking bowel sounds",
              "Assessing airway patency",
              "Performing DCAP-BTLS",
              "Testing reflexes"
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is included in DCAP-BTLS?",
            options: ["Dizziness", "Contusions", "Cyanosis", "Clubbing"],
            correctIndex: 1
          },
          {
            text: "A normal adult respiratory rate is:",
            options: ["6–10", "12–20", "20–30", "30–40"],
            correctIndex: 1
          },
          {
            text: "A drop in systolic BP of 20 mmHg when standing indicates:",
            options: [
              "Hypertension",
              "Orthostatic change",
              "Normal variation",
              "Cardiac arrest"
            ],
            correctIndex: 1
          },
          {
            text: "Crackles heard in the lungs are considered:",
            options: ["Normal", "Abnormal", "Unrelated", "Gastrointestinal"],
            correctIndex: 1
          }
        ]
      }
    }
  ]
},

  // You would continue adding modules for 105–110, 201, 301–303 similarly:
{
  id: "105",
  title: "105 — Medical Diagnosis & Treatment Fundamentals",
  level: "Fundamentals",
  youtube: "", // intentionally blank
  description:
    "Covers diagnostic reasoning, differential diagnosis, treatment fundamentals, wound care, splinting, sutures and staples, medication administration, and patient education.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Explain the basic principles of medical diagnosis.</li>
          <li>Develop simple differential diagnoses based on symptoms.</li>
          <li>Describe general treatment fundamentals used in Navy Medicine.</li>
          <li>Perform basic wound care and apply appropriate dressings.</li>
          <li>Explain indications for sutures, staples, and wound closure.</li>
          <li>Demonstrate knowledge of splinting fundamentals.</li>
          <li>Understand medication administration routes and safety principles.</li>
          <li>Provide effective patient education and follow-up instructions.</li>
        </ul>
      `
    },

    {
      heading: "Principles of Medical Diagnosis",
      html: `
        <span class="badge">PQS 105.1</span>
        <p>Diagnosis is the process of identifying a disease or condition based on patient history, physical exam, and diagnostic testing.</p>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Pattern recognition:</strong> Identifying common presentations.</li>
          <li><strong>Clinical reasoning:</strong> Using logic to interpret findings.</li>
          <li><strong>Rule-in / Rule-out:</strong> Determining which conditions fit or do not fit the presentation.</li>
          <li><strong>Red flags:</strong> Symptoms that require urgent evaluation (e.g., chest pain, shortness of breath, severe abdominal pain).</li>
        </ul>
      `
    },

    {
      heading: "Differential Diagnosis",
      html: `
        <span class="badge">PQS 105.2</span>
        <p>A differential diagnosis is a list of possible conditions that could explain the patient's symptoms.</p>
        <h4>Steps to Build a Differential:</h4>
        <ul>
          <li>Identify the chief complaint.</li>
          <li>Use OLDCARTS and ROS to gather details.</li>
          <li>Consider common causes first (“common things are common”).</li>
          <li>Include serious but less common conditions that must not be missed.</li>
          <li>Use physical exam findings to narrow the list.</li>
        </ul>
      `
    },

    {
      heading: "Diagnostic Testing Fundamentals",
      html: `
        <span class="badge">PQS 105.3</span>
        <p>Diagnostic tests support clinical decision-making but do not replace history and physical exam.</p>
        <h4>Common Diagnostic Tools:</h4>
        <ul>
          <li><strong>Laboratory tests:</strong> CBC, CMP, UA, rapid tests.</li>
          <li><strong>Imaging:</strong> X-ray, ultrasound (if available).</li>
          <li><strong>Point-of-care tests:</strong> Glucose, pregnancy tests, strep tests.</li>
        </ul>
        <p>Always interpret test results in the context of the patient’s symptoms.</p>
      `
    },

    {
      heading: "Treatment Fundamentals",
      html: `
        <span class="badge">PQS 105.4</span>
        <p>Treatment plans are based on diagnosis, severity, and patient factors.</p>
        <h4>General Treatment Principles:</h4>
        <ul>
          <li><strong>Stabilize first:</strong> Airway, breathing, circulation.</li>
          <li><strong>Address the cause:</strong> Infection, injury, inflammation.</li>
          <li><strong>Symptom relief:</strong> Pain control, fever reduction.</li>
          <li><strong>Follow-up:</strong> Ensure the patient knows when to return.</li>
        </ul>
      `
    },

    {
      heading: "Wound Care Fundamentals",
      html: `
        <span class="badge">PQS 105.5</span>
        <p>Proper wound care prevents infection and promotes healing.</p>
        <h4>Steps:</h4>
        <ul>
          <li><strong>Control bleeding:</strong> Direct pressure, elevation.</li>
          <li><strong>Clean the wound:</strong> Irrigate with normal saline.</li>
          <li><strong>Assess:</strong> Depth, contamination, foreign bodies.</li>
          <li><strong>Dress:</strong> Apply appropriate dressing (gauze, non-adherent, pressure dressing).</li>
        </ul>
      `
    },

    {
      heading: "Wound Closure: Sutures & Staples",
      html: `
        <span class="badge">PQS 105.6</span>
        <p>Sutures and staples are used to close wounds that require approximation for healing.</p>
        <h4>Indications:</h4>
        <ul>
          <li>Deep or gaping lacerations.</li>
          <li>Wounds under tension.</li>
          <li>Wounds in areas where cosmetic outcome matters (face, hands).</li>
        </ul>
        <h4>Contraindications:</h4>
        <ul>
          <li>Heavily contaminated wounds (may require delayed closure).</li>
          <li>Animal bites (case-dependent).</li>
        </ul>
      `
    },

    {
      heading: "Splinting Fundamentals",
      html: `
        <span class="badge">PQS 105.7</span>
        <p>Splinting immobilizes injured bones or joints to reduce pain and prevent further injury.</p>
        <h4>General Rules:</h4>
        <ul>
          <li>Immobilize the joint above and below the injury.</li>
          <li>Check circulation before and after application.</li>
          <li>Pad all rigid splints.</li>
          <li>Do not attempt to realign fractures unless there is no pulse.</li>
        </ul>
      `
    },

    {
      heading: "Medication Administration Fundamentals",
      html: `
        <span class="badge">PQS 105.8</span>
        <p>Medication administration must follow safety protocols to prevent errors.</p>
        <h4>Five Rights of Medication Administration:</h4>
        <ul>
          <li>Right patient</li>
          <li>Right medication</li>
          <li>Right dose</li>
          <li>Right route</li>
          <li>Right time</li>
        </ul>
        <h4>Common Routes:</h4>
        <ul>
          <li>Oral (PO)</li>
          <li>Intramuscular (IM)</li>
          <li>Subcutaneous (SQ)</li>
          <li>Intravenous (IV)</li>
          <li>Topical</li>
          <li>Ophthalmic/Otic</li>
        </ul>
      `
    },

    {
      heading: "Patient Education & Follow-Up",
      html: `
        <span class="badge">PQS 105.9</span>
        <p>Patient education ensures understanding of diagnosis, treatment, and follow-up needs.</p>
        <h4>Key Components:</h4>
        <ul>
          <li>Explain the diagnosis in simple terms.</li>
          <li>Review medications and side effects.</li>
          <li>Describe wound care or home care instructions.</li>
          <li>Identify warning signs that require immediate care.</li>
          <li>Schedule or recommend follow-up appointments.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Wound Closure Decision</div>
          <p class="scenario-question">A patient presents with a 3 cm clean laceration on the forearm. Bleeding is controlled. What is the next step?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Irrigate thoroughly, assess depth, and determine if sutures are needed based on wound edges and tension.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Splinting</div>
          <p class="scenario-question">A patient has a suspected wrist fracture. What must you check before and after splinting?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Circulation, sensation, and movement (CSM).</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 3 — Medication Safety</div>
          <p class="scenario-question">You are preparing to give an IM injection. The patient’s name does not match the chart. What do you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Stop immediately and verify the correct patient using two identifiers.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which of the following is part of the diagnostic process?",
            options: [
              "Ignoring patient history",
              "Pattern recognition",
              "Assuming the most serious condition first",
              "Skipping physical exam"
            ],
            correctIndex: 1
          },
          {
            text: "Which step is part of wound care?",
            options: [
              "Applying ointment before irrigation",
              "Irrigating with normal saline",
              "Closing all wounds immediately",
              "Avoiding assessment of depth"
            ],
            correctIndex: 1
          },
          {
            text: "Which is one of the Five Rights of medication administration?",
            options: ["Right provider", "Right diagnosis", "Right patient", "Right insurance"],
            correctIndex: 2
          },
          {
            text: "Splinting requires immobilizing:",
            options: [
              "Only the injured bone",
              "Only the joint above the injury",
              "Only the joint below the injury",
              "The joint above and below the injury"
            ],
            correctIndex: 3
          },
          {
            text: "Which wound is most appropriate for sutures?",
            options: [
              "Superficial abrasion",
              "Deep, clean laceration with gaping edges",
              "Crush injury",
              "Heavily contaminated wound"
            ],
            correctIndex: 1
          }
        ]
      }
    }
  ]
},
  {
  id: "106",
  title: "106 — Preventive Medicine Fundamentals",
  level: "Fundamentals",
  youtube: "", // intentionally blank
  description:
    "Covers sanitation, personal hygiene, water testing, food safety, waste disposal, vector control, heat and cold injuries, and field preventive medicine responsibilities.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Explain the purpose of preventive medicine in Navy and Marine Corps operations.</li>
          <li>Describe proper personal hygiene and sanitation practices.</li>
          <li>Identify safe water sources and basic water testing principles.</li>
          <li>Explain food safety fundamentals and galley sanitation.</li>
          <li>Discuss proper waste disposal methods in garrison and field environments.</li>
          <li>Identify common vectors and methods of vector control.</li>
          <li>Recognize signs, symptoms, and prevention of heat and cold injuries.</li>
          <li>Apply preventive medicine principles in field and shipboard settings.</li>
        </ul>
      `
    },

    {
      heading: "Purpose of Preventive Medicine",
      html: `
        <span class="badge">PQS 106.1</span>
        <p>Preventive medicine reduces disease and non-battle injuries (DNBI), which historically cause more casualties than combat.</p>
        <h4>Goals:</h4>
        <ul>
          <li>Protect the health of personnel.</li>
          <li>Prevent outbreaks of communicable diseases.</li>
          <li>Ensure safe food, water, and living conditions.</li>
          <li>Maintain operational readiness.</li>
        </ul>
      `
    },

    {
      heading: "Personal Hygiene & Sanitation",
      html: `
        <span class="badge">PQS 106.2</span>
        <p>Good hygiene prevents the spread of disease and maintains combat effectiveness.</p>
        <h4>Key Practices:</h4>
        <ul>
          <li>Regular handwashing with soap and water.</li>
          <li>Daily personal cleaning (showers when available).</li>
          <li>Proper foot care to prevent blisters and infections.</li>
          <li>Clean uniforms and gear.</li>
          <li>Safe handling of personal waste.</li>
        </ul>
      `
    },

    {
      heading: "Water Supply & Testing",
      html: `
        <span class="badge">PQS 106.3</span>
        <p>Safe drinking water is essential to prevent waterborne diseases.</p>
        <h4>Safe Water Sources:</h4>
        <ul>
          <li>Approved municipal systems.</li>
          <li>Shipboard potable water systems.</li>
          <li>Field water purification units.</li>
        </ul>
        <h4>Basic Testing Principles:</h4>
        <ul>
          <li>Check chlorine residual levels.</li>
          <li>Inspect for clarity, odor, and contamination.</li>
          <li>Use approved test kits when available.</li>
        </ul>
      `
    },

    {
      heading: "Food Safety & Galley Sanitation",
      html: `
        <span class="badge">PQS 106.4</span>
        <p>Foodborne illness can rapidly incapacitate personnel.</p>
        <h4>Food Safety Principles:</h4>
        <ul>
          <li>Maintain proper food storage temperatures.</li>
          <li>Prevent cross-contamination.</li>
          <li>Ensure proper cooking and reheating temperatures.</li>
          <li>Maintain clean food preparation areas.</li>
          <li>Ensure food handlers follow hygiene standards.</li>
        </ul>
      `
    },

    {
      heading: "Waste Disposal (Garrison & Field)",
      html: `
        <span class="badge">PQS 106.5</span>
        <p>Improper waste disposal attracts pests and spreads disease.</p>
        <h4>Types of Waste:</h4>
        <ul>
          <li><strong>Human waste:</strong> Latrines, chemical toilets, burn-out latrines (field).</li>
          <li><strong>Liquid waste:</strong> Soakage pits, evaporation beds.</li>
          <li><strong>Solid waste:</strong> Burial pits, incineration (field), dumpsters (garrison).</li>
        </ul>
        <p>Waste sites must be located away from water sources and living areas.</p>
      `
    },

    {
      heading: "Vector Control",
      html: `
        <span class="badge">PQS 106.6</span>
        <p>Vectors transmit diseases such as malaria, dengue, and typhus.</p>
        <h4>Common Vectors:</h4>
        <ul>
          <li>Mosquitoes</li>
          <li>Flies</li>
          <li>Fleas</li>
          <li>Ticks</li>
          <li>Rodents</li>
        </ul>
        <h4>Control Methods:</h4>
        <ul>
          <li>Eliminate standing water.</li>
          <li>Use insect repellents and treated uniforms.</li>
          <li>Maintain clean living areas.</li>
          <li>Use traps and rodent control measures.</li>
          <li>Ensure proper waste disposal.</li>
        </ul>
      `
    },

    {
      heading: "Heat Injuries",
      html: `
        <span class="badge">PQS 106.7</span>
        <p>Heat injuries occur when the body cannot dissipate heat effectively.</p>
        <h4>Types:</h4>
        <ul>
          <li><strong>Heat cramps:</strong> Muscle spasms due to electrolyte loss.</li>
          <li><strong>Heat exhaustion:</strong> Dizziness, nausea, sweating, weakness.</li>
          <li><strong>Heat stroke:</strong> Life-threatening; altered mental status, hot skin.</li>
        </ul>
        <h4>Prevention:</h4>
        <ul>
          <li>Hydration.</li>
          <li>Work/rest cycles.</li>
          <li>Acclimatization.</li>
          <li>Shade and cooling measures.</li>
        </ul>
      `
    },

    {
      heading: "Cold Injuries",
      html: `
        <span class="badge">PQS 106.8</span>
        <p>Cold injuries occur when body tissues freeze or circulation is impaired.</p>
        <h4>Types:</h4>
        <ul>
          <li><strong>Frostbite:</strong> Tissue freezing; pale, hard skin.</li>
          <li><strong>Hypothermia:</strong> Core temperature drop; shivering, confusion.</li>
          <li><strong>Trench foot:</strong> Prolonged wet/cold exposure.</li>
        </ul>
        <h4>Prevention:</h4>
        <ul>
          <li>Layered clothing.</li>
          <li>Keep feet dry.</li>
          <li>Avoid prolonged exposure.</li>
          <li>Monitor weather conditions.</li>
        </ul>
      `
    },

    {
      heading: "Field Preventive Medicine",
      html: `
        <span class="badge">PQS 106.9</span>
        <p>Preventive medicine in the field ensures unit health and readiness.</p>
        <h4>Responsibilities:</h4>
        <ul>
          <li>Inspect water sources.</li>
          <li>Monitor food service operations.</li>
          <li>Ensure proper waste disposal.</li>
          <li>Conduct vector control measures.</li>
          <li>Educate personnel on hygiene and injury prevention.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Heat Injury Prevention</div>
          <p class="scenario-question">Your unit is conducting PT in high heat. Several Marines appear flushed and fatigued. What preventive action should you take?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Increase hydration, enforce rest cycles, and move training to shaded areas.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Water Source Inspection</div>
          <p class="scenario-question">You are tasked with inspecting a field water point. The chlorine residual is low. What is your next step?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Re-chlorinate the water and retest until within acceptable limits.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 3 — Vector Control</div>
          <p class="scenario-question">You notice standing water near the berthing area. Why is this a concern?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Standing water breeds mosquitoes, increasing disease risk.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which of the following is a goal of preventive medicine?",
            options: [
              "Increase training intensity",
              "Reduce disease and non-battle injuries",
              "Replace medical providers",
              "Eliminate all field operations"
            ],
            correctIndex: 1
          },
          {
            text: "Which is a safe water practice?",
            options: [
              "Using any clear water source",
              "Checking chlorine residual levels",
              "Skipping water testing in the field",
              "Using untreated river water"
            ],
            correctIndex: 1
          },
          {
            text: "Which of the following is a vector?",
            options: ["Dog", "Mosquito", "Snake", "Bird"],
            correctIndex: 1
          },
          {
            text: "Heat stroke is characterized by:",
            options: [
              "Mild cramps",
              "Sweating and fatigue",
              "Altered mental status and hot skin",
              "Cold, pale skin"
            ],
            correctIndex: 2
          },
          {
            text: "Which waste disposal method is appropriate in the field?",
            options: [
              "Flush toilets only",
              "Open dumping",
              "Burn-out latrines",
              "Leaving waste in bags"
            ],
            correctIndex: 2
          }
        ]
      }
    }
  ]
},
{
  id: "107",
  title: "107 — Immunization Fundamentals",
  level: "Fundamentals",
  youtube: "", // intentionally blank
  description:
    "Covers vaccine storage and handling, immunization screening, administration routes, contraindications, adverse reactions, documentation, and VAERS reporting.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Explain the purpose of immunizations in force health protection.</li>
          <li>Describe proper vaccine storage and handling procedures.</li>
          <li>Conduct immunization screening and identify contraindications.</li>
          <li>Administer vaccines using correct routes and techniques.</li>
          <li>Recognize and manage adverse reactions.</li>
          <li>Document immunizations accurately in medical records and electronic systems.</li>
          <li>Report adverse events to VAERS when required.</li>
        </ul>
      `
    },

    {
      heading: "Purpose of Immunizations",
      html: `
        <span class="badge">PQS 107.1</span>
        <p>Immunizations protect service members from infectious diseases that can degrade readiness and mission capability.</p>
        <h4>Goals:</h4>
        <ul>
          <li>Prevent outbreaks in operational environments.</li>
          <li>Reduce morbidity and mortality from preventable diseases.</li>
          <li>Maintain Individual Medical Readiness (IMR).</li>
        </ul>
      `
    },

    {
      heading: "Vaccine Storage & Handling",
      html: `
        <span class="badge">PQS 107.2</span>
        <p>Improper storage can render vaccines ineffective.</p>
        <h4>Cold Chain Management:</h4>
        <ul>
          <li>Store vaccines in approved medical-grade refrigerators/freezers.</li>
          <li>Monitor temperatures twice daily or continuously if automated.</li>
          <li>Maintain temperature logs.</li>
          <li>Do not store vaccines in refrigerator doors or near vents.</li>
          <li>Separate vaccines from food and non-medical items.</li>
        </ul>
        <h4>Temperature Ranges (General):</h4>
        <ul>
          <li><strong>Refrigerated vaccines:</strong> 2°C–8°C (36°F–46°F)</li>
          <li><strong>Frozen vaccines:</strong> -50°C to -15°C (-58°F to +5°F)</li>
        </ul>
      `
    },

    {
      heading: "Immunization Screening",
      html: `
        <span class="badge">PQS 107.3</span>
        <p>Screening ensures vaccines are safe and appropriate for the patient.</p>
        <h4>Screening Questions:</h4>
        <ul>
          <li>Any allergies to medications, food, or vaccines?</li>
          <li>History of severe reaction to previous vaccines?</li>
          <li>Current illness or fever?</li>
          <li>Pregnancy or possibility of pregnancy?</li>
          <li>Immune system disorders or medications?</li>
        </ul>
      `
    },

    {
      heading: "Contraindications & Precautions",
      html: `
        <span class="badge">PQS 107.4</span>
        <p>Contraindications prevent vaccine administration due to risk of harm.</p>
        <h4>Contraindications:</h4>
        <ul>
          <li>Severe allergic reaction (anaphylaxis) to a previous dose.</li>
          <li>Known allergy to vaccine components (e.g., neomycin, eggs).</li>
          <li>Severe immunodeficiency (for live vaccines).</li>
        </ul>
        <h4>Precautions:</h4>
        <ul>
          <li>Moderate or severe acute illness.</li>
          <li>Pregnancy (for certain vaccines).</li>
          <li>Recent receipt of blood products (for live vaccines).</li>
        </ul>
      `
    },

    {
      heading: "Vaccine Administration Routes",
      html: `
        <span class="badge">PQS 107.5</span>
        <p>Vaccines must be administered using the correct route to ensure effectiveness.</p>
        <h4>Common Routes:</h4>
        <ul>
          <li><strong>Intramuscular (IM):</strong> Deltoid or thigh.</li>
          <li><strong>Subcutaneous (SQ):</strong> Upper arm or thigh.</li>
          <li><strong>Intradermal (ID):</strong> Forearm (e.g., TST).</li>
          <li><strong>Oral (PO):</strong> Certain vaccines (rare in DoD).</li>
          <li><strong>Intranasal:</strong> Live attenuated influenza vaccine (LAIV).</li>
        </ul>
        <h4>General Principles:</h4>
        <ul>
          <li>Use correct needle length and gauge.</li>
          <li>Clean site with alcohol swab.</li>
          <li>Do not aspirate for vaccines.</li>
          <li>Observe patient for immediate reactions.</li>
        </ul>
      `
    },

    {
      heading: "Adverse Reactions",
      html: `
        <span class="badge">PQS 107.6</span>
        <p>Most reactions are mild, but serious reactions require immediate action.</p>
        <h4>Common Mild Reactions:</h4>
        <ul>
          <li>Pain, redness, or swelling at injection site.</li>
          <li>Low-grade fever.</li>
          <li>Fatigue or headache.</li>
        </ul>
        <h4>Severe Reactions (Medical Emergency):</h4>
        <ul>
          <li>Anaphylaxis (difficulty breathing, swelling, hives).</li>
          <li>High fever.</li>
          <li>Neurological symptoms.</li>
        </ul>
        <h4>Management:</h4>
        <ul>
          <li>Activate emergency response.</li>
          <li>Administer epinephrine for anaphylaxis.</li>
          <li>Monitor airway, breathing, and circulation.</li>
          <li>Document and report the event.</li>
        </ul>
      `
    },

    {
      heading: "Documentation Requirements",
      html: `
        <span class="badge">PQS 107.7</span>
        <p>Accurate documentation ensures readiness and legal compliance.</p>
        <h4>Document the Following:</h4>
        <ul>
          <li>Vaccine name and manufacturer.</li>
          <li>Lot number and expiration date.</li>
          <li>Dose, route, and site.</li>
          <li>Date and time of administration.</li>
          <li>Provider name and credentials.</li>
          <li>Any adverse reactions.</li>
        </ul>
        <p>Documentation is entered into the health record and electronic systems such as MRRS or AHLTA/CHCS.</p>
      `
    },

    {
      heading: "VAERS Reporting",
      html: `
        <span class="badge">PQS 107.8</span>
        <p>The Vaccine Adverse Event Reporting System (VAERS) collects data on vaccine-related adverse events.</p>
        <h4>Reportable Events:</h4>
        <ul>
          <li>Severe allergic reactions.</li>
          <li>Hospitalization following vaccination.</li>
          <li>Neurological symptoms.</li>
          <li>Any unexpected or clinically significant event.</li>
        </ul>
        <h4>Purpose of VAERS:</h4>
        <ul>
          <li>Monitor vaccine safety.</li>
          <li>Identify patterns or trends in adverse events.</li>
          <li>Support public health decision-making.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Screening Issue</div>
          <p class="scenario-question">A patient reports a severe allergic reaction to a previous vaccine. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Do not administer the vaccine. Notify a provider and review contraindications.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Cold Chain Failure</div>
          <p class="scenario-question">You discover the refrigerator temperature was out of range overnight. What is your next step?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Quarantine affected vaccines and notify the immunization supervisor for guidance.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 3 — Adverse Reaction</div>
          <p class="scenario-question">A patient develops hives and difficulty breathing after a vaccine. What is your priority?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Treat for anaphylaxis immediately and activate emergency response.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which temperature range is appropriate for refrigerated vaccines?",
            options: ["0°C–2°C", "2°C–8°C", "10°C–15°C", "20°C–25°C"],
            correctIndex: 1
          },
          {
            text: "Which of the following is a contraindication to vaccination?",
            options: [
              "Mild cold symptoms",
              "History of anaphylaxis to the vaccine",
              "Fear of needles",
              "Soreness at injection site"
            ],
            correctIndex: 1
          },
          {
            text: "Which route is commonly used for intramuscular vaccines?",
            options: ["Forearm", "Deltoid", "Abdomen", "Gluteal fold"],
            correctIndex: 1
          },
          {
            text: "Which system is used to report vaccine adverse events?",
            options: ["MRRS", "VAERS", "DENCAS", "CHCS"],
            correctIndex: 1
          },
          {
            text: "Which of the following is a severe reaction requiring emergency care?",
            options: ["Low-grade fever", "Mild swelling", "Anaphylaxis", "Soreness"],
            correctIndex: 2
          }
        ]
      }
    }
  ]
},
{
  id: "108",
  title: "108 — Pharmacology Fundamentals",
  level: "Fundamentals",
  youtube: "",
  description:
    "Covers medication classifications, routes of administration, dosage calculations, drug interactions, side effects, controlled substances, and corpsman responsibilities in medication handling.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Identify major drug classifications and their uses.</li>
          <li>Explain routes of medication administration.</li>
          <li>Perform basic dosage calculations.</li>
          <li>Recognize common drug interactions and side effects.</li>
          <li>Understand controlled substance handling requirements.</li>
          <li>Apply corpsman responsibilities in medication safety.</li>
        </ul>
      `
    },

    {
      heading: "Drug Classifications",
      html: `
        <span class="badge">PQS 108.1</span>
        <p>Medications are grouped by their therapeutic effect or mechanism of action.</p>
        <h4>Common Classes:</h4>
        <ul>
          <li><strong>Analgesics:</strong> Pain relief (e.g., acetaminophen, ibuprofen).</li>
          <li><strong>Antibiotics:</strong> Treat bacterial infections.</li>
          <li><strong>Antihistamines:</strong> Treat allergic reactions.</li>
          <li><strong>Antipyretics:</strong> Reduce fever.</li>
          <li><strong>Antacids:</strong> Neutralize stomach acid.</li>
          <li><strong>Bronchodilators:</strong> Open airways.</li>
        </ul>
      `
    },

    {
      heading: "Routes of Administration",
      html: `
        <span class="badge">PQS 108.2</span>
        <p>Route selection affects absorption and onset of action.</p>
        <ul>
          <li><strong>Oral (PO):</strong> Most common; slower onset.</li>
          <li><strong>Intramuscular (IM):</strong> Faster absorption.</li>
          <li><strong>Intravenous (IV):</strong> Immediate effect.</li>
          <li><strong>Subcutaneous (SQ):</strong> Slower, sustained release.</li>
          <li><strong>Topical:</strong> Localized effect.</li>
          <li><strong>Otic/Ophthalmic:</strong> Ear/eye medications.</li>
        </ul>
      `
    },

    {
      heading: "Dosage Calculations",
      html: `
        <span class="badge">PQS 108.3</span>
        <p>Corpsmen must calculate doses accurately to avoid medication errors.</p>
        <h4>Basic Formula:</h4>
        <p><strong>(Desired Dose / Available Dose) × Quantity = Amount to Administer</strong></p>
        <h4>Example:</h4>
        <p>Order: 500 mg; Available: 250 mg tablets → (500/250) × 1 = 2 tablets.</p>
      `
    },

    {
      heading: "Drug Interactions & Side Effects",
      html: `
        <span class="badge">PQS 108.4</span>
        <p>Medications may interact with other drugs, foods, or medical conditions.</p>
        <h4>Common Side Effects:</h4>
        <ul>
          <li>Nausea</li>
          <li>Drowsiness</li>
          <li>Dizziness</li>
          <li>Rash</li>
        </ul>
        <h4>Serious Reactions:</h4>
        <ul>
          <li>Anaphylaxis</li>
          <li>Severe rash</li>
          <li>Difficulty breathing</li>
        </ul>
      `
    },

    {
      heading: "Controlled Substances",
      html: `
        <span class="badge">PQS 108.5</span>
        <p>Controlled substances require strict accountability.</p>
        <h4>Requirements:</h4>
        <ul>
          <li>Double-locked storage.</li>
          <li>Daily inventory and logbook entries.</li>
          <li>Witnessed waste or disposal.</li>
          <li>Immediate reporting of discrepancies.</li>
        </ul>
      `
    },

    {
      heading: "Corpsman Responsibilities",
      html: `
        <span class="badge">PQS 108.6</span>
        <p>Corpsmen ensure safe medication handling and administration.</p>
        <ul>
          <li>Verify the Five Rights of medication administration.</li>
          <li>Check expiration dates.</li>
          <li>Monitor for adverse reactions.</li>
          <li>Document all medications administered.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Wrong Dose</div>
          <p class="scenario-question">You calculate a dose and get 4 tablets, but the usual dose is 1 tablet. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Stop and re-check the order and calculation; consult a provider.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Controlled Substance Count</div>
          <p class="scenario-question">The narcotic count is off by one vial. What is your next step?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Report immediately to the supervisor; do not continue operations.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which route provides the fastest onset?",
            options: ["PO", "IM", "IV", "SQ"],
            correctIndex: 2
          },
          {
            text: "Which is a controlled substance requirement?",
            options: ["Store in a single cabinet", "Daily inventory", "No documentation needed", "Store with food"],
            correctIndex: 1
          },
          {
            text: "Which formula is used for dosage calculations?",
            options: [
              "Available ÷ Desired",
              "Desired ÷ Available × Quantity",
              "Quantity × Available",
              "Desired × Quantity"
            ],
            correctIndex: 1
          }
        ]
      }
    }
  ]
},
{
  id: "109",
  title: "109 — Laboratory Fundamentals",
  level: "Fundamentals",
  youtube: "",
  description:
    "Covers specimen collection, labeling, handling, common lab tests, point-of-care testing, infection control, and corpsman responsibilities in laboratory support.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Identify proper specimen collection and handling procedures.</li>
          <li>Describe common laboratory tests and their purposes.</li>
          <li>Explain point-of-care testing fundamentals.</li>
          <li>Apply infection control principles in laboratory settings.</li>
          <li>Document and transport specimens correctly.</li>
        </ul>
      `
    },

    {
      heading: "Specimen Collection & Labeling",
      html: `
        <span class="badge">PQS 109.1</span>
        <p>Proper specimen collection ensures accurate test results.</p>
        <h4>Key Principles:</h4>
        <ul>
          <li>Use correct container (urine cup, blood tube, swab).</li>
          <li>Label with patient name, DOB, SSN/DoD ID, date/time, and collector initials.</li>
          <li>Collect before antibiotics when possible.</li>
          <li>Follow fasting requirements if applicable.</li>
        </ul>
      `
    },

    {
      heading: "Specimen Types",
      html: `
        <span class="badge">PQS 109.2</span>
        <p>Common specimen types include:</p>
        <ul>
          <li>Blood</li>
          <li>Urine</li>
          <li>Stool</li>
          <li>Throat swab</li>
          <li>Wound swab</li>
          <li>Sputum</li>
        </ul>
      `
    },

    {
      heading: "Specimen Handling & Transport",
      html: `
        <span class="badge">PQS 109.3</span>
        <p>Improper handling can invalidate results.</p>
        <ul>
          <li>Use biohazard bags.</li>
          <li>Keep temperature-sensitive specimens chilled.</li>
          <li>Deliver promptly to the lab.</li>
          <li>Document chain of custody when required.</li>
        </ul>
      `
    },

    {
      heading: "Common Laboratory Tests",
      html: `
        <span class="badge">PQS 109.4</span>
        <p>Basic tests performed in Navy Medicine include:</p>
        <ul>
          <li><strong>CBC:</strong> Evaluates blood cells.</li>
          <li><strong>UA:</strong> Screens kidney and metabolic function.</li>
          <li><strong>RPR:</strong> Syphilis screening.</li>
          <li><strong>PSA:</strong> Prostate screening.</li>
          <li><strong>Rapid tests:</strong> Strep, flu, pregnancy.</li>
        </ul>
      `
    },

    {
      heading: "Point-of-Care Testing (POCT)",
      html: `
        <span class="badge">PQS 109.5</span>
        <p>POCT provides rapid results at the bedside or clinic.</p>
        <ul>
          <li>Glucose testing</li>
          <li>Urine dipstick</li>
          <li>Rapid strep</li>
          <li>Pregnancy tests</li>
        </ul>
        <p>Follow manufacturer instructions and quality control procedures.</p>
      `
    },

    {
      heading: "Infection Control in Laboratory Settings",
      html: `
        <span class="badge">PQS 109.6</span>
        <p>Lab environments require strict infection control.</p>
        <ul>
          <li>Wear gloves and PPE.</li>
          <li>Use sharps containers.</li>
          <li>Disinfect surfaces regularly.</li>
          <li>Handle specimens as potentially infectious.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Mislabeled Specimen</div>
          <p class="scenario-question">A urine sample arrives without a date or time. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Reject the specimen and recollect; unlabeled samples cannot be processed.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Temperature-Sensitive Sample</div>
          <p class="scenario-question">A specimen requiring refrigeration was left at room temperature. What is the next step?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Notify the provider and recollect if necessary.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which specimen requires a biohazard bag?",
            options: ["Blood", "Clean water", "Saline", "IV fluid"],
            correctIndex: 0
          },
          {
            text: "Which test screens for syphilis?",
            options: ["CBC", "UA", "RPR", "PSA"],
            correctIndex: 2
          },
          {
            text: "What must be on every specimen label?",
            options: ["Patient name and date/time", "Provider name only", "Room number", "Diagnosis"],
            correctIndex: 0
          }
        ]
      }
    }
  ]
},
{
  id: "110",
  title: "110 — Medical Support Fundamentals",
  level: "Fundamentals",
  youtube: "",
  description:
    "Covers supply management, medical logistics, equipment maintenance, IMR requirements, medical readiness reporting, and corpsman responsibilities in supporting healthcare operations.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Explain basic medical logistics and supply principles.</li>
          <li>Identify AMAL/ADAL components and purposes.</li>
          <li>Describe equipment maintenance and calibration requirements.</li>
          <li>Understand Individual Medical Readiness (IMR) elements.</li>
          <li>Use medical readiness reporting tools.</li>
          <li>Support operational medical requirements.</li>
        </ul>
      `
    },

    {
      heading: "Medical Logistics & Supply",
      html: `
        <span class="badge">PQS 110.1</span>
        <p>Medical logistics ensures units have the supplies and equipment needed for operations.</p>
        <h4>Key Concepts:</h4>
        <ul>
          <li>Inventory control</li>
          <li>Expiration date monitoring</li>
          <li>Proper storage conditions</li>
          <li>Supply request procedures</li>
        </ul>
      `
    },

    {
      heading: "AMAL & ADAL",
      html: `
        <span class="badge">PQS 110.2</span>
        <p>Authorized Medical Allowance Lists (AMAL) and Authorized Dental Allowance Lists (ADAL) define required equipment and supplies.</p>
        <h4>Examples:</h4>
        <ul>
          <li><strong>AMAL 635:</strong> Battalion Aid Station</li>
          <li><strong>AMAL 636:</strong> Preventive Medicine</li>
          <li><strong>ADAL:</strong> Dental equipment and supplies</li>
        </ul>
      `
    },

    {
      heading: "Equipment Maintenance",
      html: `
        <span class="badge">PQS 110.3</span>
        <p>Medical equipment must be maintained to ensure safety and reliability.</p>
        <h4>Responsibilities:</h4>
        <ul>
          <li>Perform operator-level checks.</li>
          <li>Report malfunctions immediately.</li>
          <li>Ensure calibration is up to date.</li>
          <li>Maintain maintenance logs.</li>
        </ul>
      `
    },

    {
      heading: "Individual Medical Readiness (IMR)",
      html: `
        <span class="badge">PQS 110.4</span>
        <p>IMR ensures service members are medically ready for deployment.</p>
        <h4>IMR Elements:</h4>
        <ul>
          <li>Dental readiness</li>
          <li>Immunizations</li>
          <li>PHA (Periodic Health Assessment)</li>
          <li>Lab requirements (HIV, etc.)</li>
          <li>Medical equipment (glasses, gas mask inserts)</li>
        </ul>
      `
    },

    {
      heading: "Medical Readiness Reporting",
      html: `
        <span class="badge">PQS 110.5</span>
        <p>Medical readiness is tracked using electronic systems.</p>
        <ul>
          <li><strong>MRRS:</strong> Medical Readiness Reporting System</li>
          <li><strong>AHLTA/CHCS:</strong> Documentation and encounter tracking</li>
          <li><strong>DRSI:</strong> Disease reporting</li>
        </ul>
      `
    },

    {
      heading: "Operational Medical Support",
      html: `
        <span class="badge">PQS 110.6</span>
        <p>Corpsmen support operational units by ensuring medical supplies, readiness, and equipment are mission-capable.</p>
        <h4>Tasks:</h4>
        <ul>
          <li>Prepare medical gear for field operations.</li>
          <li>Maintain aid bags and trauma kits.</li>
          <li>Track unit medical readiness.</li>
          <li>Coordinate with logistics and supply personnel.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Expired Supplies</div>
          <p class="scenario-question">You discover expired IV fluids in the AMAL. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Remove them immediately and submit a resupply request.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Broken Equipment</div>
          <p class="scenario-question">A vital signs monitor fails during a check. What is your next step?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Tag it out, document the issue, and notify biomedical maintenance.</strong></p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 3 — IMR Deficiency</div>
          <p class="scenario-question">A Marine is preparing for deployment but is missing an HIV test. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Schedule the required lab test and update MRRS once complete.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which system tracks medical readiness?",
            options: ["DENCAS", "MRRS", "DRSI", "AHLTA"],
            correctIndex: 1
          },
          {
            text: "What is AMAL 635 used for?",
            options: ["Dental care", "Battalion Aid Station", "Preventive medicine", "Shipboard galley"],
            correctIndex: 1
          },
          {
            text: "Which is part of IMR?",
            options: ["Physical fitness test", "PHA", "Leave balance", "Security clearance"],
            correctIndex: 1
          },
          {
            text: "What should you do with malfunctioning medical equipment?",
            options: ["Continue using it", "Tag it out and report it", "Ignore it", "Store it in supply"],
            correctIndex: 1
          },
          {
            text: "Which list contains required medical supplies for operational units?",
            options: ["ADAL only", "AMAL only", "AMAL and ADAL", "Neither"],
            correctIndex: 2
          }
        ]
      }
    }
  ]
},
{
  id: "201",
  title: "201 — Military Medical Equipment",
  level: "Systems",
  youtube: "",
  description:
    "Covers identification, setup, operation, maintenance, safety, and troubleshooting of common military medical equipment used in Navy and Marine Corps environments.",
  sections: [
    {
      heading: "Overview & Learning Objectives",
      html: `
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Identify common medical equipment used in operational and clinical settings.</li>
          <li>Explain basic setup and operation of diagnostic and treatment devices.</li>
          <li>Perform operator-level maintenance and safety checks.</li>
          <li>Troubleshoot common equipment issues.</li>
          <li>Apply proper cleaning, disinfection, and storage procedures.</li>
          <li>Understand biomedical maintenance requirements and reporting procedures.</li>
        </ul>
      `
    },

    {
      heading: "Common Military Medical Equipment",
      html: `
        <span class="badge">PQS 201.1</span>
        <p>Corpsmen must be familiar with equipment used in sickbays, BAS, field environments, and shipboard medical spaces.</p>
        <h4>Examples:</h4>
        <ul>
          <li>Vital signs monitor</li>
          <li>Pulse oximeter</li>
          <li>Automated External Defibrillator (AED)</li>
          <li>Oxygen delivery systems</li>
          <li>Suction devices (manual and powered)</li>
          <li>Field litter and stretcher systems</li>
          <li>Portable ventilators (if assigned)</li>
          <li>IV infusion pumps</li>
        </ul>
      `
    },

    {
      heading: "Equipment Setup & Operation",
      html: `
        <span class="badge">PQS 201.2</span>
        <p>Proper setup ensures safe and effective operation.</p>
        <h4>General Principles:</h4>
        <ul>
          <li>Follow manufacturer instructions and command SOPs.</li>
          <li>Inspect equipment before use.</li>
          <li>Ensure power sources (battery or AC) are functional.</li>
          <li>Verify cables, tubing, and accessories are intact.</li>
          <li>Perform function checks before patient use.</li>
        </ul>
      `
    },

    {
      heading: "Vital Signs Monitor",
      html: `
        <span class="badge">PQS 201.3</span>
        <p>Vital signs monitors measure blood pressure, pulse, oxygen saturation, and sometimes temperature.</p>
        <h4>Setup:</h4>
        <ul>
          <li>Connect power or verify battery charge.</li>
          <li>Attach appropriate BP cuff size.</li>
          <li>Connect pulse oximeter probe.</li>
        </ul>
        <h4>Operation:</h4>
        <ul>
          <li>Turn on device and allow self-test.</li>
          <li>Position cuff at heart level.</li>
          <li>Ensure patient is still during measurement.</li>
        </ul>
      `
    },

    {
      heading: "Pulse Oximeter",
      html: `
        <span class="badge">PQS 201.4</span>
        <p>Pulse oximeters measure oxygen saturation (SpO₂) and pulse rate.</p>
        <h4>Key Points:</h4>
        <ul>
          <li>Place probe on finger, toe, or earlobe.</li>
          <li>Remove nail polish for accurate readings.</li>
          <li>Cold extremities may cause false readings.</li>
        </ul>
      `
    },

    {
      heading: "AED (Automated External Defibrillator)",
      html: `
        <span class="badge">PQS 201.5</span>
        <p>AEDs analyze cardiac rhythm and deliver shocks when indicated.</p>
        <h4>Operation:</h4>
        <ul>
          <li>Turn on the AED and follow voice prompts.</li>
          <li>Expose chest and apply pads as indicated.</li>
          <li>Ensure no one is touching the patient during analysis or shock.</li>
        </ul>
        <h4>Maintenance:</h4>
        <ul>
          <li>Check battery status.</li>
          <li>Verify pad expiration dates.</li>
          <li>Perform regular self-test checks.</li>
        </ul>
      `
    },

    {
      heading: "Oxygen Delivery Systems",
      html: `
        <span class="badge">PQS 201.6</span>
        <p>Oxygen systems include tanks, regulators, flowmeters, and delivery devices.</p>
        <h4>Setup:</h4>
        <ul>
          <li>Secure oxygen cylinder upright.</li>
          <li>Attach regulator and check for leaks.</li>
          <li>Set flow rate (e.g., 2–6 L/min nasal cannula, 10–15 L/min NRB mask).</li>
        </ul>
        <h4>Safety:</h4>
        <ul>
          <li>Keep away from flames and oils.</li>
          <li>Do not drop or mishandle cylinders.</li>
        </ul>
      `
    },

    {
      heading: "Suction Devices",
      html: `
        <span class="badge">PQS 201.7</span>
        <p>Suction devices clear airway obstructions.</p>
        <h4>Types:</h4>
        <ul>
          <li>Manual suction (hand pump)</li>
          <li>Portable powered suction</li>
        </ul>
        <h4>Operation:</h4>
        <ul>
          <li>Assemble tubing and catheter.</li>
          <li>Test suction before use.</li>
          <li>Limit suctioning to 10–15 seconds.</li>
        </ul>
      `
    },

    {
      heading: "IV Infusion Pumps",
      html: `
        <span class="badge">PQS 201.8</span>
        <p>Infusion pumps deliver fluids and medications at controlled rates.</p>
        <h4>Setup:</h4>
        <ul>
          <li>Load IV tubing correctly.</li>
          <li>Prime tubing to remove air.</li>
          <li>Set rate and volume per provider orders.</li>
        </ul>
        <h4>Safety:</h4>
        <ul>
          <li>Check for occlusions.</li>
          <li>Monitor for infiltration.</li>
        </ul>
      `
    },

    {
      heading: "Operator-Level Maintenance",
      html: `
        <span class="badge">PQS 201.9</span>
        <p>Corpsmen perform basic maintenance to ensure equipment readiness.</p>
        <ul>
          <li>Clean and disinfect equipment after use.</li>
          <li>Inspect for damage or wear.</li>
          <li>Replace batteries as needed.</li>
          <li>Verify calibration stickers are current.</li>
        </ul>
      `
    },

    {
      heading: "Troubleshooting Equipment",
      html: `
        <span class="badge">PQS 201.10</span>
        <p>Common issues can often be resolved at the operator level.</p>
        <h4>Examples:</h4>
        <ul>
          <li><strong>No power:</strong> Check battery or power cord.</li>
          <li><strong>Inaccurate readings:</strong> Reposition sensors; check connections.</li>
          <li><strong>Alarms:</strong> Follow device prompts; verify patient condition.</li>
        </ul>
      `
    },

    {
      heading: "Biomedical Maintenance",
      html: `
        <span class="badge">PQS 201.11</span>
        <p>Some issues require trained biomedical technicians.</p>
        <h4>Report When:</h4>
        <ul>
          <li>Calibration is overdue.</li>
          <li>Equipment fails self-test.</li>
          <li>Electrical hazards are present.</li>
          <li>Internal components appear damaged.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — AED Pad Expiration</div>
          <p class="scenario-question">You discover AED pads expired last month. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Remove expired pads, replace with new ones, and document the change.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Faulty Pulse Oximeter</div>
          <p class="scenario-question">A pulse oximeter shows erratic readings. What is your first step?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Check probe placement and ensure the patient's extremity is warm.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 3 — Oxygen Leak</div>
          <p class="scenario-question">You hear a hissing sound from an oxygen cylinder. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Close the valve, check the regulator connection, and replace faulty components.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which device measures oxygen saturation?",
            options: ["AED", "Pulse oximeter", "Suction unit", "IV pump"],
            correctIndex: 1
          },
          {
            text: "Which action is part of operator-level maintenance?",
            options: ["Internal repairs", "Calibration", "Cleaning and inspection", "Electrical rewiring"],
            correctIndex: 2
          },
          {
            text: "Which step is required before using an oxygen cylinder?",
            options: ["Lay it on its side", "Check for leaks and secure upright", "Remove the regulator", "Heat the cylinder"],
            correctIndex: 1
          },
          {
            text: "Which issue requires biomedical maintenance?",
            options: ["Low battery", "Dirty sensor", "Failed self-test", "Loose cable"],
            correctIndex: 2
          },
          {
            text: "What is the purpose of an AED?",
            options: ["Measure BP", "Deliver shocks for lethal rhythms", "Provide oxygen", "Monitor temperature"],
            correctIndex: 1
          }
        ]
      }
    }
  ]
},
{
  id: "301",
  title: "301 — Administration Corpsman",
  level: "Watchstation",
  youtube: "",
  description:
    "Covers administrative responsibilities of the Administration Corpsman watchstation, including patient flow, documentation, readiness tracking, reporting, communication, and coordination with providers and departments.",
  sections: [
    {
      heading: "Overview & Watchstation Purpose",
      html: `
        <p>The Administration Corpsman ensures smooth clinic operations by managing patient flow, documentation, readiness tracking, and communication between departments.</p>
        <p>This watchstation is essential for maintaining medical readiness, accurate records, and efficient patient care.</p>
      `
    },

    {
      heading: "Duties & Responsibilities",
      html: `
        <span class="badge">PQS 301.1</span>
        <p>Administration Corpsmen perform a wide range of duties that support clinical and operational readiness.</p>
        <h4>Core Responsibilities:</h4>
        <ul>
          <li>Manage patient check-in and check-out procedures.</li>
          <li>Verify patient identity using two identifiers.</li>
          <li>Review and update medical records and documentation.</li>
          <li>Schedule appointments and coordinate with providers.</li>
          <li>Track Individual Medical Readiness (IMR) items.</li>
          <li>Maintain logs, reports, and administrative forms.</li>
          <li>Ensure HIPAA compliance and patient privacy.</li>
          <li>Assist with command medical readiness reporting.</li>
        </ul>
      `
    },

    {
      heading: "Patient Flow Management",
      html: `
        <span class="badge">PQS 301.2</span>
        <p>Efficient patient flow ensures timely care and reduces delays.</p>
        <h4>Key Tasks:</h4>
        <ul>
          <li>Check in patients and verify eligibility.</li>
          <li>Ensure required forms are completed.</li>
          <li>Notify providers when patients are ready.</li>
          <li>Monitor waiting areas and maintain order.</li>
          <li>Assist with routing patients to ancillary services (lab, x-ray, immunizations).</li>
        </ul>
      `
    },

    {
      heading: "Medical Records & Documentation",
      html: `
        <span class="badge">PQS 301.3</span>
        <p>Accurate documentation is essential for continuity of care and legal compliance.</p>
        <h4>Responsibilities:</h4>
        <ul>
          <li>Ensure all encounters are documented in AHLTA/CHCS or equivalent systems.</li>
          <li>File and maintain paper records when required.</li>
          <li>Verify presence of required forms (SF 600, DD 2766, immunization records).</li>
          <li>Update demographic and contact information.</li>
          <li>Ensure proper record storage and privacy.</li>
        </ul>
      `
    },

    {
      heading: "Medical Readiness Tracking",
      html: `
        <span class="badge">PQS 301.4</span>
        <p>Medical readiness ensures personnel are deployable and mission-capable.</p>
        <h4>IMR Elements:</h4>
        <ul>
          <li>PHA (Periodic Health Assessment)</li>
          <li>Dental readiness</li>
          <li>Immunizations</li>
          <li>Lab requirements (HIV, etc.)</li>
          <li>Medical equipment (glasses, inserts)</li>
        </ul>
        <h4>Tasks:</h4>
        <ul>
          <li>Update MRRS with completed requirements.</li>
          <li>Notify members and leadership of deficiencies.</li>
          <li>Assist in scheduling required appointments.</li>
        </ul>
      `
    },

    {
      heading: "Reports & Logs",
      html: `
        <span class="badge">PQS 301.5</span>
        <p>Administration Corpsmen maintain essential logs and reports for clinic operations.</p>
        <h4>Common Logs:</h4>
        <ul>
          <li>Daily patient log</li>
          <li>Immunization log</li>
          <li>Lab tracking log</li>
          <li>Sick call log</li>
          <li>Duty/Watch turnover log</li>
        </ul>
        <h4>Reporting Responsibilities:</h4>
        <ul>
          <li>Submit daily/weekly readiness reports.</li>
          <li>Notify leadership of trends or issues.</li>
          <li>Ensure accuracy and completeness of all reports.</li>
        </ul>
      `
    },

    {
      heading: "Communication & Coordination",
      html: `
        <span class="badge">PQS 301.6</span>
        <p>Effective communication ensures smooth clinic operations.</p>
        <h4>Tasks:</h4>
        <ul>
          <li>Coordinate with providers, nurses, and corpsmen.</li>
          <li>Communicate appointment changes to patients.</li>
          <li>Relay urgent information to leadership.</li>
          <li>Assist with command-wide medical readiness communication.</li>
        </ul>
      `
    },

    {
      heading: "HIPAA & Privacy",
      html: `
        <span class="badge">PQS 301.7</span>
        <p>Administration Corpsmen must protect patient information at all times.</p>
        <h4>Key Principles:</h4>
        <ul>
          <li>Discuss patient information only with authorized personnel.</li>
          <li>Secure records when not in use.</li>
          <li>Use privacy screens and controlled access areas.</li>
          <li>Follow command policies for information release.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — IMR Deficiency</div>
          <p class="scenario-question">A Sailor is overdue for a PHA and is scheduled to deploy in two weeks. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Notify the Sailor and chain of command, schedule the PHA immediately, and update MRRS once complete.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Privacy Concern</div>
          <p class="scenario-question">You overhear staff discussing a patient’s condition in a public hallway. What is your responsibility?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Remind staff of HIPAA requirements and redirect the conversation to a private area.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 3 — Patient Flow Issue</div>
          <p class="scenario-question">The waiting room is full and providers are behind schedule. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Communicate delays to patients, assist providers with prioritization, and ensure efficient routing.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which system is used to track medical readiness?",
            options: ["AHLTA", "MRRS", "DENCAS", "DRSI"],
            correctIndex: 1
          },
          {
            text: "Which of the following is part of patient flow management?",
            options: ["Performing surgery", "Checking in patients", "Calibrating equipment", "Ordering supplies"],
            correctIndex: 1
          },
          {
            text: "Which form is commonly used for documenting outpatient encounters?",
            options: ["SF 600", "DD 2808", "NAVMED 6150/4", "DD 2215"],
            correctIndex: 0
          },
          {
            text: "What should you do if you discover a HIPAA violation?",
            options: ["Ignore it", "Report it and correct the behavior", "Tell other patients", "Post about it online"],
            correctIndex: 1
          },
          {
            text: "Which of the following is an IMR requirement?",
            options: ["Physical fitness test", "PHA", "Security clearance", "Leave balance"],
            correctIndex: 1
          }
        ]
      }
    }
  ]
},
{
  id: "302",
  title: "302 — Patient Care Corpsman",
  level: "Watchstation",
  youtube: "",
  description:
    "Covers patient assessment, treatment fundamentals, documentation, emergency response, equipment operation, infection control, and coordination with providers in the Patient Care Corpsman watchstation.",
  sections: [
    {
      heading: "Overview & Watchstation Purpose",
      html: `
        <p>The Patient Care Corpsman provides direct clinical support to patients and providers. This watchstation focuses on assessment, treatment, documentation, and safe patient care in both routine and urgent settings.</p>
        <p>Corpsmen in this role must demonstrate competence, professionalism, and readiness to respond to medical needs at any time.</p>
      `
    },

    {
      heading: "Duties & Responsibilities",
      html: `
        <span class="badge">PQS 302.1</span>
        <p>Patient Care Corpsmen perform hands-on clinical tasks under the supervision of licensed providers.</p>
        <h4>Core Responsibilities:</h4>
        <ul>
          <li>Conduct patient assessments and obtain vital signs.</li>
          <li>Assist with medical examinations and procedures.</li>
          <li>Administer medications as directed.</li>
          <li>Perform wound care, splinting, and basic treatments.</li>
          <li>Document encounters accurately.</li>
          <li>Prepare exam rooms and maintain cleanliness.</li>
          <li>Ensure infection control standards are followed.</li>
          <li>Respond to medical emergencies.</li>
        </ul>
      `
    },

    {
      heading: "Patient Assessment",
      html: `
        <span class="badge">PQS 302.2</span>
        <p>Assessment is the foundation of patient care and guides provider decision-making.</p>
        <h4>Assessment Components:</h4>
        <ul>
          <li>Chief complaint</li>
          <li>History of present illness (HPI)</li>
          <li>Past medical, surgical, and family history</li>
          <li>Medication and allergy review</li>
          <li>Vital signs (BP, HR, RR, Temp, SpO₂)</li>
          <li>Pain assessment (0–10 scale)</li>
          <li>Focused physical exam</li>
        </ul>
      `
    },

    {
      heading: "Vital Signs & Monitoring",
      html: `
        <span class="badge">PQS 302.3</span>
        <p>Vital signs provide critical information about patient status.</p>
        <h4>Tasks:</h4>
        <ul>
          <li>Measure and record vital signs accurately.</li>
          <li>Recognize abnormal values and notify providers.</li>
          <li>Monitor trends during treatment.</li>
          <li>Use equipment such as BP cuffs, pulse oximeters, and thermometers correctly.</li>
        </ul>
      `
    },

    {
      heading: "Basic Treatment Procedures",
      html: `
        <span class="badge">PQS 302.4</span>
        <p>Corpsmen perform basic treatments under provider direction.</p>
        <h4>Common Procedures:</h4>
        <ul>
          <li>Wound cleaning and dressing</li>
          <li>Splinting and immobilization</li>
          <li>Applying bandages and pressure dressings</li>
          <li>Assisting with suturing or staple removal</li>
          <li>Administering medications (IM, SQ, PO)</li>
          <li>Performing nebulizer treatments</li>
        </ul>
      `
    },

    {
      heading: "Emergency Response",
      html: `
        <span class="badge">PQS 302.5</span>
        <p>Patient Care Corpsmen must be ready to respond to emergencies at any time.</p>
        <h4>Responsibilities:</h4>
        <ul>
          <li>Recognize life-threatening conditions.</li>
          <li>Initiate BLS (Basic Life Support).</li>
          <li>Use AEDs and emergency equipment.</li>
          <li>Assist providers during resuscitation.</li>
          <li>Prepare emergency medications and supplies.</li>
        </ul>
      `
    },

    {
      heading: "Infection Control",
      html: `
        <span class="badge">PQS 302.6</span>
        <p>Preventing infection protects both patients and staff.</p>
        <h4>Key Practices:</h4>
        <ul>
          <li>Hand hygiene before and after patient contact.</li>
          <li>Use of PPE (gloves, masks, gowns) as required.</li>
          <li>Proper disposal of sharps and biohazard waste.</li>
          <li>Cleaning and disinfecting exam rooms and equipment.</li>
        </ul>
      `
    },

    {
      heading: "Equipment Operation",
      html: `
        <span class="badge">PQS 302.7</span>
        <p>Corpsmen must know how to safely operate common clinical equipment.</p>
        <h4>Examples:</h4>
        <ul>
          <li>Vital signs monitors</li>
          <li>Pulse oximeters</li>
          <li>Nebulizers</li>
          <li>Oxygen delivery systems</li>
          <li>Suction devices</li>
          <li>Glucose meters</li>
        </ul>
        <p>Perform operator-level checks and report malfunctions immediately.</p>
      `
    },

    {
      heading: "Documentation & Reporting",
      html: `
        <span class="badge">PQS 302.8</span>
        <p>Accurate documentation ensures continuity of care and legal compliance.</p>
        <h4>Tasks:</h4>
        <ul>
          <li>Document encounters in AHLTA/CHCS or equivalent systems.</li>
          <li>Record vital signs, treatments, and patient responses.</li>
          <li>Complete SF 600 entries when required.</li>
          <li>Report abnormal findings to providers immediately.</li>
        </ul>
      `
    },

    {
      heading: "Coordination With Providers",
      html: `
        <span class="badge">PQS 302.9</span>
        <p>Effective teamwork ensures high-quality patient care.</p>
        <h4>Responsibilities:</h4>
        <ul>
          <li>Communicate patient status clearly and concisely.</li>
          <li>Prepare patients and rooms for examinations.</li>
          <li>Assist during procedures.</li>
          <li>Relay provider instructions to patients.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Abnormal Vital Signs</div>
          <p class="scenario-question">A patient presents with a BP of 180/110 and severe headache. What should you do?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Notify a provider immediately and monitor the patient closely.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Wound Care</div>
          <p class="scenario-question">A Marine has a deep laceration with controlled bleeding. What is your next step?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Irrigate the wound, assess depth, and prepare for provider evaluation for possible sutures.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 3 — Emergency Response</div>
          <p class="scenario-question">A patient collapses in the waiting room. What is your immediate action?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Assess responsiveness, activate emergency response, and begin BLS if needed.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "Which of the following is part of a patient assessment?",
            options: ["Supply ordering", "Vital signs", "Equipment calibration", "Scheduling"],
            correctIndex: 1
          },
          {
            text: "Which action is required when abnormal vital signs are found?",
            options: ["Ignore them", "Notify a provider", "Wait for the next visit", "Document only"],
            correctIndex: 1
          },
          {
            text: "Which of the following is a basic treatment procedure?",
            options: ["Suturing independently", "Wound cleaning and dressing", "Performing surgery", "Ordering labs"],
            correctIndex: 1
          },
          {
            text: "Which practice prevents infection?",
            options: ["Reusing gloves", "Skipping hand hygiene", "Proper PPE use", "Leaving sharps uncapped"],
            correctIndex: 2
          },
          {
            text: "Which system is commonly used for documentation?",
            options: ["MRRS", "AHLTA/CHCS", "DRSI", "NKO"],
            correctIndex: 1
          }
        ]
      }
    }
  ]
},
{
  id: "303",
  title: "303 — Emergency Care Corpsman",
  level: "Watchstation",
  youtube: "",
  description:
    "Covers the Emergency Care Corpsman watchstation, including triage, primary and secondary assessment, emergency interventions, evacuation, documentation, and coordination with higher levels of care.",
  sections: [
    {
      heading: "Overview & Watchstation Purpose",
      html: `
        <p>The Emergency Care Corpsman provides immediate assessment and treatment for urgent and life-threatening conditions in clinic, field, and shipboard environments.</p>
        <p>This watchstation focuses on rapid decision-making, lifesaving interventions, and safe transfer of patients to higher levels of care.</p>
      `
    },

    {
      heading: "Duties & Responsibilities",
      html: `
        <span class="badge">PQS 303.1</span>
        <p>Emergency Care Corpsmen must be prepared to respond quickly and effectively to medical and traumatic emergencies.</p>
        <h4>Core Responsibilities:</h4>
        <ul>
          <li>Perform rapid triage and prioritize patients.</li>
          <li>Conduct primary and secondary assessments.</li>
          <li>Provide lifesaving interventions (airway, breathing, circulation).</li>
          <li>Stabilize patients for transport or evacuation.</li>
          <li>Operate emergency equipment (AED, oxygen, suction).</li>
          <li>Document care and communicate with receiving facilities.</li>
        </ul>
      `
    },

    {
      heading: "Triage Principles",
      html: `
        <span class="badge">PQS 303.2</span>
        <p>Triage is the process of sorting patients based on the severity of their condition and available resources.</p>
        <h4>General Concepts:</h4>
        <ul>
          <li>Identify immediate life threats first.</li>
          <li>Use established triage categories (e.g., immediate, delayed, minimal, expectant).</li>
          <li>Reassess patients regularly as conditions change.</li>
          <li>Document triage category and time.</li>
        </ul>
      `
    },

    {
      heading: "Primary Assessment (ABCDE)",
      html: `
        <span class="badge">PQS 303.3</span>
        <p>The primary assessment identifies and treats immediate life threats.</p>
        <h4>ABCDE:</h4>
        <ul>
          <li><strong>A — Airway:</strong> Ensure airway is open and protected.</li>
          <li><strong>B — Breathing:</strong> Assess rate, depth, and effort; provide oxygen as needed.</li>
          <li><strong>C — Circulation:</strong> Check pulse, skin signs, and control major bleeding.</li>
          <li><strong>D — Disability:</strong> Quick neurologic check (LOC, pupils, movement).</li>
          <li><strong>E — Expose/Environment:</strong> Expose as needed while preventing hypothermia.</li>
        </ul>
      `
    },

    {
      heading: "Secondary Assessment",
      html: `
        <span class="badge">PQS 303.4</span>
        <p>The secondary assessment is a more detailed evaluation after life threats are addressed.</p>
        <h4>Components:</h4>
        <ul>
          <li>Focused history (SAMPLE, OPQRST).</li>
          <li>Head-to-toe exam using DCAP-BTLS.</li>
          <li>Repeat vital signs and pain assessment.</li>
          <li>Identify additional injuries or conditions.</li>
        </ul>
      `
    },

    {
      heading: "Airway & Breathing Interventions",
      html: `
        <span class="badge">PQS 303.5</span>
        <p>Maintaining airway and adequate ventilation is the highest priority.</p>
        <h4>Interventions:</h4>
        <ul>
          <li>Manual airway maneuvers (head-tilt/chin-lift, jaw thrust).</li>
          <li>Oropharyngeal and nasopharyngeal airways.</li>
          <li>Bag-valve-mask (BVM) ventilation.</li>
          <li>Oxygen administration via nasal cannula or non-rebreather mask.</li>
        </ul>
      `
    },

    {
      heading: "Circulation & Hemorrhage Control",
      html: `
        <span class="badge">PQS 303.6</span>
        <p>Uncontrolled bleeding is a leading cause of preventable death in trauma.</p>
        <h4>Interventions:</h4>
        <ul>
          <li>Direct pressure and pressure dressings.</li>
          <li>Tourniquet application for severe extremity bleeding.</li>
          <li>Hemostatic dressings when indicated.</li>
          <li>Shock recognition and management (positioning, oxygen, rapid transport).</li>
        </ul>
      `
    },

    {
      heading: "Spinal Precautions & Immobilization",
      html: `
        <span class="badge">PQS 303.7</span>
        <p>Spinal precautions are used when spinal injury is suspected.</p>
        <h4>Key Points:</h4>
        <ul>
          <li>Maintain manual cervical spine stabilization.</li>
          <li>Use cervical collars and backboards per protocol.</li>
          <li>Minimize patient movement.</li>
          <li>Reassess neurologic status frequently.</li>
        </ul>
      `
    },

    {
      heading: "Evacuation & Transfer",
      html: `
        <span class="badge">PQS 303.8</span>
        <p>Safe and timely evacuation is critical for seriously ill or injured patients.</p>
        <h4>Tasks:</h4>
        <ul>
          <li>Determine appropriate destination (clinic, hospital, higher echelon of care).</li>
          <li>Prepare patient for movement (packaging, securing lines and equipment).</li>
          <li>Use litters and movement devices safely.</li>
          <li>Provide handoff report using a structured format (e.g., MIST or SBAR).</li>
        </ul>
      `
    },

    {
      heading: "Documentation in Emergencies",
      html: `
        <span class="badge">PQS 303.9</span>
        <p>Even in emergencies, documentation must be accurate and timely.</p>
        <h4>Document:</h4>
        <ul>
          <li>Time of incident and arrival.</li>
          <li>Initial assessment and vital signs.</li>
          <li>Interventions performed and patient response.</li>
          <li>Medications given and dosages.</li>
          <li>Transfer time and receiving facility.</li>
        </ul>
      `
    },

    {
      heading: "Mini-Scenarios",
      html: `
        <div class="scenario">
          <div class="scenario-title">Scenario 1 — Massive Hemorrhage</div>
          <p class="scenario-question">A Marine has a severe arterial bleed from the leg after an explosion. What is your immediate action?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Apply a tourniquet proximal to the wound and tighten until bleeding stops, then continue the primary assessment.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 2 — Airway Compromise</div>
          <p class="scenario-question">A patient is unconscious with snoring respirations after a fall. What should you do first?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Open the airway with a jaw thrust (if trauma suspected) and insert an airway adjunct as indicated.</p>
        </div>

        <div class="scenario">
          <div class="scenario-title">Scenario 3 — Spinal Precautions</div>
          <p class="scenario-question">A Sailor fell from a ladder and complains of neck pain and tingling in the hands. What is your priority?</p>
          <p class="scenario-answer"><strong>Answer:</strong> Maintain manual C-spine stabilization, apply a cervical collar, and immobilize per protocol.</p>
        </div>
      `
    },

    {
      heading: "End-of-Block Quiz",
      quiz: {
        questions: [
          {
            text: "What is the primary goal of triage?",
            options: [
              "Collect detailed histories",
              "Sort patients by severity and resources",
              "Complete all paperwork first",
              "Transport everyone at once"
            ],
            correctIndex: 1
          },
          {
            text: "In the primary assessment, which comes first?",
            options: ["Breathing", "Circulation", "Airway", "Disability"],
            correctIndex: 2
          },
          {
            text: "The best initial intervention for severe extremity bleeding is:",
            options: ["Ice pack", "Tourniquet", "Band-aid", "Elevation only"],
            correctIndex: 1
          },
          {
            text: "Which device is used to deliver an electrical shock for lethal rhythms?",
            options: ["Pulse oximeter", "AED", "Suction unit", "Nebulizer"],
            correctIndex: 1
          },
          {
            text: "Which information should be included in an emergency handoff report?",
            options: [
              "Only the patient’s name",
              "MIST or similar summary of injuries and treatment",
              "Unit gossip",
              "Only vital signs"
            ],
            correctIndex: 1
          }
        ]
      }
    }
  ]
}
];

// ---------- RENDERING LOGIC ----------

const moduleListEl = document.getElementById("module-list");
const moduleContentEl = document.getElementById("module-content");

function renderModuleList() {
  moduleListEl.innerHTML = "";
  modules.forEach((mod, index) => {
    const li = document.createElement("li");
    li.className = "module-item";

    const btn = document.createElement("button");
    btn.className = "module-button";
    btn.textContent = `${mod.id} ${mod.title.replace(/^\d+\s—\s/, "— ")}`;
    btn.addEventListener("click", () => selectModule(index));

    li.appendChild(btn);
    moduleListEl.appendChild(li);
  });
}

function selectModule(index) {
  const buttons = document.querySelectorAll(".module-button");
  buttons.forEach((b, i) => {
    b.classList.toggle("active", i === index);
  });

  const mod = modules[index];
  renderModule(mod);
}

function renderModule(mod) {
  let html = `
    <h2>${mod.title}</h2>
    <p>${mod.description}</p>
  `;

  if (mod.youtube) {
    html += `
      <div class="youtube-wrapper">
        <iframe src="${mod.youtube}" title="YouTube video" allowfullscreen></iframe>
      </div>
    `;
  }

  mod.sections.forEach((section, idx) => {
    if (section.quiz) {
      html += `
        <section class="section-card">
          <h3>${section.heading}</h3>
          <div id="quiz-${mod.id}-${idx}">
            ${renderQuiz(section.quiz, mod.id, idx)}
          </div>
        </section>
      `;
    } else {
      html += `
        <section class="section-card">
          <h3>${section.heading}</h3>
          ${section.html}
        </section>
      `;
    }
  });

  moduleContentEl.innerHTML = html;

  // Attach quiz handlers
  mod.sections.forEach((section, idx) => {
    if (section.quiz) {
      attachQuizHandler(section.quiz, mod.id, idx);
    }
  });
}

function renderQuiz(quiz, modId, sectionIndex) {
  let html = "";
  quiz.questions.forEach((q, qi) => {
    html += `
      <div class="quiz-question">
        <p><strong>Q${qi + 1}.</strong> ${q.text}</p>
        <ul class="quiz-options">
          ${q.options
            .map(
              (opt, oi) => `
            <li>
              <label>
                <input type="radio" name="quiz-${modId}-${sectionIndex}-q${qi}" value="${oi}" />
                ${opt}
              </label>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;
  });

  html += `
    <button class="quiz-submit" data-mod="${modId}" data-sec="${sectionIndex}">
      Submit Quiz
    </button>
    <div class="quiz-result" id="quiz-result-${modId}-${sectionIndex}"></div>
  `;

  return html;
}

function attachQuizHandler(quiz, modId, sectionIndex) {
  const btn = document.querySelector(
    `.quiz-submit[data-mod="${modId}"][data-sec="${sectionIndex}"]`
  );
  const resultEl = document.getElementById(`quiz-result-${modId}-${sectionIndex}`);

  btn.addEventListener("click", () => {
    let correct = 0;
    quiz.questions.forEach((q, qi) => {
      const name = `quiz-${modId}-${sectionIndex}-q${qi}`;
      const selected = document.querySelector(`input[name="${name}"]:checked`);
      if (selected && parseInt(selected.value, 10) === q.correctIndex) {
        correct++;
      }
    });
    const total = quiz.questions.length;
    resultEl.textContent = `You scored ${correct} out of ${total}.`;
  });
}

// Initialize
renderModuleList();
selectModule(0);
