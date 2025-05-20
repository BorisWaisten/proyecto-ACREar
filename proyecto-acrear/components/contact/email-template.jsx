import React from 'react';

export const EmailTemplate = ({ message, email }) => (
  <div style={{
      fontFamily: 'Arial, sans-serif', 
      color: '#333', 
      maxWidth: '600px', 
      margin: '0 auto', 
      border: '1px solid #e0e0e0', 
      borderRadius: '8px', 
      overflow: 'hidden'
    }}>
    {/* Header with Logo */}
    <div style={{
        backgroundColor: '#f5f5f5', 
        padding: '20px', 
        textAlign: 'center'
      }}>
      <h2 style={{ margin: '10px 0', color: '#4CAF50' }}>Grupo Apícola de la Región Centro Argentina</h2>
    </div>

    {/* Main Content */}
    <div style={{
        padding: '20px', 
        backgroundColor: '#fff'
      }}>
      <h3 style={{ color: '#4CAF50' }}>Mensaje</h3>
      <p style={{
          fontSize: '16px', 
          lineHeight: '1.5', 
          color: '#555'
        }}>{message}</p>
      
      <p style={{
          fontSize: '14px', 
          color: '#888'
        }}>Enviado por: <strong>{email}</strong></p>
    </div>

  </div>
);
