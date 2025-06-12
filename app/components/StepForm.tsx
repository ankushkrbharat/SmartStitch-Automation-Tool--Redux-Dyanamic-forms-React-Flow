import React, { useState } from 'react';
import { services } from '../data/services';

export default function StepForm({ onSave }: { onSave: (step: any) => void }) {
  const [stepType, setStepType] = useState('');
  const [serviceKey, setServiceKey] = useState('');
  const [config, setConfig] = useState<Record<string, string>>({});//key,value types-record utility

  const filteredServices = services.filter(s => s.type === stepType);
  const selectedService = filteredServices.find(s => s.service === serviceKey);

  const handleFieldChange = (field: string, value: string) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!stepType || !serviceKey) return alert("Please select all options");
    onSave({
      type: stepType,
      service: serviceKey,
      config
    });
  };

  return (
    <div className="p-4 bg-white shadow rounded-md font-[poppins]  space-y-4 max-w-md">
      <div>
        <div className='mb-6 font-bold text-4xl'>Smart<span className='text-red-600'>Stitch</span></div>
        <label className="block mb-1 font-bold">Type</label>
        <select
          value={stepType}
          onChange={e => {
            setStepType(e.target.value);
            setServiceKey('');
            setConfig({});
          }}
          className="border  border-gray-300 rounded-lg outline-none pl-2 pr-2  w-full py-2"
        >
          <option value="">Select Step Type</option>
          <option value="trigger">Trigger</option>
          <option value="action">Action</option>
          <option value="condition">Condition</option>
        </select>
      </div>

      {stepType && (
        <div>
          <label className="block mb-1 font-bold">Service</label>
          <select
            value={serviceKey}
            onChange={e => {
              setServiceKey(e.target.value);
              setConfig({});
            }}
            className="border  border-gray-300 rounded-lg outline-none pl-2 pr-2  w-full py-2"
          >
            <option value="">Select Service</option>
            {filteredServices.map(service => (
              <option key={service.service} value={service.service}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedService &&
        selectedService.fields.map(field => (
          <div key={field}>
            <label className="block mb-1 font-bold capitalize">{field}</label>
            <input
              type="text"
              className="border border-gray-300 rounded-full px-6 w-full py-2"
              value={config[field] || ''}
              onChange={e => handleFieldChange(field, e.target.value)}
            />
          </div>
        ))}

      {selectedService && (
        <button
          onClick={handleSave}
          className="bg-black text-white px-4 py-2 rounded-full"
        >
          Save Step
        </button>
      )}
    </div>
  );
}
