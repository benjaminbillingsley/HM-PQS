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
    youtube: "https://www.youtube.com/embed/5c8v4a2Gv0c", // example admin/records video
    description:
      "Covers health records, TDFS, privacy, electronic health systems, and physical exam documentation.",
    sections: [
      {
        heading: "Overview",
        html: `
          <p>This module introduces healthcare administration concepts such as health record structure, filing systems, privacy, and basic electronic medical record functions.</p>
          <p>Content placeholder — expand with PQS-aligned details for 102.1–102.16.</p>
        `
      }
    ]
  },
  {
    id: "103",
    title: "103 — Medical Assessment Fundamentals",
    level: "Fundamentals",
    youtube: "https://www.youtube.com/embed/5g0Qv0pZxVQ",
    description:
      "Covers patient rights, communication, SOAP notes, history taking (including OLDCARTS and ROS), and screening.",
    sections: [
      {
        heading: "Overview",
        html: `
          <p>This module covers the basics of patient assessment, including history taking, communication, and documentation using SOAP format.</p>
          <p>Content placeholder — expand with PQS-aligned details for 103.1–103.9.</p>
        `
      }
    ]
  },
  {
    id: "104",
    title: "104 — Military Medical Examinations Fundamentals",
    level: "Fundamentals",
    youtube: "https://www.youtube.com/embed/7Z2XRg5uZ0E",
    description:
      "Covers primary and secondary assessments, vital signs, physical exam systems, and normal vs abnormal findings.",
    sections: [
      {
        heading: "Overview",
        html: `
          <p>This module focuses on the structure and components of military medical examinations, including primary/secondary assessments and system-based exams.</p>
          <p>Content placeholder — expand with PQS-aligned details for 104.1–104.10.</p>
        `
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
