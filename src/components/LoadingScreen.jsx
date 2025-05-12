import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ progress }) => {
  const [tipIndex, setTipIndex] = useState(0);
  
  const tips = [
    "Click on objects to explore them in detail",
    "Use mouse wheel to zoom in and out",
    "Drag to rotate the view",
    "Some objects have interactive elements",
    "Press ESC to exit focused views"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex(prev => (prev + 1) % tips.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [tips.length]);
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at center, #0a1128, #020202)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      overflow: 'hidden',
    }}>
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 0.6 + 0.2
            }}
            animate={{
              y: [null, Math.random() * -window.innerHeight * 0.5],
              x: [null, (Math.random() - 0.5) * 100 + i * 10],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              ease: "linear",
              repeat: Infinity
            }}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: '#4361ee',
              borderRadius: '50%',
              boxShadow: '0 0 10px #4361ee, 0 0 20px rgba(67, 97, 238, 0.3)',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          marginBottom: '3rem',
          textAlign: 'center',
          padding: '0 20px',
          maxWidth: '600px' 
        }}
      >
        <motion.h1 
          style={{ 
            color: '#fff', 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            letterSpacing: '0.5px',
            position: 'relative',
            display: 'inline-block'
          }}
          animate={{
            textShadow: [
              '0 0 20px rgba(67, 97, 238, 0.7)',
              '0 0 25px rgba(67, 97, 238, 0.9)',
              '0 0 20px rgba(67, 97, 238, 0.7)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          3D Portfolio
          <motion.span 
            style={{ 
              position: 'absolute',
              bottom: '-10px',
              left: '0',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #4361ee, transparent)',
              width: '100%'
            }}
            animate={{ 
              scaleX: [0, 1, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.h1>

        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          <motion.p 
            key={tipIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{ 
              color: '#BFC0C0', 
              textAlign: 'center',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              marginTop: '1rem',
              fontStyle: 'italic'
            }}
          >
            {tips[tipIndex]}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Progress container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ 
          width: 'clamp(250px, 80%, 400px)',
          position: 'relative'
        }}
      >
        <div style={{ 
          width: '100%', 
          height: '6px', 
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '3px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            style={{ 
              height: '100%', 
              background: 'linear-gradient(90deg, #4CC9F0, #4361ee, #7209b7)',
              boxShadow: '0 0 10px rgba(76, 201, 240, 0.7)',
              transition: 'width 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          />
          
          {/* Animated shine effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.7
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              zIndex: 1
            }}
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: '10px' 
        }}>
          <motion.p 
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ 
              color: '#BFC0C0', 
              fontSize: '0.9rem',
            }}
          >
            Loading assets
          </motion.p>
          
          <motion.p 
            key={Math.round(progress)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              color: '#ffffff', 
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>
      </motion.div>
      
      {/* Small decorative cube shape */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40px',
          width: '30px',
          height: '30px'
        }}
        initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
        animate={{ rotateX: 360, rotateY: 360, rotateZ: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d'
        }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: i % 2 === 0 ? 'rgba(67, 97, 238, 0.3)' : 'rgba(114, 9, 183, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transform: [
                'rotateX(0deg) translateZ(15px)',
                'rotateX(180deg) translateZ(15px)',
                'rotateY(90deg) translateZ(15px)',
                'rotateY(-90deg) translateZ(15px)',
                'rotateX(90deg) translateZ(15px)',
                'rotateX(-90deg) translateZ(15px)'
              ][i]
            }}></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;