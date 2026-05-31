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
    youtube: "",
    description: "Placeholder for diagnosis and treatment fundamentals.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 105 content here.</p>`
      }
    ]
  },
  {
    id: "106",
    title: "106 — Preventive Medicine Fundamentals",
    level: "Fundamentals",
    youtube: "",
    description: "Placeholder for preventive medicine fundamentals.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 106 content here.</p>`
      }
    ]
  },
  {
    id: "107",
    title: "107 — Immunization Fundamentals",
    level: "Fundamentals",
    youtube: "",
    description: "Placeholder for immunization fundamentals.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 107 content here.</p>`
      }
    ]
  },
  {
    id: "108",
    title: "108 — Pharmacology Fundamentals",
    level: "Fundamentals",
    youtube: "",
    description: "Placeholder for pharmacology fundamentals.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 108 content here.</p>`
      }
    ]
  },
  {
    id: "109",
    title: "109 — Laboratory Fundamentals",
    level: "Fundamentals",
    youtube: "",
    description: "Placeholder for laboratory fundamentals.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 109 content here.</p>`
      }
    ]
  },
  {
    id: "110",
    title: "110 — Medical Support Fundamentals",
    level: "Fundamentals",
    youtube: "",
    description: "Placeholder for medical support fundamentals.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 110 content here.</p>`
      }
    ]
  },
  {
    id: "201",
    title: "201 — Military Medical Equipment",
    level: "Systems",
    youtube: "",
    description: "Placeholder for medical equipment systems.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 201 content here.</p>`
      }
    ]
  },
  {
    id: "301",
    title: "301 — Administration Corpsman",
    level: "Watchstation",
    youtube: "",
    description: "Placeholder for Administration Corpsman watchstation tasks.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 301 content here.</p>`
      }
    ]
  },
  {
    id: "302",
    title: "302 — Patient Care Corpsman",
    level: "Watchstation",
    youtube: "",
    description: "Placeholder for Patient Care Corpsman watchstation tasks.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 302 content here.</p>`
      }
    ]
  },
  {
    id: "303",
    title: "303 — Medical Readiness Corpsman",
    level: "Watchstation",
    youtube: "",
    description: "Placeholder for Medical Readiness Corpsman watchstation tasks.",
    sections: [
      {
        heading: "Overview",
        html: `<p>Placeholder — add PQS 303 content here.</p>`
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
