// Sample data for subjects, attendance, exams, and assignments (replace with actual data)
const subjectsData = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'History' },
    // Add more subjects
];

const attendanceData = [
    { date: '2023-09-15', status: 'Present' },
    { date: '2023-09-14', status: 'Absent' },
    { date: '2023-09-13', status: 'Present' },
    // Add more attendance records
];

const examsData = [
    { id: 1, subject: 'Mathematics', date: '2023-10-10', score: 90 },
    { id: 2, subject: 'Science', date: '2023-10-15', score: 85 },
    // Add more exam records
];

const assignmentsData = [
    { id: 1, subject: 'Mathematics', title: 'Assignment 1', dueDate: '2023-09-20' },
    { id: 2, subject: 'Science', title: 'Assignment 2', dueDate: '2023-09-25' },
    // Add more assignment records
];

// Function to display subjects
function displaySubjects() {
    const subjectsContainer = document.getElementById('subjects');
    subjectsContainer.innerHTML = ''; // Clear existing content

    subjectsData.forEach(subject => {
        const subjectItem = document.createElement('div');
        subjectItem.classList.add('subject-item');
        subjectItem.textContent = subject.name;
        subjectsContainer.appendChild(subjectItem);
    });
}

// Function to display attendance
function displayAttendance() {
    const attendanceContainer = document.getElementById('attendance');
    attendanceContainer.innerHTML = ''; // Clear existing content

    attendanceData.forEach(record => {
        const attendanceItem = document.createElement('div');
        attendanceItem.classList.add('attendance-item');
        attendanceItem.textContent = `Date: ${record.date}, Status: ${record.status}`;
        attendanceContainer.appendChild(attendanceItem);
    });
}

// Function to display exams
function displayExams() {
    const examsContainer = document.getElementById('exams');
    examsContainer.innerHTML = ''; // Clear existing content

    examsData.forEach(exam => {
        const examItem = document.createElement('div');
        examItem.classList.add('exam-item');
        examItem.textContent = `Subject: ${exam.subject}, Date: ${exam.date}, Score: ${exam.score}`;
        examsContainer.appendChild(examItem);
    });
}

// Function to display assignments
function displayAssignments() {
    const assignmentsContainer = document.getElementById('assignments');
    assignmentsContainer.innerHTML = ''; // Clear existing content

    assignmentsData.forEach(assignment => {
        const assignmentItem = document.createElement('div');
        assignmentItem.classList.add('assignment-item');
        assignmentItem.textContent = `Subject: ${assignment.subject}, Title: ${assignment.title}, Due Date: ${assignment.dueDate}`;
        assignmentsContainer.appendChild(assignmentItem);
    });
}

// Call functions to initially display data
displaySubjects();
displayAttendance();
displayExams();
displayAssignments();
