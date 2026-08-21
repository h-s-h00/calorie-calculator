/* ══════════════════════════════════════════════════════════════
   حاسبة السعرات الحرارية — منطق الحساب والتفاعل
   المعادلة: Mifflin-St Jeor (معتمدة علمياً، ونفس منهجية أغلب
   الحاسبات الصحية الرسمية بما فيها حاسبة وزارة الصحة السعودية)
   ══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  var GAUGE_RADIUS = 88;
  var GAUGE_CIRCUMFERENCE = 2 * Math.PI * GAUGE_RADIUS;
  var SCALE_MIN = 1200;
  var SCALE_MAX = 4000;

  var form = document.getElementById("calorie-form");
  var resultCard = document.getElementById("result-card");
  var resultGaugeFill = document.getElementById("result-gauge-fill");

  var errors = {
    gender: "من فضلك اختر الجنس",
    weight: "الرجاء إدخال وزن صحيح بين 20 و300 كجم، لا يُسمح بإدخال الرموز",
    height: "الرجاء إدخال طول صحيح بين 90 و250 سم، لا يُسمح بإدخال الرموز",
    age: "الرجاء إدخال عمر صحيح بين 10 و100 سنة، لا يُسمح بإدخال الرموز",
    activity: "الرجاء اختيار مستوى النشاط"
  };

  function setError(field, message) {
    var el = document.getElementById("err-" + field);
    if (el) el.textContent = message || "";
  }

  function clearErrors() {
    Object.keys(errors).forEach(function (f) { setError(f, ""); });
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function animateNumber(el, target) {
    var start = 0;
    var duration = 700;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (target - start) * eased).toLocaleString("en-US");
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function setGaugeFill(svgFillEl, value) {
    var pct = clamp((value - SCALE_MIN) / (SCALE_MAX - SCALE_MIN), 0, 1);
    var offset = GAUGE_CIRCUMFERENCE - pct * GAUGE_CIRCUMFERENCE;
    svgFillEl.style.strokeDasharray = GAUGE_CIRCUMFERENCE;
    // فرض إعادة الرسم قبل تشغيل التحول لضمان الأنيميشن
    svgFillEl.getBoundingClientRect();
    svgFillEl.style.strokeDashoffset = offset;
  }

  function calculateBMR(gender, weight, height, age) {
    var base = 10 * weight + 6.25 * height - 5 * age;
    return gender === "male" ? base + 5 : base - 161;
  }

  function handleSubmit(e) {
    e.preventDefault();
    clearErrors();

    var genderInput = form.querySelector('input[name="gender"]:checked');
    var gender = genderInput ? genderInput.value : "";
    var weight = parseFloat(form.weight.value);
    var height = parseFloat(form.height.value);
    var age = parseInt(form.age.value, 10);
    var activity = parseFloat(form.activity.value);

    var valid = true;

    if (!gender) { setError("gender", errors.gender); valid = false; }
    if (!weight || weight < 20 || weight > 300) { setError("weight", errors.weight); valid = false; }
    if (!height || height < 90 || height > 250) { setError("height", errors.height); valid = false; }
    if (!age || age < 10 || age > 100) { setError("age", errors.age); valid = false; }
    if (!activity) { setError("activity", errors.activity); valid = false; }

    if (!valid) {
      var firstError = form.querySelector(".field-error:not(:empty)");
      if (firstError) firstError.closest(".field, fieldset").scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    var bmr = calculateBMR(gender, weight, height, age);
    var tdee = bmr * activity;
    var loss = Math.max(tdee - 500, 1000);
    var gain = tdee + 500;

    resultCard.hidden = false;

    animateNumber(document.getElementById("result-tdee"), Math.round(tdee));
    animateNumber(document.getElementById("result-bmr"), Math.round(bmr));
    animateNumber(document.getElementById("result-loss"), Math.round(loss));
    animateNumber(document.getElementById("result-maintain"), Math.round(tdee));
    animateNumber(document.getElementById("result-gain"), Math.round(gain));

    requestAnimationFrame(function () {
      setGaugeFill(resultGaugeFill, tdee);
    });

    resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // منع إدخال أي رموز غير رقمية في حقول الوزن/الطول/العمر
  ["weight", "height", "age"].forEach(function (id) {
    var input = document.getElementById(id);
    input.addEventListener("keydown", function (e) {
      var allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "."];
      if (allowed.indexOf(e.key) !== -1) return;
      if (!/^[0-9]$/.test(e.key)) e.preventDefault();
    });
  });

  if (form) form.addEventListener("submit", handleSubmit);

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
