'use client'

import React from 'react';
import { fetchProjects } from '@/utils/ct-sdk/serverCalls';

export default function APITester(): React.JSX.Element {

  const [data, setData] = React.useState<any>(null);

  const executeRequest = async () => {
    const response = await fetchProjects();
    if (response?.data) {
      setData((response.data));
    }  
  }

  return (
    <div className="container">
      <div className='form-container'>
        <form>
          <div className="trigger-wrapper">
            <button 
              type="submit" 
              className="execute-trigger-btn"
              onClick={executeRequest}>
              Execute request
            </button>
          </div>
        </form>
      </div>

      <div className="response-header-text">
        <span>Response</span>
      </div>
      <div className="res-wrapper">
        {data && (
          <div>
            <pre className="result">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}