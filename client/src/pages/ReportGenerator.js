import React, { useState } from 'react';
import { generateReport, fetchAllReports, fetchReportById } from '../api/reporting';
import { useEffect } from 'motion/react';
import { motion } from 'motion/react';

const ReportGenerator = () => {
    const [reports, setReports] = useState([]);
    const [reportType, setReportType] = useState('');
    const [parameters, setParameters] = useState('');

    useEffect(() => {
        const loadReports = async () => {
            const data = await fetchAllReports();
            setReports(data);
        };
        loadReports();
    }, []);

    const handleGenerateReport = async () => {
        const newReport = await generateReport(reportType, parameters);
        setReports([newReport, ...reports]);
    };

    return (
        <motion.div className="p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Report Type"
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                    className="input input-bordered w-full mb-2"
                />
                <textarea
                    placeholder="Parameters (JSON)"
                    value={parameters}
                    onChange={(e) => setParameters(e.target.value)}
                    className="textarea textarea-bordered w-full mb-2"
                />
                <button onClick={handleGenerateReport} className="btn btn-primary">Generate Report</button>
            </div>
            <div>
                <h2 className="text-xl mb-4">Reports</h2>
                <ul>
                    {reports.map((report) => (
                        <li key={report._id} className="mb-2">
                            <span>{report.reportType}</span> - <button onClick={() => fetchReportById(report._id)}>View</button>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ReportGenerator;