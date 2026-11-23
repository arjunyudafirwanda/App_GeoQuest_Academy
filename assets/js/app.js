(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [
    ...scope.querySelectorAll(selector),
  ];
  const STORAGE_KEY = "geoquest-academy-player-profiles-v1";
  const MISSIONS = window.GEOQUEST_MISSIONS || [];
  const ZONES = [
    {
      id: 1,
      title: "Map & Spatial Skills",
      subtitle: "Baca peta, koordinat, dan arah",
      icon: "fa-map-location-dot",
      tone: "blue",
    },
    {
      id: 2,
      title: "Indonesia & Its Regions",
      subtitle: "Jelajahi nusantara",
      icon: "fa-earth-asia",
      tone: "mint",
    },
    {
      id: 3,
      title: "Climate & Ecosystems",
      subtitle: "Pahami iklim dan kehidupan",
      icon: "fa-cloud-sun",
      tone: "gold",
    },
    {
      id: 4,
      title: "People & Places",
      subtitle: "Kenali manusia dan ruang",
      icon: "fa-people-group",
      tone: "violet",
    },
    {
      id: 5,
      title: "Disaster & Sustainability",
      subtitle: "Bangun wilayah yang tangguh",
      icon: "fa-house-tsunami",
      tone: "coral",
    },
  ];

  const dom = {
    welcomeScreen: $("#welcomeScreen"),
    appShell: $("#appShell"),
    missionView: $("#missionView"),
    resultView: $("#resultView"),
    headerRight: $("#headerRight"),
    startForm: $("#startForm"),
    playerName: $("#playerName"),
    playerAge: $("#playerAge"),
    formError: $("#formError"),
    headerPlayer: $("#headerPlayer"),
    headerGrade: $("#headerGrade"),
    headerScore: $("#headerScore"),
    welcomePlayer: $("#welcomePlayer"),
    themeToggle: $("#themeToggle"),
    changePlayer: $("#changePlayer"),
    overallProgress: $("#overallProgress"),
    overallBar: $("#overallBar"),
    completedLabel: $("#completedLabel"),
    dashboardScore: $("#dashboardScore"),
    badgeCount: $("#badgeCount"),
    zonesGrid: $("#zonesGrid"),
    missionsGrid: $("#missionsGrid"),
    backToMap: $("#backToMap"),
    missionZoneLabel: $("#missionZoneLabel"),
    missionNumberLabel: $("#missionNumberLabel"),
    storyVisual: $("#storyVisual"),
    storyKicker: $("#storyKicker"),
    missionTitle: $("#missionTitle"),
    missionIntro: $("#missionIntro"),
    missionClue: $("#missionClue"),
    missionConcept: $("#missionConcept"),
    questionText: $("#questionText"),
    answerOptions: $("#answerOptions"),
    attemptPill: $("#attemptPill"),
    missionProgressText: $("#missionProgressText"),
    missionProgressBar: $("#missionProgressBar"),
    feedbackBox: $("#feedbackBox"),
    feedbackTitle: $("#feedbackTitle"),
    feedbackText: $("#feedbackText"),
    checkAnswer: $("#checkAnswer"),
    nextMission: $("#nextMission"),
    resultTitle: $("#resultTitle"),
    resultDescription: $("#resultDescription"),
    resultPoints: $("#resultPoints"),
    resultAttempts: $("#resultAttempts"),
    resultStars: $("#resultStars"),
    resultContinue: $("#resultContinue"),
    resultReplay: $("#resultReplay"),
    penaltyModal: $("#penaltyModal"),
    scoreBefore: $("#scoreBefore"),
    scorePenalty: $("#scorePenalty"),
    scoreAfter: $("#scoreAfter"),
    closePenalty: $("#closePenalty"),
    toast: $("#toast"),
    toastMessage: $("#toastMessage"),
    currentYear: $("#currentYear"),
  };

  const state = {
    store: { activeKey: null, profiles: {} },
    profileKey: null,
    profile: null,
    currentMissionId: null,
    selectedAnswer: null,
    toastTimer: null,
    pendingPenaltyFocus: false,
    resultReady: false,
  };

  function normalizeName(name) {
    return String(name || "")
      .trim()
      .replace(/\s+/g, " ");
  }
  function profileKey(name, age) {
    return `${normalizeName(name).toLocaleLowerCase("id-ID")}::${Number(age)}`;
  }
  function gradeForAge(age) {
    return age <= 13 ? "VII" : age === 14 ? "VIII" : "IX";
  }
  function readStore() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (
        value &&
        typeof value === "object" &&
        value.profiles &&
        typeof value.profiles === "object"
      )
        return value;
    } catch (error) {
      console.warn("GeoQuest progress could not be read.", error);
    }
    return { activeKey: null, profiles: {} };
  }
  function saveStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
    } catch (error) {
      console.warn("GeoQuest progress could not be saved.", error);
      showToast(
        "Progres belum tersimpan. Periksa pengaturan penyimpanan browser.",
        "warning",
      );
    }
  }
  function createProfile(name, age) {
    return {
      name,
      age,
      grade: gradeForAge(age),
      totalScore: 0,
      streak: 0,
      bestStreak: 0,
      totalPenalty: 0,
      missions: {},
      createdAt: new Date().toISOString(),
    };
  }
  function ensureMissionRecord(id) {
    const key = String(id);
    if (!state.profile.missions[key])
      state.profile.missions[key] = {
        status: "new",
        attempts: 0,
        wrongStreak: 0,
        points: 0,
        stars: 0,
        penaltyCount: 0,
        selectedAnswer: null,
      };
    return state.profile.missions[key];
  }
  function persistProfile() {
    if (!state.profile || !state.profileKey) return;
    state.store.profiles[state.profileKey] = state.profile;
    state.store.activeKey = state.profileKey;
    saveStore();
  }
  function completedCount() {
    return MISSIONS.filter(
      (m) => state.profile?.missions?.[String(m.id)]?.status === "completed",
    ).length;
  }
  function firstLockedMission() {
    for (const mission of MISSIONS)
      if (state.profile.missions[String(mission.id)]?.status !== "completed")
        return mission.id;
    return MISSIONS.length;
  }
  function unlockedThrough() {
    return Math.min(MISSIONS.length, firstLockedMission());
  }
  function totalStars() {
    return Object.values(state.profile.missions || {}).reduce(
      (sum, record) =>
        sum + (record.status === "completed" ? Number(record.stars || 0) : 0),
      0,
    );
  }
  function gradeLabel() {
    return `KELAS ${state.profile.grade}`;
  }

  function enterProfile(name, age) {
    const key = profileKey(name, age);
    let profile = state.store.profiles[key];
    if (!profile) profile = createProfile(name, age);
    profile.name = name;
    profile.age = age;
    profile.grade = gradeForAge(age);
    profile.missions = profile.missions || {};
    profile.totalScore = Number(profile.totalScore || 0);
    profile.streak = Number(profile.streak || 0);
    profile.bestStreak = Number(profile.bestStreak || 0);
    profile.totalPenalty = Number(profile.totalPenalty || 0);
    state.profileKey = key;
    state.profile = profile;
    state.store.profiles[key] = profile;
    state.store.activeKey = key;
    persistProfile();

    dom.welcomeScreen.hidden = true;
    dom.missionView.hidden = true;
    dom.resultView.hidden = true;
    dom.appShell.hidden = false;
    dom.headerRight.hidden = false;
    dom.welcomePlayer.textContent = profile.name;
    updateHeader();
    renderDashboard();
    dom.appShell.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function updateHeader() {
    if (!state.profile) return;
    dom.headerPlayer.textContent = state.profile.name;
    dom.headerGrade.textContent = state.profile.grade;
    dom.headerScore.textContent = Number(
      state.profile.totalScore || 0,
    ).toLocaleString("id-ID");
  }

  function renderDashboard() {
    if (!state.profile) return;
    const completed = completedCount();
    const percent = Math.round((completed / MISSIONS.length) * 100);
    dom.overallProgress.textContent = `${percent}%`;
    dom.overallBar.style.width = `${percent}%`;
    dom.completedLabel.textContent = `${completed} / ${MISSIONS.length} misi`;
    dom.dashboardScore.textContent = Number(
      state.profile.totalScore || 0,
    ).toLocaleString("id-ID");
    dom.badgeCount.textContent = totalStars();
    renderZones();
    renderMissions();
    updateHeader();
  }

  function renderZones() {
    dom.zonesGrid.innerHTML = ZONES.map((zone) => {
      const items = MISSIONS.filter((m) => m.zone === zone.id);
      const done = items.filter(
        (m) => state.profile.missions[String(m.id)]?.status === "completed",
      ).length;
      const pct = Math.round((done / items.length) * 100);
      return `<article class="zone-card zone-${zone.tone}">
        <div class="zone-icon"><i class="fa-solid ${zone.icon}" aria-hidden="true"></i></div>
        <div class="zone-content"><span class="zone-number">ZONE 0${zone.id}</span><h4>${zone.title}</h4><p>${zone.subtitle}</p>
          <div class="zone-progress-row"><span>${done} / ${items.length} misi</span><strong>${pct}%</strong></div><div class="zone-progress"><span style="width:${pct}%"></span></div>
        </div></article>`;
    }).join("");
  }

  function renderMissions() {
    const unlocked = unlockedThrough();
    dom.missionsGrid.innerHTML = MISSIONS.map((mission) => {
      const record = state.profile.missions[String(mission.id)] || {
        status: "new",
      };
      const done = record.status === "completed";
      const locked = mission.id > unlocked;
      const statusText = done
        ? "COMPLETED"
        : locked
          ? "LOCKED"
          : record.status === "reviewed"
            ? "REVIEW AGAIN"
            : record.status === "in-progress"
              ? "IN PROGRESS"
              : "READY";
      const statusIcon = done
        ? "fa-circle-check"
        : locked
          ? "fa-lock"
          : record.status === "in-progress"
            ? "fa-hourglass-half"
            : "fa-play";
      const stars = done
        ? "★".repeat(record.stars) + "☆".repeat(3 - record.stars)
        : "☆☆☆";
      return `<button class="mission-card ${done ? "is-done" : ""} ${locked ? "is-locked" : ""} ${record.status === "in-progress" ? "is-progress" : ""}" type="button" data-mission="${mission.id}" ${locked ? "disabled" : ""}>
        <span class="mission-card-top"><span class="mission-card-number">${String(mission.id).padStart(2, "0")}</span><i class="fa-solid ${statusIcon}" aria-hidden="true"></i></span>
        <span class="mission-card-zone">ZONE 0${mission.zone} · ${mission.tag}</span>
        <strong>${mission.title}</strong>
        <span class="mission-card-bottom"><span>${statusText}</span><span class="mission-card-stars">${stars}</span></span>
      </button>`;
    }).join("");
  }

  function openMission(id) {
    const mission = MISSIONS.find((item) => item.id === Number(id));
    if (!mission) return;
    if (mission.id > unlockedThrough()) {
      showToast(
        "Selesaikan misi sebelumnya untuk membuka tantangan ini.",
        "warning",
      );
      return;
    }
    state.currentMissionId = mission.id;
    state.selectedAnswer = null;
    const record = ensureMissionRecord(mission.id);
    if (record.status !== "completed") record.status = "in-progress";
    record.selectedAnswer = null;
    persistProfile();

    dom.appShell.hidden = true;
    dom.resultView.hidden = true;
    dom.missionView.hidden = false;
    dom.missionZoneLabel.textContent = mission.zoneName.toUpperCase();
    dom.missionNumberLabel.textContent = `MISSION ${String(mission.id).padStart(2, "0")} / ${MISSIONS.length}`;
    dom.storyVisual.className = `story-visual zone-tone-${mission.zone}`;
    dom.storyVisual.innerHTML = `<i class="fa-solid ${mission.zoneIcon}" aria-hidden="true"></i><span>FIELD ZONE 0${mission.zone}</span>`;
    dom.storyKicker.textContent = `FIELD REPORT · ${String(mission.id).padStart(2, "0")}`;
    dom.missionTitle.textContent = mission.title;
    dom.missionIntro.textContent = mission.intro;
    dom.missionClue.textContent = mission.clue;
    dom.missionConcept.textContent = mission.concept;
    dom.questionText.textContent = mission.question;
    dom.missionProgressText.textContent =
      record.status === "completed" ? "100%" : "0%";
    dom.missionProgressBar.style.width =
      record.status === "completed" ? "100%" : "0%";
    dom.feedbackBox.hidden = true;
    dom.nextMission.hidden = true;
    dom.checkAnswer.hidden = false;

    if (record.status === "completed") {
      renderCompletedReview(mission, record);
    } else {
      renderOptions(mission);
      updateAttemptUI(record);
      dom.checkAnswer.disabled = true;
      dom.checkAnswer.innerHTML =
        'Periksa Jawaban <i class="fa-solid fa-check"></i>';
    }
    dom.missionView.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function renderOptions(mission) {
    dom.answerOptions.innerHTML = mission.options
      .map(
        (option, index) => `
      <button type="button" class="answer-option" data-answer="${index}" aria-pressed="false">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-text">${option}</span><i class="fa-solid fa-circle-check option-check" aria-hidden="true"></i>
      </button>`,
      )
      .join("");
  }

  function renderCompletedReview(mission, record) {
    dom.answerOptions.innerHTML = mission.options
      .map(
        (option, index) => `
      <div class="answer-option review-option ${index === mission.answer ? "is-correct" : ""}">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-text">${option}</span>${index === mission.answer ? '<i class="fa-solid fa-check option-check" aria-hidden="true"></i>' : ""}
      </div>`,
      )
      .join("");
    dom.attemptPill.textContent = `COMPLETED · ${record.attempts} ATTEMPT${record.attempts === 1 ? "" : "S"}`;
    dom.feedbackBox.hidden = false;
    dom.feedbackBox.className = "feedback-box is-success";
    dom.feedbackTitle.textContent = "Misi ini sudah kamu selesaikan!";
    dom.feedbackText.textContent = mission.explanation;
    dom.checkAnswer.hidden = true;
    dom.nextMission.hidden = false;
    dom.nextMission.innerHTML =
      'Kembali ke Peta <i class="fa-solid fa-map"></i>';
    dom.missionProgressText.textContent = "100%";
    dom.missionProgressBar.style.width = "100%";
  }

  function updateAttemptUI(record) {
    const attemptNumber = Math.max(1, Number(record.attempts || 0) + 1);
    dom.attemptPill.textContent = `ATTEMPT ${attemptNumber}`;
  }

  function selectAnswer(index) {
    const record = ensureMissionRecord(state.currentMissionId);
    if (record.status === "completed" || !dom.feedbackBox.hidden) return;
    state.selectedAnswer = Number(index);
    record.selectedAnswer = state.selectedAnswer;
    $$(".answer-option", dom.answerOptions).forEach((button, i) => {
      button.classList.toggle("is-selected", i === state.selectedAnswer);
      button.setAttribute("aria-pressed", String(i === state.selectedAnswer));
    });
    dom.checkAnswer.disabled = false;
    persistProfile();
  }

  function checkAnswer() {
    const mission = MISSIONS.find((item) => item.id === state.currentMissionId);
    const record = ensureMissionRecord(state.currentMissionId);
    if (
      !mission ||
      state.selectedAnswer === null ||
      record.status === "completed"
    )
      return;
    record.attempts = Number(record.attempts || 0) + 1;
    const selected = state.selectedAnswer;
    const isCorrect = selected === mission.answer;
    $$(".answer-option", dom.answerOptions).forEach((button, index) => {
      button.disabled = true;
      if (index === mission.answer) button.classList.add("is-correct");
      else if (index === selected && !isCorrect)
        button.classList.add("is-wrong");
    });

    if (isCorrect) {
      const isFirstTry = record.attempts === 1;
      const basePoints =
        record.attempts === 1
          ? 100
          : record.attempts === 2
            ? 70
            : record.attempts === 3
              ? 40
              : 20;
      state.profile.streak = isFirstTry
        ? Number(state.profile.streak || 0) + 1
        : 0;
      if (isFirstTry && state.profile.streak % 3 === 0)
        state.profile.totalScore += 25;
      state.profile.bestStreak = Math.max(
        Number(state.profile.bestStreak || 0),
        Number(state.profile.streak || 0),
      );
      const bonus = isFirstTry && state.profile.streak % 3 === 0 ? 25 : 0;
      const stars = record.attempts === 1 ? 3 : record.attempts === 2 ? 2 : 1;
      const points = basePoints + bonus;
      state.profile.totalScore += basePoints;
      record.status = "completed";
      record.points = points;
      record.stars = stars;
      record.completedAt = new Date().toISOString();
      record.selectedAnswer = selected;
      record.wrongStreak = 0;
      persistProfile();
      state.resultReady = true;
      showFeedback(
        true,
        `Hebat! Jawabanmu tepat. Kamu memperoleh ${points} poin${bonus ? " termasuk bonus streak 25 poin" : ""}. ${mission.explanation}`,
      );
      dom.missionProgressText.textContent = "100%";
      dom.missionProgressBar.style.width = "100%";
      dom.checkAnswer.hidden = true;
      dom.nextMission.hidden = false;
      dom.nextMission.innerHTML =
        'Lihat Hasil Misi <i class="fa-solid fa-arrow-right"></i>';
      showResult(mission, record, points);
    } else {
      record.wrongStreak = Number(record.wrongStreak || 0) + 1;
      state.profile.streak = 0;
      let penaltyTriggered = false;
      if (record.wrongStreak >= 3) {
        applyPenalty(record);
        record.wrongStreak = 0;
        penaltyTriggered = true;
      }
      record.status = "reviewed";
      record.selectedAnswer = null;
      persistProfile();
      showFeedback(
        false,
        `${penaltyTriggered ? "Kamu sudah tiga kali salah dan penalti telah diterapkan. " : "Belum tepat. Coba analisis kembali petunjuk pada laporan lapangan. "}${mission.explanation}`,
      );
      dom.checkAnswer.hidden = true;
      dom.nextMission.hidden = false;
      dom.nextMission.innerHTML =
        'Coba Lagi <i class="fa-solid fa-rotate-right"></i>';
      if (penaltyTriggered) openPenaltyModal();
    }
    updateHeader();
  }

  function showFeedback(success, message) {
    dom.feedbackBox.hidden = false;
    dom.feedbackBox.className = `feedback-box ${success ? "is-success" : "is-error"}`;
    dom.feedbackTitle.textContent = success
      ? "Investigasi berhasil!"
      : "Periksa kembali analisismu";
    dom.feedbackText.textContent = message;
    dom.attemptPill.textContent = `ATTEMPT ${ensureMissionRecord(state.currentMissionId).attempts}`;
  }

  function applyPenalty(record) {
    const before = Number(state.profile.totalScore || 0);
    const deduction = Math.min(20, before);
    state.profile.totalScore = Math.max(0, before - deduction);
    state.profile.totalPenalty =
      Number(state.profile.totalPenalty || 0) + deduction;
    record.penaltyCount = Number(record.penaltyCount || 0) + 1;
    state.pendingPenaltyFocus = true;
    dom.scoreBefore.textContent = before.toLocaleString("id-ID");
    dom.scorePenalty.textContent = `−${deduction.toLocaleString("id-ID")}`;
    dom.scoreAfter.textContent =
      state.profile.totalScore.toLocaleString("id-ID");
  }

  function openPenaltyModal() {
    dom.penaltyModal.hidden = false;
    dom.closePenalty.focus();
  }
  function closePenaltyModal() {
    dom.penaltyModal.hidden = true;
    if (state.pendingPenaltyFocus) {
      dom.nextMission.focus();
      state.pendingPenaltyFocus = false;
    }
  }

  function showResult(mission, record, points) {
    dom.resultTitle.textContent = `Misi ${String(mission.id).padStart(2, "0")} berhasil!`;
    dom.resultDescription.textContent = `Kamu menyelesaikan ${mission.title}. ${mission.explanation}`;
    dom.resultPoints.textContent = `+${points.toLocaleString("id-ID")}`;
    dom.resultAttempts.textContent = record.attempts;
    dom.resultStars.textContent =
      "★".repeat(record.stars) + "☆".repeat(3 - record.stars);
  }

  function goToMap() {
    dom.missionView.hidden = true;
    dom.resultView.hidden = true;
    dom.appShell.hidden = false;
    renderDashboard();
    dom.appShell.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function handleContinue() {
    const record = ensureMissionRecord(state.currentMissionId);
    if (record.status === "completed") {
      if (state.resultReady) {
        state.resultReady = false;
        dom.missionView.hidden = true;
        dom.resultView.hidden = false;
        dom.resultView.scrollIntoView({
          behavior: reducedMotion() ? "auto" : "smooth",
          block: "start",
        });
      } else {
        goToMap();
      }
      return;
    }
    // A reviewed mission remains available for another attempt.
    record.status = "in-progress";
    record.selectedAnswer = null;
    persistProfile();
    const mission = MISSIONS.find((item) => item.id === state.currentMissionId);
    state.selectedAnswer = null;
    dom.resultView.hidden = true;
    dom.missionView.hidden = false;
    dom.feedbackBox.hidden = true;
    dom.nextMission.hidden = true;
    dom.checkAnswer.hidden = false;
    dom.checkAnswer.disabled = true;
    dom.checkAnswer.innerHTML =
      'Periksa Jawaban <i class="fa-solid fa-check"></i>';
    updateAttemptUI(record);
    renderOptions(mission);
    dom.missionProgressText.textContent = "0%";
    dom.missionProgressBar.style.width = "0%";
    dom.missionView.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function replayMission() {
    if (!state.currentMissionId) return;
    const mission = MISSIONS.find((item) => item.id === state.currentMissionId);
    const record = ensureMissionRecord(state.currentMissionId);
    if (record.status === "completed") {
      showToast(
        "Misi ini sudah selesai. Kamu dapat membaca kembali penjelasannya.",
      );
      openMission(mission.id);
      return;
    }
    state.selectedAnswer = null;
    dom.resultView.hidden = true;
    dom.missionView.hidden = false;
    renderOptions(mission);
    dom.feedbackBox.hidden = true;
    dom.nextMission.hidden = true;
    dom.checkAnswer.hidden = false;
    dom.checkAnswer.disabled = true;
    updateAttemptUI(record);
  }

  function changePlayer() {
    state.profile = null;
    state.profileKey = null;
    state.currentMissionId = null;
    dom.appShell.hidden = true;
    dom.missionView.hidden = true;
    dom.resultView.hidden = true;
    dom.headerRight.hidden = true;
    dom.welcomeScreen.hidden = false;
    dom.playerName.value = "";
    dom.playerAge.value = "";
    dom.formError.hidden = true;
    dom.playerName.focus();
    dom.welcomeScreen.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function showToast(message, type = "info") {
    window.clearTimeout(state.toastTimer);
    dom.toastMessage.textContent = message;
    dom.toast.className = `toast ${type === "warning" ? "is-warning" : type === "success" ? "is-success" : ""}`;
    requestAnimationFrame(() => dom.toast.classList.add("show"));
    state.toastTimer = window.setTimeout(
      () => dom.toast.classList.remove("show"),
      3000,
    );
  }

  function reducedMotion() {
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false
    );
  }
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("geoquest-theme", theme);
    dom.themeToggle.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    dom.themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Gunakan tema terang" : "Gunakan tema gelap",
    );
  }

  function bindEvents() {
    dom.startForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = normalizeName(dom.playerName.value);
      const age = Number(dom.playerAge.value);
      if (name.length < 2 || name.length > 24) {
        dom.formError.textContent = "Nama harus terdiri dari 2–24 karakter.";
        dom.formError.hidden = false;
        dom.playerName.focus();
        return;
      }
      if (!Number.isInteger(age) || age < 13 || age > 16) {
        dom.formError.textContent = "Masukkan usia antara 13 sampai 16 tahun.";
        dom.formError.hidden = false;
        dom.playerAge.focus();
        return;
      }
      dom.formError.hidden = true;
      enterProfile(name, age);
    });
    dom.changePlayer.addEventListener("click", changePlayer);
    dom.backToMap.addEventListener("click", goToMap);
    dom.missionsGrid.addEventListener("click", (event) => {
      const card = event.target.closest("[data-mission]");
      if (card && !card.disabled) openMission(Number(card.dataset.mission));
    });
    dom.answerOptions.addEventListener("click", (event) => {
      const button = event.target.closest("[data-answer]");
      if (button && !button.disabled)
        selectAnswer(Number(button.dataset.answer));
    });
    dom.checkAnswer.addEventListener("click", checkAnswer);
    dom.nextMission.addEventListener("click", handleContinue);
    dom.resultContinue.addEventListener("click", goToMap);
    dom.resultReplay.addEventListener("click", replayMission);
    dom.closePenalty.addEventListener("click", closePenaltyModal);
    dom.penaltyModal.addEventListener("click", (event) => {
      if (event.target === dom.penaltyModal) closePenaltyModal();
    });
    dom.themeToggle.addEventListener("click", () =>
      setTheme(
        document.documentElement.dataset.theme === "dark" ? "light" : "dark",
      ),
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !dom.penaltyModal.hidden)
        closePenaltyModal();
    });
  }

  function initialize() {
    state.store = readStore();
    dom.currentYear.textContent = new Date().getFullYear();
    const preferred =
      localStorage.getItem("geoquest-theme") ||
      (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
        ? "dark"
        : "light");
    setTheme(preferred);
    bindEvents();
    if (!MISSIONS.length) console.error("GeoQuest mission bank is empty.");
  }

  initialize();
})();
