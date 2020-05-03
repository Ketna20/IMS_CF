import React from 'react';
import Layout from './components/Layout/Layout';
import InvoiceBuilder from './containers/InvoiceBuilder/InvoiceBuilder';

function App() {
  return (
    <div>
      <Layout>
        <InvoiceBuilder />
      </Layout>
    </div>
  );
}

export default App;
