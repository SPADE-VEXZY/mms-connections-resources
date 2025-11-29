export interface Product {
    id: string;
    name: string;
    description: string;
    fullDescription: string;
    features: string[];
    price: string;
    category: string;
    image: string;
}

export const products: Product[] = [
    {
        id: "enterprise-erp",
        name: "Enterprise ERP",
        description: "A comprehensive ERP solution for large-scale businesses.",
        fullDescription: "Our Enterprise ERP system is designed to streamline your business operations, from finance and HR to supply chain and customer relationship management. With real-time analytics and modular architecture, it scales with your business.",
        features: ["Financial Management", "Human Resources", "Supply Chain Management", "CRM Integration", "Real-time Analytics"],
        price: "Custom Pricing",
        category: "Business Software",
        image: "/products/erp.jpg"
    },
    {
        id: "smart-pos",
        name: "Smart POS System",
        description: "Modern point-of-sale software for retail and hospitality.",
        fullDescription: "Transform your checkout experience with our Smart POS System. It offers inventory tracking, sales reporting, and seamless payment processing, all in an intuitive interface designed for speed and reliability.",
        features: ["Inventory Management", "Sales Reporting", "Multi-store Support", "Offline Mode", "Loyalty Program"],
        price: "$49/month",
        category: "Retail",
        image: "/products/pos.jpg"
    },
    {
        id: "hr-connect",
        name: "HR Connect",
        description: "Simplify your HR processes with our cloud-based platform.",
        fullDescription: "HR Connect automates your HR tasks, including payroll, attendance, leave management, and employee performance reviews. Empower your HR team to focus on people, not paperwork.",
        features: ["Payroll Processing", "Attendance Tracking", "Leave Management", "Performance Reviews", "Employee Self-Service"],
        price: "$5/user/month",
        category: "HR Tech",
        image: "/products/hr.jpg"
    },
    {
        id: "edu-learn",
        name: "EduLearn LMS",
        description: "A powerful Learning Management System for schools and corporations.",
        fullDescription: "EduLearn provides a robust platform for online learning, course management, and student assessment. Whether for academic institutions or corporate training, it offers a flexible and engaging learning environment.",
        features: ["Course Management", "Live Classes", "Quizzes & Assessments", "Progress Tracking", "Certificate Generation"],
        price: "$199/month",
        category: "Education",
        image: "/products/lms.jpg"
    }
];
