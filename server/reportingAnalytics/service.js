const Report = require('./model');

async function createReport(reportType, parameters, userId) {
    const report = new Report({ reportType, parameters, generatedBy: userId });
    // Logic to generate report data based on type and parameters
    report.resultData = {}; // mock data, replace with actual logic
    await report.save();
    return report;
}

async function getReportById(reportId) {
    return await Report.findById(reportId).populate('generatedBy', 'name');
}

async function getAllReports() {
    return await Report.find().populate('generatedBy', 'name').sort({ generatedAt: -1 });
}

module.exports = {
    createReport,
    getReportById,
    getAllReports,
};