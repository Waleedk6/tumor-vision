import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

const UploadArea = ({ onUpload, disabled = false }) => {
  const [preview, setPreview] = useState(null);
  
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      onUpload(file);
    }
  }, [onUpload]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.dcm']
    },
    maxFiles: 1,
    disabled
  });

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="upload-section"
    >
      <h2>Upload MRI Scan</h2>
      <p className="upload-instructions">
        Drag & drop an MRI image file here, or click to select files
      </p>
      
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="image-preview" />
          </div>
        ) : (
          <div className="dropzone-content">
            {isDragActive ? (
              <p>Drop the MRI file here...</p>
            ) : (
              <>
                <div className="upload-icon">📁</div>
                <p>Supported formats: JPEG, PNG, DICOM</p>
                <p>Max file size: 10MB</p>
              </>
            )}
          </div>
        )}
      </div>
      
      {disabled && (
        <div className="upload-disabled-message">
          Processing current file. Please wait...
        </div>
      )}
    </motion.div>
  );
};

export default UploadArea;