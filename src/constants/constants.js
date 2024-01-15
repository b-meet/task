const ROUTES = {
	HOME: "/",
	BROWSE_COURSE: "/:courseName",
	SUBJECT_DETAILS: "/:courseName/:subject",
};

const COURSES = [
	"Basics of Digital Electronics",
	"C Programming",
	"C Programming Lab",
	"Computer Fundamentals",
	"English",
	"Mathematics",
	"Problem Solving",
];

const SUBJECTLIST = [
	{ course: "basics-of-digital-electronics", name: "Digital Logic Design" },
	{ course: "basics-of-digital-electronics", name: "Binary Systems" },
	{ course: "basics-of-digital-electronics", name: "Boolean Algebra" },
	{
		course: "basics-of-digital-electronics",
		name: "Flip-Flops and Sequential Circuits",
	},
	{ course: "basics-of-digital-electronics", name: "Combinational Circuits" },

	{ course: "c-programming", name: "Introduction to C Programming" },
	{ course: "c-programming", name: "Data Types and Operators" },
	{ course: "c-programming", name: "Control Flow and Loops" },
	{ course: "c-programming", name: "Functions and Pointers" },
	{ course: "c-programming", name: "Arrays and Strings" },

	{ course: "c-programming-lab", name: "Programming Lab Setup" },
	{ course: "c-programming-lab", name: "Basic Programs in C" },
	{ course: "c-programming-lab", name: "Advanced Programs in C" },
	{ course: "c-programming-lab", name: "Debugging Techniques" },
	{ course: "c-programming-lab", name: "Project Work" },

	{ course: "computer-fundamentals", name: "Introduction to Computers" },
	{ course: "computer-fundamentals", name: "Computer Architecture" },
	{ course: "computer-fundamentals", name: "Operating Systems" },
	{ course: "computer-fundamentals", name: "Computer Networks" },
	{ course: "computer-fundamentals", name: "Data Structures" },

	{ course: "english", name: "Grammar and Composition" },
	{ course: "english", name: "Reading and Writing Skills" },
	{ course: "english", name: "Communication Skills" },
	{ course: "english", name: "Literature Studies" },
	{ course: "english", name: "Public Speaking" },

	{ course: "mathematics", name: "Calculus" },
	{ course: "mathematics", name: "Linear Algebra" },
	{ course: "mathematics", name: "Probability and Statistics" },
	{ course: "mathematics", name: "Differential Equations" },
	{ course: "mathematics", name: "Number Theory" },

	{ course: "problem-solving", name: "Critical Thinking" },
	{ course: "problem-solving", name: "Creative Problem Solving" },
	{ course: "problem-solving", name: "Decision Making" },
	{ course: "problem-solving", name: "Algorithmic Problem Solving" },
	{ course: "problem-solving", name: "Problem-solving Techniques" },
];

export { ROUTES, COURSES, SUBJECTLIST };
