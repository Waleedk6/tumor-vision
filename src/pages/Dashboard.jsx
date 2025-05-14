import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UploadArea from '../components/UploadArea';
import Results from '../components/Results';
import PatientForm from '../components/PatientForm';
import History from '../components/History';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Loading from '../components/Loading';

const Dashboard = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const [analysisHistory, setAnalysisHistory] = useState([]);

  const handleUpload = (file) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        hasTumor: true,
        tumorType: 'Glioma',
        confidence: 0.92,
        affectedAreas: [
          { region: 'Frontal Lobe', probability: 0.87 },
          { region: 'Temporal Lobe', probability: 0.65 }
        ],
        imageUrl: URL.createObjectURL(file)
      };
      setResults(mockResults);
      setLoading(false);
      
      // Add to history
      setAnalysisHistory(prev => [
        {
          id: Date.now(),
          date: new Date().toLocaleString(),
          result: mockResults,
          patient: patientData || { name: 'Anonymous' }
        },
        ...prev
      ]);
    }, 2000);
  };

  const handleNewAnalysis = () => {
    setResults(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="dashboard-page"
    >
      <Header isLoggedIn={true} />
      <main className="main-content">
        <div className="dashboard-grid">
          <div className="left-panel">
            <PatientForm onSave={setPatientData} />
            <UploadArea onUpload={handleUpload} disabled={loading} />
            {loading && <Loading />}
            {results && (
              <Results 
                data={results} 
                patientData={patientData}
                onNewAnalysis={handleNewAnalysis}
              />
            )}
          </div>
          <div className="right-panel">
            <History analyses={analysisHistory} />
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Dashboard;