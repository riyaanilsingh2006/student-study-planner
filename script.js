let totalTasks = 0;
let completedTasks = 0;

function addTask() {
    let subject = document.getElementById("subjectInput").value;
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (subject === "") {
        alert("Please select a subject!");
        return;
    }

    if (task === "") {
        alert("Please enter a study task!");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.textContent = subject + " - " + task;

    let doneButton = document.createElement("button");
    doneButton.textContent = "Done";

    doneButton.onclick = function () {
        if (!li.classList.contains("completed")) {
            li.classList.add("completed");
            completedTasks++;
            updateProgress();
        }
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        if (li.classList.contains("completed")) {
            completedTasks--;
        }

        totalTasks--;
        li.remove();
        updateProgress();
    };

    li.appendChild(taskText);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    totalTasks++;
    input.value = "";
    document.getElementById("subjectInput").value = "";

    updateProgress();
}

function updateProgress() {
    let progress = document.getElementById("progress");

    if (totalTasks === 0) {
        progress.textContent = "Progress: 0%";
        return;
    }

    let percentage = Math.round((completedTasks / totalTasks) * 100);

    progress.textContent = "Progress: " + percentage + "%";
}
let studyGoal = 0;

function setGoal() {
    let goal = document.getElementById("goalInput").value;

    if (goal <= 0) {
        alert("Please enter a valid study goal!");
        return;
    }

    studyGoal = goal;

    document.getElementById("goalText").textContent =
        "Daily Goal: " + goal + " hours";
}let studyHours = 0;

function addStudyHours() {
    let hours = Number(document.getElementById("hoursInput").value);

    if (hours <= 0) {
        alert("Please enter valid study hours!");
        return;
    }

    studyHours += hours;

    document.getElementById("hoursText").textContent =
        "Studied Today: " + studyHours + " hours";

    document.getElementById("hoursInput").value = "";

    updateStudyProgress();
}

function updateStudyProgress() {
    if (studyGoal <= 0) {
        return;
    }

    let percentage = Math.min(
        Math.round((studyHours / studyGoal) * 100),
        100
    );

    document.getElementById("studyProgress").value = percentage;
    document.getElementById("progressText").textContent =
        percentage + "%";
}
document.getElementById("dateInput").addEventListener("change", function () {
    let date = this.value;

    if (date === "") {
        document.getElementById("selectedDate").textContent =
            "No date selected";
        return;
    }

    document.getElementById("selectedDate").textContent =
        "Study Plan Date: " + date;
});
