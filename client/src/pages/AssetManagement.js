import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export default function AssetManagement() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const response = await axios.get('/api/assets');
        setAssets(response.data);
      } catch (error) {
        toast.error('Error fetching assets');
      }
    }

    fetchAssets();
  }, []);

  return (
    <motion.div
      className="container mx-auto my-10 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-5">Asset Management</h1>
      <div className="bg-white shadow-md rounded p-5">
        {assets.map((asset) => (
          <div key={asset._id} className="border-b py-2">
            <h2 className="text-xl">{asset.name}</h2>
            <p>Location: {asset.location}</p>
            <p>Status: {asset.status}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}