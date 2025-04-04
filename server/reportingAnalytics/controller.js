const reportingService = require('./service');

exports.generateReport = async (req, res) => {
    try {
        const { reportType, parameters } = req.body;
        const report = await reportingService.createReport(reportType, parameters, req.user.id);
        res.status(201).json(report);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getReport = async (req, res) => {
    try {
        const report = await reportingService.getReportById(req.params.id);
        res.status(200).json(report);
    } catch (error) {
        res.status(404).json({ error: 'Report not found' });
    }
};

exports.getReports = async (req, res) => {
    try {
        const reports = await reportingService.getAllReports();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};