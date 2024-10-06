import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Clipboard from 'clipboard';
import './Signature.css';
import logo from '../../assets/logo.png'

const Signature = () => {
  const location = useLocation();
  const { email, position, name, officeNr,platforms,socialLinks } = location.state || {};
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    console.log(email,position,name,officeNr)
    // Initialize Clipboard.js on the Copy button
    const clipboard = new Clipboard('.copy-button', {
      target: () => document.querySelector('.signature-content'),
    });

    clipboard.on('success', () => {
      setCopySuccess('Signature copied to clipboard!');
    });

    clipboard.on('error', () => {
      setCopySuccess('Failed to copy.');
    });

    return () => {
      clipboard.destroy(); // Cleanup clipboard instance on component unmount
    };
  }, []);

  return (
    <div className="details-container">
      <div className="signature-container">
        <p><strong>Copy Your Signature</strong></p>

        {/* Signature HTML to be copied */}
        <div className="signature-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              <tr>
                <td style={{ paddingRight: '10px' }}>
                  <img 
                    src={logo} 
                    alt="DS People" 
                    style={{ width: '100px' }} 
                  />
                </td>
                <td style={{ borderLeft: '1px solid #ddd', paddingLeft: '10px' }}>
                <strong>{name}</strong><br />
                 {position}<br />
                  <a href={`mailto:${email}`} style={{ color: '#0073e6' }}>{email}</a><br />
                  {officeNr}<br />
                  Deltageul 13, 3251NG Stellendam<br />
                  <a href="https://dspeople.nl" style={{ color: '#0073e6' }}>dspeople.nl</a>
                </td>
                <td>
             {/* Check for selected platforms and show only those */}
          {platforms.instagram && socialLinks.instagram && (
            <div>
              <p><strong>Instagram Username:</strong> {socialLinks.instagram}</p>
            </div>
          )}
          
          {platforms.facebook && socialLinks.facebook && (
            <div>
              <p><strong>Facebook Username:</strong> {socialLinks.facebook}</p>
            </div>
          )}

          {platforms.linkedin && socialLinks.linkedin && (
            <div>
              <p><strong>LinkedIn Username:</strong> {socialLinks.linkedin}</p>
            </div>
          )}
                    <ul className="ulelel">
                        <li>t</li>
                        <li>e</li>
                        <li>s</li>
                        <li>t</li>

                    </ul>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>

        {/* Copy Button */}
       
      </div>
      
      <button className="copy-button">Copy Signature</button>
      {copySuccess && <p className="copy-success">{copySuccess}</p>}
    </div>
  );
};

export default Signature;
