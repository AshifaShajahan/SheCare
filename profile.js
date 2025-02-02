document.addEventListener("DOMContentLoaded", function() {
    let fields = [
        { label: "Enter your name:", key: "profile-name" },
        { label: "Enter your age:", key: "profile-age" },
        { label: "Enter your email:", key: "profile-email" },
        { label: "Enter your period health status:", key: "profile-health" },
        { label: "Enter your cycle length (days):", key: "cycle-length" },
        { label: "Enter your last period date:", key: "last-period" },
        { label: "Enter your next period date:", key: "next-period" },
        { label: "Enter any symptoms logged:", key: "symptoms" },
        { label: "Any additional notes:", key: "notes" }
    ];

    let currentStep = 0;
    const modal = document.getElementById("edit-modal");
    const label = document.getElementById("edit-label");
    const input = document.getElementById("edit-input");
    const nextBtn = document.getElementById("next-btn");
    const saveBtn = document.getElementById("save-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    function loadProfile() {
        fields.forEach(field => {
            let value = localStorage.getItem(field.key) || "Not Set";
            document.getElementById(field.key).innerText = value;
        });
    }

    document.getElementById("edit-profile-btn").addEventListener("click", function() {
        currentStep = 0;
        showStep();
        modal.style.display = "block";
    });

    nextBtn.addEventListener("click", function() {
        if (currentStep < fields.length - 1) {
            localStorage.setItem(fields[currentStep].key, input.value);
            currentStep++;
            showStep();
        }
    });

    saveBtn.addEventListener("click", function() {
        localStorage.setItem(fields[currentStep].key, input.value);
        modal.style.display = "none";
        loadProfile();
    });

    cancelBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    function showStep() {
        label.textContent = fields[currentStep].label;
        input.value = localStorage.getItem(fields[currentStep].key) || "";
    }

    loadProfile();
});
