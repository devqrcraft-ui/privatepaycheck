import React from 'react';

const AuthorBox = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 my-12 border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          PP
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Written by the PrivatePaycheck Team</h3>
          <p className="text-gray-600 text-sm">Financial Tools & Compliance Specialists</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">
        Our estimates are based on current IRS and state-level tax regulations. The PrivatePaycheck team focuses on providing accurate, browser-based tools for household employers and employees. This content is for informational purposes only—always consult a tax professional for your specific situation.
      </p>
    </div>
  );
};

export default AuthorBox;
