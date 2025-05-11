import React from 'react';
import Canvas3D from './components/Canvas3D';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ width: '100%', height: '100%' }}
    >
      <div className="app">
        <Canvas3D />
      </div>
    </motion.div>
  );
}

export default App;
