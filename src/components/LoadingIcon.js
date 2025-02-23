import React from 'react';
import '../styles/loadingicon.css';

export default function LoadingIcon() {
  return (
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}